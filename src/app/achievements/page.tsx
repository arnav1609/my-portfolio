"use client";
import { AchievementsTimeline } from "@/components/AchievementsTimeline";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Footer } from "@/components/Footer";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <NavbarDemo />
      <div className="pt-24">
        <AchievementsTimeline />
      </div>
      <Footer />
    </main>
  );
}
