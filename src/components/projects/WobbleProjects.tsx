"use client";

import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleProjects() {
  const projects = [
    {
      title: "Smart Parking System",
      description:
        "IoT-based real-time smart parking solution with live availability and analytics.",
      image: "/Screenshot 2025-06-26 113339.png",
      tech: ["ESP32", "IoT", "Firebase", "C++"],
    },
    {
      title: "Smart Bus Stop",
      description:
        "Smart solar-powered bus stop with real-time display, announcements, and weather.",
      image: "/Screenshot 2025-06-26 113414.png",
      tech: ["IoT", "Raspberry Pi", "LCD", "Solar"],
    },
    {
      title: "Mentor-Mentee Platform",
      description:
        "Web platform connecting mentors and mentees with easy profile upload and browsing.",
      image: "/Screenshot 2025-06-26 113612.png",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    },
    {
      title: "Shakti Kavach Wearable",
      description:
        "Women safety wearable with GPS, mic, SPO2, pulse sensors, and emergency alert system.",
      image: "/WhatsApp Image 2025-06-26 at 11.39.20 AM.jpeg",
      tech: ["Arduino", "ESP32", "GPS", "SPO2"],
    },
    {
      title: "AI Intrusion Detection",
      description:
        "ML dashboard detecting real-time security breaches using anomaly detection.",
      image: "/WhatsApp Image 2025-06-26 at 11.37.32 AM.jpeg",
      tech: ["Python", "ML", "Flask", "React"],
    },
    {
      title: "Newspodify",
      description:
        "A news summarization app that gives byte-sized audio news using AI voice-over.",
      image: "/nsp_logo.png",
      tech: ["React", "Express", "Python", "AI"],
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto p-4 pt-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-8">
        🚀 My Projects
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-[2px] rounded-2xl animate-border"
          >
            <div className="bg-neutral-900 rounded-2xl p-4 h-full">
              <WobbleCard containerClassName="h-full flex flex-col justify-between">
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
                  <p className="text-neutral-300 mt-2">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-indigo-700 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </WobbleCard>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
