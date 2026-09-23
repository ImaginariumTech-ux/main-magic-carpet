"use client";

import { useEffect, useRef } from "react";

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTime = 10;
    const endTime = 14;

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

    // Initial check if video is already ready
    if (video.readyState >= 1) {
      video.currentTime = startTime;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end pb-16 sm:pb-24 pt-32 sm:pt-44 lg:pt-48 overflow-hidden border-b border-[#0E121B]/10">
      {/* Background Video (Looping strictly from 9s to 15s) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dt2vu9jje/video/upload/v1790148975/WhatsApp_Video_2026-09-22_at_13.32.40_l9wo9a.mp4#t=9,15"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter contrast-105 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 pointer-events-none" />
      </div>

      {/* Hero Title Container ONLY */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-white space-y-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-2xl">
          Welcome to <br className="hidden sm:inline" />
          <em className="font-serif-accent italic text-white">Magic Carpet Studios</em>
        </h1>
      </div>
    </section>
  );
}
