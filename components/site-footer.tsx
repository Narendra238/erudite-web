import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-8 lg:px-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#58585A]/10 pt-6 text-center text-xs sm:text-sm text-[#58585A]/75 sm:flex-row">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="font-bold text-[#58585A]">ERUDITE RESEARCH PARTNER</p>
          <span className="hidden sm:inline text-[#58585A]/30">•</span>
          <p className="text-xs text-[#58585A]/70">Your Research Matters</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-[#58585A]/80">
          <Link href="/" className="hover:text-[#CDCD2E] transition">Beranda</Link>
          <Link href="/layanan" className="hover:text-[#CDCD2E] transition">Layanan</Link>
          <Link href="/study-club" className="hover:text-[#CDCD2E] transition">Study Club</Link>
          <Link href="/lms" className="hover:text-[#CDCD2E] transition">LMS</Link>
          <Link href="/alur" className="hover:text-[#CDCD2E] transition">Alur</Link>
          <Link href="/tentang" className="hover:text-[#CDCD2E] transition">Tentang Kami</Link>
        </div>

        <p className="text-xs text-[#58585A]/60">
          © 2026 ERUDITE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}