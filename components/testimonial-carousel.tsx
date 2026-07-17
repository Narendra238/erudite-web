"use client";

import { useState, useEffect, useRef } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  institution: string;
  service: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "E** Ag*****",
    role: "Mahasiswa S3",
    institution: "Universitas A**** Da****",
    service: "Mentoring Disertasi",
    rating: 5,
    text: "Terima kasih saya untuk tim ERUDITE atas bantuannya untuk artikel saya serta respon cepatnya,sangat membantu karena cepat serta tepat,sukses selalu untuk ERUDITE semoga semakin banyak yang terbantu. assalamu'alaikum🙏🙏",
  },
  {
    id: 2,
    name: "Na*** A******",
    role: "Mahasiswa S1",
    institution: "Universitas N***** M**** ",
    service: "Mentoring Skripsi",
    rating: 5,
    text: "Sangat membantu untuk mahasiswa yang kesulitan dalam memahami materi, pembimbingan dari kakak-kakak di erudite sangat membantu sekali",
  },
  {
    id: 3,
    name: "Murdiyanto, S.Pd.Gr.",
    role: "Guru SD",
    institution: "SD Negeri 1 Gedompol",
    service: "Study Club Batch 6",
    rating: 5,
    text: "Kegiatan ini sangat bermanfaat kak, pelaksanaan sudah sangat baik dan rekaman sesinya sangat membantu untuk belajar ulang.",
  },
  {
    id: 4,
    name: "Yully Trisnaningtyas",
    role: "Mahasiswa S2",
    institution: "SDIT Istiqamah",
    service: "Study Club Batch 1",
    rating: 5,
    text: "Alhamdulilah sudah baik.mungkin dilanjutkan lagi pelatihan2 unt kami yg akan menyusun tesis dan artikel",
  }
];

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch and drag swipe state
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const minSwipeDistance = 50;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Mouse handlers for desktop drag-to-swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setIsPaused(false);
    }
  };

  return (
    <section 
      id="testimoni" 
      className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
          Testimoni Client
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#58585A] sm:text-4xl">
          Apa Kata Matters Tentang Kami?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#58585A]/70">
          Umpan balik tulus dari para Matters (peneliti, mahasiswa, dan akademisi) yang telah mempercayakan perjalanannya bersama ERUDITE.
        </p>
      </div>

      {/* Main Slider Area */}
      <div 
        className="relative mt-12 flex h-[390px] sm:h-[350px] w-full items-center justify-center overflow-hidden px-4 touch-pan-y cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#58585A]/10 bg-white text-[#58585A] shadow-md hover:bg-[#CDCD2E]/10 hover:border-[#CDCD2E]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Previous Testimonial"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonials Stack */}
        <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
          {testimonials.map((t, index) => {
            const N = testimonials.length;
            let diff = index - activeIndex;
            
            // Handle circular wrapping
            if (diff < -Math.floor(N / 2)) diff += N;
            if (diff > Math.floor(N / 2)) diff -= N;

            const isActive = diff === 0;
            const isAdjacent = Math.abs(diff) === 1;

            // Compute styling and transform based on circular difference
            let transformClass = "";
            if (isActive) {
              transformClass = "translate-x-0 scale-100 opacity-100 z-30 pointer-events-auto shadow-[0_20px_50px_rgba(88,88,90,0.08)] border-[#58585A]/15";
            } else if (diff === -1) {
              transformClass = "-translate-x-[25%] sm:-translate-x-[35%] scale-90 opacity-40 z-20 cursor-pointer pointer-events-auto hover:opacity-60";
            } else if (diff === 1) {
              transformClass = "translate-x-[25%] sm:translate-x-[35%] scale-90 opacity-40 z-20 cursor-pointer pointer-events-auto hover:opacity-60";
            } else {
              transformClass = "scale-75 opacity-0 z-10 pointer-events-none";
            }

            return (
              <div
                key={t.id}
                onClick={() => !isActive && setActiveIndex(index)}
                className={`absolute w-full max-w-[320px] sm:max-w-[480px] md:max-w-[580px] rounded-[2rem] border border-[#58585A]/10 bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-in-out transform select-none min-h-[300px] sm:min-h-[250px] ${transformClass}`}
              >
                {/* Upper Quote Content */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4.5 w-4.5 text-[#CDCD2E] fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote Icon */}
                    <svg className="h-8 w-8 text-[#CDCD2E]/20 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.961l.653 1.414c-4.013.896-6 3.256-6 6.9 0 1.861 1.252 3.1 2.803 3.1 1.651 0 2.8 1.37 2.8 3.1 0 2.42-1.952 4.438-4.256 4.438-2.148 0-4.2-1.918-4.2-4.438zm-12 0v-7.391c0-5.704 3.748-9.762 9-10.961l.653 1.414c-4.013.896-6 3.256-6 6.9 0 1.861 1.252 3.1 2.803 3.1 1.651 0 2.8 1.37 2.8 3.1 0 2.42-1.951 4.438-4.256 4.438-2.148 0-4.2-1.918-4.2-4.438z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#58585A]/90 text-justify italic font-medium">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Profile & Service Tag */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-[#58585A]/10 pt-4 gap-3">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#CDCD2E]/20 text-[#58585A] font-bold text-sm">
                      {t.name.split(" ").map(w => w[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#58585A]">{t.name}</h4>
                      <p className="text-xs text-[#58585A]/60">{t.role} • {t.institution}</p>
                    </div>
                  </div>
                  {/* Service Badge */}
                  <span className="inline-flex self-start sm:self-center items-center rounded-full bg-[#CDCD2E]/12 px-3 py-1 text-xs font-semibold text-[#58585A]/85 border border-[#CDCD2E]/20">
                    {t.service}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#58585A]/10 bg-white text-[#58585A] shadow-md hover:bg-[#CDCD2E]/10 hover:border-[#CDCD2E]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Next Testimonial"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? "w-8 bg-[#58585A]" 
                : "w-2.5 bg-[#58585A]/20 hover:bg-[#58585A]/45"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
