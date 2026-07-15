"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ActivePage = "home" | "layanan" | "study-club" | "alur" | "kontak";

type SiteHeaderProps = {
  activePage?: ActivePage;
};

const navItems: Array<{ href: string; label: string; id: ActivePage }> = [
  { href: "/", label: "Beranda", id: "home" },
  { href: "/layanan", label: "Layanan", id: "layanan" },
  { href: "/study-club", label: "Study Club", id: "study-club" },
  { href: "/alur", label: "Alur", id: "alur" },
  { href: "/kontak", label: "Hubungi Kami", id: "kontak" },
];

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col rounded-[20px] border border-[#58585A]/10 bg-white/95 p-4 shadow-[0_16px_50px_rgba(88,88,90,0.07)] backdrop-blur transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center justify-start gap-2.5 min-w-0">
            <Image
              src="/Logo.png"
              alt="ERUDITE logo"
              width={100}
              height={100}
              className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 object-contain"
              priority
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#CDCD2E]">
                ERUDITE RESEARCH PARTNER
              </p>
              <p className="hidden md:block truncate text-xs text-[#58585A]/75 mt-0.5 max-w-md lg:max-w-xl">
                Kami tidak menuliskan namun menyempurnakan, tidak mengambil alih namun membagi peran.
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden gap-6 text-sm font-medium text-[#58585A]/80 md:flex items-center">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-[#58585A] ${
                    isActive ? "text-[#58585A] font-semibold" : "text-[#58585A]/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#58585A]/10 bg-[#58585A]/5 hover:bg-[#58585A]/10 transition-colors md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="relative flex h-5 w-5 flex-col justify-between py-1">
              <span
                className={`h-0.5 w-5 bg-[#58585A] rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-[#58585A] rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-[#58585A] rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        <div
          className={`grid transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-[#58585A]/5" : "grid-rows-[0fr] opacity-0 overflow-hidden"
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#CDCD2E]/15 text-[#58585A] font-semibold"
                      : "text-[#58585A]/80 hover:bg-[#58585A]/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}