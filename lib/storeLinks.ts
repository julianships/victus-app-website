export const APPLE_STORE_URL =
  'https://apps.apple.com/us/app/victus-discipline-habits/id6754204999';
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.victus.app';

const ATTRIBUTION_FIELDS = [
  'source',
  'platform',
  'account_id',
  'creative_id',
  'format',
  'hook_family',
  'posted_at',
] as const;

type AttributionField = (typeof ATTRIBUTION_FIELDS)[number];
export type AttributionQuery = Record<AttributionField, string>;
export type Store = 'apple' | 'google';

const VALUE_LIMITS: Record<AttributionField, number> = {
  source: 40,
  platform: 24,
  account_id: 80,
  creative_id: 128,
  format: 40,
  hook_family: 80,
  posted_at: 32,
};

const SAFE_VALUE = /^[A-Za-z0-9][A-Za-z0-9_.:-]*$/;
const APPLE_CAMPAIGN_TOKEN = /^[A-Za-z0-9_.:-]{1,30}$/;
const APPLE_PROVIDER_TOKEN = /^\d{1,20}$/;
const UTC_TIMESTAMP = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.(\d{1,3}))?Z$/;

function isCanonicalUtcTimestamp(value: string): boolean {
  const match = UTC_TIMESTAMP.exec(value);
  if (!match) return false;

  const canonical = `${match[1]}.${(match[2] ?? '').padEnd(3, '0')}Z`;
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString() === canonical;
}

export function readAttributionQuery(
  input: URLSearchParams,
): AttributionQuery | null {
  const result = {} as AttributionQuery;

  for (const field of ATTRIBUTION_FIELDS) {
    const values = input.getAll(field);
    if (values.length !== 1) return null;

    const value = values[0];
    if (!value || value.length > VALUE_LIMITS[field]) return null;
    if (field !== 'posted_at' && !SAFE_VALUE.test(value)) return null;
    result[field] = value;
  }

  if (result.source !== 'organic_shortform') return null;
  if (!isCanonicalUtcTimestamp(result.posted_at)) return null;

  return result;
}

function serializeAttribution(attribution: AttributionQuery): string {
  const query = new URLSearchParams();
  for (const field of ATTRIBUTION_FIELDS) {
    query.set(field, attribution[field]);
  }
  return query.toString();
}

export function buildDownloadHref(
  localizedHomePath: string,
  input: URLSearchParams,
): string {
  const attribution = readAttributionQuery(input);
  if (!attribution) return `${localizedHomePath}#download`;
  return `${localizedHomePath}?${serializeAttribution(attribution)}#download`;
}

export function buildStoreHref(
  store: Store,
  input: URLSearchParams,
  appleProviderToken?: string,
): string {
  const attribution = readAttributionQuery(input);
  if (!attribution) {
    return store === 'apple' ? APPLE_STORE_URL : GOOGLE_PLAY_URL;
  }

  if (store === 'google') {
    const url = new URL(GOOGLE_PLAY_URL);
    url.searchParams.set('referrer', serializeAttribution(attribution));
    return url.toString();
  }

  if (
    !appleProviderToken ||
    !APPLE_PROVIDER_TOKEN.test(appleProviderToken) ||
    !APPLE_CAMPAIGN_TOKEN.test(attribution.creative_id)
  ) {
    return APPLE_STORE_URL;
  }

  const url = new URL(APPLE_STORE_URL);
  url.searchParams.set('pt', appleProviderToken);
  url.searchParams.set('ct', attribution.creative_id);
  url.searchParams.set('mt', '8');
  return url.toString();
}
