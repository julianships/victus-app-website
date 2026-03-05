import type { Metadata } from 'next';
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
    title: messages.metadata.supportTitle,
    description: messages.metadata.supportDescription,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale, '/support')}`,
    },
  };
}

export default async function Support({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return (
    <div className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 hero-title text-center">
          <span className="gold-gradient">{messages.supportPage.titlePrefix}</span>{' '}
          {messages.supportPage.titleAccent}
        </h1>

        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {messages.supportPage.subtitle}
        </p>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{messages.supportPage.contactTitle}</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{messages.supportPage.emailSupportTitle}</h3>
                <p className="text-gray-400 mb-2">{messages.supportPage.emailSupportDescription}</p>
                <a
                  href="mailto:support@getvictus.com"
                  className="text-[#d4af37] hover:underline font-semibold"
                >
                  support@getvictus.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {messages.supportPage.faqTitlePrefix}{' '}
            <span className="gold-gradient">{messages.supportPage.faqTitleAccent}</span>
          </h2>

          <div className="space-y-6">
            {messages.supportPage.faqs.map((faq) => (
              <div key={faq.question} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{messages.supportPage.stillNeedHelpTitle}</h2>
          <p className="text-gray-300 mb-6">{messages.supportPage.stillNeedHelpDescription}</p>
          <a
            href="mailto:support@getvictus.com"
            className="inline-block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            {messages.supportPage.contactButton}
          </a>
        </div>
      </div>
    </div>
  );
}
