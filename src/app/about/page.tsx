"use client";
import { HeroCrazy3D } from "@/components/HeroCrazy3D";
import { AboutSection } from "@/components/AboutSection";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const HeroCrazy3DClient = dynamic(
  () => import("@/components/HeroCrazy3D").then((mod) => mod.HeroCrazy3D),
  { ssr: false, loading: () => <div className="h-screen bg-black" /> }
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <NavbarDemo />
      <HeroCrazy3DClient />
      <AboutSection />
      <Footer />
    </main>
  );
}
