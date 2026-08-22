'use client';

import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { useSearchParams } from 'next/navigation';

import type { Locale } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';
import { buildDownloadHref } from '@/lib/storeLinks';

type DownloadNavigationLinkProps = PropsWithChildren<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    locale: Locale;
  }
>;

export default function DownloadNavigationLink({
  locale,
  children,
  ...anchorProps
}: DownloadNavigationLinkProps) {
  const searchParams = useSearchParams();
  const href = buildDownloadHref(
    localePath(locale),
    new URLSearchParams(searchParams.toString()),
  );

  return (
    <a href={href} {...anchorProps}>
      {children}
    </a>
  );
}
