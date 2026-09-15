"use client";

import { useState } from "react";

type SubServiceCategory = "mentoring" | "analisis" | "pendukung";

export function SubServicesSection() {
  const [activeTab, setActiveTab] = useState<SubServiceCategory>("mentoring");

  return (
    <div id="sub-layanan" className="mt-12">
      {/* Header Section */}
      <div className="border-b border-[#58585A]/10 pb-6 text-center sm:text-left">
        <span className="rounded-full bg-[#CDCD2E]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#58585A]">
          Pilihan Sub Layanan
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#58585A]">
          Eksplorasi Rincian & Paket Layanan Riset Erudite
        </h2>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#58585A]/78 max-w-3xl">
          Setiap layanan dirancang secara metodologis untuk mendampingi dan menyempurnakan riset Anda secara etis, transparan, dan terpercaya.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setActiveTab("mentoring")}
          className={`flex items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
            activeTab === "mentoring"
              ? "bg-[#58585A] text-white shadow-lg shadow-[#58585A]/20 scale-[1.02]"
              : "bg-white border border-[#58585A]/15 text-[#58585A] hover:bg-[#CDCD2E]/15"
          }`}
        >
          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Mentoring Tugas Akhir & Artikel</span>
        </button>

        <button
          onClick={() => setActiveTab("analisis")}
          className={`flex items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
            activeTab === "analisis"
              ? "bg-[#58585A] text-white shadow-lg shadow-[#58585A]/20 scale-[1.02]"
              : "bg-white border border-[#58585A]/15 text-[#58585A] hover:bg-[#CDCD2E]/15"
          }`}
        >
          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Analisis & Olah Data Penelitian</span>
        </button>

        <button
          onClick={() => setActiveTab("pendukung")}
          className={`flex items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
            activeTab === "pendukung"
              ? "bg-[#58585A] text-white shadow-lg shadow-[#58585A]/20 scale-[1.02]"
              : "bg-white border border-[#58585A]/15 text-[#58585A] hover:bg-[#CDCD2E]/15"
          }`}
        >
          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Layanan Pendukung Tugas Akhir</span>
        </button>
      </div>

      {/* Tab 1: Mentoring */}
      {activeTab === "mentoring" && (
        <div className="mt-8 rounded-[1.75rem] border border-[#CDCD2E]/20 bg-[#CDCD2E]/5 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#58585A]/10 pb-5">
            <div>
              <span className="rounded-md bg-[#CDCD2E]/25 px-2.5 py-1 text-xs font-bold text-[#58585A]">
                Sub Layanan 01
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#58585A]">
                Mentoring Tugas Akhir & Penulisan Artikel Ilmiah
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#58585A]/75">
                Bimbingan intensif 1-on-1 bersama mentor akademisi berpengalaman untuk Skripsi, Tesis, Disertasi, dan Publikasi Jurnal.
              </p>
            </div>
            <a
              href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Sub%20Layanan%20Mentoring%20Tugas%20Akhir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#4d4d4f] flex-shrink-0"
            >
              Konsultasi Mentoring via WhatsApp
            </a>
          </div>

          {/* Mentoring Packages Grid */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Paket Basic */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#CDCD2E]/20 px-2.5 py-0.5 text-xs font-bold text-[#58585A]">
                    Paket Basic
                  </span>
                  <span className="text-xs text-[#58585A]/60">Tahap Awal</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-[#58585A]">Fokus Topik & Bab 1</h4>
                <p className="mt-1 text-xs text-[#58585A]/70 text-justify">
                  Cocok untuk mahasiswa yang masih bingung menentukan judul atau baru memulai penyusunan latar belakang.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-[#58585A]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Pencarian dan pematangan ide judul / topik riset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Penyusunan latar belakang & rumusan masalah kuat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Pemetaan 5-10 referensi jurnal bereputasi terkait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Sesi konsultasi daring 1-on-1</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-[#58585A]/10">
                <a
                  href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20tertarik%20dengan%20Paket%20Basic%20Mentoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl bg-[#CDCD2E]/20 py-2 text-xs font-bold text-[#58585A] hover:bg-[#CDCD2E]/30 transition"
                >
                  Pilih Paket Basic
                </a>
              </div>
            </div>

            {/* Paket Standard */}
            <div className="flex flex-col justify-between rounded-2xl border-2 border-[#CDCD2E] bg-white p-5 shadow-md relative">
              <span className="absolute -top-3 right-4 rounded-full bg-[#CDCD2E] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#58585A]">
                Paling Populer
              </span>
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#CDCD2E]/30 px-2.5 py-0.5 text-xs font-bold text-[#58585A]">
                    Paket Standard
                  </span>
                  <span className="text-xs text-[#58585A]/60">Proposal & Bab 1-3</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-[#58585A]">Pendampingan Proposal Lengkap</h4>
                <p className="mt-1 text-xs text-[#58585A]/70 text-justify">
                  Pendampingan menyeluruh dari Bab 1 hingga Bab 3, kerangka teori, dan kesiapan instrumen penelitian.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-[#58585A]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Semua fasilitas Paket Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Kajian teori & sintesis literatur Bab 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Metodologi riset & kisi-kisi instrumen Bab 3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Simulasi tanya-jawab sidang seminar proposal</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-[#58585A]/10">
                <a
                  href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20tertarik%20dengan%20Paket%20Standard%20Mentoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl bg-[#58585A] py-2 text-xs font-bold text-white hover:bg-[#4d4d4f] transition"
                >
                  Pilih Paket Standard
                </a>
              </div>
            </div>

            {/* Paket Intensive & Artikel */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#CDCD2E]/20 px-2.5 py-0.5 text-xs font-bold text-[#58585A]">
                    Paket Intensive
                  </span>
                  <span className="text-xs text-[#58585A]/60">Full Bab 1-5 / Artikel</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-[#58585A]">Tuntas Hingga Sidang / Jurnal</h4>
                <p className="mt-1 text-xs text-[#58585A]/70 text-justify">
                  Pendampingan intensif naskah utuh, pembahasan hasil olah data, revisi dosen, hingga konversi artikel jurnal.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-[#58585A]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Bimbingan Bab 1-5 atau konversi artikel jurnal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Teknik penulisan pembahasan Bab 4 komprehensif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Pendampingan telaah feedback & revisi dosen pembimbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CDCD2E] font-bold">✓</span>
                    <span>Simulasi sidang akhir & bedah slide presentasi</span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 pt-3 border-t border-[#58585A]/10">
                <a
                  href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20tertarik%20dengan%20Paket%20Intensive%20Mentoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl bg-[#CDCD2E]/20 py-2 text-xs font-bold text-[#58585A] hover:bg-[#CDCD2E]/30 transition"
                >
                  Pilih Paket Intensive
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Analisis & Olah Data */}
      {activeTab === "analisis" && (
        <div className="mt-8 rounded-[1.75rem] border border-[#CDCD2E]/20 bg-[#CDCD2E]/5 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#58585A]/10 pb-5">
            <div>
              <span className="rounded-md bg-[#CDCD2E]/25 px-2.5 py-1 text-xs font-bold text-[#58585A]">
                Sub Layanan 02
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#58585A]">
                Analisis & Olah Data Penelitian (Kuantitatif & Kualitatif)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#58585A]/75">
                Solusi profesional olah data riset menggunakan software terkini dilengkapi interpretasi dan penjelasan detail Bab 4.
              </p>
            </div>
            <a
              href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Sub%20Layanan%20Analisis%20dan%20Olah%20Data"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#4d4d4f] flex-shrink-0"
            >
              Konsultasi Olah Data via WhatsApp
            </a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* Kuantitatif */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#CDCD2E]/25 px-3 py-1 text-xs font-bold text-[#58585A]">
                    Riset Kuantitatif
                  </span>
                  <span className="text-xs text-[#58585A]/60">SPSS • SmartPLS • AMOS</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-[#58585A]">Analisis Statistik Kuantitatif</h4>
                <p className="mt-1.5 text-xs sm:text-sm text-[#58585A]/75 text-justify">
                  Pengolahan data survei/kuesioner, uji hipotesis, dan pemodelan struktural dengan software statistik standar internasional.
                </p>
                <div className="mt-4 space-y-2 text-xs text-[#58585A]/80">
                  <div className="p-2.5 rounded-xl bg-[#CDCD2E]/10">
                    <strong className="text-[#58585A]">Tools yang digunakan:</strong> SPSS, SmartPLS 3 & 4, AMOS, LISREL, Python / R.
                  </div>
                  <ul className="mt-2 space-y-1.5 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Uji Validitas, Reliabilitas, & Asumsi Klasik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Analisis Regresi Linier, Moderasi & Mediasi (SEM-PLS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Tabel hasil rapi & narasi interpretasi lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Garansi bimbingan interpretasi hingga paham</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#58585A]/10">
                <a
                  href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20butuh%20layanan%20Analisis%20Kuantitatif%20(SPSS/SmartPLS)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl bg-[#58585A] py-2.5 text-xs font-bold text-white hover:bg-[#4d4d4f] transition"
                >
                  Konsultasikan Data Kuantitatif
                </a>
              </div>
            </div>

            {/* Kualitatif */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#CDCD2E]/25 px-3 py-1 text-xs font-bold text-[#58585A]">
                    Riset Kualitatif
                  </span>
                  <span className="text-xs text-[#58585A]/60">ATLAS.ti • NVivo • Thematic</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-[#58585A]">Analisis Data Kualitatif & Koding</h4>
                <p className="mt-1.5 text-xs sm:text-sm text-[#58585A]/75 text-justify">
                  Pengolahan transkrip wawancara, observasi, dan dokumen melalui koding tematik mendalam dan jejaring konsep.
                </p>
                <div className="mt-4 space-y-2 text-xs text-[#58585A]/80">
                  <div className="p-2.5 rounded-xl bg-[#CDCD2E]/10">
                    <strong className="text-[#58585A]">Tools yang digunakan:</strong> ATLAS.ti 9/22/24, NVivo, Content & Thematic Analysis.
                  </div>
                  <ul className="mt-2 space-y-1.5 pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Koding data wawancara & kategorisasi tema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Visualisasi Network View & Concept Mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Uji keabsahan data (triangulasi & member checking)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CDCD2E] font-bold">✓</span>
                      <span>Penjelasan naratif temuan riset terstruktur</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#58585A]/10">
                <a
                  href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20butuh%20layanan%20Analisis%20Kualitatif%20(ATLAS.ti/NVivo)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-xl bg-[#58585A] py-2.5 text-xs font-bold text-white hover:bg-[#4d4d4f] transition"
                >
                  Konsultasikan Data Kualitatif
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Pendukung Tugas Akhir */}
      {activeTab === "pendukung" && (
        <div className="mt-8 rounded-[1.75rem] border border-[#CDCD2E]/20 bg-[#CDCD2E]/5 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#58585A]/10 pb-5">
            <div>
              <span className="rounded-md bg-[#CDCD2E]/25 px-2.5 py-1 text-xs font-bold text-[#58585A]">
                Sub Layanan 03
              </span>
              <h3 className="mt-2 text-2xl font-bold text-[#58585A]">
                Layanan Pendukung Kelengkapan Tugas Akhir
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#58585A]/75">
                Bantuan teknis pelengkap naskah agar lolos uji kemiripan, format rapi sesuai buku pedoman, dan siap diuji.
              </p>
            </div>
            <a
              href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Sub%20Layanan%20Pendukung%20Tugas%20Akhir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#4d4d4f] flex-shrink-0"
            >
              Konsultasi Layanan Pendukung
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Plagiasi & Parafrase */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                🔍
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Cek Plagiasi & Parafrase Turnitin</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Pengecekan akun No-Repository terjamin aman, serta opsi perbaikan parafrase kalimat untuk menurunkan skor similarity sesuai ambang batas kampus.
              </p>
            </div>

            {/* Layouting & Formatting */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                📐
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Layouting & Formatting Pedoman</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Perapihan margin, penomoran romawi/arab, daftar isi otomatis, daftar gambar/tabel, dan font sesuai buku pedoman skripsi universitas/template jurnal.
              </p>
            </div>

            {/* Transkrip Wawancara */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                🎙️
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Transkrip Audio Wawancara</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Konversi rekaman audio/video wawancara atau FGD menjadi dokumen teks verbatim yang akurat, terstruktur, dan siap diolah ke software kualitatif.
              </p>
            </div>

            {/* Translation & Proofreading */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                🌐
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Translation & Proofreading</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Penerjemahan akademik (ID - EN / EN - ID) untuk abstrak dan full paper artikel ilmiah dengan tata bahasa formal dan terminologi ilmiah baku.
              </p>
            </div>

            {/* Pembuatan PPT Sidang */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                📊
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Desain Slide PPT Sidang</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Pembuatan slide presentasi seminar proposal atau sidang akhir yang ringkas, visual, menarik, dan memudahkan dosen penguji menangkap esensi riset Anda.
              </p>
            </div>

            {/* Manajemen Referensi */}
            <div className="rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#CDCD2E]/20 text-[#58585A]">
                📚
              </div>
              <h4 className="mt-3 text-base font-bold text-[#58585A]">Manajemen Referensi (Mendeley/Zotero)</h4>
              <p className="mt-1.5 text-xs text-[#58585A]/75 text-justify">
                Pencarian sitasi jurnal bereputasi terbaru, perbaikan metadata daftar pustaka, dan integrasi otomatis format sitasi APA/IEEE/Harvard.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20butuh%20Layanan%20Pendukung%20Tugas%20Akhir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#4d4d4f] transition"
            >
              Pesan Layanan Pendukung via WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
