import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
