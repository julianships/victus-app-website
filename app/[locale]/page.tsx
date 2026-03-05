import type { Metadata } from 'next';
import Image from 'next/image';
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
    title: messages.metadata.defaultTitle,
    description: messages.metadata.defaultDescription,
    alternates: {
      canonical: `${SITE_URL}${localePath(locale)}`,
    },
  };
}

export default async function Home({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const messages = await getMessages(locale);

  return (
    <div className="bg-black" id="features">
      <section className="min-h-screen flex items-center pt-16 lg:pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
            <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-2xl text-center lg:text-left lg:pt-12 xl:pt-16">
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
                <span className="text-white">{messages.home.headlineLine1}</span>
                <br />
                <span className="gold-gradient">{messages.home.headlineLine2}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {messages.home.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
                <a
                  href="https://apps.apple.com/us/app/victus-discipline-habits/id6754204999"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt={messages.home.appStoreAlt}
                    width={222}
                    height={66}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.victus.app"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-12 sm:h-14 md:h-16 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end lg:-mt-12 xl:-mt-16">
              <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[550px]">
                <Image
                  src="/App Store Screenshots/New Banner Pic Updated.png"
                  alt={messages.home.screenshotAlt}
                  width={1100}
                  height={2200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
