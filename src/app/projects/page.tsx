"use client";
import { HeroParallax } from "@/components/HeroParallax";
import { NavbarDemo } from "@/components/NavbarDemo";
import { WobbleProjects } from "@/components/projects/WobbleProjects";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <NavbarDemo />
      <HeroParallax />
      
      {/* Bringing back the detailed 3D Project Cards so users can read the descriptions and tech stack */}
      <div className="pt-20 pb-40 relative z-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
            Project Details
          </h2>
        </div>
        <WobbleProjects />
      </div>
      <Footer />
    </main>
  );
}
