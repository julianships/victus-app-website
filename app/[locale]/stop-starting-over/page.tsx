import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { localePath, resolveLocale } from '@/lib/i18n';
import {
  buildSeoStopStartingOverStoreHref,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
  SEO_STOP_STARTING_OVER_PATH,
} from '@/lib/seo';

const SITE_URL = 'https://www.getvictus.com';
const SEO_LOCALE = 'en' as const;
const CAMPAIGN_ID = 'seo_stop_starting_over';
const PAGE_TITLE = 'How to Stop Starting Over With Your Habits | Victus';
const PAGE_DESCRIPTION =
  'Use a practical reset rule for missed days, shrink the next action, and keep your plan visible with Victus.';

type PageParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return [{ locale: SEO_LOCALE }];
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, SEO_STOP_STARTING_OVER_PATH)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'stop starting over',
      'restart habits after missing a day',
      'discipline reset',
      'get back on track',
      'build consistency',
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

const resetSteps = [
  {
    number: '01',
    title: 'Name the break without rewriting the story',
    text: 'Record what was missed. Do not turn one missed action into a verdict about the whole plan.',
  },
  {
    number: '02',
    title: 'Shrink the next action',
    text: 'Choose the smallest useful version you can complete today. The goal is to resume, not to repay a debt.',
  },
  {
    number: '03',
    title: 'Put it at a specific time or cue',
    text: 'Decide when the action happens before the day gets busy. Use a cue already present in your routine.',
  },
  {
    number: '04',
    title: 'Mark today, then review the plan',
    text: 'Complete and record today first. Adjust the weekly plan only after you have restarted the action.',
  },
] as const;

const resetRules = [
  {
    title: 'Do not add punishment work',
    text: 'Doubling tomorrow because you missed today makes the restart harder. Resume the normal plan or a smaller version.',
  },
  {
    title: 'Change one obstacle at a time',
    text: 'Move the time, reduce the size, or change the cue. Changing everything at once hides what helped.',
  },
  {
    title: 'Keep evidence of the restart',
    text: 'A checked-off action is concrete. It gives you a better next decision than waiting to feel fully motivated.',
  },
] as const;

function StoreButtons({ appleHref, googleHref }: { appleHref: string; googleHref: string }) {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
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

export default async function StopStartingOverPage({ params }: { params: PageParams }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  if (locale !== SEO_LOCALE) notFound();

  const appleStoreHref = buildSeoStopStartingOverStoreHref(
    'apple',
    process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN,
  );
  const googlePlayHref = buildSeoStopStartingOverStoreHref('google');

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-36">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              The minimum viable reset
            </p>
            <h1 className="hero-title max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Stop starting over. Resume from today.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Missing a day does not require a new identity, a new month, or a harder plan. Use the four-step reset below to make the next useful action clear.
            </p>
            <div className="mt-8">
              <StoreButtons appleHref={appleStoreHref} googleHref={googlePlayHref} />
            </div>
            <p className="mt-4 max-w-xl text-xs leading-5 text-gray-500">
              Victus is a mobile app. The stores show current availability and subscription terms before you download or purchase.
            </p>
            <a
              href="#reset"
              className="mt-8 inline-block text-sm font-semibold text-[#f4d03f] underline decoration-[#d4af37]/50 underline-offset-4 hover:text-white"
            >
              Use the reset now
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

      <section id="reset" className="scroll-mt-24 border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Four steps
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl">Restart the action without restarting your life</h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resetSteps.map((item) => (
              <li key={item.number} className="border border-white/10 bg-black/60 p-6">
                <span className="text-3xl font-bold text-[#d4af37]">{item.number}</span>
                <h3 className="mt-6 text-xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Rules for the next attempt</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Make resuming easier than quitting</h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              The useful question is not whether the streak is perfect. It is whether the next action is clear enough to do.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {resetRules.map((item) => (
              <article key={item.title} className="border border-white/10 bg-[#080808] p-6">
                <h3 className="text-xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Where Victus fits</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Keep today&apos;s plan and progress visible</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            Victus turns your goals into a structured 66-day plan with daily tasks. Completing tasks contributes to XP, ranks, streak progress, and a global leaderboard. Those mechanics can make the next action easier to see; they do not guarantee a result or complete the action for you.
          </p>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">Should I wait until Monday to restart?</summary>
              <p className="mt-4 leading-7 text-gray-400">No. Choose the smallest useful action you can complete today. A calendar boundary is optional; the next action is not.</p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">What if the plan keeps breaking?</summary>
              <p className="mt-4 leading-7 text-gray-400">Reduce the task, move the cue, or remove one obstacle. Test one adjustment at a time so you can see what changed.</p>
            </details>
            <details className="py-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">Does Victus guarantee consistency?</summary>
              <p className="mt-4 leading-7 text-gray-400">No. Victus provides planning, tracking, and progression tools. Results depend on the actions you choose and complete.</p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="text-3xl sm:text-4xl">Choose the next useful action</h2>
          <p className="mt-5 text-lg leading-8 text-gray-300">Resume from today, then keep tomorrow simple.</p>
          <div className="mt-8 flex justify-center">
            <StoreButtons appleHref={appleStoreHref} googleHref={googlePlayHref} />
          </div>
        </div>
      </section>
    </div>
  );
}
