import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Victus Logo.png"
              alt="Victus Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/support" className="text-gray-300 hover:text-[#d4af37] transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-[#d4af37] transition-colors">
              Privacy
            </Link>
            <a
              href="https://apps.apple.com/app/victus"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              DOWNLOAD
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="https://apps.apple.com/app/victus"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-2 rounded-full font-semibold text-sm"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
