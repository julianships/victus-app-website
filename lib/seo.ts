import { buildStoreHref, type Store } from './storeLinks.ts';

export const SEO_66_DAY_CHALLENGE_PATH = '/66-day-challenge';
export const SEO_66_DAY_CHALLENGE_PUBLIC_PATH = `/en${SEO_66_DAY_CHALLENGE_PATH}`;
export const SEO_STOP_STARTING_OVER_PATH = '/stop-starting-over';
export const SEO_STOP_STARTING_OVER_PUBLIC_PATH = `/en${SEO_STOP_STARTING_OVER_PATH}`;
export const SEO_DISCIPLINE_RESET_PATH = '/discipline-reset';
export const SEO_DISCIPLINE_RESET_PUBLIC_PATH = `/en${SEO_DISCIPLINE_RESET_PATH}`;
export const SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE =
  'https://www.getvictus.com/App%20Store%20Screenshots/New%20Banner%20Pic%20Updated.png';

const englishOnlySeoPaths = new Map([
  [SEO_66_DAY_CHALLENGE_PATH, SEO_66_DAY_CHALLENGE_PUBLIC_PATH],
  [SEO_STOP_STARTING_OVER_PATH, SEO_STOP_STARTING_OVER_PUBLIC_PATH],
  [SEO_DISCIPLINE_RESET_PATH, SEO_DISCIPLINE_RESET_PUBLIC_PATH],
]);

export function resolveEnglishOnlySeoPath(pathname: string): string | null {
  return englishOnlySeoPaths.get(pathname) ?? null;
}

// This is the versioned first-touch contract for the owned SEO landing page.
// Keep the ID stable when copy changes; advance posted_at when the page is
// materially revised so downstream cohorts can distinguish page versions.
export const SEO_66_DAY_CHALLENGE_ATTRIBUTION = {
  source: 'organic_search',
  platform: 'web',
  account_id: 'owned_site',
  creative_id: 'seo_66_day_challenge',
  format: 'landing_page',
  hook_family: 'future_state_day_counter',
  posted_at: '2026-08-27T09:36:34Z',
} as const;

export function buildSeo66DayChallengeStoreHref(
  store: Store,
  appleProviderToken?: string,
): string {
  return buildStoreHref(
    store,
    new URLSearchParams(SEO_66_DAY_CHALLENGE_ATTRIBUTION),
    appleProviderToken,
  );
}

export const SEO_STOP_STARTING_OVER_ATTRIBUTION = {
  source: 'organic_search',
  platform: 'web',
  account_id: 'owned_site',
  creative_id: 'seo_stop_starting_over',
  format: 'landing_page',
  hook_family: 'minimum_viable_reset',
  posted_at: '2026-08-27T14:30:00Z',
} as const;

export function buildSeoStopStartingOverStoreHref(
  store: Store,
  appleProviderToken?: string,
): string {
  return buildStoreHref(
    store,
    new URLSearchParams(SEO_STOP_STARTING_OVER_ATTRIBUTION),
    appleProviderToken,
  );
}

export const SEO_DISCIPLINE_RESET_ATTRIBUTION = {
  source: 'organic_search',
  platform: 'web',
  account_id: 'owned_site',
  creative_id: 'seo_discipline_reset',
  format: 'landing_page',
  hook_family: 'seven_day_single_commitment',
  posted_at: '2026-08-28T06:15:00Z',
} as const;

export function buildSeoDisciplineResetStoreHref(
  store: Store,
  appleProviderToken?: string,
): string {
  return buildStoreHref(
    store,
    new URLSearchParams(SEO_DISCIPLINE_RESET_ATTRIBUTION),
    appleProviderToken,
  );
}
