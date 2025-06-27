"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: FloatingDockItem[];
  mobileClassName?: string;
}

export function FloatingDock({ items, mobileClassName = "" }: FloatingDockProps) {
  return (
    <div
      className={`fixed bottom-8 z-50 mx-auto w-fit rounded-full border border-white/[0.1] bg-white/5 px-3 py-2 shadow-lg backdrop-blur-md transition-all ${mobileClassName}`}
    >
      <div className="flex items-center justify-center gap-3">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            className="group relative grid h-10 w-10 place-items-center rounded-lg bg-white/10 transition hover:bg-white/20"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
