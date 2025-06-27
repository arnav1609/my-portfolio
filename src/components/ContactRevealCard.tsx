"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export function ContactRevealCard() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full px-4">
      <TextRevealCard
        text="Let's connect"
        revealText="On my socials 🚀"
      >
        {/* ✅ Use <span>, not <h2> to avoid nesting inside <h3> */}
        <TextRevealCardTitle>
          <span className="block text-4xl font-bold text-center">
            Feel free to reach out
          </span>
        </TextRevealCardTitle>

        {/* ✅ Use <span>, not <div> to avoid nesting inside <p> */}
        <TextRevealCardDescription>
          <span className="block text-center text-gray-400 text-lg">
            I’m active on the platforms below:
          </span>
        </TextRevealCardDescription>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/arnavvv.1609"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-pink-500/40"
          >
            <AiFillInstagram
              size={28}
              className="text-pink-500 transition-transform duration-300 group-hover:scale-125"
            />
            <div className="absolute inset-0 rounded-xl bg-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arnav-bhandari-78b187314"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-blue-500/40"
          >
            <AiFillLinkedin
              size={28}
              className="text-blue-600 transition-transform duration-300 group-hover:scale-125"
            />
            <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/arnav1609"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-white/30"
          >
            <AiFillGithub
              size={28}
              className="text-gray-200 transition-transform duration-300 group-hover:scale-125"
            />
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
          </a>
        </div>
      </TextRevealCard>
    </div>
  );
}
