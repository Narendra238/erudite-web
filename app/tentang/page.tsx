import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "ERUDITE | Tentang Kami",
  description: "Profil, struktur organisasi tim, dan tujuan proses bisnis ERUDITE Research Partner.",
};

const businessGoals = [
  {
    number: "01",
    title: "Pemberdayaan Kemandirian Peneliti (Bukan Joki)",
    desc: "Erudite menolak tegas praktik joki tugas. Kami hadir untuk membimbing, mengedukasi, dan menyempurnakan naskah agar Matters benar-benar memahami karya ilmiahnya sendiri dan percaya diri saat ujian sidang maupun peer-review jurnal.",
    icon: "🎓",
  },
  {
    number: "02",
    title: "Validitas & Ketepatan Metodologi Riset",
    desc: "Memastikan setiap tahapan penelitian—mulai dari perumusan latar belakang, instrumen kuesioner/wawancara, hingga pengolahan data statistik atau kualitatif—berjalan sesuai standar metodologis yang dapat dipertanggungjawabkan.",
    icon: "🔬",
  },
  {
    number: "03",
    title: "Integritas Akademik & Bebas Plagiarisme",
    desc: "Menjunjung tinggi orisinalitas karya ilmiah dengan mengedepankan teknik parafrase akademik yang tepat, manajemen sitasi berstandar internasional (APA/IEEE/Harvard), serta audit kemiripan naskah yang aman.",
    icon: "🛡️",
  },
  {
    number: "04",
    title: "Ekosistem Edukasi Riset yang Inklusif & Terjangkau",
    desc: "Menyediakan ruang belajar terbuka melalui program rutin Study Club dan portal LMS mandiri, sehingga ilmu riset berkualitas dapat diakses oleh mahasiswa, dosen, dan peneliti di seluruh Indonesia.",
    icon: "🌐",
  },
];

interface TeamMember {
  name: string;
  shortName: string;
  role: string;
  badge: string;
  image: string;
}

const teamStructure: TeamMember[] = [
  //{
  //name: "Dr. Dian Hidayati, M.M.",
  //shortName: "Dr. Dian",
  //badge: "ADVISORY & OPERATIONS",
  //image: "/BuDian.png",
  //},
  // {
  //   name: "Erfin Septana",
  //   shortName: "Pak Erfin",
  //   badge: "Treasurer & Administration Officer",
  //   image: "/PakErfin.png",
  // },
  {
    name: "M. Luthfi Imama, M.Pd",
    shortName: "Mas Luthfi",
    role: "Director",
    badge: "EXECUTIVE LEADERSHIP",
    image: "/MasLuthfi.png",
  },
  {
    name: "Anisatul Maysaroh, M.Pd",
    shortName: "Mba Anisa",
    role: "Research Data Analysis & Instrument Development Service Lead",
    badge: "ACADEMIC SERVICE LEADS",
    image: "/MbaAnisa.png",
  },
  {
    name: "Wahyu Prihatiningsih, M.Pd",
    shortName: "Mba Ayu",
    role: "Research Consulting Service Lead ",
    badge: "ACADEMIC SERVICE LEADS",
    image: "/MbaAyu.png",
  },
  {
    name: "Ade Putra, M.Pd",
    shortName: "Mas Ade",
    role: "Research Supporting Service Lead",
    badge: "ACADEMIC SERVICE LEADS",
    image: "/MasAde.png",
  },
  {
    name: "Muhammad Narendra Hawari, S.Kom.",
    shortName: "Mas Naren",
    role: "Operasional & IT",
    badge: "CREATIVE & TECHNOLOGY",
    image: "/Naren.png",
  },
];

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="tentang" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-10 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
          {/* Hero Section Tentang Erudite */}
          <div className="grid items-center gap-10 border-b border-[#58585A]/10 pb-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#58585A]">
                Tentang ERUDITE RESEARCH PARTNER
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#58585A] lg:text-5xl">
                Your Research Matters
              </h1>
              <p className="mt-2.5 text-base sm:text-lg font-semibold text-[#b8b823]">
                &ldquo;Kami tidak menuliskan namun menyempurnakan, tidak mengambil alih namun membagi peran.&rdquo;
              </p>
              <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-[#58585A]/80 text-justify">
                <strong>ERUDITE Research Partner</strong> merupakan lembaga pendampingan akademik dan konsultasi penelitian profesional yang berdedikasi membantu mahasiswa diploma, sarjana, magister, doktoral, serta dosen dan peneliti independen. Kami percaya bahwa setiap riset memiliki nilai yang berharga bagi kemajuan ilmu pengetahuan.
              </p>

              {/* Badges Highlights */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDCD2E]/40 bg-[#CDCD2E]/10 px-3.5 py-1.5 text-xs font-semibold text-[#58585A]">
                  <span>🎓</span> 100% Edukasi Mandiri (Bukan Joki)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#58585A]/15 bg-[#58585A]/5 px-3.5 py-1.5 text-xs font-semibold text-[#58585A]">
                  <span>🛡️</span> Berintegritas & Bebas Plagiasi
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDCD2E]/40 bg-[#CDCD2E]/10 px-3.5 py-1.5 text-xs font-semibold text-[#58585A]">
                  <span>👥</span> Didampingi Tim Ahli & Dewan Pakar
                </span>
              </div>
            </div>

            {/* Visual Brand & Team Showcase Card */}
            <div className="relative">
              <div className="absolute -left-4 top-4 h-32 w-32 rounded-full bg-[#CDCD2E]/30 blur-3xl" />
              <div className="absolute -right-4 bottom-4 h-32 w-32 rounded-full bg-[#CDCD2E]/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#58585A]/10 bg-gradient-to-br from-[#CDCD2E]/10 via-white to-[#CDCD2E]/5 p-6 sm:p-8 shadow-[0_20px_50px_rgba(88,88,90,0.06)] text-center">
                <div className="mx-auto flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-white p-4 shadow-md border border-[#58585A]/10">
                  <Image
                    src="/Logo.png"
                    alt="Logo ERUDITE Research Partner"
                    width={120}
                    height={120}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#58585A]">
                  ERUDITE RESEARCH PARTNER
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8b823]">
                  Your Research Matters
                </p>

                {/* Team Avatars Preview Stack */}
                <div className="mt-6 border-t border-[#58585A]/10 pt-5">
                  <p className="text-xs font-medium text-[#58585A]/75 mb-3">
                    Didukung oleh Pengajar & Konsultan Berpengalaman
                  </p>
                  <div className="flex items-center justify-center -space-x-2.5">
                    {teamStructure.map((m) => (
                      <div
                        key={m.name}
                        className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-[#58585A]/10 bg-white"
                        title={`${m.name} - ${m.role}`}
                      >
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="44px"
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-2.5 text-[11px] font-semibold text-[#58585A]/80">
                    7 Mentor Ahli, Dewan Pakar & QC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#58585A]/10 bg-[#CDCD2E]/5 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#CDCD2E] text-sm font-bold text-[#58585A]">
                  ✦
                </span>
                <h2 className="text-xl font-bold text-[#58585A]">Visi Kami</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#58585A]/80 text-justify">
                Menjadi mitra riset akademik terdepan, terpercaya, dan berintegritas tinggi di Indonesia yang mendorong terciptanya karya ilmiah berkualitas serta berdaya saing global.
              </p>
            </div>

            <div className="rounded-2xl border border-[#58585A]/10 bg-[#CDCD2E]/5 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#58585A] text-sm font-bold text-white">
                  ✦
                </span>
                <h2 className="text-xl font-bold text-[#58585A]">Misi Kami</h2>
              </div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#58585A]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#CDCD2E] font-bold">1.</span>
                  <span>Memberikan pendampingan penulisan tugas akhir dan artikel ilmiah yang sistematis dan etis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CDCD2E] font-bold">2.</span>
                  <span>Menyediakan layanan pengolahan data kuantitatif & kualitatif yang valid dan dapat dipertanggungjawabkan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CDCD2E] font-bold">3.</span>
                  <span>Menumbuhkan budaya belajar riset kolaboratif melalui program Study Club dan portal LMS terpadu.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section: Tujuan Proses Bisnis */}
          <div className="mt-14 border-t border-[#58585A]/10 pt-10">
            <div className="text-center sm:text-left">
              <span className="rounded-md bg-[#CDCD2E]/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#58585A]">
                Prinsip & Orientasi
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#58585A]">
                Tujuan & Filosofi Proses Bisnis Kami
              </h2>
              <p className="mt-2 text-sm text-[#58585A]/75 max-w-3xl">
                Proses bisnis di ERUDITE dibangun di atas pilar etika keilmuan dan kemitraan akademik yang transparan.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {businessGoals.map((goal) => (
                <div
                  key={goal.number}
                  className="rounded-2xl border border-[#58585A]/10 bg-white p-6 shadow-[0_8px_30px_rgba(88,88,90,0.04)] transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{goal.icon}</span>
                    <span className="text-xs font-bold text-[#CDCD2E]">{goal.number}</span>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#58585A]">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#58585A]/75 text-justify">
                    {goal.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Struktur Organisasi, Nama, Foto, dan Jabatan */}
          <div className="mt-14 border-t border-[#58585A]/10 pt-10">
            <div className="text-center sm:text-left">
              <span className="rounded-md bg-[#CDCD2E]/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#58585A]">
                Tim & Pengajar Ahli
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#58585A]">
                Struktur Organisasi & Tim Akademisi Erudite
              </h2>
              <p className="mt-2 text-sm text-[#58585A]/75 max-w-3xl">
                Didukung oleh para akademisi bergelar magister dan doktor dengan rekam jejak aktif dalam riset, publikasi jurnal bereputasi, dan pembimbingan mahasiswa.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamStructure.map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col justify-between rounded-[1.75rem] border border-[#58585A]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CDCD2E]/50 hover:shadow-xl"
                >
                  <div>
                    {/* Portrait Photo Container */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#58585A]/5 to-[#58585A]/15 border border-[#58585A]/10 shadow-inner">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Badge Top Left */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${member.badge === "Dewan Pakar"
                            ? "bg-[#58585A] text-white"
                            : member.badge === "Operasional & IT"
                              ? "bg-[#CDCD2E] text-[#58585A]"
                              : "bg-white/95 text-[#58585A] border border-[#58585A]/15"
                          }`}>
                          {member.badge}
                        </span>
                      </div>
                    </div>

                    {/* Member Details */}
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-[#58585A] group-hover:text-black transition-colors">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#b8b823]">
                      {member.role}
                    </p>
                  </div>

                  {/* Consultation Button */}
                  <div className="mt-5 pt-2">
                    <a
                      href={`https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20layanan%20riset%20dengan%20${encodeURIComponent(member.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#58585A] py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4d4d4f] hover:shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                      <span>Konsultasi dengan {member.shortName}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-14 rounded-2xl bg-[#58585A] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Siap Mengembangkan Penelitian Bersama Erudite?</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl">
                Diskusikan topik, instrumen, dan kendala penelitian Anda bersama tim kami secara gratis untuk sesi awal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/628112225499?text=Halo%20Admin%20ERUDITE,%20saya%20ingin%20konsultasi%20awal%20penelitian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#CDCD2E] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#58585A] shadow-md transition hover:bg-[#d7d72f]"
              >
                Konsultasi WhatsApp
              </a>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
