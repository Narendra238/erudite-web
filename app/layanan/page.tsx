import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SubServicesSection } from "@/components/sub-services";

const services = [
  {
    title: "Mentoring Tugas Akhir & Artikel",
    category: "Sub Layanan 01",
    description: "Pendampingan secara personal maupun kelompok untuk menyusun proposal, skripsi, tesis, disertasi atau artikel ilmiah dengan paket basic, standard, dan intensive.",
    details: "Pendampingan meliputi perumusan masalah, pencarian topik, penyusunan bab 1-5, penulisan akademik, revisi dosen, hingga simulasi seminar hasil dan persiapan sidang.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    targetTab: "mentoring",
    waUrl: "https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Mentoring%20Tugas%20Akhir",
  },
  {
    title: "Analisis dan Olah Data Penelitian",
    category: "Sub Layanan 02",
    description: "Bantuan profesional untuk mengolah dan menganalisis data penelitian kuantitatif maupun kualitatif hingga interpretasi hasil Bab 4.",
    details: "Pengolahan menggunakan software seperti SPSS, SmartPLS, AMOS, Atlas.ti, NVivo, dan Python. Dilengkapi dengan interpretasi hasil, tabel siap publikasi, dan analisis deskriptif.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    targetTab: "analisis",
    waUrl: "https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Analisis%20dan%20Olah%20Data",
  },
  {
    title: "Layanan Pendukung Tugas Akhir",
    category: "Sub Layanan 03",
    description: "Layanan penunjang kelengkapan tugas akhir seperti cek Turnitin, parafrase, layouting, transkrip wawancara, translation, dan desain PPT sidang.",
    details: "Membantu pengecekan kesamaan kata serta opsi penurunan skor plagiasi, penyesuaian format dokumen (layout), konversi Tugas Akhir ke artikel jurnal, proofreading, dan pencarian referensi.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    targetTab: "pendukung",
    waUrl: "https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20Layanan%20Pendukung%20Tugas%20Akhir",
  },
];

export const metadata = {
  title: "ERUDITE | Layanan & Sub-Layanan",
  description: "Layanan pendampingan akademik, analisis data, dan pendukung tugas akhir ERUDITE Research Partner.",
};

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="layanan" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-10 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          {/* Header Overview */}
          <div className="border-b border-[#58585A]/10 pb-6">
            <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#58585A]">
              Layanan Utama & Sub-Layanan Kami
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#58585A]">
              Bukan JOKI Tugas, Melainkan Membimbing & Menyempurnakan Bersama Matters
            </h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-7 text-[#58585A]/78 text-justify">
              ERUDITE hadir sebagai partner riset yang mengedepankan etika akademik dan peningkatan kemampuan mandiri peneliti. Pilih sub layanan yang sesuai dengan kebutuhan riset Anda di bawah ini:
            </p>
          </div>

          {/* Service Overview Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-[1.75rem] border border-[#58585A]/10 bg-[#CDCD2E]/10 p-6 shadow-[0_18px_50px_rgba(88,88,90,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDCD2E]/30 text-[#58585A]">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#58585A]/70 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-[#58585A]">{service.title}</h2>
                  <p className="mt-2.5 text-xs sm:text-sm font-medium leading-relaxed text-[#58585A]/90 text-justify">
                    {service.description}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#58585A]/75 border-t border-[#58585A]/10 pt-3 text-justify">
                    {service.details}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={service.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#58585A] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4d4d4f]"
                  >
                    Konsultasi Sekarang
                  </a>
                  <a
                    href="#sub-layanan"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#58585A]/20 bg-white py-2 text-xs font-semibold text-[#58585A] transition hover:bg-[#CDCD2E]/20"
                  >
                    Lihat Rincian Paket &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Interactive Sub-Services Section Component */}
          <SubServicesSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
