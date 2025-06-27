"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp"; // Make sure this file exists

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-purple-300 to-white py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        Who Am I?
      </motion.h1>
    </LampContainer>
  );
}
