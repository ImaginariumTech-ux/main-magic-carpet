"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedByLogos from "@/components/TrustedByLogos";
import WhatWeDo from "@/components/WhatWeDo";
import HomeClientWork from "@/components/HomeClientWork";
import HomeOriginalIPs from "@/components/HomeOriginalIPs";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import HowWeWork from "@/components/HowWeWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen  text-white selection:bg-yellow-400 selection:text-black">
      {/* 1. Header Navigation */}
      <Navbar onOpenContact={() => {}} />

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
