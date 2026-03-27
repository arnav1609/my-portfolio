"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full border-t border-white/10 bg-black/60 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Arnav Bhandari
          </span>
          <span className="text-xs text-neutral-500">Full-Stack & IoT Developer · 6× Hackathon Winner</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/arnav1609" target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors duration-200">
            <AiFillGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/arnav-bhandari-78b187314" target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-blue-400 transition-colors duration-200">
            <AiFillLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/arnavvv.1609" target="_blank" rel="noopener noreferrer"
            className="text-neutral-400 hover:text-pink-400 transition-colors duration-200">
            <AiFillInstagram size={22} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Arnav Bhandari. Built with Next.js, React Three Fiber & Framer Motion.
      </div>
    </motion.footer>
  );
}
