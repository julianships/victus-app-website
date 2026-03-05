export const locales = [
  'ar',
  'de',
  'en',
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
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLanguageTags: Record<Locale, string> = {
  ar: 'ar',
  de: 'de',
  en: 'en',
  es: 'es',
  fr: 'fr',
  hi: 'hi',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  nl: 'nl',
  pl: 'pl',
  pt: 'pt',
  'pt-br': 'pt-BR',
  ru: 'ru',
  sv: 'sv',
  tr: 'tr',
  'zh-cn': 'zh-CN',
};

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  ar: 'rtl',
  de: 'ltr',
  en: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  hi: 'ltr',
  it: 'ltr',
  ja: 'ltr',
  ko: 'ltr',
  nl: 'ltr',
  pl: 'ltr',
  pt: 'ltr',
  'pt-br': 'ltr',
  ru: 'ltr',
  sv: 'ltr',
  tr: 'ltr',
  'zh-cn': 'ltr',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = '/'): string {
  if (!path.startsWith('/')) {
    return `/${locale}/${path}`;
  }

  if (path === '/') {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function toHreflang(locale: Locale): string {
  return localeLanguageTags[locale];
}
