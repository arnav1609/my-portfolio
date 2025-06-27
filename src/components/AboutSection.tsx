"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl w-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl transform transition-transform hover:scale-105 hover:rotate-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">
          About Me
        </h2>
       <p className="text-lg text-zinc-300 leading-relaxed">
  I'm Arnav Bhandari — a full-stack and IoT developer who loves transforming ideas into impactful digital and embedded solutions. With a strong foundation in React, Next.js, Tailwind CSS, and hands-on experience in hardware like ESP32, Arduino, and various sensors, I blend code and circuits to solve real-world challenges.

  <br /><br />
  Whether it's developing a smart wearable for women's safety, a parking system powered by machine learning, or an AI-based vehicle blind spot detector, I believe in building for purpose. I thrive in hackathons and fast-paced environments where creativity meets execution.

  <br /><br />
  I enjoy working on projects that challenge norms — from integrating Firebase with IoT systems to training custom object detection models. I'm also passionate about open source, rapid prototyping, and pushing the boundaries of what’s possible with web and hardware integration.

  <br /><br />
  Beyond the code, I value collaboration, problem-solving, and learning by doing. My goal? To keep building things that matter — one project at a time.
</p>

      </motion.div>
    </section>
  );
}
