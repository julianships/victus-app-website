import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = '/Users/julianalbou/LocalDocs/Development/victus-app-website';
const messagesDir = path.join(projectRoot, 'lib/i18n/messages');
const sourcePath = path.join(messagesDir, 'en.json');

const targetLocales = [
  'ar',
  'de',
  'es',
  'fr',
  'hi',
  'it',
  'ja',
  'ko',
  'nl',
  'pl',
  'pt',
  'pt-br',
  'ru',
  'sv',
  'tr',
  'zh-cn',
];

const localeTargetMap = {
  'pt-br': 'pt-BR',
  'zh-cn': 'zh-CN',
};

const CONCURRENCY = 10;
const MAX_RETRIES = 4;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function protectTokens(input) {
  let text = input;
  const replacements = [];

  const addReplacement = (regex, tokenPrefix) => {
    text = text.replace(regex, (match) => {
      const token = `__${tokenPrefix}_${replacements.length}__`;
      replacements.push({ token, match });
      return token;
    });
  };

  addReplacement(/support@getvictus\.com/g, 'EMAIL');
  addReplacement(/\$\d+(?:\.\d+)?/g, 'MONEY');
  addReplacement(/\bXP\b/g, 'XP');
  addReplacement(/\bVictus\b/g, 'BRAND');
  addReplacement(/\"App\"/g, 'APP');
  addReplacement(/\"as is\"/gi, 'ASIS');
  addReplacement(/\"as available\"/gi, 'ASAVAILABLE');
  addReplacement(/\{[^}]+\}/g, 'PLACEHOLDER');

  return { text, replacements };
}

function restoreTokens(input, replacements) {
  let text = input;
  for (const { token, match } of replacements) {
    text = text.replaceAll(token, match);
  }
  return text;
}

function flattenStrings(node, pathParts = [], out = []) {
  if (typeof node === 'string') {
    out.push({ path: pathParts, value: node });
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item, index) => {
      flattenStrings(item, [...pathParts, index], out);
    });
    return out;
  }

  if (node && typeof node === 'object') {
    Object.entries(node).forEach(([key, value]) => {
      flattenStrings(value, [...pathParts, key], out);
    });
  }

  return out;
}

function setByPath(target, pathParts, value) {
  let current = target;

  for (let i = 0; i < pathParts.length - 1; i += 1) {
    const key = pathParts[i];
    current = current[key];
  }

  current[pathParts[pathParts.length - 1]] = value;
}

async function requestTranslation(text, targetLocale) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(targetLocale)}&dt=t&q=${encodeURIComponent(text)}`;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const response = await fetch(url);

    if (response.ok) {
      const payload = await response.json();
      return Array.isArray(payload?.[0])
        ? payload[0].map((chunk) => chunk?.[0] ?? '').join('')
        : text;
    }

    if (attempt === MAX_RETRIES) {
      throw new Error(
        `Translation request failed with status ${response.status} after ${MAX_RETRIES + 1} attempts`,
      );
    }

    const delay = 250 * (attempt + 1);
    await sleep(delay);
  }

  return text;
}

async function translateLocale(source, locale) {
  const targetLocale = localeTargetMap[locale] ?? locale;
  const translated = structuredClone(source);
  const entries = flattenStrings(source).map((entry) => {
    const protectedData = protectTokens(entry.value);
    return {
      ...entry,
      protected: protectedData.text,
      replacements: protectedData.replacements,
    };
  });

  let index = 0;

  async function worker() {
    while (index < entries.length) {
      const currentIndex = index;
      index += 1;

      const entry = entries[currentIndex];
      const translatedText = await requestTranslation(entry.protected, targetLocale);
      const restored = restoreTokens(translatedText, entry.replacements);
      setByPath(translated, entry.path, restored);
    }
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i += 1) {
    workers.push(worker());
  }
  await Promise.all(workers);

  return translated;
}

async function main() {
  const sourceRaw = await readFile(sourcePath, 'utf8');
  const source = JSON.parse(sourceRaw);

  for (const locale of targetLocales) {
    console.log(`Translating ${locale}...`);
    const translated = await translateLocale(source, locale);

    const targetPath = path.join(messagesDir, `${locale}.json`);
    await writeFile(targetPath, `${JSON.stringify(translated, null, 2)}\n`, 'utf8');
    console.log(`Wrote ${targetPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
