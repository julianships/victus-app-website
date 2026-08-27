import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildSeo66DayChallengeStoreHref,
  SEO_66_DAY_CHALLENGE_ATTRIBUTION,
  SEO_66_DAY_CHALLENGE_PATH,
  SEO_66_DAY_CHALLENGE_PUBLIC_PATH,
  SEO_66_DAY_CHALLENGE_SOCIAL_IMAGE,
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

test('routes the English-only SEO slug independently of browser language', () => {
  assert.equal(
    resolveEnglishOnlySeoPath('/66-day-challenge'),
    '/en/66-day-challenge',
  );
  assert.equal(resolveEnglishOnlySeoPath('/support'), null);
  assert.equal(SEO_66_DAY_CHALLENGE_PUBLIC_PATH, '/en/66-day-challenge');
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
