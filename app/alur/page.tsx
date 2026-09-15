import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const steps = [
  {
    step: "01",
    title: "Konsultasi Kebutuhan Riset",
    description: "Matters berdiskusi dengan tim kami terkait topik, bab yang sedang dikerjakan, software yang dibutuhkan, atau target deadline.",
    detail: "Gratis konsultasi awal via WhatsApp untuk menentukan skema layanan yang paling tepat.",
  },
  {
    step: "02",
    title: "Kesepakatan & Skema Pengerjaan",
    description: "Penetapan jadwal sesi mentoring atau tenggat pengerjaan olah data/layanan pendukung secara transparan dan terukur.",
    detail: "Pembagian peran yang jelas: kami mendampingi dan menyempurnakan, bukan mengambil alih.",
  },
  {
    step: "03",
    title: "Pelaksanaan Pendampingan & Olah Data",
    description: "Proses bimbingan 1-on-1, pengolahan data menggunakan software resmi (SPSS/SmartPLS/ATLAS.ti), atau penataan format dokumen.",
    detail: "Dilengkapi file mentahan, interpretasi hasil, dan penjelasan detail materi.",
  },
  {
    step: "04",
    title: "Review Hasil & Garansi Revisi",
    description: "Penyerahan hasil naskah atau olah data beserta sesi tanya-jawab hingga Matters benar-benar menguasai materi.",
    detail: "Termasuk garansi pendampingan revisi sesuai catatan masukan dosen pembimbing.",
  },
];

export const metadata = {
  title: "ERUDITE | Alur Kerja",
  description: "Alur proses kerja dan tahapan pendampingan riset di ERUDITE Research Partner.",
};

export default function AlurPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="alur" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-10 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          <div className="border-b border-[#58585A]/10 pb-6">
            <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#58585A]">
              Alur Kerja & Proses Bisnis
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#58585A]">
              Alur Pendampingan Terstruktur, Transparan & Terpercaya
            </h1>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-7 text-[#58585A]/78 text-justify">
              Kami merancang alur kerja yang sistematis agar setiap tahapan penelitian Matters berjalan lancar, terarah, dan memberikan pemahaman mendalam.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between rounded-[1.5rem] border border-[#58585A]/10 bg-[#CDCD2E]/10 p-5 sm:p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-[#CDCD2E]">
                      {step.step}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#58585A]/30" />
                  </div>
                  <h2 className="mt-3 text-base sm:text-lg font-bold text-[#58585A]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#58585A]/80 text-justify">
                    {step.description}
                  </p>
                  <p className="mt-3 text-[11px] leading-relaxed text-[#58585A]/65 border-t border-[#58585A]/10 pt-2.5 text-justify">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Banner */}
          <div className="mt-10 rounded-2xl bg-[#58585A] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold">Mulai Konsultasi Penelitian Anda Sekarang</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80">
                Tim admin dan mentor Erudite siap mendampingi kebutuhan riset Anda.
              </p>
            </div>
            <a
              href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20alur%20layanan%20penelitian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#CDCD2E] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#58585A] transition hover:bg-[#d7d72f] whitespace-nowrap"
            >
              Chat via WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}