"use client";
import { SkillsSection } from "@/components/SkillsSection";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Footer } from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <NavbarDemo />
      <div className="pt-24">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
