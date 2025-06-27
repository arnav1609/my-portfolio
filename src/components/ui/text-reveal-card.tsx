"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface TextRevealCardProps {
  text: string;
  revealText: string;
  children?: React.ReactNode;
}

export function TextRevealCard({ text, revealText, children }: TextRevealCardProps) {
  return (
    <div className="relative w-full max-w-lg p-8 border border-neutral-800 rounded-2xl bg-gradient-to-br from-[#141416] to-[#1b1b1d] shadow-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#292929] z-0 rounded-2xl" />
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold tracking-wide z-10"
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ y: "100%" }}
        whileHover={{ y: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold tracking-wide z-20"
      >
        {revealText}
      </motion.div>

      {/* Static content under hoverable layers */}
      <div className="relative z-30 mt-40 text-center">
        {children}
      </div>
    </div>
  );
}

export function TextRevealCardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-white text-xl font-bold mb-2">{children}</h3>;
}

export function TextRevealCardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-400 text-sm">{children}</p>;
}
