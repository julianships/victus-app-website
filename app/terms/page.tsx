import { redirect } from 'next/navigation';
import { defaultLocale, localePath } from '@/lib/i18n';

export default function TermsRedirect() {
  redirect(localePath(defaultLocale, '/terms'));
}
