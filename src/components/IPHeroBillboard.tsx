"use client";

import { useState, useEffect } from "react";
import { IPItem } from "./IPContentRail";

interface IPHeroBillboardProps {
  items?: IPItem[];
  featuredIp?: IPItem;
  onPlayTrailer: (ip: IPItem) => void;
  autoPlayIntervalMs?: number;
}

export default function IPHeroBillboard({
  items,
  featuredIp,
  onPlayTrailer,
  autoPlayIntervalMs = 5000,
}: IPHeroBillboardProps) {
  const ipArray = items && items.length > 0 ? items : featuredIp ? [featuredIp] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play timer effect (continuous rotation)
  useEffect(() => {
    if (ipArray.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ipArray.length);
    }, autoPlayIntervalMs);

    return () => clearInterval(timer);
  }, [ipArray.length, autoPlayIntervalMs]);

  if (ipArray.length === 0) return null;

  const currentIp = ipArray[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ipArray.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ipArray.length) % ipArray.length);
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-end md:flex-row md:items-end pb-8 sm:pb-16 pt-28 sm:pt-40 lg:pt-44 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10 group">
      {/* Background Image / Ambient Backdrop with key for smooth fade */}
      <div key={currentIp.id} className="absolute inset-0 z-0 transition-opacity duration-700">
        <img
          src={currentIp.backdrop}
          alt={currentIp.title}
          className="w-full h-full object-cover filter contrast-110 saturate-125 scale-105 animate-hero-fade"
        />
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-3/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div key={`content-${currentIp.id}`} className="relative z-10 max-w-4xl space-y-4 sm:space-y-6 animate-hero-fade pt-4 sm:pt-8 w-full">
        {/* Studio Spotlight Tag */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="px-2.5 py-1 rounded-md bg-yellow-400 text-black text-[10px] sm:text-xs font-extrabold tracking-widest uppercase shadow-lg">
            SPOTLIGHT IP
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
            {currentIp.badgeStatus}
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-yellow-400 font-bold">★ #1 IN AFRICAN ANIMATION</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight sm:leading-none text-white drop-shadow-2xl">
          {currentIp.title}
        </h1>

        {/* Logline */}
        <p className="text-sm sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md line-clamp-3 sm:line-clamp-none">
          {currentIp.logline}
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 pt-2 max-w-md sm:max-w-none">
          <button
            onClick={() => onPlayTrailer(currentIp)}
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:scale-105 group/btn"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="whitespace-nowrap">Watch Trailer</span>
          </button>

          <button
            onClick={() => onPlayTrailer(currentIp)}
            className="flex items-center justify-center gap-2 sm:gap-2 px-4 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="whitespace-nowrap">More Info</span>
          </button>
        </div>

        {/* Integrated Thumbnail Carousel Controls - Mobile: directly below action buttons | Desktop: bottom right */}
        {ipArray.length > 1 && (
          <div className="pt-3 md:pt-0">
            <div className="relative md:absolute md:right-6 lg:right-12 md:bottom-12 lg:bottom-16 z-20 flex items-center justify-between md:justify-start gap-2 bg-black/80 backdrop-blur-xl border border-white/15 p-2 rounded-2xl shadow-2xl w-full md:w-auto overflow-x-auto hide-scrollbar">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 shrink-0"
                aria-label="Previous IP"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Thumbnail Cards with Active Progress Line */}
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                {ipArray.map((ip, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={ip.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`group relative w-20 sm:w-24 h-12 sm:h-14 rounded-xl overflow-hidden border transition-all duration-300 shrink-0 ${
                        isActive
                          ? "border-yellow-400 ring-2 ring-yellow-400/40 shadow-lg scale-105"
                          : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/50"
                      }`}
                      aria-label={`Switch to ${ip.title}`}
                    >
                      <img src={ip.thumbnail} alt={ip.title} className="w-full h-full object-cover" />
                      <div
                        className={`absolute inset-0 transition-colors ${
                          isActive ? "bg-black/10" : "bg-black/50 group-hover:bg-black/20"
                        }`}
                      />
                      
                      {/* IP Title on image */}
                      <span className="absolute bottom-1 left-1.5 right-1.5 text-[9px] font-bold truncate text-white drop-shadow-md text-left">
                        {ip.title}
                      </span>

                      {/* Animated Progress Bar at bottom of active thumbnail image */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                          <div
                            key={`prog-${currentIndex}`}
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

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 shrink-0"
                aria-label="Next IP"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
