import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { localePath, resolveLocale } from '@/lib/i18n';
import {
  buildSeoDisciplineResetStoreHref,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
  SEO_DISCIPLINE_RESET_PATH,
} from '@/lib/seo';

const SITE_URL = 'https://www.getvictus.com';
const SEO_LOCALE = 'en' as const;
const CAMPAIGN_ID = 'seo_discipline_reset';
const PAGE_TITLE = '7-Day Discipline Reset Checklist | Victus';
const PAGE_DESCRIPTION =
  'Use a practical seven-day discipline reset to make one daily commitment smaller, clearer, and easier to track.';

type PageParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: SEO_LOCALE }];
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, SEO_DISCIPLINE_RESET_PATH)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'discipline reset',
      '7 day discipline challenge',
      'discipline checklist',
      'build daily discipline',
      'consistency challenge',
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

const days = [
  ['Day 1', 'Choose one commitment', 'Pick one action that matters and can be completed today. Do not reset your whole life at once.'],
  ['Day 2', 'Make the minimum version explicit', 'Write the smallest version that still counts so a busy day does not force an all-or-nothing decision.'],
  ['Day 3', 'Attach it to a cue', 'Choose a time, place, or existing routine that tells you when to begin.'],
  ['Day 4', 'Remove one obstacle', 'Prepare what you need, shorten setup, or move the action to a more realistic part of the day.'],
  ['Day 5', 'Record completion immediately', 'Mark the action when it is done. Use the record as evidence, not as a judgment of your identity.'],
  ['Day 6', 'Repeat without adding difficulty', 'Keep the same commitment for one more day. Consistency is the test; intensity is not.'],
  ['Day 7', 'Review and choose the next week', 'Keep, shrink, move, or replace the action based on what actually happened. Change one variable at a time.'],
] as const;

const rules = [
  ['One commitment', 'A reset becomes hard to evaluate when every routine changes at once.'],
  ['One minimum', 'Decide in advance what counts on a difficult day.'],
  ['One daily mark', 'Track completion consistently so the review is based on evidence.'],
] as const;

function StoreButtons({ appleHref, googleHref }: { appleHref: string; googleHref: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
      <a href={appleHref} aria-label="Download Victus on the App Store" data-distribution-channel="seo" data-campaign-id={CAMPAIGN_ID} className="transition-opacity hover:opacity-80">
        <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" width={222} height={66} className="h-14 w-auto" />
      </a>
      <a href={googleHref} aria-label="Get Victus on Google Play" data-distribution-channel="seo" data-campaign-id={CAMPAIGN_ID} className="transition-opacity hover:opacity-80">
        <Image src="/google-play-badge.svg" alt="Get it on Google Play" width={180} height={54} className="h-14 w-auto" />
      </a>
    </div>
  );
}

export default async function DisciplineResetPage({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const appleStoreHref = buildSeoDisciplineResetStoreHref('apple', process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN);
  const googlePlayHref = buildSeoDisciplineResetStoreHref('google');

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.2),transparent_44%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">A bounded seven-day experiment</p>
            <h1 className="hero-title mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Reset your discipline with one clear daily commitment</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">Use seven days to make one action specific, reduce friction, and collect enough evidence to decide what belongs in the next week.</p>
            <a href="#checklist" className="mt-8 inline-block text-sm font-semibold text-[#f4d03f] underline decoration-[#d4af37]/50 underline-offset-4 hover:text-white">Start the checklist</a>
          </div>
          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <Image src="/App Store Screenshots/New Banner Pic Updated.png" alt="Victus app showing a structured daily habit journey" width={1100} height={2200} priority className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {rules.map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-black/60 p-6">
                <h2 className="text-xl text-[#f4d03f]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="scroll-mt-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">The checklist</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Seven days, one variable at a time</h2>
          <ol className="mt-12 space-y-4">
            {days.map(([day, title, text]) => (
              <li key={day} className="grid gap-3 border border-white/10 bg-[#080808] p-6 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="font-bold text-[#d4af37]">{day}</span>
                <div><h3 className="text-xl">{title}</h3><p className="mt-2 leading-7 text-gray-400">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Where Victus fits</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Turn the checklist into a visible plan</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">Victus turns goals into a structured 66-day plan with daily tasks, XP, ranks, streak progress, and a global leaderboard. It can help you plan and track the action; it does not guarantee discipline or complete the work for you.</p>
          <div className="mt-8"><StoreButtons appleHref={appleStoreHref} googleHref={googlePlayHref} /></div>
          <p className="mt-4 text-xs leading-5 text-gray-500">The stores show current availability and subscription terms before you download or purchase.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            <details className="py-6"><summary className="cursor-pointer list-none text-lg font-semibold">Should I add a new commitment every day?</summary><p className="mt-4 leading-7 text-gray-400">No. Keep one commitment stable for the seven-day reset so you can see whether the size, cue, and friction are workable.</p></details>
            <details className="py-6"><summary className="cursor-pointer list-none text-lg font-semibold">What if I miss a day?</summary><p className="mt-4 leading-7 text-gray-400">Resume with the minimum version on the next available day. Do not add punishment work or restart the calendar.</p></details>
            <details className="py-6"><summary className="cursor-pointer list-none text-lg font-semibold">Does seven days build a permanent habit?</summary><p className="mt-4 leading-7 text-gray-400">No. Seven days is a short diagnostic window for making the action clearer. Longer-term consistency still requires repeated action and adjustment.</p></details>
          </div>
        </div>
      </section>
    </div>
  );
}
