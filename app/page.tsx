import Image from "next/image";
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
    value: "50+ Matters",
    label: "Research Matters telah bergabung dan berkembang bersama Erudite Research Partner.",
  },
  {
    value: "100++ Layanan",
    label: "Sudah sebanyak 100++ layanan penelitian terselesaikan dan masih terus bertambah.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.34),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="home" />

      <section className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[#CDCD2E]/45 bg-[#CDCD2E]/20 px-4 py-2 text-xs sm:text-sm font-semibold text-[#58585A] shadow-sm">
              Selamat Datang di Website Erudite Research Partner
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#58585A] sm:text-5xl lg:text-6xl">
              Penulisan penelitian Matters terasa berat ?
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#58585A]/78 sm:text-lg sm:leading-8 text-justify">
              Kami hadir untuk membantu Matters menyelesaikan penelitian dengan lebih mudah dan efisien.
              Menulis dan meneliti bukan sekadar menulis, tapi proses yang bisa dipelajari dan disempurnakan.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
              <a
                href="https://wa.me/628112225499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#58585A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#58585A]/20 transition hover:-translate-y-0.5 hover:bg-[#4d4d4f]"
              >
                Chat dengan kami
              </a>
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
                  className="rounded-3xl border border-[#58585A]/10 bg-white p-5 shadow-[0_20px_60px_rgba(88,88,90,0.06)] backdrop-blur transition-all duration-300 hover:shadow-md"
                >
                  <p className="text-2xl font-bold text-[#58585A]">{item.value}</p>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-[#58585A]/78">{item.label}</p>
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#CDCD2E]">Coba Chat</span>
                  <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#58585A]">
                    Ingin tau lebih lanjut mengenai layanan kami ? Chat dengan kami yuk!
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#CDCD2A] px-4 py-3 text-right text-[#FFFFFF] shadow-sm flex-shrink-0">
                  <a
                    href="https://wa.me/628112225499"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-[#FFFFFF]">Chat</p>
                    <p className="text-lg font-bold">ERUDITE</p>
                  </a>
                </div>
              </div>

              <HeroInteractiveCard />
            </div>
          </div>
        </div>
      </section>

      {/* Section Tentang ERUDITE */}
      <section id="tentang" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="grid items-center gap-8 rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-10 shadow-[0_20px_70px_rgba(88,88,90,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between gap-5">
            <div>
              <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#58585A]">
                Tentang ERUDITE
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#58585A]">
                Solusi Penelitian Mudah, Cepat, dan Terpercaya!
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-[#58585A]/78 text-justify">
                <strong>ERUDITE Research Partner</strong> merupakan mitra profesional dalam bidang penelitian yang menyediakan layanan pendampingan akademik, analisis data, pengembangan instrumen, hingga publikasi ilmiah. 
                Kami berkomitmen membantu mahasiswa, dosen, peneliti, maupun praktisi menghasilkan karya ilmiah yang berkualitas melalui bimbingan edukatif yang etis, sistematis, dan 100% bebas joki tugas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-[#58585A]/10 pt-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 rounded-full bg-[#58585A] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#4d4d4f] hover:-translate-y-0.5"
              >
                <span>Lihat Struktur Tim & Profil Ahli</span>
                <span>&rarr;</span>
              </Link>
              <span className="text-xs text-[#58585A]/70 font-medium">
                7 Mentor Ahli & Dewan Pakar Siap Mendampingi
              </span>
            </div>
          </div>

          {/* Visual Showcase Card with Logo and Mentor Preview */}
          <div className="relative rounded-3xl border border-[#CDCD2E]/25 bg-gradient-to-br from-[#CDCD2E]/10 via-white to-[#CDCD2E]/5 p-6 sm:p-7 shadow-[0_12px_40px_rgba(88,88,90,0.04)]">
            <div className="flex items-center gap-4 border-b border-[#58585A]/10 pb-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm border border-[#58585A]/10">
                <Image
                  src="/Logo.png"
                  alt="ERUDITE logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#58585A]">ERUDITE Research Partner</h3>
                <p className="text-xs font-semibold text-[#b8b823]">Your Research Matters</p>
                <p className="text-[11px] text-[#58585A]/70">Lembaga Pendampingan Riset & Publikasi</p>
              </div>
            </div>

            {/* Mentor Avatars Stack */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-[#58585A]/80 uppercase tracking-wider mb-2.5">
                Tim Akademisi & Pengajar Ahli:
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden py-1">
                {[
                  { src: "/BuDian.png", name: "Dr. Dian Hidayati, M.M." },
                  { src: "/PakErfin.png", name: "Erfin Septana" },
                  { src: "/MasLuthfi.png", name: "M. Luthfi Imama, M.Pd" },
                  { src: "/MasAde.png", name: "Ade Putra, M.Pd" },
                  { src: "/MbaAnisa.png", name: "Anisatul Maysaroh, M.Pd" },
                  { src: "/MbaAyu.png", name: "Wahyu Prihatiningsih, M.Pd" },
                  { src: "/Naren.png", name: "M. Narendra, S.Kom." },
                ].map((member) => (
                  <div
                    key={member.src}
                    className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-[#58585A]/10 bg-white"
                    title={member.name}
                  >
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-[#58585A]/75">
                Magister & Doktor berpengalaman di bidang riset kualitatif, kuantitatif, tools olah data, & publikasi SINTA/Scopus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Hubungi Kami Langsung di Beranda */}
      <section id="kontak" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
              Hubungi Kami
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#58585A]">
              Matters bisa kontak kami lewat WhatsApp, Instagram, atau Email.
            </h2>
            <p className="mt-2 text-sm text-[#58585A]/75 max-w-xl">
              Tim Erudite siap merespon pertanyaan dan konsultasi penelitian Anda secara ramah dan profesional.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* WhatsApp Contact */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#CDCD2E]"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>WhatsApp Admin</span>
              </div>
              <a
                href="https://wa.me/628112225499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#58585A] px-5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#58585A]/15 transition hover:-translate-y-0.5 hover:bg-[#4d4d4f] sm:min-w-[190px]"
              >
                +62 811-2225-499
              </a>
            </div>

            {/* Instagram Contact */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#CDCD2E]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </div>
              <a
                href="https://www.instagram.com/erudite.research/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#CDCD2E] px-5 text-xs sm:text-sm font-semibold text-[#58585A] shadow-md shadow-[#CDCD2E]/20 transition hover:-translate-y-0.5 hover:bg-[#d7d72f] sm:min-w-[190px]"
              >
                @erudite.research
              </a>
            </div>

            {/* Email Contact */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#CDCD2E]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email Resmi</span>
              </div>
              <a
                href="mailto:erudite.riset@gmail.com?subject=Inquiry%20ERUDITE&body=Halo%20ERUDITE,%20saya%20ingin%20konsultasi%20layanan%20penelitian."
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#CDCD2E]/20 border border-[#CDCD2E]/40 px-5 text-xs sm:text-sm font-semibold text-[#58585A] transition hover:-translate-y-0.5 hover:bg-[#CDCD2E]/30 sm:min-w-[190px]"
              >
                erudite.riset@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <SiteFooter />
    </main>
  );
}