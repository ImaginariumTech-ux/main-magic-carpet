"use client";

import { useState } from "react";

export default function AboutSection() {
  const [selectedHub, setSelectedHub] = useState<string>("Lagos HQ");

  const hubs = [
    { city: "Lagos HQ", country: "Nigeria", address: "Plot 18, Nike Art Gallery Road, Ikate, Lekki, Lagos", focus: "Animation Studio & IP Production" },
    { city: "Global Partners", country: "Streaming", address: "Disney, Netflix, Cartoon Network & DreamWorks", focus: "Co-Production & International Broadcast" },
    { city: "Commercial & Brands", country: "Global", address: "Corporate, Commercial & Entertainment Brands", focus: "Explainer Videos & Motion Graphics" },
    { city: "MagicLab Academy", country: "Education", address: "MagicLab Animation & Creative Training", focus: "Talent Incubator & Skill Development" },
  ];

  return (
    <section id="studios" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="space-y-12">
        {/* Subtitle Tag */}
        <div className="text-xs uppercase tracking-widest text-white/50 font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span>Our Reach & Studio Infrastructure</span>
        </div>

        {/* Brand Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight max-w-5xl tracking-tight">
          Magic Carpet Studios is an award-winning creative studio based in Africa,{" "}
          <span className="text-white font-normal underline decoration-white/30 underline-offset-8">
            merging artistry with technology
          </span>{" "}
          designed for a world where <em className="font-serif-accent text-white/80">authentic stories connect cultures.</em>
        </h2>

        {/* Global Studio Locations Grid */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-sm font-medium text-white/60 mb-6">Studio Network & Collaborative Hubs</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((hub) => {
              const isSelected = selectedHub === hub.city;
              return (
                <button
                  key={hub.city}
                  onClick={() => setSelectedHub(isSelected ? "" : hub.city)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "border-yellow-400 bg-white text-black shadow-xl scale-[1.02]"
                      : "border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">{hub.city}</div>
                    <div className={`text-xs ${isSelected ? "text-black/60" : "text-white/40"}`}>{hub.country}</div>
                  </div>
                  <div className={`text-xs mt-3 ${isSelected ? "text-black/80" : "text-white/60"}`}>
                    {hub.focus}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Location Detail Callout */}
          {selectedHub && (
            <div className="mt-6 p-5 rounded-xl bg-white/10 border border-white/20 text-sm text-white/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-hero-fade">
              <div>
                <span className="font-semibold text-yellow-400">{selectedHub}:</span>{" "}
                {hubs.find((h) => h.city === selectedHub)?.address}
              </div>
              <a
                href="#contact"
                className="text-xs uppercase tracking-wider underline text-white hover:text-yellow-400 shrink-0 font-semibold"
              >
                Inquire & Collaborate →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
