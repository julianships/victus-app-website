import type { Metadata } from 'next';
import RichListSection from '../../components/RichListSection';
import { getMessages, localePath, resolveLocale } from '@/lib/i18n';

const SITE_URL = 'https://www.getvictus.com';

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return {
    title: messages.metadata.termsTitle,
    description: messages.metadata.termsDescription,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, '/terms')}`,
    },
  };
}

export default async function Terms({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title">
          {messages.termsPage.titlePrefix}{' '}
          <span className="gold-gradient">{messages.termsPage.titleAccent}</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">
              {messages.termsPage.lastUpdatedLabel}: {messages.termsPage.lastUpdatedDate}
            </p>
          </div>

          {messages.termsPage.sections.map((section) => (
            <section key={section.title} className="mb-12">
              <RichListSection item={section} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
