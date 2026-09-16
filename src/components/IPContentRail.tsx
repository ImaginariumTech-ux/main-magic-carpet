"use client";

import { useState } from "react";

export interface IPItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Rail Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span>Magic Carpet Catalogue</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-xs text-white/50 font-mono">{subtitle}</p>}
      </div>

      {/* Netflix-Style Grid / Rail */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((ip) => {
          const isHovered = hoveredId === ip.id;
          return (
            <div
              key={ip.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(ip.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectIp(ip)}
            >
              {/* Card Thumbnail Box */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-yellow-400/60 group-hover:shadow-[0_10px_30px_rgba(250,204,21,0.2)]">
                {/* Image Backdrop */}
                <img
                  src={ip.thumbnail}
                  alt={ip.title}
                  className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] text-white/90 font-medium font-mono">
                    {ip.category}
                  </span>
                </div>

                {/* Play Button Trigger Icon */}
                <div
                  className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Card Title & Year */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <div className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors drop-shadow-md">
                    {ip.title}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/60 font-mono mt-0.5">
                    <span>{ip.releaseYear}</span>
                    <span>•</span>
                    <span className="text-yellow-400/90">{ip.duration}</span>
                  </div>
                </div>
              </div>

              {/* Expandable Hover Metadata Strip */}
              <div className="mt-3 space-y-2">
                <p className="text-xs text-white/70 line-clamp-2 font-light leading-relaxed">
                  {ip.logline}
                </p>

                {/* Genre Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ip.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
