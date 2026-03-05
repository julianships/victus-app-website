import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  getMessages,
  localeDirection,
  localeLanguageTags,
  localePath,
  locales,
  resolveLocale,
} from '@/lib/i18n';

const SITE_URL = 'https://www.getvictus.com';

type LayoutParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LayoutParams;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  const localizedUrl = `${SITE_URL}${localePath(locale)}`;

  return {
    title: messages.metadata.defaultTitle,
    description: messages.metadata.defaultDescription,
    openGraph: {
      title: messages.metadata.defaultTitle,
      description: messages.metadata.defaultDescription,
      url: localizedUrl,
      siteName: 'Victus',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.defaultTitle,
      description: messages.metadata.defaultDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: LayoutParams;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return (
    <div lang={localeLanguageTags[locale]} dir={localeDirection[locale]}>
      <Navigation locale={locale} navigation={messages.navigation} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} footer={messages.footer} />
    </div>
  );
}
