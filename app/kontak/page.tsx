import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "ERUDITE | Hubungi Kami",
  description: "Halaman kontak ERUDITE Research Partner.",
};

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="kontak" />

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-[#58585A]/10 bg-white p-8 shadow-[0_20px_70px_rgba(88,88,90,0.06)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#CDCD2E]">
              Hubungi kami
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#58585A]">
              Matters bisa kontak kami lewat email, Instagram, atau WhatsApp.
            </h1>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap">
            {/* Email Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                <span>Email</span>
              </div>
              <a
                href="mailto:erudite.riset@gmail.com?subject=Inquiry%20ERUDITE&body=Hello,%20I%20would%20like%20to%20inquire%20about%20ERUDITE."
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#CDCD2E] px-6 text-sm font-semibold text-[#58585A] shadow-lg shadow-[#CDCD2E]/22 transition hover:-translate-y-0.5 hover:bg-[#d7d72f] md:min-w-[220px]"
              >
                erudite.riset@gmail.com
              </a>
            </div>

            {/* Instagram Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#CDCD2E] px-6 text-sm font-semibold text-[#58585A] shadow-lg shadow-[#CDCD2E]/22 transition hover:-translate-y-0.5 hover:bg-[#d7d72f] md:min-w-[220px]"
              >
                @erudite.research
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#58585A]/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                <span>WhatsApp</span>
              </div>
              <a
                href="https://wa.me/628112225499"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#CDCD2E] px-6 text-sm font-semibold text-[#58585A] shadow-lg shadow-[#CDCD2E]/22 transition hover:-translate-y-0.5 hover:bg-[#d7d72f] md:min-w-[220px]"
              >
                +62 811-2225-499
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}