import { redirect } from 'next/navigation';
import { defaultLocale, localePath } from '@/lib/i18n';

export default function PrivacyRedirect() {
  redirect(localePath(defaultLocale, '/privacy'));
}
