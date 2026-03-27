"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Small hard cursor dot with difference blending */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference z-[9999]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Massive subtle glow tracking the mouse for environment lighting */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[50]"
        animate={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.15), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
    </>
  );
};
