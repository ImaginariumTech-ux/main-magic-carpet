"use client";

import { useState, useEffect } from "react";

interface AboutAwardsProps {
  onOpenContact?: () => void;
  autoPlayIntervalMs?: number;
}

export default function AboutAwards({
  onOpenContact,
  autoPlayIntervalMs = 5000,
}: AboutAwardsProps) {
  const spotlightPartners = [
    {
      id: "cartoon-network",
      title: "Cartoon Network Partnership",
      category: "Broadcast Animation Leaders",
      badgeStatus: "FEATURED BROADCAST PARTNER",
      year: "Featured Partner",
      project: "Shorts & Animated Campaigns",
      description:
        "Crafting high-octane 2D and 3D animated content, short series, and character-driven stories that entertain and inspire young audiences globally.",
      backdrop: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
      thumbnail: "https://img.youtube.com/vi/15Zfj4qgLB0/sddefault.jpg",
      stats: "Global Television • Prime Time Feature",
    },
    {
      id: "undp",
      title: "United Nations Development Programme",
      category: "Social Impact & Motion Graphics",
      badgeStatus: "UNDP STRATEGIC ALLIANCE",
      year: "UNDP Partner",
      project: "Sustainability & Cultural Awareness",
      description:
        "Creating powerful visual campaigns, animated documentaries, and motion graphics that drive social change, environmental sustainability, and education across Africa.",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/sddefault.jpg",
      stats: "Social Action • Continental Reach",
    },
    {
      id: "african-animation-network",
      title: "African Animation Network (AAN)",
      category: "Continental Animation Alliance",
      badgeStatus: "INDUSTRY NETWORK PARTNER",
      year: "2025 Partner",
      project: "Regional Co-Production & Distribution",
      description:
        "Co-producing and distributing original African animation slates across international film festivals and regional broadcast networks.",
      backdrop: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      thumbnail: "https://img.youtube.com/vi/wePT7aKdgPM/sddefault.jpg",
      stats: "Continental Network • Festival Circuit",
    },
    {
      id: "british-council",
      title: "British Council & Creative Alliances",
      category: "Global Cultural & Arts Exchange",
      badgeStatus: "CULTURAL HERITAGE PARTNER",
      year: "Cultural Arts Grant",
      project: "Cultural Heritage Preservation",
      description:
        "Collaborating on creative economy projects, digital arts initiatives, and cultural heritage preservation through high-end digital animation.",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/sddefault.jpg",
      stats: "Cultural Economy • Heritage Arts",
    },
  ];

  const honors = [
    {
      title: "Cartoon Network Partnership",
      category: "Broadcast Animation",
      year: "Featured Partner",
      project: "Shorts & Animated Campaigns",
      description: "Crafting high-octane 2D and 3D animated content that entertains and inspires young audiences globally.",
    },
    {
      title: "United Nations Development Programme",
      category: "Social Impact & Motion Graphics",
      year: "UNDP Partner",
      project: "Sustainability & Cultural Awareness",
      description: "Creating powerful visual campaigns that drive social change, environmental sustainability, and education.",
    },
    {
      title: "African Animation Network (AAN)",
      category: "Continental Distribution Alliance",
      year: "2025 Partner",
      project: "Regional Co-Production & Festivals",
      description: "Partnering to empower indigenous animation talent and establish robust distribution channels across Africa.",
    },
    {
      title: "British Council Creative Grants",
      category: "Cultural Arts Exchange",
      year: "Laureate Partner",
      project: "Digital Folklore & Heritage Shorts",
      description: "Preserving African oral traditions, folklore, and literature through cutting-edge digital animation.",
    },
    {
      title: "African Animation Excellence Award",
      category: "Original IP Production",
      year: "Winner",
      project: "Original Short Films & Series Slate",
      description: "Honored for pioneering authentic storytelling and elevating African animation standards on the global stage.",
    },
    {
      title: "MagicLab Academy Industry Initiative",
      category: "Talent Development & Skill Building",
      year: "Annual Laureate",
      project: "Young Animator Incubator",
      description: "Recognized for training and placing over 200 young African animators into international production pipelines.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play continuous carousel timer
  useEffect(() => {
    if (spotlightPartners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightPartners.length);
    }, autoPlayIntervalMs);

    return () => clearInterval(timer);
  }, [spotlightPartners.length, autoPlayIntervalMs]);

  const currentPartner = spotlightPartners[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlightPartners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + spotlightPartners.length) % spotlightPartners.length);
  };

  return (
    <section id="awards" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10 space-y-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span>Partnerships & Global Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Clients & Global Alliances</h2>
        </div>
        <p className="text-sm text-white/60 max-w-md">
          International broadcast channels, development organizations, and cultural institutions trust Magic Carpet Studios to deliver world-class animation.
        </p>
      </div>

      {/* Hero Spotlight Carousel Banner for Clients & Partners */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-black min-h-[420px] sm:min-h-[480px] flex items-end p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Background Image Backdrop with key for smooth transition */}
        <div key={currentPartner.id} className="absolute inset-0 z-0 transition-opacity duration-700">
          <img
            src={currentPartner.backdrop}
            alt={currentPartner.title}
            className="w-full h-full object-cover filter contrast-110 saturate-125 scale-105 animate-hero-fade"
          />
          
          {/* Ambient Gradients for dark contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-3/4 pointer-events-none" />
        </div>

        {/* Content Overlay */}
        <div key={`partner-content-${currentPartner.id}`} className="relative z-10 max-w-3xl space-y-4 animate-hero-fade">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-extrabold tracking-widest uppercase shadow-lg">
              FEATURED ALLIANCE
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
              {currentPartner.badgeStatus}
            </span>
            <span className="text-xs font-mono text-yellow-400 font-bold">{currentPartner.stats}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-light text-white leading-tight drop-shadow-lg">
            {currentPartner.title}
          </h3>

          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl drop-shadow-md">
            {currentPartner.description}
          </p>

          <div className="pt-2 flex items-center gap-4">
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Partner With Us
              </button>
            )}
            <span className="text-xs text-white/50 font-mono">Focus: <span className="text-white/80">{currentPartner.project}</span></span>
          </div>
        </div>

        {/* Integrated Thumbnail Carousel Dock - Anchored Right */}
        {spotlightPartners.length > 1 && (
          <div className="relative md:absolute md:right-6 lg:right-10 md:bottom-8 lg:bottom-10 z-20 mt-6 md:mt-0 flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/15 p-2 rounded-2xl shadow-2xl shrink-0 self-end">
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200"
              aria-label="Previous Partner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Thumbnail Cards with Active Gold Progress Line */}
            <div className="flex items-center gap-2">
              {spotlightPartners.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group relative w-18 sm:w-22 h-11 sm:h-13 rounded-xl overflow-hidden border transition-all duration-300 ${
                      isActive
                        ? "border-yellow-400 ring-2 ring-yellow-400/40 shadow-lg scale-105"
                        : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"
                    }`}
                    aria-label={`Switch to ${item.title}`}
                  >
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                    <div
                      className={`absolute inset-0 transition-colors ${
                        isActive ? "bg-black/10" : "bg-black/50 group-hover:bg-black/20"
                      }`}
                    />
                    
                    <span className="absolute bottom-1 left-1.5 right-1.5 text-[8px] font-bold truncate text-white drop-shadow-md text-left">
                      {item.title.split(" ")[0]}
                    </span>

                    {/* Animated Progress Bar at bottom of active thumbnail */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                        <div
                          key={`partner-prog-${currentIndex}`}
                          className="h-full bg-yellow-400"
                          style={{
                            animation: `growProgress ${autoPlayIntervalMs}ms linear forwards`,
                          }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200"
              aria-label="Next Partner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* 3x2 Grid of All Honors & Alliances */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {honors.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-md hover:bg-white/[0.08] flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                  {item.year}
                </span>
                <span className="text-xs text-white/40 font-mono">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-light text-white group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>

              <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {item.category}
              </div>

              <p className="text-sm text-white/75 leading-relaxed pt-2 font-light">
                {item.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/50 font-mono truncate">
              Focus: <span className="text-white/80">{item.project}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
