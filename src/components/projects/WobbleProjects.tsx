"use client";

import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
import { AiFillGithub } from "react-icons/ai";

export function WobbleProjects() {
  const projects = [
    {
      title: "NeuroFin: Agentic AI Financial Co-Pilot",
      description:
        "Multi-agent AI platform analyzing financial behavior, forecasting trends, and supporting smart money decisions.",
      image: "/Neurofin.png",
      tech: ["React Native", "Node.js", "MongoDB", "AWS", "Multi-Agent AI"],
      github: "https://github.com/arnav1609/aws-neuroFin",
    },
    {
      title: "Kanda Krates App",
      description:
        "AI + IoT mobile intelligence platform helping farmers monitor onion storage conditions in real time.",
      image: "/Kandakrates.png",
      tech: ["React Native", "Expo", "Node.js", "Python AI/ML", "IoT ESP32"],
      github: "https://github.com/arnav1609/KANDA_KRATES",
    },
    {
      title: "Smart Parking System",
      description:
        "IoT-based real-time smart parking solution with live availability and analytics.",
      image: "/Screenshot 2025-06-26 113339.png",
      tech: ["ESP32", "IoT", "Firebase", "C++"],
      github: "https://github.com/arnav1609/parking",
    },
    {
      title: "Smart Bus Stop",
      description:
        "Smart solar-powered bus stop with real-time display, announcements, and weather.",
      image: "/Screenshot 2025-06-26 113414.png",
      tech: ["IoT", "Raspberry Pi", "LCD", "Solar"],
      github: "https://github.com/arnav1609/bus-stop",
    },
    {
      title: "Mentor-Mentee Platform",
      description:
        "Web platform connecting mentors and mentees with easy profile upload and browsing.",
      image: "/Screenshot 2025-06-26 113612.png",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/arnav1609/mentora",
    },
    {
      title: "Shakti Kavach Wearable",
      description:
        "Women safety wearable with GPS, mic, SPO2, pulse sensors, and emergency alert system.",
      image: "/WhatsApp Image 2025-06-26 at 11.39.20 AM.jpeg",
      tech: ["Arduino", "ESP32", "GPS", "SPO2"],
      github: "https://github.com/arnav1609/circuit25-levelup",
    },
    {
      title: "AI Intrusion Detection",
      description:
        "ML dashboard detecting real-time security breaches using anomaly detection.",
      image: "/WhatsApp Image 2025-06-26 at 11.37.32 AM.jpeg",
      tech: ["Python", "ML", "Flask", "React"],
      github: "https://github.com/arnav1609/codeclash25-cybersecurity",
    },
    {
      title: "Newspodify",
      description:
        "A news summarization app that gives byte-sized audio news using AI voice-over.",
      image: "/nsp_logo.png",
      tech: ["React", "Express", "Python", "AI"],
      github: "https://github.com/arnav1609/newspodify",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto p-4 pt-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-8">
        My Projects
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-[2px] rounded-2xl animate-border"
          >
            <div className="bg-neutral-900 rounded-2xl p-4 h-full flex flex-col">
              <WobbleCard containerClassName="flex-1 flex flex-col justify-between">
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-xl w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mt-2 text-sm">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-indigo-700/60 border border-indigo-500/30 text-indigo-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/30 rounded-xl px-4 py-2.5 transition-all duration-200 bg-white/5 hover:bg-white/10 w-full justify-center mt-auto"
                >
                  <AiFillGithub size={18} />
                  View on GitHub
                </a>
              </WobbleCard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
