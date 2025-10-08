import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold hero-title gold-gradient">VICTUS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-300 hover:text-[#d4af37] transition-colors">
              Features
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-[#d4af37] transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-[#d4af37] transition-colors">
              Privacy
            </Link>
            <a
              href="#download"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="#download"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-2 rounded-full font-semibold text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
