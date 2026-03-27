"use client";

import React, { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatedHeading, GradientText } from "@/components/AnimatedText";

const navPoints = [
  { lat: 40.7128, lng: -74.0060, label: "Projects", route: "/projects", color: "#60a5fa", emoji: "🚀" },
  { lat: 51.5074, lng: -0.1278,  label: "About",    route: "/about",    color: "#a78bfa", emoji: "👤" },
  { lat: 28.6139, lng: 77.2090,  label: "Achievements", route: "/achievements", color: "#34d399", emoji: "🏆" },
  { lat: -33.8688, lng: 151.2093, label: "Contact", route: "/contact",  color: "#f472b6", emoji: "✉️" },
  { lat: 35.6762, lng: 139.6503, label: "Skills",   route: "/skills",   color: "#fbbf24", emoji: "⚡" },
];

export function GlobeSection() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Enable auto-rotation after mount
    const timer = setTimeout(() => {
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.6;
        globeEl.current.controls().enableZoom = false;
      }
    }, 500);

    // Eagerly prefetch all routes
    const routes = navPoints.map((p) => p.route);
    routes.forEach((route) => router.prefetch(route));

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  const arcsData = [...Array(12).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: ["#f472b6", "#a78bfa", "#60a5fa"][Math.round(Math.random() * 2)],
  }));

  const ringsData = navPoints.map((pt) => ({
    lat: pt.lat,
    lng: pt.lng,
    maxR: 6,
    propagationSpeed: 2,
    repeatPeriod: 900,
    color: pt.color,
  }));

  return (
    <section
      id="globe"
      className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 z-10 pb-10"
    >
      {/* Hero Intro */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-3 z-20"
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-purple-400 font-medium mb-2">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tight">
          <AnimatedHeading text="Arnav Bhandari" />
        </h1>
        <p className="text-base md:text-xl font-light">
          <GradientText text="Full-Stack & IoT Developer" className="font-semibold" />
          {" · "}
          <span className="text-yellow-400 font-semibold">6× Hackathon Winner</span>
        </p>
      </motion.div>

      {/* Globe */}
      {isClient && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-3xl h-[40vh] md:h-[50vh] relative flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.25)] mb-8"
          onMouseEnter={() => { if (globeEl.current) globeEl.current.controls().autoRotate = false; }}
          onMouseLeave={() => { if (globeEl.current) globeEl.current.controls().autoRotate = true; }}
        >
          <Globe
            ref={globeEl as any}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

            arcsData={arcsData}
            arcColor="color"
            arcDashLength={0.4}
            arcDashGap={0.2}
            arcDashAnimateTime={1500}

            ringsData={ringsData}
            ringColor="color"
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"

            labelsData={navPoints}
            labelLat={(d: any) => d.lat}
            labelLng={(d: any) => d.lng}
            labelText={(d: any) => d.label}
            labelSize={2}
            labelDotRadius={0.8}
            labelColor={(d: any) => d.color}
            labelResolution={2}
            onLabelClick={(d: any) => router.push(d.route)}

            width={dimensions.width || 700}
            height={dimensions.height || 500}
          />

          {/* Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          <div className="absolute -z-10 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      )}

      {!isClient && (
        <div className="w-full max-w-3xl h-[40vh] flex items-center justify-center rounded-3xl border border-white/10 mb-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500" />
        </div>
      )}

    </section>
  );
}
