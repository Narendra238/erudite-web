"use client";

import { useState } from "react";

type Session = {
  sessionNumber: number;
  title: string;
  speaker: string;
  date: string;
  youtubeUrl: string;
};

type BatchData = {
  batch: number;
  title: string;
  sessions: Session[];
  certificateUrl: string;
  virtualBackgroundUrl: string;
};

const studyClubData: BatchData[] = [
  {
    batch: 1,
    title: "Pengenalan Riset & Analisis Data",
    sessions: [
      {
        sessionNumber: 1,
        title: "Pengenalan riset kualitatif dan metode pengambilan data",
        speaker: "Dr. Dian Hidayati, M.M.",
        date: "14 Februari 2026",
        youtubeUrl: "https://youtu.be/LjwCi61sF7k",
      },
      {
        sessionNumber: 2,
        title: "Alur analisis data penelitian kualitatif",
        speaker: "M. Luthfi Imama, M.Pd",
        date: "15 Februari 2026",
        youtubeUrl: "https://youtu.be/Z61qEOjm6EA",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1EuS8XDM7zfEdCJwdt4wJguyqJcJa0YtY?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1jvPO4sOk1Qjd5M2-PSFbW3qZp-2RAj6-/view?usp=sharing"
  },
  {
    batch: 2,
    title: "Reference & Citation",
    sessions: [
      {
        sessionNumber: 1,
        title: "Mencari sumber referensi & Teknik sitasi atau mengutip",
        speaker: "Dr. Dian Hidayati, M.M.",
        date: "28 Februari 2026",
        youtubeUrl: "https://youtu.be/5S6a1JcBx8Y",
      },
      {
        sessionNumber: 2,
        title: "Manajemen referensi menggunakan tools",
        speaker: "Ade Putra, M.Pd.",
        date: "1 Maret 2026",
        youtubeUrl: "https://youtu.be/aBjZH1yrRnA",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1hsiIodccQPhx4u8L1q4aJT9lZWL9rLf5?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1yBK_71zDYHAkz1h2Cn_-ohyXHm6_NKKv/view?usp=sharing"
  },
  {
    batch: 3,
    title: "Data Numpuk Tapi Bingung Analisis? Yuk Belajar ATLAS.ti!",
    sessions: [
      {
        sessionNumber: 1,
        title: "Dasar Analisis Data Kualitatif dan Pengenalan ATLAS.ti",
        speaker: "M. Luthfi Imama, M.Pd",
        date: "Sabtu, 4 April 2026",
        youtubeUrl: "https://youtu.be/U_hryd3Q1Qo",
      },
      {
        sessionNumber: 2,
        title: "Teknik Coding dan Kategorisasi Data",
        speaker: "Anisatul Maysaroh, M.Pd",
        date: "Minggu, 5 April 2026",
        youtubeUrl: "https://youtu.be/SWMdwQvNGHA",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1JfIrpt77NXFApHGqziFut21_aITKMotK?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1s6GsUS-IsCRvAbHbNvPRJooiQKdjtbP-/view?usp=sharing"
  },
  {
    batch: 4,
    title: "Penulisan Artikel Jurnal",
    sessions: [
      {
        sessionNumber: 1,
        title: "Struktur penulisan artikel, menulis pendahuluan-metode",
        speaker: "Anisatul Maysaroh, M.Pd",
        date: "18 April 2026",
        youtubeUrl: "https://youtu.be/AvGpp4Vk4Io",
      },
      {
        sessionNumber: 2,
        title: "Menuliskan hasil dan pembahasan penelitian, abstrak & kata kunci",
        speaker: "M. Luthfi Imama, M.Pd",
        date: "19 April 2026",
        youtubeUrl: "https://youtu.be/l0IiGvM9zbI",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1RQ6ImM3auAo3TVK3gXPzmTGh3ocmRJwu?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1go1f8aqtoZ4nbIyHSSxoXCimlGJF5xsx/view?usp=sharing"
  },
  {
    batch: 5,
    title: "Pendalaman ATLAS.ti untuk Pengolahan Data Kualitatif yang Lebih Efektif, Sistematis, dan Insightful",
    sessions: [
      {
        sessionNumber: 1,
        title: "Orientasi dan Fundamental Software AtlasTi",
        speaker: "Ade Putra, M.Pd.",
        date: "Sabtu, 16 Mei 2026",
        youtubeUrl: "https://youtu.be/9ko-8ZClzCo",
      },
      {
        sessionNumber: 2,
        title: "Implementasi Koding dengan AtlasTi",
        speaker: "M. Luthfi Imama, M.Pd",
        date: "Minggu, 17 Mei 2026",
        youtubeUrl: "https://youtu.be/kQ4obQUAopQ",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1hRp8v_cqo7Jv_ZWvgA5zPBoldAgMLkGo?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1iAS2_jDn4pRhjOzlWMM_X7b5P1CJF81_/view?usp=sharing"
  },
  {
    batch: 6,
    title: "Academic Citation & Reference Management",
    sessions: [
      {
        sessionNumber: 1,
        title: "Menulis Kutipan dan Sitasi yang Tepat Sesuai Ketentuan",
        speaker: "Wahyu Prihatiningsih, M.Pd",
        date: "4 Juli 2026",
        youtubeUrl: "https://youtu.be/VOWywR2G9vg",
      },
      {
        sessionNumber: 2,
        title: "Mengelola Referensi Secara Efisien dari Pencarian hingga Sinkronisasi",
        speaker: "Ade Putra, M.Pd",
        date: "5 Juli 2026",
        youtubeUrl: "https://youtu.be/S9p6gZsh5Zc",
      }
    ],
    certificateUrl: "https://drive.google.com/drive/folders/1cyc-1tn4HgZM9-mZ3c3SHlKvvsRWaQ-T?usp=sharing",
    virtualBackgroundUrl: "https://drive.google.com/file/d/1g0tmdiBKdNE991l3ZZUr5ZY0J4zDhC5_/view?usp=sharing"
  }
];

function getYoutubeThumbnail(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    const videoId = match[2];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return null;
}

export function StudyClubDashboard() {
  const [selectedBatchNumber, setSelectedBatchNumber] = useState<number>(6); // Default ke batch terbaru (6)

  const activeBatch = studyClubData.find((b) => b.batch === selectedBatchNumber) || studyClubData[studyClubData.length - 1];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:px-12">
      <div className="rounded-[2rem] border border-[#58585A]/10 bg-white p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)]">
        {/* Header Section */}
        <div className="border-b border-[#58585A]/10 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
            Program Study Club
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#58585A]">
            Dokumentasi & Resource Belajar Bersama
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#58585A]/78 text-justify">
            ERUDITE telah menyelenggarakan kelas online Study Club secara rutin dengan berbagai mentor ahli dan tema materi yang berbeda setiap sesinya. 
            Silakan pilih batch di bawah ini untuk mengakses rekaman YouTube materi sesi, serta mengunduh E-Sertifikat dan Virtual Background.
          </p>
        </div>

        {/* Batch Selector Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
          <span className="text-sm font-semibold text-[#58585A]/70 uppercase tracking-wider">
            Pilih Batch :
          </span>
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
            {studyClubData.map((b) => {
              const isActive = b.batch === selectedBatchNumber;
              return (
                <button
                  key={b.batch}
                  onClick={() => setSelectedBatchNumber(b.batch)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#58585A] text-white shadow-lg shadow-[#58585A]/15 scale-105"
                      : "bg-[#CDCD2E]/10 text-[#58585A] border border-[#CDCD2E]/10 hover:bg-[#CDCD2E]/20"
                  }`}
                >
                  Batch {b.batch}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Batch Container */}
        <div className="mt-10 rounded-[1.75rem] bg-[#CDCD2E]/5 border border-[#CDCD2E]/10 p-6 sm:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-[#58585A]/10 pb-4">
            <div>
              <span className="inline-block rounded-full bg-[#CDCD2E]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#58585A]/90">
                Batch {activeBatch.batch}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#58585A]">
                {activeBatch.title}
              </h2>
            </div>
            <div className="text-xs text-[#58585A]/60 md:text-right">
              2 Sesi Pembelajaran • Akses Online
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {activeBatch.sessions.map((session) => {
              const thumbnail = getYoutubeThumbnail(session.youtubeUrl);
              return (
                <div
                key={session.sessionNumber}
                className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-5 shadow-[0_12px_40px_rgba(88,88,90,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#58585A]/5 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#CDCD2E]">
                      Sesi 0{session.sessionNumber}
                    </span>
                    <span className="text-xs text-[#58585A]/60 font-medium">Video Rekaman</span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug text-[#58585A] min-h-[48px]">
                    {session.title}
                  </h3>

                  <div className="mt-3 flex flex-col gap-2.5">
                    {/* Pemateri */}
                    <div className="flex items-center gap-2 text-sm text-[#58585A]/85">
                      <svg
                        className="h-4.5 w-4.5 text-[#CDCD2E] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Pemateri: <strong className="font-semibold text-[#58585A]">{session.speaker}</strong></span>
                    </div>

                    {/* Waktu */}
                    <div className="flex items-center gap-2 text-xs text-[#58585A]/70">
                      <svg
                        className="h-4.5 w-4.5 text-[#CDCD2E] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Jadwal: <strong className="font-medium text-[#58585A]/90">{session.date} • 13.00 - 15.00 WIB</strong></span>
                    </div>
                  </div>
                </div>

                {/* Video Play Container / Embed Link */}
                <div className="mt-6">
                  {session.youtubeUrl ? (
                    <a
                      href={session.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video w-full rounded-xl overflow-hidden border border-[#58585A]/10 bg-black group shadow-sm"
                    >
                      {thumbnail ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={thumbnail}
                            alt={session.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Play overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300 group-hover:bg-black/55">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CDCD2E] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                              <svg
                                className="h-6 w-6 fill-current text-white translate-x-0.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <span className="mt-2 text-[10px] font-semibold text-white tracking-wider uppercase bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                              Putar di YouTube
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#58585A]/90 transition-opacity group-hover:bg-[#58585A]/85">
                          <svg
                            className="h-12 w-12 text-[#CDCD2E] transition-transform duration-300 group-hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="mt-2 text-xs font-semibold text-white tracking-wide uppercase">
                            Putar di YouTube
                          </span>
                        </div>
                      )}
                    </a>
                  ) : (
                    <div className="relative aspect-video w-full rounded-xl border border-dashed border-[#58585A]/20 bg-[#58585A]/5 flex flex-col items-center justify-center p-4 text-center group transition-colors hover:bg-[#58585A]/10">
                      <svg
                        className="h-10 w-10 text-[#58585A]/30 mb-2 transition-colors duration-300 group-hover:text-[#CDCD2E]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-[#58585A]/60">
                        Rekaman YouTube Segera Hadir
                      </span>
                      <span className="text-[10px] text-[#58585A]/45 mt-0.5">
                        Draf disiapkan oleh sistem
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          </div>

          {/* Resources Download Area */}
          <div className="mt-8 border-t border-[#58585A]/10 pt-8">
            <h3 className="text-lg font-bold text-[#58585A] flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#CDCD2E]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Unduhan File & Sertifikat Batch {activeBatch.batch}
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* E-Certificate Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-5 transition-shadow hover:shadow-md">
                <div>
                  <h4 className="text-sm font-bold text-[#58585A] uppercase tracking-wide">
                    E-Sertifikat Peserta
                  </h4>
                  <p className="mt-1 text-xs text-[#58585A]/70 text-justify">
                    Dapatkan sertifikat resmi bukti keikutsertaan Anda dalam pembelajaran online Study Club batch ini.
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  {activeBatch.certificateUrl ? (
                    <a
                      href={activeBatch.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#58585A] py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4d4d4f]"
                    >
                      Unduh E-Sertifikat
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full rounded-xl bg-[#58585A]/10 py-2 text-xs font-semibold text-[#58585A]/40 cursor-not-allowed border border-[#58585A]/5"
                    >
                      Tautan Unduh Belum Tersedia
                    </button>
                  )}
                </div>
              </div>

              {/* Virtual Background Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#58585A]/10 bg-white p-5 transition-shadow hover:shadow-md">
                <div>
                  <h4 className="text-sm font-bold text-[#58585A] uppercase tracking-wide">
                    Virtual Background
                  </h4>
                  <p className="mt-1 text-xs text-[#58585A]/70 text-justify">
                    Gunakan virtual background resmi ERUDITE untuk tampilan profesional selama Zoom atau Google Meet.
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  {activeBatch.virtualBackgroundUrl ? (
                    <a
                      href={activeBatch.virtualBackgroundUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#CDCD2E] py-2 text-xs font-semibold text-[#58585A] shadow-sm transition hover:bg-[#d7d72f]"
                    >
                      Unduh Virtual Background
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full rounded-xl bg-[#58585A]/10 py-2 text-xs font-semibold text-[#58585A]/40 cursor-not-allowed border border-[#58585A]/5"
                    >
                      Background Belum Tersedia
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
