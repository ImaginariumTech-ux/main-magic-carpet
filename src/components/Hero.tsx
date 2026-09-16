"use client";

import { useState } from "react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"brand" | "film">("brand");

  const youtubeVideoId = "wePT7aKdgPM";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&playsinline=1`;

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white flex flex-col justify-end">
      {/* Background YouTube Video Embed */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src={embedUrl}
          title="Studio Hero Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-full min-h-full object-cover scale-[1.25] pointer-events-none brightness-[0.70] contrast-[1.05]"
        />
        {/* Subtle Dark Gradient Overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 pointer-events-none" />
      </div>

      {/* Main Hero Overlay Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 lg:pb-14 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          {/* Left Column: Typography */}
          <div className="max-w-[700px] space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>The Mill • Official Showreel</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight">
              {activeTab === "brand" ? (
                <>
                  Creative craft,{" "}
                  <em className="font-serif-accent font-normal text-white/80 not-italic italic">
                    designed to scale.
                  </em>
                </>
              ) : (
                <>
                  World-class storytelling,{" "}
                  <em className="font-serif-accent font-normal text-white/80 not-italic italic">
                    beyond the screen.
                  </em>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-xl leading-relaxed pt-1">
              Delivering high-end visual effects, CGI creatures, integrated production, and virtual production across London, Paris, Seoul & Liège.
            </p>
          </div>

          {/* Right Column: Interactive Glassmorphism Pill Toggles */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-stretch gap-3 shrink-0">
            <button
              onClick={() => setActiveTab("brand")}
              className={`flex items-center justify-between gap-4 rounded-full border px-6 py-3.5 text-base md:text-lg transition-all duration-300 whitespace-nowrap backdrop-blur-xl ${
                activeTab === "brand"
                  ? "border-white bg-white text-black font-medium shadow-lg shadow-white/10"
                  : "border-white/20 bg-white/10 text-white/80 hover:border-white/50 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span>Brand & Content</span>
              <span className="text-xs opacity-60">01</span>
            </button>

            <button
              onClick={() => setActiveTab("film")}
              className={`flex items-center justify-between gap-4 rounded-full border px-6 py-3.5 text-base md:text-lg transition-all duration-300 whitespace-nowrap backdrop-blur-xl ${
                activeTab === "film"
                  ? "border-white bg-white text-black font-medium shadow-lg shadow-white/10"
                  : "border-white/20 bg-white/10 text-white/80 hover:border-white/50 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span>Film & Series</span>
              <span className="text-xs opacity-60">02</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
