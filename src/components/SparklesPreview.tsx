"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles"; // adjust path if needed

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Title */}
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Hey, I’m Arnav Bhandari
      </h1>

      {/* Sparkles Strip */}
      <div className="w-[40rem] h-40 relative mt-6">
        {/* Decorative Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full absolute inset-0"
          particleColor="#FFFFFF"
        />

        {/* Radial mask */}
        <div
          className="absolute inset-0 w-full h-full bg-black"
          style={{
            maskImage:
              "radial-gradient(350px_200px_at_top,transparent_20%,white)",
          }}
        />
      </div>
    </div>
  );
}
