"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import IPTheaterModal from "@/components/IPTheaterModal";
import { IPItem } from "@/components/IPContentRail";
import Link from "next/link";

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
    <main className="relative min-h-screen bg-white text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Header Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Visual Background Banner (Full Width) */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-end pb-14 sm:pb-24 pt-32 sm:pt-44 lg:pt-48 overflow-hidden border-b border-[#0E121B]/10">
        {/* Cover Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroBackdrop}
            alt={data.title}
            className="w-full h-full object-cover filter contrast-105 saturate-110"
          />
          {/* Subtle Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 pointer-events-none" />
        </div>

        {/* Inset Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold uppercase tracking-widest text-white shadow-xl">
              <span>{data.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-2xl">
              {data.title.includes(" ") ? (
                <>
                  {data.title.substring(0, data.title.lastIndexOf(" "))}{" "}
                  <em className="font-serif-accent italic text-white">
                    {data.title.split(" ").pop()}
                  </em>
                </>
              ) : (
                data.title
              )}
            </h1>

            <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-lg">
              {data.logline}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#0E121B]/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
              FEATURED PROJECT SHOWCASES
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#0E121B] tracking-tight">
              Specialized <em className="font-serif-accent italic text-[#0E121B]">Capabilities</em>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0E121B]/70 max-w-md font-light leading-relaxed">
            {data.capabilitiesSubtitle}
          </p>
        </div>
      </section>

      {/* Capabilities Showcase Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto space-y-12">
        {data.capabilities.map((cap) => (
          <div
            key={cap.id}
            className="bg-[#090B0F] rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-12 text-white border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Video/Image Media Card */}
            <div className="lg:col-span-7 relative group">
              <div
                className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/20 shadow-2xl cursor-pointer"
                onClick={() => handleOpenReel(cap)}
              >
                <img
                  src={cap.thumbnail}
                  alt={cap.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {cap.category}
                  </span>
                </div>

                {/* Play Button Trigger */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#0E121B] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/80 font-mono">
                  <span>Click to watch demo</span>
                  <span>Play Showcase ↗</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Text Specifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">
                {cap.category}
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                {cap.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Production Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
            STUDIO WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#0E121B] tracking-tight">
            Production <em className="font-serif-accent italic text-[#0E121B]">Pipeline</em>
          </h2>
          <p className="text-sm sm:text-base text-[#0E121B]/70 font-light">
            {data.processSubtitle}
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-8 hover:border-[#0E121B] hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-white bg-[#0E121B] px-3.5 py-1 rounded-full">
                  {step.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#0E121B]/40" />
              </div>
              <h3 className="text-xl font-bold text-[#0E121B] tracking-tight">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[#0E121B]/70 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto my-8">
        <div className="bg-[#090B0F] rounded-[36px] sm:rounded-[48px] p-8 sm:p-16 text-center text-white border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              Ready to produce your next <br className="hidden sm:inline" />
              <em className="font-serif-accent italic text-white/95">{data.title}?</em>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              Let's discuss your creative scope, production pipeline, and timeline. Connect with our production team today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span>Talk to our team</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Theater Video Player Modal */}
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
