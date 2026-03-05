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
    title: messages.metadata.privacyTitle,
    description: messages.metadata.privacyDescription,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, '/privacy')}`,
    },
  };
}

export default async function PrivacyPolicy({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title text-center">
          {messages.privacyPage.titlePrefix}{' '}
          <span className="gold-gradient">{messages.privacyPage.titleAccent}</span>
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-400 mb-2">
              {messages.privacyPage.lastUpdatedLabel}: {messages.privacyPage.lastUpdatedDate}
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 mb-12">
            <p className="text-gray-300 leading-relaxed">{messages.privacyPage.intro}</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">{messages.privacyPage.termsSectionTitle}</h2>

            <div className="space-y-8">
              {messages.privacyPage.termsItems.map((item) => (
                <RichListSection key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">{messages.privacyPage.privacySectionTitle}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{messages.privacyPage.privacyLead}</p>

            <div className="space-y-8">
              {messages.privacyPage.privacyItems.map((item) => (
                <RichListSection key={item.title} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
