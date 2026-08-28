import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { localePath, resolveLocale } from '@/lib/i18n';
import {
  buildSeoMorningDisciplineStoreHref,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
  SEO_MORNING_DISCIPLINE_PATH,
} from '@/lib/seo';

const SITE_URL = 'https://www.getvictus.com';
const SEO_LOCALE = 'en' as const;
const CAMPAIGN_ID = 'seo_morning_discipline';
const PAGE_TITLE = 'Morning Discipline Routine: A 10-Minute Start | Victus';
const PAGE_DESCRIPTION =
  'Use a practical three-step, ten-minute morning discipline routine to choose one priority, start the minimum version, and record completion.';

type PageParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: SEO_LOCALE }];
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, SEO_MORNING_DISCIPLINE_PATH)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'morning discipline routine',
      'morning routine checklist',
      'build morning discipline',
      '10 minute morning routine',
      'morning consistency',
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

const routine = [
  [
    'Minute 0–2',
    'Choose today’s one priority',
    'Write one action that would make the morning useful. Keep the result specific enough to mark complete.',
  ],
  [
    'Minute 2–9',
    'Start the minimum version',
    'Work for seven minutes on the smallest version that still counts. The goal is a real start, not a perfect session.',
  ],
  [
    'Minute 9–10',
    'Record and decide the next cue',
    'Mark what you completed and choose when the next step will begin. If the minimum was too large, shrink it tomorrow.',
  ],
] as const;

const setup = [
  ['Prepare one cue', 'Put the required item, note, or screen where you will encounter it first.'],
  ['Remove one choice', 'Decide the priority the night before when possible.'],
  ['Keep one fallback', 'Define a two-minute version for mornings when the full ten minutes is not realistic.'],
] as const;

function StoreButtons({ appleHref, googleHref }: { appleHref: string; googleHref: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
      <a
        href={appleHref}
        aria-label="Download Victus on the App Store"
        data-distribution-channel="seo"
        data-campaign-id={CAMPAIGN_ID}
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
        href={googleHref}
        aria-label="Get Victus on Google Play"
        data-distribution-channel="seo"
        data-campaign-id={CAMPAIGN_ID}
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
  );
}

export default async function MorningDisciplinePage({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const appleStoreHref = buildSeoMorningDisciplineStoreHref(
    'apple',
    process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN,
  );
  const googlePlayHref = buildSeoMorningDisciplineStoreHref('google');

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.2),transparent_44%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              A ten-minute starting routine
            </p>
            <h1 className="hero-title mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Build morning discipline before the day starts making decisions for you
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Pick one useful priority, begin its minimum version, and record what happened. Three
              steps are enough to make the morning observable and adjustable.
            </p>
            <a
              href="#routine"
              className="mt-8 inline-block text-sm font-semibold text-[#f4d03f] underline decoration-[#d4af37]/50 underline-offset-4 hover:text-white"
            >
              Use the ten-minute routine
            </a>
          </div>
          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <Image
              src="/App Store Screenshots/New Banner Pic Updated.png"
              alt="Victus app showing a structured daily habit journey"
              width={1100}
              height={2200}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {setup.map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-black/60 p-6">
                <h2 className="text-xl text-[#f4d03f]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="routine" className="scroll-mt-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            The routine
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Choose, start, record</h2>
          <ol className="mt-12 space-y-4">
            {routine.map(([time, title, text]) => (
              <li
                key={time}
                className="grid gap-3 border border-white/10 bg-[#080808] p-6 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <span className="font-bold text-[#d4af37]">{time}</span>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-2 leading-7 text-gray-400">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Where Victus fits
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Give the morning a visible plan</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Victus turns goals into a structured 66-day plan with daily tasks, XP, ranks, streak
            progress, and a global leaderboard. Use it to plan and track the action; the app does not
            guarantee discipline or do the work for you.
          </p>
          <div className="mt-8">
            <StoreButtons appleHref={appleStoreHref} googleHref={googlePlayHref} />
          </div>
          <p className="mt-4 text-xs leading-5 text-gray-500">
            The stores show current availability and subscription terms before you download or
            purchase.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                What if I do not have ten minutes?
              </summary>
              <p className="mt-4 leading-7 text-gray-400">
                Use the two-minute fallback: choose the priority, do one concrete piece, and record
                it. Keep the same cue and return to the ten-minute version when practical.
              </p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Should I include several habits?
              </summary>
              <p className="mt-4 leading-7 text-gray-400">
                Start with one priority. Multiple changes make it harder to see which cue, action, or
                obstacle needs adjustment.
              </p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                Does a morning routine guarantee a productive day?
              </summary>
              <p className="mt-4 leading-7 text-gray-400">
                No. This is a bounded way to start one useful action and gather evidence. The rest of
                the day still requires choices and adjustment.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
