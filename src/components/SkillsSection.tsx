"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedHeading, AnimatedWords } from "@/components/AnimatedText";

const skillCategories = [
  {
    title: "Languages",
    glyph: "{ }",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    accent: "text-blue-400",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Bash"],
  },
  {
    title: "Frontend & Mobile",
    glyph: "</>",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    accent: "text-purple-400",
    skills: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    glyph: "fn()",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    accent: "text-green-400",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "JWT Auth"],
  },
  {
    title: "Databases & Cloud",
    glyph: "[ db ]",
    color: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
    accent: "text-orange-400",
    skills: ["MongoDB", "Firebase", "PostgreSQL", "AWS S3", "Vercel", "Supabase"],
  },
  {
    title: "AI & Machine Learning",
    glyph: "∑ AI",
    color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30",
    accent: "text-indigo-400",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Whisper AI", "LLMs", "Multi-Agent AI"],
  },
  {
    title: "IoT & Hardware",
    glyph: "~ hw",
    color: "from-teal-500/20 to-cyan-600/20 border-teal-500/30",
    accent: "text-teal-400",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "Sensors", "MQTT", "Firebase IoT"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          <AnimatedHeading text="Tech Arsenal" /> <span className="inline-block">⚡</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          <AnimatedWords text="A full-stack toolkit spanning web, mobile, cloud, AI, and hardware — built for real-world impact." delay={0.3} />
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariants}
            className={`relative rounded-2xl border bg-gradient-to-br ${cat.color} p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`font-mono text-sm font-bold px-2 py-1 rounded-md bg-white/5 ${cat.accent}`}>
                {cat.glyph}
              </span>
              <h3 className={`text-lg font-semibold ${cat.accent}`}>{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-neutral-200 hover:bg-white/10 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
