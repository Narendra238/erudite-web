import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StudyClubDashboard } from "./study-club-dashboard";

export const metadata = {
  title: "ERUDITE | Study Club",
  description: "Dokumentasi program Study Club ERUDITE Research Partner - Belajar bareng dengan tema berbeda setiap sesi.",
};

export default function StudyClubPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(205,205,46,0.26),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_52%,_#fbfbf7_100%)] text-[#58585A]">
      <SiteHeader activePage="study-club" />
      <StudyClubDashboard />
      <SiteFooter />
    </main>
  );
}
