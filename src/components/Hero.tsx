"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden flex flex-col items-center justify-center min-h-screen px-4">
      {/* Typing Text */}
      <TextGenerateEffect words="Hey, I’m Arnav Bhandari" />

      {/* Sparkles Below */}
      <div className="w-full h-40 relative mt-10">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={800}
          particleColor="#ffffff"
          className="absolute inset-0 w-full h-full"
        />
        <div
          className="absolute inset-0 w-full h-full bg-black"
          style={{
            maskImage:
              "radial-gradient(600px 200px at center, transparent 20%, white)",
          }}
        />
      </div>
    </section>
  );
}
