"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function ServicesOverviewPage() {
  const [contactOpen, setContactOpen] = useState(false);

  const services = [
    {
      slug: "explainer-videos",
      title: "Explainer Videos & Motion Graphics",
      badge: "STUDIO SERVICE • MOTION GRAPHICS",
      description: "Transform complex ideas, software workflows, and corporate concepts into engaging 2D and 3D animated explainer videos and kinetic motion graphics.",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      tags: ["Product Explainers", "NGO Motion Graphics", "Kinetic Typography", "SaaS Walkthroughs"],
      href: "/services/explainer-videos",
    },
    {
      slug: "2d-3d-animation",
      title: "Original 2D & 3D IP Animation",
      badge: "STUDIO SERVICE • FEATURE & SERIES",
      description: "End-to-end studio production for animated feature films, television series, and streaming slates from concept art to 4K compositing and sound scoring.",
      backdrop: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      tags: ["Full-Pipeline 2D/3D", "Character Rigging", "World-Building", "Cinematic Post-Production"],
      href: "/services/2d-3d-animation",
    },
    {
      slug: "brand-storytelling",
      title: "Brand & Commercial Storytelling",
      badge: "STUDIO SERVICE • BRAND & COMMERCIALS",
      description: "Crafting emotionally resonant TV commercials, brand mascot character IPs, and high-converting digital social media campaign animations.",
      backdrop: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
      tags: ["Animated TVCs", "Brand Mascots", "Digital Ad Formats", "Campaign Storytelling"],
      href: "/services/brand-storytelling",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Spotlight */}
      <section className="relative pt-36 sm:pt-44 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-yellow-400 font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="uppercase tracking-wider">Magic Carpet Studios • Capabilities</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
          World-Class Animation <br />
          <em className="font-serif-accent font-normal text-yellow-400 not-italic italic">Services & Production</em>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
          From original 2D & 3D animated series and movies to high-converting motion graphics and commercial brand campaigns, discover our full studio capabilities.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <button
            data-cal-namespace="30min"
            data-cal-link="magic-carpet-ywfdx8/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Book a Discovery Call
          </button>
        </div>
      </section>

      {/* 3 Services Cards Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 p-8 flex flex-col justify-between hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Backdrop Blur */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={service.backdrop}
                  alt={service.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-yellow-400 uppercase tracking-widest">
                  {service.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-4 mb-6">
                <h2 className="text-2xl font-light text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-yellow-400 group-hover:text-white transition-colors">
                <span>Explore Service Page</span>
                <span className="text-lg group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
