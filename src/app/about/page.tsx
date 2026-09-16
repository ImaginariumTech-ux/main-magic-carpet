"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStoryTimeline from "@/components/AboutStoryTimeline";
import AboutValues from "@/components/AboutValues";
import AboutSection from "@/components/AboutSection";
import AboutTeam from "@/components/AboutTeam";
import AboutAwards from "@/components/AboutAwards";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* About Us Hero with Ambient Video & Stats */}
      <AboutHero onOpenContact={() => setContactOpen(true)} />

      {/* 36-Year Historical Milestone Timeline */}
      <AboutStoryTimeline />

      {/* Core Philosophy & Craft Pillars */}
      <AboutValues />

      {/* Global Studio Hub Network */}
      <AboutSection />

      {/* Creative Leadership & Artistry Team */}
      <AboutTeam />

      {/* Awards & Prestige Industry Recognition */}
      <AboutAwards />

      {/* Footer & CTA */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Contact Inquiry Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
