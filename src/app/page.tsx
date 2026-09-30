import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedByLogos from "@/components/TrustedByLogos";
import WhatWeDo from "@/components/WhatWeDo";
import HomeClientWork from "@/components/HomeClientWork";
import HomeOriginalIPs from "@/components/HomeOriginalIPs";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Magic Carpet Studios — African Animation, VFX & Storytelling Studio",
  description:
    "We create animated explainers, commercial brand campaigns, original series, and feature films. A leading African animation studio based in Lagos, Nigeria.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen  text-white selection:bg-yellow-400 selection:text-black">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trusted By Social Proof Logos */}
      <TrustedByLogos />

      {/* 4. What We Do (3 Core Pillars) */}
      <WhatWeDo />

      {/* 5. Featured Client Work (3 Showcase Projects) */}
      <HomeClientWork />

      {/* 6. Original IPs Section */}
      <HomeOriginalIPs />

      {/* 7. Why Work With Us (4 Advantage Cards) */}
      <WhyWorkWithUs />

      {/* 8. How We Work (8-Step Production Process) */}
      <HowWeWork />

      {/* 9. Pre-Footer Video CTA + Main Sitemap Footer */}
      <Footer showPreFooter={true} />
    </main>
  );
}
