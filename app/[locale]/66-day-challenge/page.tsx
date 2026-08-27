import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { localePath, resolveLocale } from '@/lib/i18n';
import {
  buildSeo66DayChallengeStoreHref,
  SEO_66_DAY_CHALLENGE_PATH,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
} from '@/lib/seo';

const SITE_URL = 'https://www.getvictus.com';
const SEO_LOCALE = 'en' as const;
const PAGE_TITLE = '66-Day Challenge for Building Consistency | Victus';
const PAGE_DESCRIPTION =
  'Use a practical 66-day challenge checklist to make daily actions repeatable, then use Victus to follow a structured plan with tasks, XP, ranks, and a global leaderboard.';

type PageParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: SEO_LOCALE }];
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, SEO_66_DAY_CHALLENGE_PATH)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      '66 day challenge',
      'discipline reset',
      'build consistency',
      'habit challenge',
      'daily routine',
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: pageUrl,
      siteName: 'Victus',
      type: 'website',
      images: [SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE],
    },
  };
}

const checklist = [
  {
    number: '01',
    title: 'Choose one daily action',
    text: 'Write the action as a verb. Keep the first version small enough to repeat on an ordinary day.',
  },
  {
    number: '02',
    title: 'Attach it to a cue',
    text: 'Use a time, place, or event that already exists in your day. A clear cue removes one decision from the routine.',
  },
  {
    number: '03',
    title: 'Put it on the plan',
    text: 'Choose the days you will do it and decide what counts as complete before the day starts.',
  },
  {
    number: '04',
    title: 'Mark the completion',
    text: 'Record the action while it is fresh. A visible check gives you something concrete to review later.',
  },
  {
    number: '05',
    title: 'Review once a week',
    text: 'Keep what worked, change what did not, and choose the next small action. A missed day is a reason to resume, not to discard the plan.',
  },
] as const;

const productMechanics = [
  {
    title: 'A personalized 66-day plan',
    text: 'Victus creates a plan after onboarding based on your goals and current habits.',
  },
  {
    title: 'Daily tasks you can check off',
    text: 'The app gives each day a concrete set of tasks to complete.',
  },
  {
    title: 'XP and ranks',
    text: 'Completed tasks contribute to XP and progression through the rank system.',
  },
  {
    title: 'A global leaderboard',
    text: 'You can compare XP or streak progress with other Victus users.',
  },
] as const;

export default async function DayChallengePage({
  params,
}: {
  params: PageParams;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const appleStoreHref = buildSeo66DayChallengeStoreHref(
    'apple',
    process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN,
  );
  const googlePlayHref = buildSeo66DayChallengeStoreHref('google');

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              A practical 66-day reset
            </p>
            <h1 className="hero-title max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Build consistency one day at a time
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              A routine gets easier to follow when the next action is clear. Use
              the checklist below to shape that action, then use Victus to keep
              the plan and the progress in one place.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={appleStoreHref}
                aria-label="Download Victus on the App Store"
                data-distribution-channel="seo"
                data-campaign-id="seo_66_day_challenge"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt="Download on the App Store"
                  width={222}
                  height={66}
                  className="h-14 w-auto"
                />
              </a>
              <a
                href={googlePlayHref}
                aria-label="Get Victus on Google Play"
                data-distribution-channel="seo"
                data-campaign-id="seo_66_day_challenge"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-14 w-auto"
                />
              </a>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-5 text-gray-500">
              Victus is a mobile app. The stores show current availability and
              subscription terms before you download or purchase.
            </p>
            <a
              href="#checklist"
              className="mt-8 inline-block text-sm font-semibold text-[#f4d03f] underline decoration-[#d4af37]/50 underline-offset-4 hover:text-white"
            >
              Start with the checklist
            </a>
          </div>

          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <Image
              src="/App Store Screenshots/New Banner Pic Updated.png"
              alt="Victus app screen for a structured habit journey"
              width={1100}
              height={2200}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="checklist" className="scroll-mt-24 border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              The daily checklist
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Make the next day easy to understand
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              The 66-day period is long enough to practice a routine and short
              enough to give the work a clear finish line. Start with one action,
              make completion visible, and adjust the plan from what you learn.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {checklist.map((item) => (
              <li
                key={item.number}
                className="border border-white/10 bg-black/60 p-6"
              >
                <span className="text-3xl font-bold text-[#d4af37]">
                  {item.number}
                </span>
                <h3 className="mt-6 text-xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                The app layer
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Keep the plan visible
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Victus is built around a structured 66-day self-improvement
                challenge. It gives the routine a place to live, so you can see
                today&apos;s work and the progress that follows from completing it.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {productMechanics.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-[#080808] p-6"
                >
                  <h3 className="text-xl leading-snug text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Before you begin</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            <details className="py-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white">
                Is Victus more than a basic habit tracker?
              </summary>
              <p className="mt-4 max-w-3xl text-gray-400 leading-7">
                Victus combines a personalized 66-day plan with daily tasks, XP,
                ranks, increasing difficulty, and a global leaderboard. It is
                designed for people who want a structured discipline challenge,
                rather than a list of reminders.
              </p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white">
                Do I need to feel motivated every day?
              </summary>
              <p className="mt-4 max-w-3xl text-gray-400 leading-7">
                No app can do the action for you. A plan can make the next action
                easier to see, and a record can make it easier to review. The
                checklist is meant to help you build that structure before the
                day gets busy.
              </p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white">
                Does the challenge guarantee a result?
              </summary>
              <p className="mt-4 max-w-3xl text-gray-400 leading-7">
                No. This page describes a process for planning and reviewing a
                daily routine. Your results depend on the actions you choose and
                how you use the app.
              </p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-white">
                Where can I get Victus?
              </summary>
              <p className="mt-4 max-w-3xl text-gray-400 leading-7">
                Victus is available through the Apple App Store and Google Play.
                Use the store buttons above to see the current listing,
                availability, and subscription terms.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="text-3xl sm:text-4xl">Choose tomorrow&apos;s action</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Start with one clear task, then give it a place in your day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={appleStoreHref}
              aria-label="Download Victus on the App Store"
              data-distribution-channel="seo"
              data-campaign-id="seo_66_day_challenge"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                width={222}
                height={66}
                className="h-14 w-auto"
              />
            </a>
            <a
              href={googlePlayHref}
              aria-label="Get Victus on Google Play"
              data-distribution-channel="seo"
              data-campaign-id="seo_66_day_challenge"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
