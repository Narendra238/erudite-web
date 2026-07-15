import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Mentoring Tugas Akhir",
    description: "Pendampingan secara personal maupun kelompok untuk menyusun proposal, skripsi, tesis, disertasi atau artikel ilmiah, kami menawarkan paket basic, standard dan intensive.",
    details: "Pendampingan meliputi perumusan masalah, pencarian topik penelitian, penyusunan bab 1-5, teknik penulisan akademik, revisi dosen, hingga sidang seminar hasil sesuai dengan paket yang diambil.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Analisis dan Olah Data Penelitian",
    description: "Bantuan profesional untuk mengolah dan menganalisis data penelitian kuantitatif maupun kualitatif hingga interpretasi hasil",
    details: "Pengolahan menggunakan software seperti SPSS, SmartPLS, Atlas.ti, NVivo, dan Python. Dilengkapi dengan interpretasi hasil dan analisis deskriptif.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Pendukung Tugas Akhir",
    description: "Layanan penunjang kelengkapan tugas akhir seperti cek plagiarisme, pencarian referensi, transkrip wawancara, penerjemahan bahasa, dan perbaikan format dokumen(layout).",
    details: "Membantu pengecekan kesamaan kata serta opsi penurunan skor plagiasi, penyesuaian format dokumen (layout),konversi dari Tugas Akhir ke Artikel ilmiah atau sebaliknya ,translate bahasa bahasa asing, pembuatan PowerPoint, dan pencarian sumber sitasi referensi.",
    icon: (
      <svg className="h-6 w-6 text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const metadata = {
  title: "ERUDITE | Layanan",
  description: "Halaman layanan ERUDITE Research Partner.",
};

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="layanan" />

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
            Layanan Utama Kami
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#58585A]">
            Semua layanan yang kami berikan bukan JOKI tugas, melainkan kami membantu menyelesaikannya.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#58585A]/78">
            Dari beberapa layanan berikut kami tawarkan :
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-[1.75rem] border border-[#58585A]/10 bg-[#CDCD2E]/10 p-6 shadow-[0_18px_50px_rgba(88,88,90,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(88,88,90,0.1)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDCD2E]/25 text-[#58585A]">
                    {service.icon}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-[#58585A]">{service.title}</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#58585A]/90 text-justify">
                    {service.description}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#58585A]/75 border-t border-[#58585A]/10 pt-3 text-justify">
                    {service.details}
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://wa.me/628112225499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#58585A] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4d4d4f]"
                  >
                    Konsultasi Sekarang
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
