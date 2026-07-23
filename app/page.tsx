import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { HeroInteractiveCard } from "@/components/hero-interactive-card"; 

const highlights = [
  {
    value: "Study Club #6",
    label: "Kelas Online untuk belajar bareng dengan tema berbeda setiap sesi.",
  },
  {
    value: "23+",
    label: "Research Matters bergabung bersama Erudite Research Partner.",
  },
  {
    value: "20+",
    label: "Sudah sebanyak 20 layanan terselesaikan dan masih terus bertambah.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.34),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="home" />

      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-28 sm:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#CDCD2E]/45 bg-[#CDCD2E]/20 px-4 py-2 text-sm font-medium text-[#58585A] shadow-sm">
              Selamat Datang di Website Erudite Research Partner
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#58585A] sm:text-5xl lg:text-6xl">
              Penulisan penelitian Matters terasa berat ?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#58585A]/78 sm:text-xl text-justify">
              Kami hadir untuk membantu Matters menyelesaikan penelitian dengan lebih mudah dan efisien.
              Menulis dan meneliti bukan sekadar menulis, tapi proses yang bisa dipelajari dan disempurnakan.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#58585A]/20 transition hover:-translate-y-0.5 hover:bg-[#4d4d4f]"
              >
                Chat dengan kami
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center rounded-full border border-[#58585A]/18 bg-white px-6 py-3 text-sm font-semibold text-[#58585A] transition hover:-translate-y-0.5 hover:border-[#CDCD2E] hover:bg-[#CDCD2E]/14"
              >
                Lihat layanan
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-[#58585A]/10 bg-white p-5 shadow-[0_20px_60px_rgba(88,88,90,0.06)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-[#58585A]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#58585A]/78">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#CDCD2E]/35 blur-3xl" />
            <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[#CDCD2E]/26 blur-3xl" />

            <div className="relative rounded-[2rem] border border-[#58585A]/10 bg-white p-6 shadow-[0_24px_80px_rgba(88,88,90,0.08)] backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                    Coba Chat
                  <h2 className="mt-3 text-2xl font-semibold text-[#58585A]">
                    Ingin tau lebih lanjut mengenai layanan kami ? Chat dengan kami yuk!
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#CDCD2A] px-4 py-3 text-right text-[#FFFFFF]">
                  <Link
                    href="https://wa.me/628112225499"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#FFFFFF]">Chat</p>
                  <p className="text-lg font-semibold">ERUDITE</p>
                  </Link>
                </div>
              </div>

              <HeroInteractiveCard />
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-[#58585A]/10 bg-white p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)] lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
              Tentang ERUDITE
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#58585A]">
              Erudite Research Partner, Solusi Penelitian Mudah, Cepat, dan Terpercaya!
            </h2>
          </div>
          <p className="text-base leading-8 text-[#58585A]/78 text-justify">
            Erudite Research Partner merupakan mitra profesional dalam bidang penelitian yang menyediakan layanan pendampingan akademik, analisis data, pengembangan instrumen, hingga publikasi ilmiah. 
            Kami berkomitmen membantu mahasiswa, dosen, peneliti, maupun praktisi menghasilkan karya ilmiah yang berkualitas melalui layanan yang profesional, sistematis, dan terpercaya.
          </p>
        </div>
      </section>

      <TestimonialCarousel />

      <SiteFooter />
    </main>
  );
}