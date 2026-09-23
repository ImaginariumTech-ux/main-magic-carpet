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
}

export default function IPContentRail({ title, subtitle, items, onSelectIp }: IPContentRailProps) {
  const [activeId, setActiveId] = useState<string>("");

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-[#0E121B]">
      {/* Rail Title Header */}
      <div className="flex flex-col space-y-3 mb-12">
        <div className="text-xs uppercase tracking-widest text-[#0E121B]/50 font-bold font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0E121B]" />
          <span>Magic Carpet Catalogue</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0E121B] tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[#0E121B]/70 leading-relaxed max-w-3xl pt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Interactive Expanding Card Accordion */}
      <div className="flex flex-col md:flex-row gap-6 min-h-[560px] lg:min-h-[600px] w-full">
        {items.map((ip) => {
          const isActive = activeId === ip.id;
          return (
            <div
              key={ip.id}
              onClick={() => setActiveId((prev) => (prev === ip.id ? "" : ip.id))}
              className={`group relative rounded-[36px] overflow-hidden cursor-pointer transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white border ${
                isActive
                  ? "flex-[3.5] border-white/40 shadow-2xl bg-black/40 ring-1 ring-white/20"
                  : "flex-1 border-white/10 hover:border-white/30 opacity-90 hover:opacity-100 bg-black/60"
              }`}
            >
              {/* Background Cover Image */}
              <img
                src={ip.backdrop || ip.thumbnail}
                alt={ip.title}
                className={`absolute inset-0 w-full h-full object-cover filter contrast-105 transition-transform duration-700 ${
                  isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                }`}
              />

              {/* Ambient Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />

              {/* Top Row: Glassmorphism Category Badge & Arrow Button */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                  <span>{ip.category}</span>
                </div>

                <div
                  className={`w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center text-sm font-bold shadow-xl transition-transform duration-500 ${
                    isActive ? "rotate-45 bg-white text-[#0E121B]" : "group-hover:scale-110"
                  }`}
                >
                  {isActive ? "←" : "↗"}
                </div>
              </div>

              {/* Bottom Area: Title, Logline & Action Buttons */}
              <div className="relative z-10 space-y-3 pt-4">
                <h3
                  className={`font-bold text-white tracking-tight leading-tight drop-shadow-lg transition-all duration-300 ${
                    isActive ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {ip.title}
                </h3>

                {isActive ? (
                  <div className="space-y-5 animate-hero-fade pt-1">
                    <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl drop-shadow-md">
                      {ip.logline}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectIp(ip);
                        }}
                        className="px-6 py-3 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Watch Trailer</span>
                      </button>

                      <a
                        href="/work-with-us"
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-3 rounded-full bg-[#0E121B] border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1A2232] transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
                      >
                        <span>Talk to our team</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-white/70 font-mono flex items-center gap-2 pt-1">
                    <span>Click to expand</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
