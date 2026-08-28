import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { localePath, resolveLocale } from '@/lib/i18n';
import {
  buildSeoConsistencyWithoutMotivationStoreHref,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
  SEO_CONSISTENCY_WITHOUT_MOTIVATION_PATH,
} from '@/lib/seo';

const SITE_URL = 'https://www.getvictus.com';
const SEO_LOCALE = 'en' as const;
const CAMPAIGN_ID = 'seo_consistency_no_motivation';
const PAGE_TITLE = 'How to Build Consistency Without Motivation | Victus';
const PAGE_DESCRIPTION =
  'Use a minimum-action system to keep moving on low-motivation days, then review your plan with real completion evidence.';

type PageParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: SEO_LOCALE }];
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, SEO_CONSISTENCY_WITHOUT_MOTIVATION_PATH)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'build consistency without motivation',
      'how to stay consistent',
      'low motivation habits',
      'minimum action plan',
      'daily discipline',
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

const system = [
  ['1', 'Choose one action', 'Pick one action that matters today. Multiple new commitments make it harder to see what is working.'],
  ['2', 'Define the minimum', 'Write the smallest useful version that still counts on a difficult day. Make it concrete before motivation drops.'],
  ['3', 'Attach a cue', 'Put the action after a time, place, or routine that already happens. The cue should answer when to begin.'],
  ['4', 'Reduce setup', 'Prepare the first tool, screen, or location in advance. Remove one obstacle instead of demanding more willpower.'],
  ['5', 'Record the result', 'Mark completion when it happens. Review the evidence after several attempts, not your mood before one attempt.'],
] as const;

const lowEnergyExamples = [
  ['Workout', 'Change clothes and complete one planned set.'],
  ['Reading', 'Open the book and read one page.'],
  ['Writing', 'Write one sentence in the active document.'],
  ['Planning', 'Choose tomorrow’s single first task.'],
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

export default async function ConsistencyWithoutMotivationPage({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const appleStoreHref = buildSeoConsistencyWithoutMotivationStoreHref(
    'apple',
    process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN,
  );
  const googlePlayHref = buildSeoConsistencyWithoutMotivationStoreHref('google');

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.2),transparent_44%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">A system for low-motivation days</p>
            <h1 className="hero-title mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Build consistency before motivation arrives</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">Motivation can help you start, but it is not a reliable daily cue. Make the next action small, specific, and visible enough to begin without negotiating with your mood.</p>
            <a href="#system" className="mt-8 inline-block text-sm font-semibold text-[#f4d03f] underline decoration-[#d4af37]/50 underline-offset-4 hover:text-white">Build your minimum-action system</a>
          </div>
          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <Image src="/App Store Screenshots/New Banner Pic Updated.png" alt="Victus app showing a structured daily habit journey" width={1100} height={2200} priority className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      <section id="system" className="scroll-mt-24 border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Five decisions</p>
          <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">Make action easier to begin and easier to evaluate</h2>
          <ol className="mt-12 space-y-4">
            {system.map(([number, title, text]) => (
              <li key={number} className="grid gap-3 border border-white/10 bg-black/60 p-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="text-3xl font-bold text-[#d4af37]">{number}</span>
                <div><h3 className="text-xl">{title}</h3><p className="mt-2 leading-7 text-gray-400">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Minimum-action examples</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Shrink the action, not the direction</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lowEnergyExamples.map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-[#080808] p-6">
                <h3 className="text-xl text-[#f4d03f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-7 text-gray-400">The minimum is a floor for difficult days, not a promise to stop early. If momentum appears, continue. If it does not, the completed minimum still gives you evidence and a clean next attempt.</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Where Victus fits</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Keep the plan and daily evidence visible</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">Victus turns goals into a structured 66-day plan with daily tasks, XP, ranks, streak progress, and a global leaderboard. It can help you plan and track the action; it does not supply motivation or guarantee consistency.</p>
          <div className="mt-8"><StoreButtons appleHref={appleStoreHref} googleHref={googlePlayHref} /></div>
          <p className="mt-4 text-xs leading-5 text-gray-400">The stores show current availability and subscription terms before you download or purchase.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            <details className="py-6"><summary className="cursor-pointer text-lg font-semibold">Is a tiny action too easy to matter?</summary><p className="mt-4 leading-7 text-gray-400">The minimum should still move the task forward. Its job is to remove the decision to do nothing, not to replace every full session.</p></details>
            <details className="py-6"><summary className="cursor-pointer text-lg font-semibold">What if I keep missing the minimum?</summary><p className="mt-4 leading-7 text-gray-400">Change one condition: reduce setup, move the cue, or choose a more realistic time. Keep the action stable while testing that adjustment.</p></details>
            <details className="py-6"><summary className="cursor-pointer text-lg font-semibold">Does consistency mean never missing?</summary><p className="mt-4 leading-7 text-gray-400">No. It means returning to the planned action often enough to evaluate and improve the system. A missed day is information, not a reason to abandon the plan.</p></details>
          </div>
        </div>
      </section>
    </div>
  );
}
