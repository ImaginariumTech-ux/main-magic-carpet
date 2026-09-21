"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import IPTheaterModal from "@/components/IPTheaterModal";
import { IPItem } from "@/components/IPContentRail";

export interface ServiceCapability {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  thumbnail: string;
  youtubeId?: string;
  youtubeUrl?: string;
  videoUrl?: string;
  duration?: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  logline: string;
  description: string;
  heroBackdrop: string;
  reelYoutubeId?: string;
  reelYoutubeUrl?: string;
  reelVideoUrl?: string;
  stats: { label: string; value: string }[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: ServiceCapability[];
  processTitle: string;
  processSubtitle: string;
  processSteps: ServiceProcessStep[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<IPItem | null>(null);

  // Convert service reel into IPItem format for IPTheaterModal compatibility
  const reelIpItem: IPItem = {
    id: data.slug,
    youtubeId: data.reelYoutubeId,
    youtubeUrl: data.reelYoutubeUrl,
    videoUrl: data.reelVideoUrl,
    title: `${data.title} Showreel`,
    category: data.badge,
    badgeStatus: "OFFICIAL STUDIO SHOWREEL",
    releaseYear: "2025",
    maturityRating: "ALL AGES",
    duration: "Full Showcase",
    logline: data.logline,
    synopsis: data.description,
    director: "Magic Carpet Studios",
    thumbnail: data.heroBackdrop,
    backdrop: data.heroBackdrop,
    tags: data.capabilities.map((c) => c.title),
  };

  const handleOpenReel = (cap?: ServiceCapability) => {
    if (cap) {
      setActiveVideo({
        id: cap.id,
        youtubeId: cap.youtubeId,
        youtubeUrl: cap.youtubeUrl,
        videoUrl: cap.videoUrl,
        title: cap.title,
        category: cap.category,
        badgeStatus: "SERVICE DEMO",
        releaseYear: "2025",
        maturityRating: "ALL AGES",
        duration: cap.duration || "Showcase",
        logline: cap.description,
        synopsis: cap.description,
        director: "Magic Carpet Studios",
        thumbnail: cap.thumbnail,
        backdrop: cap.thumbnail,
        tags: cap.deliverables,
      });
    } else {
      setActiveVideo(reelIpItem);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Billboard Spotlight Section */}
      <section className="relative w-full min-h-[85vh] flex items-end pb-12 sm:pb-16 pt-36 sm:pt-40 lg:pt-44 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10 group">
        {/* Background Image / Ambient Backdrop */}
        <div className="absolute inset-0 z-0 transition-opacity duration-700">
          <img
            src={data.heroBackdrop}
            alt={data.title}
            className="w-full h-full object-cover filter contrast-110 saturate-125 scale-105 animate-hero-fade"
          />

          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-3/4 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl space-y-5 sm:space-y-6 animate-hero-fade pt-4 sm:pt-8 w-full">
          {/* Service Spotlight Tag */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-extrabold tracking-widest uppercase shadow-lg">
              {data.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
              STUDIO CAPABILITY
            </span>
            <span className="text-xs font-mono text-yellow-400 font-bold">★ GLOBAL BROADCAST QUALITY</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white drop-shadow-2xl">
            {data.title}
          </h1>

          {/* Logline */}
          <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md">
            {data.logline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              data-cal-namespace="30min"
              data-cal-link="magic-carpet-ywfdx8/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Book a Discovery Call</span>
              <span className="text-xs">→</span>
            </button>

            <button
              onClick={() => handleOpenReel()}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Watch Service Reel</span>
            </button>
          </div>

          {/* Stats Bar
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-2xl">
            {data.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400 font-mono">{stat.value}</div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Capabilities Section Header */}
      <section className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>Specialized Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">{data.capabilitiesTitle}</h2>
          </div>
          <p className="text-sm text-white/50 max-w-md font-light leading-relaxed">{data.capabilitiesSubtitle}</p>
        </div>
      </section>

      {/* 2-Column Split Capabilities List (Left: Image/Video, Right: Header & Body Text Details) */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16 border-b border-white/10">
        {data.capabilities.map((cap) => (
          <div
            key={cap.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-500 shadow-2xl"
          >
            {/* Left Column: Image / Video Media Container */}
            <div className="lg:col-span-7 relative group">
              <div
                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl cursor-pointer"
                onClick={() => handleOpenReel(cap)}
              >
                <img
                  src={cap.thumbnail}
                  alt={cap.title}
                  className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-yellow-400 uppercase tracking-wider font-mono">
                    {cap.category}
                  </span>
                </div>

                {/* Play Video Trigger Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/70 font-mono">
                  <span>Demo Video / Reel</span>
                  <span className="text-yellow-400">Click to Play ↗</span>
                </div>
              </div>
            </div>

            {/* Right Column: Header & Body Text Details */}
            <div className="lg:col-span-5 space-y-5">
              {/* Category Subtitle */}
              <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>{cap.category}</span>
              </div>

              {/* Header Text */}
              <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-snug">
                {cap.title}
              </h3>

              {/* Body Text */}
              <p className="text-base text-white/80 font-light leading-relaxed">
                {cap.description}
              </p>

              {/* Key Deliverables & Specifications */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase tracking-wider text-white/40 font-mono">Deliverables & Specifications</div>
                <div className="flex flex-wrap gap-2">
                  {cap.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenReel(cap)}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Demo Video</span>
                </button>

                <button
                  data-cal-namespace="30min"
                  data-cal-link="magic-carpet-ywfdx8/30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300"
                >
                  Book Service Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Production Process & Workflow */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span>Studio Production Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">{data.processTitle}</h2>
          <p className="text-base text-white/60 font-light">{data.processSubtitle}</p>
        </div>

        {/* 4-Step Horizontal Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-yellow-400 font-mono">{step.step}</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400/50" />
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Call To Action */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
          Ready to produce your next <br />
          <em className="font-serif-accent text-yellow-400 not-italic italic">{data.title}?</em>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
          Let’s discuss your vision, creative scope, and timeline. Book a discovery call with our production directors today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            data-cal-namespace="30min"
            data-cal-link="magic-carpet-ywfdx8/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Book a Discovery Call
          </button>

          <button
            onClick={() => setContactOpen(true)}
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300"
          >
            Send Inquiry Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Theater Video Modal */}
      <IPTheaterModal
        ip={activeVideo}
        onClose={() => setActiveVideo(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Inquiry Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
