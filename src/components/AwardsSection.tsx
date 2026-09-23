"use client";

import { useState } from "react";

export interface AwardItem {
  number: string;
  title: string;
  event: string;
  project: string;
  year: string;
  image: string;
}

const defaultAwards: AwardItem[] = [
  {
    number: "ONE",
    title: "Best Animated Short Film",
    event: "African International Film Festival (AFRIFF)",
    project: "Sip",
    year: "2024",
    image: "/sip_poster.jpg",
  },
  {
    number: "TWO",
    title: "Official Selection & Pitch Finalist",
    event: "Annecy International Animated Film Festival",
    project: "Legends of Bulan",
    year: "2024",
    image: "/akousa.png",
  },
  {
    number: "THREE",
    title: "Excellence in Animation Production",
    event: "Creative Industry Awards EMEA",
    project: "Garbage Boy and Trash Can",
    year: "2023",
    image: "/garbage_boy.webp",
  },
  {
    number: "FOUR",
    title: "Public Health Education Excellence",
    event: "International Health & Media Forum",
    project: "Dr Majek and The Ghost",
    year: "2023",
    image: "/majss.jpg.jpeg",
  },
];

export default function AwardsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(1); // Default to row 2 (TWO) like screenshot

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto my-8">
      {/* Container with sleek dark aesthetic matching the reference image */}
      <div className="bg-[#090B0F] rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 lg:p-16 text-white border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Top Tag Pill */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#161B24] border border-white/10 text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-300 shadow-inner">
            AWARDS
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 leading-tight">
          Awards for <em className="font-serif-accent italic text-white/90">our work</em>
        </h2>

        {/* Subtitle Description */}
        <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed mb-12 sm:mb-16">
          Selected honors for feature animation, short films, and original IPs — storytelling, craft, and visual innovation.
        </p>

        {/* Awards Rows Table Container */}
        <div className="relative w-full border-b border-zinc-800/90">
          
          {/* Central Floating Preview Image */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 pointer-events-none z-30 transition-all duration-500 ease-out"
               style={{
                 top: `${(hoveredIdx + 0.5) * (100 / defaultAwards.length)}%`,
                 transform: 'translate(-50%, -50%)'
               }}
          >
            <div className="relative w-56 h-40 rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.95)] border border-white/20 bg-zinc-900 group">
              <img
                src={defaultAwards[hoveredIdx]?.image || defaultAwards[0].image}
                alt={defaultAwards[hoveredIdx]?.title || "Award preview"}
                className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-[10px] font-mono uppercase tracking-wider text-white/90 font-medium truncate">
                {defaultAwards[hoveredIdx]?.project}
              </div>
            </div>
          </div>

          {/* Award Items List */}
          {defaultAwards.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group relative flex items-center justify-between py-6 sm:py-8 px-2 sm:px-6 border-t border-zinc-800/90 cursor-pointer transition-colors duration-300 z-10 ${
                  isHovered ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                }`}
              >
                {/* Left: Number Tag & Award Title */}
                <div className="flex items-center space-x-6 sm:space-x-12 pr-4 min-w-0">
                  <span className={`font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors duration-300 shrink-0 ${
                    isHovered ? "text-white" : "text-zinc-500"
                  }`}>
                    {item.number}
                  </span>
                  <h3 className={`text-base sm:text-xl font-bold tracking-tight transition-all duration-300 truncate ${
                    isHovered ? "text-white translate-x-1" : "text-zinc-200"
                  }`}>
                    {item.title}
                  </h3>
                </div>

                {/* Right: Organization/Event Name */}
                <div className="pl-4 shrink-0 text-right">
                  <span className={`font-mono text-xs sm:text-sm transition-colors duration-300 font-light ${
                    isHovered ? "text-zinc-200" : "text-zinc-400"
                  }`}>
                    {item.event}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
