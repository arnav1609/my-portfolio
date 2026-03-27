"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" />
  );

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-200 text-white"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
    </button>
  );
}
