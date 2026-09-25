"use client";

import { useState } from "react";

export interface IPItem {
  id: string;
  youtubeId?: string;
  youtubeUrl?: string;
  videoUrl?: string; // Direct Cloudinary / MP4 video URL
  title: string;
  category: string;
  badgeStatus: string;
  releaseYear: string;
  maturityRating: string;
  duration: string;
  logline: string;
  synopsis: string;
  director: string;
  thumbnail: string;
  backdrop: string;
  tags: string[];
}

interface IPContentRailProps {
  title: string;
  subtitle?: string;
  items: IPItem[];
  onSelectIp: (ip: IPItem) => void;
  onOpenTalkWithUs?: (projectName?: string) => void;
}

export default function IPContentRail({ title, subtitle, items, onSelectIp, onOpenTalkWithUs }: IPContentRailProps) {
  return (
    <section className="pt-4 md:pt-8 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-[#0E121B]">
      {/* Rail Title Header */}
      <div className="flex flex-col space-y-3 mb-12">
        {/* <div className="text-xs uppercase tracking-widest text-[#0E121B]/50 font-bold font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E121B]" />
          <span>Magic Carpet Catalogue</span>
        </div> */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0E121B] tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[#0E121B]/70 leading-relaxed max-w-3xl pt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Fully Expanded Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((ip) => (
          <div
            key={ip.id}
            className="group relative rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white border border-slate-200/90 shadow-xl min-h-[480px] bg-slate-900"
          >
            {/* Background Cover Image */}
            <img
              src={ip.backdrop || ip.thumbnail}
              alt={ip.title}
              className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Ambient Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 pointer-events-none" />

            {/* Top Row: Category Badge */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                <span>{ip.category}</span>
              </div>
            </div>

            {/* Bottom Area: Title, Logline & Action Buttons */}
            <div className="relative z-10 space-y-4 pt-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-lg">
                {ip.title}
              </h3>

              <p className="text-sm text-white/90 font-light leading-relaxed drop-shadow-md">
                {ip.logline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectIp(ip)}
                  className="px-5 py-2.5 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Trailer</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenTalkWithUs?.(ip.title)}
                  className="px-5 py-2.5 rounded-full bg-[#062a82] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1A2232] transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  <span>Talk to team</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
