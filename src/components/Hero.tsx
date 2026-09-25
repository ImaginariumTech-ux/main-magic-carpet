"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const words = [
    "explainers.",
    "ads & commercials.",
    "series.",
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
      {/* Background Cloudinary Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= 50) {
              e.currentTarget.currentTime = 0;
            }
          }}
          src="https://res.cloudinary.com/dt2vu9jje/video/upload/v1790148975/WhatsApp_Video_2026-09-22_at_13.32.40_l9wo9a.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-100 contrast-105"
        />
        {/* Lightened Gradient Overlay for Maximum Brightness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B]/90 via-[#0E121B]/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Overlay Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-10 pb-12 sm:pb-16 lg:pb-20 max-w-7xl w-full mx-auto">
        <div className="flex flex-col items-start gap-8 max-w-[820px]">
          {/* Headline & Copy */}
          <div className="space-y-4">
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
          <div className="pt-2">
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
