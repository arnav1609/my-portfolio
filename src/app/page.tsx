import { NavbarDemo } from "@/components/NavbarDemo";
import { HeroSection } from "@/components/Hero";
import { LampDemo } from "@/components/LampDemo";
import { AboutSection } from "@/components/AboutSection";
import { WobbleProjects } from "@/components/projects/WobbleProjects";
import { ContactRevealCard } from "@/components/ContactRevealCard"; // ✅ Fixed import

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavbarDemo />
      <HeroSection />
      <LampDemo />
      <AboutSection />
      <WobbleProjects /> {/* ✅ Project section */}
      <ContactRevealCard /> {/* ✅ Contact section added at the end */}
    </main>
  );
}
