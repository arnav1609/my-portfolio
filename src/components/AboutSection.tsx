"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading, GradientText, AnimatedWords } from "@/components/AnimatedText";

const stats = [
  { value: "6×", label: "Hackathon Wins" },
  { value: "20+", label: "Projects Built" },
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Tech Stacks" },
];

const education = [
  {
    degree: "B.E. — Electronics & Telecommunication",
    school: "University of Mumbai",
    year: "2022 – Present",
    note: "Specializing in IoT, Embedded Systems & AI",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-4 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <AnimatedHeading text="About Me" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
            >
              <div className="text-3xl md:text-4xl font-bold">
                <GradientText text={stat.value} className="text-3xl md:text-4xl font-bold" />
              </div>
              <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bio + Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Bio — takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm space-y-4 text-neutral-300 leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Who I Am</h3>
            <p>
              I'm <span className="text-white font-semibold">Arnav Bhandari</span> — a full-stack and IoT developer who loves transforming ideas into impactful digital and embedded solutions. With a strong foundation in React, Next.js, and hands-on experience in hardware like ESP32 and Arduino, I blend code and circuits to solve real-world challenges.
            </p>
            <p>
              Whether it's developing a smart wearable for women's safety, a parking system powered by machine learning, or an AI-based vehicle blind spot detector, I believe in building for purpose. I thrive in hackathons and fast-paced environments where creativity meets execution.
            </p>
            <p>
              I enjoy working on projects that challenge norms — from integrating Firebase with IoT systems to training custom object detection models. Passionate about open source, rapid prototyping, and pushing the boundaries of web and hardware integration.
            </p>
            <p className="text-purple-300 font-medium">
              My goal? To keep building things that matter — one project at a time.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Education 🎓</h3>
              {education.map((e) => (
                <div key={e.degree}>
                  <div className="text-white font-semibold text-sm">{e.degree}</div>
                  <div className="text-neutral-400 text-sm mt-1">{e.school}</div>
                  <div className="text-xs text-purple-400 mt-1">{e.year}</div>
                  <div className="text-xs text-neutral-500 mt-1 italic">{e.note}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Currently 🔥</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>🤖 Building Agentic AI platforms</li>
                <li>📡 Exploring IoT + ML fusion</li>
                <li>🌐 Shipping full-stack SaaS apps</li>
                <li>🏆 Competing in hackathons</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
