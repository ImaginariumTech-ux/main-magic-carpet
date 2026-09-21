"use client";

import { useState } from "react";
import Link from "next/link";

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
          title="Magic Carpet Studio Hero Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-full min-h-full object-cover scale-[1.25] pointer-events-none brightness-[0.70] contrast-[1.05]"
        />
        {/* Subtle Dark Gradient Overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
      </div>

      {/* Main Hero Overlay Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14 lg:pb-16 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
          {/* Left Column: Header & Copy */}
          <div className="max-w-[760px] space-y-4">
            {/* Spotlight Badge */}
            {/* Header Text */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white drop-shadow-2xl">
              Turn your ideas into{" "}
              <em className="font-serif-accent font-normal text-yellow-400 not-italic italic">
                Animation
              </em>
            </h1>

            {/* Body Text */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed pt-1 font-light drop-shadow-md">
              From concept and character design to 2D, 3D, and full animation production, Magic Carpet Studios works with brands, agencies, studios, and organisations to create standout visual stories.
            </p>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-stretch gap-3.5 shrink-0">
            <button
              data-cal-namespace="30min"
              data-cal-link="magic-carpet-ywfdx8/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={onOpenContact}
              className="flex items-center justify-between gap-6 rounded-full bg-white text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:bg-yellow-400 hover:scale-105"
            >
              <span>Book a discovery Call</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
