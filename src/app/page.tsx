"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedWork, { Project } from "@/components/FeaturedWork";
import NewsSection from "@/components/NewsSection";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Video Hero */}
      <Hero onOpenContact={() => setContactOpen(true)} />

      {/* About & Studio Statement */}
      <AboutSection />

      {/* Bento Grid Portfolio */}
      <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

      {/* Interactive Flex Accordion News */}
      <NewsSection />

      {/* Footer & CTA */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Project Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
