import { cache } from 'react';
import type { Locale } from './config';
import type { Messages } from './types';

const dictionaries: Record<Locale, () => Promise<Messages>> = {
  ar: async () => (await import('./messages/ar.json')).default,
  de: async () => (await import('./messages/de.json')).default,
  en: async () => (await import('./messages/en.json')).default,
  es: async () => (await import('./messages/es.json')).default,
  fr: async () => (await import('./messages/fr.json')).default,
  hi: async () => (await import('./messages/hi.json')).default,
  it: async () => (await import('./messages/it.json')).default,
  ja: async () => (await import('./messages/ja.json')).default,
  ko: async () => (await import('./messages/ko.json')).default,
  nl: async () => (await import('./messages/nl.json')).default,
  pl: async () => (await import('./messages/pl.json')).default,
  pt: async () => (await import('./messages/pt.json')).default,
  'pt-br': async () => (await import('./messages/pt-br.json')).default,
  ru: async () => (await import('./messages/ru.json')).default,
  sv: async () => (await import('./messages/sv.json')).default,
  tr: async () => (await import('./messages/tr.json')).default,
  'zh-cn': async () => (await import('./messages/zh-cn.json')).default,
};

export const getMessages = cache(async (locale: Locale): Promise<Messages> => {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
});
