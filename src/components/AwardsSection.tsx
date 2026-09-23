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
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto my-6 sm:my-8">
      {/* Container with sleek dark aesthetic matching the reference image */}
      <div className="bg-[#090B0F] rounded-[32px] sm:rounded-[48px] p-6 sm:p-14 lg:p-16 text-white border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Top Tag Pill */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#161B24] border border-white/10 text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-300 shadow-inner">
            AWARDS
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3 sm:mb-4 leading-tight">
          Awards for <em className="font-serif-accent italic text-white/90">our work</em>
        </h2>

        {/* Subtitle Description */}
        <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed mb-8 sm:mb-16">
          Selected honors for feature animation, short films, and original IPs — storytelling, craft, and visual innovation.
        </p>

        {/* Awards Rows Table Container */}
        <div className="relative w-full border-b border-zinc-800/90">
          
          {/* Central Floating Preview Image (Desktop Only) */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 pointer-events-none z-30 transition-all duration-500 ease-out"
            style={{
              top: `${((activeIdx >= 0 ? activeIdx : 0) + 0.5) * (100 / defaultAwards.length)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative w-60 h-44 rounded-2xl overflow-hidden shadow-[0_25px_60px_-12px_rgba(0,0,0,0.95)] border border-white/20 bg-zinc-900 group">
              <img
                src={defaultAwards[activeIdx >= 0 ? activeIdx : 0]?.image}
                alt={defaultAwards[activeIdx >= 0 ? activeIdx : 0]?.title}
                className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                <span className="truncate">{defaultAwards[activeIdx >= 0 ? activeIdx : 0]?.project}</span>
                <span className="text-slate-300">{defaultAwards[activeIdx >= 0 ? activeIdx : 0]?.year}</span>
              </div>
            </div>
          </div>

          {/* Award Items List */}
          {defaultAwards.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx((prev) => (prev === idx ? -1 : idx))}
                className={`group relative border-t border-zinc-800/90 cursor-pointer transition-colors duration-300 z-10 ${
                  isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                }`}
              >
                {/* Header Row */}
                <div className="py-5 sm:py-8 px-3 sm:px-6 flex items-start sm:items-center justify-between gap-4">
                  {/* Left: Number & Title */}
                  <div className="flex items-start sm:items-center space-x-4 sm:space-x-10 min-w-0 flex-1">
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors duration-300 shrink-0 pt-0.5 sm:pt-0 ${
                        isActive ? "text-white" : "text-zinc-500"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="space-y-1 min-w-0">
                      <h3
                        className={`text-base sm:text-xl font-bold tracking-tight transition-all duration-300 ${
                          isActive ? "text-white sm:translate-x-1" : "text-zinc-200"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {/* Mobile Event Name Subtitle */}
                      <p className="text-xs text-zinc-400 font-mono sm:hidden">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Right: Desktop Organization/Event Name + Mobile Chevron */}
                  <div className="shrink-0 flex items-center gap-3 text-right">
                    <span
                      className={`hidden sm:inline-block font-mono text-xs sm:text-sm transition-colors duration-300 font-light ${
                        isActive ? "text-zinc-200" : "text-zinc-400"
                      }`}
                    >
                      {item.event}
                    </span>

                    {/* Mobile Expand Toggle Arrow */}
                    <div
                      className={`lg:hidden w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? "bg-white text-[#0E121B] border-white rotate-180"
                          : "border-white/20 text-zinc-400"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mobile Expandable Accordion Body (< lg) */}
                {isActive && (
                  <div className="lg:hidden px-3 pb-6 pt-1 space-y-4 animate-hero-fade">
                    {/* Poster Card */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-bold border border-white/20">
                          {item.project}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/20">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    {/* Details Badges */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        Awarding Body / Festival
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {item.event}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
