"use client";

import { NavbarDemo } from "@/components/NavbarDemo";
import dynamic from "next/dynamic";

const GlobeSection = dynamic(
  () => import("@/components/GlobeSection").then((mod) => mod.GlobeSection),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 overflow-hidden relative flex flex-col w-full h-full"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99,102,241,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 0%, rgba(139,92,246,0.12) 0%, transparent 60%), #020208"
      }}
    >
      {/* Animated grid lines for premium tech look */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Top horizon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full w-full min-h-screen">
        <NavbarDemo />
        <div className="flex-1 flex flex-col items-center justify-center pb-20 mt-10">
          <GlobeSection />
        </div>
      </div>
    </main>
  );
}
