"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const youtubeVideoId = "wePT7aKdgPM";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&enablejsapi=1&playsinline=1`;

  const words = [
    "explainers.",
    "ads & commercials.",
    "animated series.",
    "short films.",
    "feature films.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setFadeState(true);
      }, 350);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0E121B] text-white flex flex-col justify-end">
      {/* Background YouTube Video Embed */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src={embedUrl}
          title="Magic Carpet Studios Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-full min-h-full object-cover scale-[1.25] pointer-events-none brightness-[0.85] contrast-[1.05]"
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] via-[#0E121B]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,18,27,0)_0%,rgba(14,18,27,0.5)_100%)] pointer-events-none" />
      </div>

      {/* Main Hero Overlay Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16 lg:pb-20 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Headline & Copy */}
          <div className="max-w-[820px] space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-white drop-shadow-2xl">
              <span className="block">We create animated</span>
              <em className={`font-serif-accent font-normal text-sky-200 not-italic italic block mt-1 sm:mt-2 transition-all duration-350 transform ${
                fadeState ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"
              }`}>
                {words[currentIndex]}
              </em>
            </h1>
          </div>

          {/* Primary CTA */}
          <div className="shrink-0">
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-between gap-6 rounded-full bg-white text-[#0E121B] font-extrabold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:bg-slate-100 hover:scale-105"
            >
              <span>WORK WITH US</span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
