import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const steps = [
  {
    title: "Konsultasikan Kebutuhan",
    description: "Kami dengan senang hati mendampingi Matters dalam memahami apa yang dibutuhkan.",
  },
  {
    title: "Pelaksanaan Layanan",
    description: "Kami mengerjakan atau mendampingi Matters dalam menyelesaikan tugas.",
  },
  {
    title: "Representasi Hasil dan Selesai",
    description: "Hasil pekerjaan akan diserahkan dengan jelas kepada Matters.",
  },
];

export const metadata = {
  title: "ERUDITE | Alur",
  description: "Halaman alur kerja ERUDITE Research Partner.",
};

export default function AlurPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="alur" />

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
            Alur kerja Kami
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#58585A]">
            Sebelum memulai pengerjaan perlu diketahui alur proses bisnis kami.
          </h1>


          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-[#58585A]/10 bg-[#CDCD2E]/10 p-6">
                <p className="text-sm font-semibold text-[#CDCD2E]">0{index + 1}</p>
                <h2 className="mt-3 text-xl font-semibold text-[#58585A]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#58585A]/78 text-justify">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}