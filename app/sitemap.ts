import type { MetadataRoute } from 'next';
import { localePath, locales, toHreflang, type Locale } from '@/lib/i18n';

const baseUrl = 'https://www.getvictus.com';

const routes: Array<{
  path: string;
  priority: number;
  locales: readonly Locale[];
}> = [
  { path: '/', priority: 1, locales },
  { path: '/privacy', priority: 0.8, locales },
  { path: '/support', priority: 0.8, locales },
  { path: '/terms', priority: 0.5, locales },
  { path: '/66-day-challenge', priority: 0.9, locales: ['en'] },
  { path: '/stop-starting-over', priority: 0.9, locales: ['en'] },
  { path: '/discipline-reset', priority: 0.9, locales: ['en'] },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    return route.locales.map((locale) => {
      const localizedPath = localePath(locale, route.path);
      const alternates = Object.fromEntries(
        route.locales.map((altLocale) => [
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
            'x-default': `${baseUrl}${localePath('en', route.path)}`,
          },
        },
      };
    });
  });
}
