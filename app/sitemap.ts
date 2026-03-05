import { MetadataRoute } from 'next';
import { localePath, locales, toHreflang } from '@/lib/i18n';

const baseUrl = 'https://www.getvictus.com';

const routes = [
  { path: '/', priority: 1 },
  { path: '/privacy', priority: 0.8 },
  { path: '/support', priority: 0.8 },
  { path: '/terms', priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    return locales.map((locale) => {
      const localizedPath = localePath(locale, route.path);
      const alternates = Object.fromEntries(
        locales.map((altLocale) => [
          toHreflang(altLocale),
          `${baseUrl}${localePath(altLocale, route.path)}`,
        ]),
      );

      return {
        url: `${baseUrl}${localizedPath}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: route.priority,
        alternates: {
          languages: {
            ...alternates,
            'x-default': `${baseUrl}/en${route.path === '/' ? '' : route.path}`,
          },
        },
      };
    });
  });
}
