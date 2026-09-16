"use client";

import { IPItem } from "./IPContentRail";

interface IPHeroBillboardProps {
  featuredIp: IPItem;
  onPlayTrailer: (ip: IPItem) => void;
}

export default function IPHeroBillboard({ featuredIp, onPlayTrailer }: IPHeroBillboardProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end pb-16 pt-44 sm:pt-52 lg:pt-60 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-white/10">
      {/* Background Image / Ambient Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuredIp.backdrop}
          alt={featuredIp.title}
          className="w-full h-full object-cover filter contrast-110 saturate-125 scale-105 animate-hero-fade"
        />
        
        {/* Netflix-Style Gradients */}
        {/* Top Dark Overlay for Navigation Bar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black pointer-events-none" />
        {/* Left Heavy Shadow Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-3/4 pointer-events-none" />
        {/* Radial Dark Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-4xl space-y-6 animate-hero-fade pt-12 md:pt-20">
        {/* Netflix Top Spotlight Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-extrabold tracking-widest uppercase shadow-lg">
            SPOTLIGHT IP
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
            {featuredIp.badgeStatus}
          </span>
          <span className="text-xs font-mono text-yellow-400 font-bold">★ #1 IN AFRICAN ANIMATION</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white drop-shadow-2xl">
          {featuredIp.title}
        </h1>

        {/* Metadata Line */}
        <div className="flex items-center gap-4 text-xs font-medium text-white/80 font-mono">
          <span className="text-emerald-400 font-bold">98% Match</span>
          <span>{featuredIp.releaseYear}</span>
          <span className="px-1.5 py-0.5 border border-white/30 rounded text-[10px]">
            {featuredIp.maturityRating}
          </span>
          <span>{featuredIp.duration}</span>
          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[10px]">
            4K Ultra HD
          </span>
        </div>

        {/* Logline */}
        <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md">
          {featuredIp.logline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Main Play Button */}
          <button
            onClick={() => onPlayTrailer(featuredIp)}
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:scale-105 group"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Trailer</span>
          </button>

          {/* More Info Button */}
          <button
            onClick={() => onPlayTrailer(featuredIp)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:border-white text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
