import { redirect } from 'next/navigation';
import { defaultLocale, localePath } from '@/lib/i18n';

export default function SupportRedirect() {
  redirect(localePath(defaultLocale, '/support'));
}
