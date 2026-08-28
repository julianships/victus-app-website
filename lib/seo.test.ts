import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSeo66DayChallengeStoreHref,
  buildSeoStopStartingOverStoreHref,
  buildSeoDisciplineResetStoreHref,
  buildSeoConsistencyWithoutMotivationStoreHref,
  buildSeoMorningDisciplineStoreHref,
  SEO_66_DAY_CHALLENGE_ATTRIBUTION,
  SEO_66_DAY_CHALLENGE_PATH,
  SEO_66_DAY_CHALLENGE_PUBLIC_PATH,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
  SEO_STOP_STARTING_OVER_ATTRIBUTION,
  SEO_STOP_STARTING_OVER_PATH,
  SEO_STOP_STARTING_OVER_PUBLIC_PATH,
  SEO_DISCIPLINE_RESET_ATTRIBUTION,
  SEO_DISCIPLINE_RESET_PATH,
  SEO_DISCIPLINE_RESET_PUBLIC_PATH,
  SEO_CONSISTENCY_WITHOUT_MOTIVATION_ATTRIBUTION,
  SEO_CONSISTENCY_WITHOUT_MOTIVATION_PATH,
  SEO_CONSISTENCY_WITHOUT_MOTIVATION_PUBLIC_PATH,
  SEO_MORNING_DISCIPLINE_ATTRIBUTION,
  SEO_MORNING_DISCIPLINE_PATH,
  SEO_MORNING_DISCIPLINE_PUBLIC_PATH,
  resolveEnglishOnlySeoPath,
} from './seo.ts';

test('defines one stable, versioned SEO landing path and attribution contract', () => {
  assert.equal(SEO_66_DAY_CHALLENGE_PATH, '/66-day-challenge');
  assert.deepEqual(SEO_66_DAY_CHALLENGE_ATTRIBUTION, {
    source: 'organic_search',
    platform: 'web',
    account_id: 'owned_site',
    creative_id: 'seo_66_day_challenge',
    format: 'landing_page',
    hook_family: 'future_state_day_counter',
    posted_at: '2026-08-27T09:36:34Z',
  });
});

test('routes the English-only SEO slugs independently of browser language', () => {
  assert.equal(
    resolveEnglishOnlySeoPath('/66-day-challenge'),
    '/en/66-day-challenge',
  );
  assert.equal(
    resolveEnglishOnlySeoPath('/stop-starting-over'),
    '/en/stop-starting-over',
  );
  assert.equal(resolveEnglishOnlySeoPath('/discipline-reset'), '/en/discipline-reset');
  assert.equal(
    resolveEnglishOnlySeoPath('/build-consistency-without-motivation'),
    '/en/build-consistency-without-motivation',
  );
  assert.equal(
    resolveEnglishOnlySeoPath('/morning-discipline-routine'),
    '/en/morning-discipline-routine',
  );
  assert.equal(resolveEnglishOnlySeoPath('/support'), null);
  assert.equal(SEO_66_DAY_CHALLENGE_PUBLIC_PATH, '/en/66-day-challenge');
  assert.equal(SEO_STOP_STARTING_OVER_PUBLIC_PATH, '/en/stop-starting-over');
  assert.equal(SEO_DISCIPLINE_RESET_PUBLIC_PATH, '/en/discipline-reset');
  assert.equal(
    SEO_CONSISTENCY_WITHOUT_MOTIVATION_PUBLIC_PATH,
    '/en/build-consistency-without-motivation',
  );
  assert.equal(SEO_MORNING_DISCIPLINE_PUBLIC_PATH, '/en/morning-discipline-routine');
});

test('defines a distinct stable contract for the morning discipline routine', () => {
  assert.equal(SEO_MORNING_DISCIPLINE_PATH, '/morning-discipline-routine');
  assert.deepEqual(SEO_MORNING_DISCIPLINE_ATTRIBUTION, {
    source: 'organic_search',
    platform: 'web',
    account_id: 'owned_site',
    creative_id: 'seo_morning_discipline',
    format: 'landing_page',
    hook_family: 'three_step_morning_start',
    posted_at: '2026-08-28T18:20:00Z',
  });

  const googleUrl = new URL(buildSeoMorningDisciplineStoreHref('google'));
  const referrer = new URLSearchParams(googleUrl.searchParams.get('referrer') ?? '');
  assert.deepEqual(Object.fromEntries(referrer.entries()), SEO_MORNING_DISCIPLINE_ATTRIBUTION);
  assert.equal(
    buildSeoMorningDisciplineStoreHref('apple'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );
  const appleUrl = new URL(buildSeoMorningDisciplineStoreHref('apple', '123456789'));
  assert.equal(appleUrl.searchParams.get('ct'), 'seo_morning_discipline');
});

test('defines a distinct stable contract for consistency without motivation', () => {
  assert.equal(
    SEO_CONSISTENCY_WITHOUT_MOTIVATION_PATH,
    '/build-consistency-without-motivation',
  );
  assert.deepEqual(SEO_CONSISTENCY_WITHOUT_MOTIVATION_ATTRIBUTION, {
    source: 'organic_search',
    platform: 'web',
    account_id: 'owned_site',
    creative_id: 'seo_consistency_no_motivation',
    format: 'landing_page',
    hook_family: 'minimum_action_before_motivation',
    posted_at: '2026-08-28T14:18:27Z',
  });

  const googleUrl = new URL(buildSeoConsistencyWithoutMotivationStoreHref('google'));
  const referrer = new URLSearchParams(googleUrl.searchParams.get('referrer') ?? '');
  assert.deepEqual(
    Object.fromEntries(referrer.entries()),
    SEO_CONSISTENCY_WITHOUT_MOTIVATION_ATTRIBUTION,
  );
  assert.equal(
    buildSeoConsistencyWithoutMotivationStoreHref('apple'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );
  const appleUrl = new URL(
    buildSeoConsistencyWithoutMotivationStoreHref('apple', '123456789'),
  );
  assert.equal(appleUrl.searchParams.get('pt'), '123456789');
  assert.equal(appleUrl.searchParams.get('ct'), 'seo_consistency_no_motivation');
  assert.equal(appleUrl.searchParams.get('mt'), '8');
});

test('defines a distinct stable contract for the discipline-reset page', () => {
  assert.equal(SEO_DISCIPLINE_RESET_PATH, '/discipline-reset');
  assert.deepEqual(SEO_DISCIPLINE_RESET_ATTRIBUTION, {
    source: 'organic_search',
    platform: 'web',
    account_id: 'owned_site',
    creative_id: 'seo_discipline_reset',
    format: 'landing_page',
    hook_family: 'seven_day_single_commitment',
    posted_at: '2026-08-28T06:15:00Z',
  });

  const googleUrl = new URL(buildSeoDisciplineResetStoreHref('google'));
  const referrer = new URLSearchParams(googleUrl.searchParams.get('referrer') ?? '');
  assert.deepEqual(Object.fromEntries(referrer.entries()), SEO_DISCIPLINE_RESET_ATTRIBUTION);
  assert.equal(
    buildSeoDisciplineResetStoreHref('apple'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );
});

test('defines a distinct stable contract for the stop-starting-over page', () => {
  assert.equal(SEO_STOP_STARTING_OVER_PATH, '/stop-starting-over');
  assert.deepEqual(SEO_STOP_STARTING_OVER_ATTRIBUTION, {
    source: 'organic_search',
    platform: 'web',
    account_id: 'owned_site',
    creative_id: 'seo_stop_starting_over',
    format: 'landing_page',
    hook_family: 'minimum_viable_reset',
    posted_at: '2026-08-27T14:30:00Z',
  });

  const googleUrl = new URL(buildSeoStopStartingOverStoreHref('google'));
  const referrer = new URLSearchParams(
    googleUrl.searchParams.get('referrer') ?? '',
  );
  assert.deepEqual(
    Object.fromEntries(referrer.entries()),
    SEO_STOP_STARTING_OVER_ATTRIBUTION,
  );
  assert.equal(
    buildSeoStopStartingOverStoreHref('apple'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );
});

test('uses a production absolute social image URL', () => {
  const image = new URL(SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE);
  assert.equal(image.origin, 'https://www.getvictus.com');
  assert.equal(image.protocol, 'https:');
});

test('passes the SEO contract to Google Play as an install referrer', () => {
  const url = new URL(buildSeo66DayChallengeStoreHref('google'));
  const referrer = new URLSearchParams(url.searchParams.get('referrer') ?? '');

  assert.equal(url.origin, 'https://play.google.com');
  assert.equal(url.searchParams.get('id'), 'com.victus.app');
  assert.deepEqual(
    Object.fromEntries(referrer.entries()),
    SEO_66_DAY_CHALLENGE_ATTRIBUTION,
  );
});

test('keeps Apple fail-closed until its provider token is configured', () => {
  assert.equal(
    buildSeo66DayChallengeStoreHref('apple'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );

  const url = new URL(
    buildSeo66DayChallengeStoreHref('apple', '123456789'),
  );
  assert.equal(url.searchParams.get('pt'), '123456789');
  assert.equal(url.searchParams.get('ct'), 'seo_66_day_challenge');
  assert.equal(url.searchParams.get('mt'), '8');
});
