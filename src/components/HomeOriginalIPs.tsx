"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function ScrollFadeItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-98"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomeOriginalIPs() {
  const ips = [
    {
      num: "01",
      title: "The Passport of Mallam Illia",
      category: "FEATURE FILM",
      status: "IN PRODUCTION",
      headline: "An Epic Saga of Honor, Passion, and Vengeance",
      description: "Based on Cyprian Ekwensi's renowned classic novel, following an elderly warrior recounting a lifelong tale of fiery passion, deadly duels, betrayal, and revenge in pre-independence northern Nigeria.",
      poster: "/illia_poster.jpg",
      stickyOffset: "top-16 sm:top-20",
      zIndex: "z-10",
    },
    {
      num: "02",
      title: "Legends of Bulan",
      category: "ORIGINAL SERIES",
      status: "INVESTMENT STAGE",
      headline: "Mythic Voyage Across Ancient African Realms",
      description: "Immerses viewers into a breathtaking fantasy universe where ancient African gods, mythical beasts, and young heroes clash to protect the moonlit realms from shadow spirits.",
      poster: "/akousa.png",
      stickyOffset: "top-20 sm:top-28",
      zIndex: "z-20",
    },
    {
      num: "03",
      title: "Sip",
      category: "SHORT FILM",
      status: "FESTIVAL WINNER",
      headline: "Award-Winning Visual Poem on Human Fragility",
      description: "A critically acclaimed animated short film blending surrealistic 2D art with emotional storytelling, capturing an intimate journey through temptation, introspection, and redemption.",
      poster: "/sip_poster.jpg",
      stickyOffset: "top-24 sm:top-36",
      zIndex: "z-30",
    },
  ];

  return (
    <section className="pt-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10 bg-white text-[#0E121B]">
      {/* Centered Scroll Header with Fade Effect */}
      <ScrollFadeItem className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        {/* <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white bg-[#0E121B] px-4 py-1.5 rounded-full inline-block">
          Original IPs
        </span> */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#0E121B] leading-[1.1]">
          Original stories <br />
          <em className="font-serif-accent italic text-[#062a82]">we&apos;re building ourselves.</em>
        </h2>
        <p className="text-[#0E121B]/70 text-base sm:text-lg pt-1">
          Here are a few of our own stories we are creating
        </p>
      </ScrollFadeItem>

      {/* Sticky Stacking Cards Container */}
      <div className="relative space-y-12 sm:space-y-16">
        {ips.map((ip, idx) => (
          <div
            key={idx}
            className={`sticky ${ip.stickyOffset} ${ip.zIndex} bg-white border-2 border-[#062a82] rounded-[36px] p-6 sm:p-10 lg:p-12 text-[#0E121B] shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}
          >
            <ScrollFadeItem>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Column: Details */}
                <div className="flex-1 space-y-5">
                  {/* Number */}
                  <div className="text-5xl sm:text-6xl font-bold font-sans tracking-tight text-[#062a82]">
                    {ip.num}
                  </div>

                  {/* Tags */}
                  <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#062a82] space-x-3">
                    <span>{ip.status}</span>
                    <span>•</span>
                    <span>{ip.category}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#062a82]">
                    {ip.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl text-[#062a82]">
                    {ip.description}
                  </p>
                </div>

                {/* Right Column: Square Artwork Poster */}
                <div className="w-full lg:w-[440px] shrink-0">
                  <div className="relative aspect-square w-full rounded-[28px] overflow-hidden border border-[#062a82]/20 shadow-2xl group bg-slate-100">
                    <img
                      src={ip.poster}
                      alt={ip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-lg font-bold font-sans drop-shadow-md">
                      {ip.title}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeItem>
          </div>
        ))}
      </div>

      {/* Bottom Section Action Button */}
      <div className="relative z-40 pt-20 sm:pt-5 pb-16 text-center">
        <ScrollFadeItem>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#0E121B] text-xs font-bold uppercase tracking-wider text-white bg-[#062a82] hover:bg-[#062a82] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>EXPLORE OUR IPs</span>
            <span className="text-sm">→</span>
          </Link>
        </ScrollFadeItem>
      </div>
    </section>
  );
}
