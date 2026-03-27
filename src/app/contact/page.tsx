"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xrbgbdlv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    { icon: <AiFillGithub size={20} />, href: "https://github.com/arnav1609", label: "GitHub", color: "hover:text-white" },
    { icon: <AiFillLinkedin size={20} />, href: "https://www.linkedin.com/in/arnav-bhandari-78b187314", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <AiFillInstagram size={20} />, href: "https://www.instagram.com/arnavvv.1609", label: "Instagram", color: "hover:text-pink-400" },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <NavbarDemo />

      <section className="max-w-5xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Let's Build Something 🚀</h1>
          <p className="text-xl text-neutral-400 max-w-xl mx-auto">
            Whether it's a project collab, job opportunity, or just a hello — I'm all ears.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form — clean, no field icons */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Send me a message</h2>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-400 tracking-widest uppercase">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-400 tracking-widest uppercase">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-neutral-400 tracking-widest uppercase">Message</label>
              <textarea
                required
                rows={5}
                placeholder="What's on your mind..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 tracking-wide"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400 text-sm">Message sent! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm">Something went wrong. Email me directly!</p>
            )}
          </motion.form>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Email me directly</h2>
              <a
                href="mailto:arnavbhandari1609@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium break-all"
              >
                arnavbhandari1609@gmail.com →
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Find me online</h2>
              <div className="flex flex-col gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-neutral-400 ${s.color} transition-colors duration-200`}
                  >
                    {s.icon}
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
