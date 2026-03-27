"use client";

import React from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "./ui/wobble-card";
import { AnimatedHeading, AnimatedWords } from "@/components/AnimatedText";

const achievements = [
  {
    title: "1st Place — Open Innovation",
    event: "Codeversity, IIT Gandhinagar",
    description:
      "Won 1st place in the Open Innovation category by building an innovative and practical technology solution in a highly competitive environment.",
    rank: "01",
    rankLabel: "Gold",
    color: "from-yellow-400/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    rankColor: "text-yellow-400",
  },
  {
    title: "1st Runner-Up — Agritech",
    event: "KJ Somaiya College of Engineering",
    description:
      "Secured 1st Runner-Up for developing a technology-driven solution focused on solving real-world agricultural challenges.",
    rank: "02",
    rankLabel: "Silver",
    color: "from-green-400/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
    rankColor: "text-green-400",
  },
  {
    title: "1st Runner-Up — Innovation",
    event: "NSCIF Delhi (National Level)",
    description:
      "Awarded 1st Runner-Up for presenting an impactful innovation-led project with strong technical execution and problem-solving value.",
    rank: "03",
    rankLabel: "Silver",
    color: "from-blue-400/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    rankColor: "text-blue-400",
  },
  {
    title: "2nd Place — DJS Strike",
    event: "Dwarkadas J. Sanghvi College of Engineering",
    description:
      "Achieved 2nd place at the DJS Strike National Level Project Competition for showcasing a strong project built around innovation.",
    rank: "04",
    rankLabel: "Bronze",
    color: "from-purple-400/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    rankColor: "text-purple-400",
  },
  {
    title: "3rd Place — PCEU-Crux",
    event: "PCEU-Crux Innovation Competition",
    description:
      "Won 3rd place for delivering a technically sound and impactful project in a competitive project presentation environment.",
    rank: "05",
    rankLabel: "Bronze",
    color: "from-pink-400/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    rankColor: "text-pink-400",
  },
  {
    title: "3rd Place — Level Up",
    event: "KJSIT",
    description:
      "Secured 3rd place at Level Up, KJSIT, demonstrating problem-solving, innovation, and effective technical execution.",
    rank: "06",
    rankLabel: "Bronze",
    color: "from-teal-400/20 to-emerald-500/20",
    borderColor: "border-teal-500/30",
    rankColor: "text-teal-400",
  },
];

export function AchievementsTimeline() {
  return (
    <section id="achievements" className="max-w-7xl mx-auto p-4 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          <AnimatedHeading text="6× Hackathon Winner" /> <span>🏆</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
          <AnimatedWords text="Recognized across national-level hackathons and innovation challenges for building impactful, real-world technology solutions." delay={0.2} />
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <div className={`relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-[1px] rounded-3xl h-full border ${achievement.borderColor}`}>
              <WobbleCard containerClassName={`h-full bg-gradient-to-br ${achievement.color}`}>
                <div className="flex flex-col h-full z-20 relative p-2">
                  {/* Rank badge — no icon, just typographic */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-5xl font-black font-mono leading-none ${achievement.rankColor} opacity-80`}>
                      {achievement.rank}
                    </span>
                    <span className={`text-xs font-bold tracking-[0.2em] uppercase ${achievement.rankColor} opacity-60`}>
                      {achievement.rankLabel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <h4 className="text-sm font-medium text-emerald-400 mb-3">
                    @ {achievement.event}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </WobbleCard>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
