import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "ERUDITE | LMS (Learning Management System)",
  description: "Platform Belajar Mandiri & Portal Materi Penelitian Erudite Research Partner.",
};

const courses = [
  {
    id: "atlas-ti",
    title: "Mastering ATLAS.ti: Pengolahan Data Kualitatif dari Awal hingga Insightful",
    category: "Analisis Kualitatif",
    level: "Pemula - Menengah",
    sessions: "4 Modul • 8 Video",
    desc: "Panduan praktis koding data, kategorisasi tema, analisis jejaring konsep, hingga visualisasi hasil riset kualitatif.",
    badge: "Populer",
  },
  {
    id: "smart-pls",
    title: "SEM-PLS dengan SmartPLS 4: Uji Validitas, Reliabilitas & Hipotesis",
    category: "Analisis Kuantitatif",
    level: "Menengah",
    sessions: "5 Modul • 10 Video",
    desc: "Langkah demi langkah evaluasi model pengukuran (outer model), model struktural (inner model), dan uji mediasi/moderasi.",
    badge: "Rekomendasi",
  },
  {
    id: "spss-mastery",
    title: "SPSS Fundamental: Uji Asumsi Klasik, Regresi, dan Statistik Deskriptif",
    category: "Statistik Riset",
    level: "Pemula",
    sessions: "6 Modul • 12 Video",
    desc: "Kuasai uji normalitas, multikolinearitas, heteroskedastisitas, regresi berganda, hingga interpretasi output tabel.",
    badge: "Dasar",
  },
  {
    id: "journal-writing",
    title: "Strategi Penulisan Artikel Ilmiah Tembus Jurnal SINTA & Scopus",
    category: "Publikasi Ilmiah",
    level: "Semua Tingkat",
    sessions: "3 Modul • 6 Video",
    desc: "Teknik menyusun judul menarik, novelty, metodologi terstruktur, pembahasan mendalam, dan memilih target jurnal.",
    badge: "Eksklusif",
  },
  {
    id: "reference-tools",
    title: "Manajemen Sitasi & Referensi Efisien: Mendeley & Zotero Pro",
    category: "Tools Riset",
    level: "Pemula",
    sessions: "2 Modul • 4 Video",
    desc: "Kelola ratusan metadata jurnal, sinkronisasi Word otomatis, dan pastikan sitasi bebas dari format error.",
    badge: "Wajib",
  },
  {
    id: "thesis-bootcamp",
    title: "Akselerasi Skripsi & Tesis: Panduan Bab 1 hingga Bab 5 Siap Sidang",
    category: "Pendampingan",
    level: "Mahasiswa Akhir",
    sessions: "5 Modul • 10 Video",
    desc: "Strategi menyusun latar belakang kuat, perumusan rumusan masalah, metodologi presisi, hingga simulasi tanya-jawab sidang.",
    badge: "Intensif",
  },
];

const lmsFeatures = [
  {
    title: "Akses Fleksibel 24/7",
    description: "Pelajari materi kapan saja dan di mana saja sesuai kecepatan belajar Anda tanpa batasan waktu.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dataset & Template Latihan",
    description: "Dilengkapi file dataset dummy (Excel, SAV, HPRJ) dan template dokumen siap pakai untuk praktik langsung.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Dipandu Praktisi & Akademisi",
    description: "Materi disusun oleh akademisi dan praktisi data yang berpengalaman dalam publikasi dan bimbingan riset.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function LMSPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="lms" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        {/* Banner Card */}
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-10 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[#58585A]/10 pb-8">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#58585A]">
                ERUDITE LMS Portal
              </span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#58585A] sm:text-4xl">
                Ruang Belajar Mandiri & Modul Penelitian Terstruktur
              </h1>
              <p className="mt-3 text-sm sm:text-base leading-7 text-[#58585A]/78 text-justify">
                Tingkatkan keterampilan riset Anda melalui modul video on-demand, panduan olah data perangkat lunak, dan toolkit riset siap pakai yang dirancang khusus untuk mempermudah tugas akhir dan publikasi ilmiah.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <a
                href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20akses%20modul%20LMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4d4d4f]"
              >
                Daftar / Masuk Akun LMS
              </a>
              <Link
                href="/study-club"
                className="inline-flex items-center justify-center rounded-full border border-[#58585A]/20 bg-[#CDCD2E]/10 px-6 py-3 text-xs sm:text-sm font-semibold text-[#58585A] transition hover:bg-[#CDCD2E]/20"
              >
                Lihat Rekaman Study Club
              </Link>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {lmsFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-[#58585A]/10 bg-[#CDCD2E]/5 p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CDCD2E]/25">
                  {feat.icon}
                </div>
                <h3 className="mt-3 text-base font-bold text-[#58585A]">{feat.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#58585A]/75 text-justify">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Course Catalog Section */}
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#58585A]/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#CDCD2E]">
                  Katalog Modul Pembelajaran
                </p>
                <h2 className="mt-1 text-2xl font-bold text-[#58585A]">
                  Pilih Modul Pelatihan yang Anda Butuhkan
                </h2>
              </div>
              <span className="text-xs text-[#58585A]/70">
                Tersedia 6 Modul Utama
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.id}
                  className="flex flex-col justify-between rounded-[1.5rem] border border-[#58585A]/10 bg-white p-5 shadow-[0_10px_35px_rgba(88,88,90,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-[#CDCD2E]/25 px-2.5 py-1 text-[11px] font-bold text-[#58585A]">
                        {course.category}
                      </span>
                      <span className="rounded-md border border-[#58585A]/15 bg-white px-2 py-0.5 text-[10px] font-semibold text-[#58585A]/75">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold leading-snug text-[#58585A] min-h-[44px]">
                      {course.title}
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#58585A]/75 text-justify">
                      {course.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-[#58585A]/10 pt-3 text-[11px] text-[#58585A]/65">
                      <span>{course.sessions}</span>
                      <span className="font-medium text-[#58585A]/85">{course.level}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-1">
                    <a
                      href={`https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20tertarik%20dengan%20modul%20LMS%20"${encodeURIComponent(course.title)}"`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#58585A] py-2.5 text-xs font-semibold text-white transition hover:bg-[#4d4d4f]"
                    >
                      Akses Modul Ini
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Info Banner */}
          <div className="mt-12 rounded-2xl border border-[#CDCD2E]/30 bg-gradient-to-r from-[#CDCD2E]/15 to-[#CDCD2E]/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#58585A]">
                Butuh Bimbingan Langsung 1-on-1 dengan Mentor Ahli?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#58585A]/80">
                Selain belajar mandiri di LMS, Anda juga dapat mengambil paket Mentoring Privat atau Olah Data.
              </p>
            </div>
            <Link
              href="/layanan"
              className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4d4d4f] whitespace-nowrap"
            >
              Lihat Sub-Layanan Kami &rarr;
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
