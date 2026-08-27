import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';
import { resolveEnglishOnlySeoPath } from '@/lib/seo';

const PUBLIC_FILE = /\.[^/]+$/;
const localeAliases: Record<string, Locale> = {
  zh: 'zh-cn',
  'zh-cn': 'zh-cn',
  'zh_cn': 'zh-cn',
  'pt-br': 'pt-br',
  'pt_br': 'pt-br',
};

function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') ?? '';
  const rawTags = header
    .split(',')
    .map((entry) => entry.split(';')[0]?.trim().toLowerCase())
    .filter((entry): entry is string => Boolean(entry));

  for (const tag of rawTags) {
    if (isLocale(tag)) {
      return tag;
    }

    if (tag === 'pt-br' || tag.startsWith('pt-br')) {
      return 'pt-br';
    }

    if (tag.startsWith('zh')) {
      return 'zh-cn';
    }

    const language = tag.split('-')[0];
    if (language && isLocale(language)) {
      return language;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/');
  const maybeLocale = segments[1]?.toLowerCase();

  if (maybeLocale && isLocale(maybeLocale)) {
    if (segments[1] !== maybeLocale) {
      const url = request.nextUrl.clone();
      const rest = segments.slice(2).join('/');
      url.pathname = rest ? `/${maybeLocale}/${rest}` : `/${maybeLocale}`;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (maybeLocale && localeAliases[maybeLocale]) {
    const canonicalLocale = localeAliases[maybeLocale];
    const url = request.nextUrl.clone();
    const rest = segments.slice(2).join('/');
    url.pathname = rest ? `/${canonicalLocale}/${rest}` : `/${canonicalLocale}`;
    return NextResponse.redirect(url);
  }

  const englishOnlyPath = resolveEnglishOnlySeoPath(pathname);
  if (englishOnlyPath) {
    const url = request.nextUrl.clone();
    url.pathname = englishOnlyPath;
    return NextResponse.redirect(url);
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
