import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildDownloadHref,
  buildStoreHref,
  readAttributionQuery,
} from './storeLinks.ts';

const completeQuery = new URLSearchParams({
  source: 'organic_shortform',
  platform: 'facebook',
  account_id: 'victus_primary',
  creative_id: 'VVID-001',
  format: 'web_video',
  hook_family: 'relationship_transformation',
  posted_at: '2026-08-22T18:15:00Z',
});

test('accepts a complete bounded creative attribution contract', () => {
  assert.deepEqual(readAttributionQuery(completeQuery), {
    source: 'organic_shortform',
    platform: 'facebook',
    account_id: 'victus_primary',
    creative_id: 'VVID-001',
    format: 'web_video',
    hook_family: 'relationship_transformation',
    posted_at: '2026-08-22T18:15:00Z',
  });
});

test('fails closed on partial, repeated, or malformed attribution', () => {
  const partial = new URLSearchParams(completeQuery);
  partial.delete('creative_id');
  assert.equal(readAttributionQuery(partial), null);

  const repeated = new URLSearchParams(completeQuery);
  repeated.append('creative_id', 'VVID-002');
  assert.equal(readAttributionQuery(repeated), null);

  const malformed = new URLSearchParams(completeQuery);
  malformed.set('posted_at', 'not-a-date');
  assert.equal(readAttributionQuery(malformed), null);

  const impossibleDate = new URLSearchParams(completeQuery);
  impossibleDate.set('posted_at', '2026-02-30T00:00:00Z');
  assert.equal(readAttributionQuery(impossibleDate), null);

  const validLeapDate = new URLSearchParams(completeQuery);
  validLeapDate.set('posted_at', '2028-02-29T00:00:00Z');
  assert.equal(readAttributionQuery(validLeapDate)?.posted_at, '2028-02-29T00:00:00Z');
});

test('encodes the complete contract in the Google Play install referrer', () => {
  const href = buildStoreHref('google', completeQuery);
  const url = new URL(href);
  assert.equal(url.origin, 'https://play.google.com');
  assert.equal(url.searchParams.get('id'), 'com.victus.app');

  const referrer = new URLSearchParams(url.searchParams.get('referrer') ?? '');
  assert.deepEqual(Object.fromEntries(referrer.entries()), Object.fromEntries(completeQuery.entries()));
});

test('preserves a valid contract when navigation returns to the localized download section', () => {
  assert.equal(
    buildDownloadHref('/fr', completeQuery),
    `/fr?${completeQuery.toString()}#download`,
  );
  assert.equal(
    buildDownloadHref('/fr', new URLSearchParams('creative_id=VVID-001')),
    '/fr#download',
  );
});

test('uses an Apple campaign link only with a valid provider token and campaign-sized creative ID', () => {
  const tracked = new URL(buildStoreHref('apple', completeQuery, '123456789'));
  assert.equal(tracked.searchParams.get('pt'), '123456789');
  assert.equal(tracked.searchParams.get('ct'), 'VVID-001');
  assert.equal(tracked.searchParams.get('mt'), '8');

  const noProvider = new URL(buildStoreHref('apple', completeQuery));
  assert.equal(noProvider.search, '');

  const oversized = new URLSearchParams(completeQuery);
  oversized.set('creative_id', 'creative-id-that-is-longer-than-thirty-characters');
  const untracked = new URL(buildStoreHref('apple', oversized, '123456789'));
  assert.equal(untracked.search, '');

  const malformedProvider = new URL(buildStoreHref('apple', completeQuery, 'not-a-token'));
  assert.equal(malformedProvider.search, '');

  const maxCampaign = new URLSearchParams(completeQuery);
  maxCampaign.set('creative_id', 'VVID_001.control:variant-00001');
  assert.equal(
    new URL(buildStoreHref('apple', maxCampaign, '123456789')).searchParams.get('ct'),
    'VVID_001.control:variant-00001',
  );

  const oversizedCampaign = new URLSearchParams(completeQuery);
  oversizedCampaign.set('creative_id', 'a'.repeat(31));
  assert.equal(new URL(buildStoreHref('apple', oversizedCampaign, '123456789')).search, '');
});

test('returns ordinary store links when attribution is absent or invalid', () => {
  assert.equal(
    buildStoreHref('apple', new URLSearchParams(), '123456789'),
    'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999',
  );
  assert.equal(
    buildStoreHref('google', new URLSearchParams('creative_id=VVID-001')),
    'https://play.google.com/store/apps/details?id=com.victus.app',
  );
});
