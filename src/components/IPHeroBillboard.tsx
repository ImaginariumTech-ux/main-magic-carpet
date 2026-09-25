"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video looping effect (34s to 42s)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTime = 34;
    const endTime = 42;

    const handleLoadedMetadata = () => {
      video.currentTime = startTime;
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime || video.currentTime < startTime) {
        video.currentTime = startTime;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      video.currentTime = startTime;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

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
    <section className="relative w-full min-h-[85vh] flex flex-col justify-end pb-8 sm:pb-12 pt-28 sm:pt-40 lg:pt-44 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10 group">
      {/* Dynamic Background Image changing with current IP */}
      <div className="absolute inset-0 z-0">
        <img
          key={`bg-${currentIp.id}`}
          src={currentIp.backdrop || currentIp.thumbnail}
          alt={currentIp.title}
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-all duration-700 animate-hero-fade"
        />

        {/* Ambient Gradient Overlays for Maximum Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/40 to-[#0E121B]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E121B]/80 via-transparent to-transparent w-full md:w-2/3 pointer-events-none" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Left Column: Headline, Badges, Logline & CTAs */}
        <div key={`content-${currentIp.id}`} className="max-w-2xl space-y-4 sm:space-y-6 animate-hero-fade text-left">
          {/* Studio Spotlight Tag */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full bg-[#0E121B] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg">
              FEATURED ORIGINAL IP
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white">
              {currentIp.badgeStatus}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight sm:leading-none text-white drop-shadow-2xl">
            {currentIp.title}
          </h1>

          {/* Logline */}
          <p className="text-sm sm:text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
            {currentIp.logline}
          </p>

          {/* Action Buttons */}
          {/* <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onPlayTrailer(currentIp)}
              className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-white text-[#0E121B] font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105 group/btn"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="whitespace-nowrap">Watch Trailer</span>
            </button>

            <Link
              href="/work-with-us"
              className="flex items-center justify-center gap-2 sm:gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#0E121B] border border-[#0E121B] text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#1A2232] transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span className="whitespace-nowrap">Talk to our team</span>
              <span>→</span>
            </Link>
          </div> */}
        </div>

        {/* Right Column / Bottom Right: Thumbnail Slider Controls */}
        {ipArray.length > 1 && (
          <div className="shrink-0 z-20 self-end">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/15 p-2.5 rounded-2xl shadow-2xl overflow-x-auto hide-scrollbar">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 shrink-0"
                aria-label="Previous IP"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Thumbnail Cards with Active Progress Line */}
              <div className="flex items-center gap-2.5 overflow-x-auto hide-scrollbar">
                {ipArray.map((ip, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={ip.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`group relative w-20 sm:w-24 h-12 sm:h-14 rounded-xl overflow-hidden border transition-all duration-300 shrink-0 ${
                        isActive
                          ? "border-white ring-2 ring-white/40 shadow-lg scale-105"
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
                            className="h-full bg-white"
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
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 shrink-0"
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
