import Link from 'next/link';
import type { Locale, Messages } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';

type FooterProps = {
  locale: Locale;
  footer: Messages['footer'];
};

export default function Footer({ locale, footer }: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold hero-title gold-gradient mb-3">VICTUS</h3>
            <p className="text-gray-400 text-sm max-w-md">
              {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footer.product}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localePath(locale, '/#features')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">
                  {footer.features}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, '/support')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">
                  {footer.support}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={localePath(locale, '/privacy')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">
                  {footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, '/terms')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">
                  {footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Victus. {footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
