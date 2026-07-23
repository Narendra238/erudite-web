// components/hero-interactive-card.tsx
"use client";

import { useState } from "react";

type TroubleKey = "mentoring" | "data" | "support";

interface TroubleOption {
  label: string;
  solution: string;
  waMessage: string;
}

const TROUBLE_OPTIONS: Record<TroubleKey, TroubleOption> = {
  mentoring: {
    label: "Mentoring",
    solution: "Pendampingan personal dari perumusan masalah, penyusunan bab, hingga persiapan sidang seminar hasil.",
    waMessage: "Halo Erudite, saya butuh informasi mengenai Mentoring Tugas Akhir karena sedang kesulitan menyusun Bab penelitian.",
  },
  data: {
    label: "Olah Data & Analisis",
    solution: "Bantuan profesional olah data kuantitatif & kualitatif dan interpretasi hasilnya.",
    waMessage: "Halo Erudite, saya mau tanya-tanya tentang layanan Analisis dan Olah Data Penelitian.",
  },
  support: {
    label: "Penunjang Penelitian",
    solution: "Layanan kami mencakup bantuan penyesuaian format dokumen, perapihan layout, serta bantuan penyusunan komponen pendukung agar penelitian Anda terlihat profesional.",
    waMessage: "Halo Erudite, saya mau tanya-tanya tentang layanan Penunjang Penelitian.",
  },
};

export function HeroInteractiveCard() {
  const [activeTab, setActiveTab] = useState<TroubleKey>("mentoring");
  const currentData = TROUBLE_OPTIONS[activeTab];

  const waUrl = `https://wa.me/628112225499?text=${encodeURIComponent(currentData.waMessage)}`;

  return (
    <div className="mt-6 rounded-[1.75rem] bg-[#58585A] p-5 text-white shadow-lg transition-all duration-300">
      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-3">
        Apa kendala penelitianmu saat ini?
      </p>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(TROUBLE_OPTIONS) as TroubleKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
              activeTab === key
                ? "bg-[#CDCD2E] text-[#58585A] shadow"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
          >
            {TROUBLE_OPTIONS[key].label}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="min-h-[80px] transition-all duration-300">
        <p className="text-sm leading-6 text-white/90">
          {currentData.solution}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#CDCD2E] px-4 py-2 text-xs font-semibold text-[#58585A] shadow hover:bg-[#e2e233] transition-transform hover:-translate-y-0.5"
        >
          <span>Konsultasi Solusi Ini</span>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
