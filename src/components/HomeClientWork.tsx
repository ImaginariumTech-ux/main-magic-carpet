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

export default function HomeClientWork() {
  const projects = [
    {
      num: "01",
      title: "Garbage Boy and Trash Can",
      client: "CARTOON NETWORK",
      format: "ANIMATED SERIES",
      headline: "Light-Hearted Family Animated Series for Global Audiences",
      description: "We produced an engaging, funny, and visually vibrant animated series following the wild superhero antics of Garbage Boy and Trash Can for Cartoon Network.",
      poster: "/garbage_boy.webp",
      bgColor: "bg-[#9B4100]", // Warm Sienna Amber
      borderColor: "border-[#B24B00]",
      stickyOffset: "top-16 sm:top-20",
      zIndex: "z-10",
    },
    {
      num: "02",
      title: "Adventures of Titi",
      client: "TANGERINE AFRICA",
      format: "EXPLAINER SERIES",
      headline: "Making Life Insurance Fun & Effortless to Understand",
      description: "A series to make life insurance easy to understand and fun to watch, turning complex financial literacy into engaging character-driven animated stories.",
      poster: "/tangerine.png",
      bgColor: "bg-[#007A99]", // Deep Teal Cyan
      borderColor: "border-[#008DB0]",
      stickyOffset: "top-20 sm:top-28",
      zIndex: "z-20",
    },
    {
      num: "03",
      title: "Dr Majek and The Ghost (DMAG)",
      client: "RAES",
      format: "PUBLIC HEALTH EDUCATION",
      headline: "Impactful Education on Female Reproductive Health",
      description: "A public health education animated series focusing on female reproductive health, breaking taboos through high-quality storytelling and medical clarity.",
      poster: "/e307b614-4433-4f8a-8ec1-063b3c05e3a5.png",
      bgColor: "bg-[#55109A]", // Deep Royal Purple
      borderColor: "border-[#6714B9]",
      stickyOffset: "top-24 sm:top-36",
      zIndex: "z-30",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10 bg-white text-[#0E121B]">
      {/* Centered Scroll Header with Fade Effect */}
      <ScrollFadeItem className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        {/* <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white bg-[#0E121B] px-4 py-1.5 rounded-full inline-block">
          Client Work
        </span> */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#0E121B] leading-[1.1]">
          We&apos;ve helped bring <br />
          <em className="font-serif-accent italic text-[#0E121B]">big ideas to life.</em>
        </h2>
      </ScrollFadeItem>

      {/* Sticky Stacking Cards Container */}
      <div className="relative space-y-12 sm:space-y-16 pb-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`sticky ${project.stickyOffset} ${project.zIndex} ${project.bgColor} border ${project.borderColor} rounded-[36px] p-6 sm:p-10 lg:p-12 text-white shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}
          >
            <ScrollFadeItem>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left Column: Details */}
                <div className="flex-1 space-y-5">
                  {/* Number */}
                  <div className="text-5xl sm:text-6xl font-bold font-sans tracking-tight text-white/90">
                    {project.num}
                  </div>

                  {/* Tags */}
                  <div className="text-xs font-mono font-bold tracking-widest uppercase text-white/80 space-x-3">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span>{project.format}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                    {project.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Right Column: Square Artwork Poster */}
                <div className="w-full lg:w-[440px] shrink-0">
                  <div className="relative aspect-square w-full rounded-[28px] overflow-hidden border border-white/20 shadow-2xl group bg-black/20">
                    <img
                      src={project.poster}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-lg font-bold font-sans drop-shadow-md">
                      {project.title}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFadeItem>
          </div>
        ))}

        {/* Bottom Section Action Button */}
        <ScrollFadeItem className="relative z-40 pt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#0E121B] text-xs font-bold uppercase tracking-wider text-white bg-[#0E121B] hover:bg-[#1A2232] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>See More Work</span>
            <span className="text-sm">→</span>
          </Link>
        </ScrollFadeItem>
      </div>
    </section>
  );
}
