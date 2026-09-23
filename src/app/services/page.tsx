"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

function StickyStorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      if (totalScrollHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollHeight));

      if (progress < 0.35) {
        setActiveStep(0);
      } else if (progress < 0.70) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      num: "01",
      tag: "2D & 3D STORY DEVELOPMENT",
      title: "Crafting Resonant Narratives & Art Direction",
      paragraph:
        "We're a full-service animation studio working across 2D and 3D. Beyond animation, our story team can help shape your idea, strengthen the narrative, and find the right creative approach to communicate your message while keeping audiences engaged.",
      image: "/illia_poster.jpg",
      position: "right", // Text Left, Image Right
    },
    {
      num: "02",
      tag: "MULTIDISCIPLINARY CREATIVE TEAM",
      title: "All Creative Disciplines Under One Roof",
      paragraph:
        "Our multidisciplinary team brings together experienced artists and creatives across story development, character design, animation, voice acting, editing, music, and sound design. This means you can work with one single production partner across the different stages of your project.",
      image: "/akousa.png",
      position: "left", // Text Right, Image Left
    },
    {
      num: "03",
      tag: "FORMAT FLEXIBILITY & SCALE",
      title: "From Commercial Explainers to Feature Films",
      paragraph:
        "We work across a range of formats and needs, from advertising and explainer videos to TV series and feature films. Whatever you're looking to create, we bring the creative, production expertise, and team to take it from an idea to something people can see, hear, and connect with.",
      image: "/sip_poster.jpg",
      position: "right", // Text Left, Image Right
    },
  ];

  return (
    <>
      {/* Mobile Stacked Cards View (< lg) — Zero Overlap */}
      <section className="lg:hidden py-16 px-4 sm:px-6 bg-white border-t border-[#0E121B]/10 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono block">
            OUR CREATIVE APPROACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#0E121B] leading-tight">
            End-to-End Animation & <br />
            <em className="font-serif-accent italic text-[#0E121B]">Creative Capabilities</em>
          </h2>
        </div>

        {/* 3 Mobile Step Cards */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-50 border border-slate-200/90 rounded-[28px] p-6 space-y-5 shadow-lg"
            >
              {/* Step Header */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-white bg-[#0E121B] px-3.5 py-1 rounded-full shadow-md">
                  {step.num}
                </span>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0E121B]/70">
                  {step.tag}
                </span>
              </div>

              {/* Title & Paragraph */}
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E121B] leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0E121B]/80 font-light leading-relaxed">
                  {step.paragraph}
                </p>
              </div>

              {/* Step Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] w-full shadow-md bg-slate-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Pinned Sticky Scrollytelling View (>= lg) */}
      <div
        ref={containerRef}
        className="hidden lg:block relative h-[250vh] sm:h-[300vh] w-full border-t border-[#0E121B]/10"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12 bg-white">
          {/* Section Header & Step Indicators */}
          <div className="absolute top-16 lg:top-20 left-1/2 -translate-x-1/2 text-center space-y-2.5 z-30 max-w-xl px-4">
            <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono block">
              OUR CREATIVE APPROACH
            </span>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-[#0E121B]">
              End-to-End Animation & <em className="font-serif-accent italic text-[#0E121B]">Creative Capabilities</em>
            </h2>

            {/* Progress Indicators */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep === idx ? "w-10 bg-[#0E121B]" : "w-3 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Area with Fluid Image & Text Positions */}
          <div className="relative w-full max-w-7xl mx-auto min-h-[500px] flex items-center pt-24">
            {/* Animated Image (Moves from Right to Left to Right as user scrolls!) */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-[46%] transition-all duration-1000 ease-out z-20 ${
                steps[activeStep].position === "left"
                  ? "left-0 translate-x-0"
                  : "left-[54%] translate-x-0"
              }`}
            >
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] w-full group bg-slate-100">
                {steps.map((step, idx) => (
                  <img
                    key={idx}
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover filter contrast-105 transition-all duration-1000 ${
                      activeStep === idx
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
              </div>
            </div>

            {/* Animated Text Block (Moves to Opposite Side of Image!) */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-[48%] transition-all duration-1000 ease-out z-20 ${
                steps[activeStep].position === "left"
                  ? "right-0 text-left pl-6"
                  : "left-0 text-left pr-6"
              }`}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-1000 space-y-5 ${
                    activeStep === idx
                      ? "opacity-100 translate-y-0 relative z-20 block"
                      : "opacity-0 translate-y-12 absolute inset-0 pointer-events-none hidden"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-white bg-[#0E121B] px-3.5 py-1 rounded-full shadow-md">
                      {step.num}
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0E121B]/60">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#0E121B] leading-[1.15]">
                    {step.title}
                  </h3>

                  <p className="text-base lg:text-xl text-[#0E121B]/85 font-light leading-relaxed">
                    {step.paragraph}
                  </p>

                  <div className="pt-2 text-xs font-mono text-[#0E121B]/50 flex items-center gap-2">
                    <span>Scroll down to continue story</span>
                    <span>↓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServicesHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTime = 18;
    const endTime = 30;

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

    if (video.readyState >= 1) {
      video.currentTime = startTime;
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-end pb-14 sm:pb-24 pt-32 sm:pt-44 lg:pt-48 overflow-hidden border-b border-[#0E121B]/10">
      {/* Full-Width Background Video (Looping 18s to 30s) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dt2vu9jje/video/upload/v1790148975/WhatsApp_Video_2026-09-22_at_13.32.40_l9wo9a.mp4#t=18,30"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter contrast-105 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 pointer-events-none" />
      </div>

      {/* Inset Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-2xl">
            Full-Service Animation <br className="hidden sm:inline" />
            <em className="font-serif-accent italic text-white">Production Studio</em>
          </h1>

          <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-lg">
            Whether you need a single animated asset or an end-to-end production partner, Magic Carpet can take your project from development through to final delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ServicesOverviewPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeShowcaseId, setActiveShowcaseId] = useState<string>("");

  // Showcase Cards from the Brief
  const showcases = [
    {
      id: "ida-ad",
      title: "Animated Advertising — Ida",
      category: "ANIMATED ADVERTISING",
      client: "MTN / Brand Campaign",
      description: "High-impact animated advertising campaign crafted for broadcast TV, digital platforms, and brand storytelling.",
      image: "/superdad.jpg",
      href: "/services/brand-storytelling",
    },
    {
      id: "nnpc-explainer",
      title: "Animated Explainer — NNPC",
      category: "ANIMATED EXPLAINER",
      client: "NNPC Corporate",
      description: "Clear, engaging animated explainer visualizing corporate energy initiatives, operations, and sustainability goals.",
      image: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789995052/Nnpc_khjcu6.jpg",
      href: "/services/explainer-videos",
    },
    {
      id: "titi-series",
      title: "Animated Series — Adventures of Titi",
      category: "ANIMATED SERIES",
      client: "Tangerine Africa",
      description: "A multi-episode animated series designed to make life insurance easy to understand and fun to watch.",
      image: "/tangerine.png",
      href: "/services/brand-storytelling",
    },
    {
      id: "dmag-education",
      title: "Education Animation — DMAG",
      category: "EDUCATION ANIMATION",
      client: "RAES / Public Health",
      description: "A public health education series about female reproductive health, combining storytelling with clear medical messaging.",
      image: "/majss.jpg.jpeg",
      href: "/work",
    },
    {
      id: "access-motion",
      title: "Motion Graphics — Access Bank",
      category: "MOTION GRAPHICS",
      client: "Access Bank",
      description: "Dynamic kinetic motion graphics detailing digital banking voucher platforms and seamless user redemption workflows.",
      image: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.jpg",
      href: "/services/explainer-videos",
    },
  ];

  // 9 Pipeline Stages from the Brief
  const pipelineStages = [
    {
      num: "01",
      title: "Scriptwriting",
      description: "Concept development, narrative framing, story treatments, and dialogue scripting.",
    },
    {
      num: "02",
      title: "Character Design",
      description: "Model sheets, turnarounds, expression guides, and visual character development.",
    },
    {
      num: "03",
      title: "Storyboard",
      description: "Cinematic shot composition, animatics, pacing, and visual sequence planning.",
    },
    {
      num: "04",
      title: "Props & Assets",
      description: "3D/2D asset creation, environment props, and world-building element design.",
    },
    {
      num: "05",
      title: "Art & Visual Design",
      description: "Art direction, color scripts, background painting, and visual style guides.",
    },
    {
      num: "06",
      title: "Voice Recording",
      description: "Voice casting, audio direction, studio voice recording, and lip-sync prep.",
    },
    {
      num: "07",
      title: "Animation",
      description: "Full 2D keyframe & vector animation, 3D character rigging, and dynamic physics.",
    },
    {
      num: "08",
      title: "Editing",
      description: "Offline/online picture assembly, pacing polish, timing, and color grading.",
    },
    {
      num: "09",
      title: "Sound Design",
      description: "Foley, audio effects, sound mix, original score scoring, and master delivery.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Header Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Section with Video Background (18s to 30s) */}
      <ServicesHero />

      {/* Sticky Pin Scrollytelling Capabilities Section */}
      <StickyStorytellingSection />

      {/* A peek into what we have done before */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B]">
            A peek into what we have <em className="font-serif-accent italic text-[#0E121B]">done before</em>
          </h2>
          <p className="text-[#0E121B]/70 text-base max-w-2xl">
            Selected showcases across advertising, explainers, series, education, and motion graphics.
          </p>
        </div>

        {/* Showcase Cards Split: 3 Top Cards & 2 Bottom Cards */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="flex flex-col md:flex-row gap-6 min-h-[480px] lg:min-h-[520px] w-full">
            {showcases.slice(0, 3).map((item) => {
              const isActive = activeShowcaseId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveShowcaseId((prev) => (prev === item.id ? "" : item.id))}
                  className={`group relative rounded-[36px] overflow-hidden cursor-pointer transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white border ${
                    isActive
                      ? "flex-[3.5] border-white/40 shadow-2xl bg-black/40 ring-1 ring-white/20"
                      : "flex-1 border-white/10 hover:border-white/30 opacity-90 hover:opacity-100 bg-black/60"
                  }`}
                >
                  {/* Background Cover Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover filter contrast-105 transition-transform duration-700 ${
                      isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Ambient Dark Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />

                  {/* Top Row: Glassmorphism Client Badge & Arrow Button */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                      <span>{item.client}</span>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center text-sm font-bold shadow-xl transition-transform duration-500 ${
                        isActive ? "rotate-45 bg-white text-[#0E121B]" : "group-hover:scale-110"
                      }`}
                    >
                      {isActive ? "←" : "↗"}
                    </div>
                  </div>

                  {/* Bottom Area: Title, Description & Action Button */}
                  <div className="relative z-10 space-y-3 pt-4">
                    <div className="text-xs uppercase tracking-wider text-white/70 font-mono font-semibold">
                      {item.category}
                    </div>
                    <h3
                      className={`font-bold text-white tracking-tight leading-tight drop-shadow-lg transition-all duration-300 ${
                        isActive ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {isActive ? (
                      <div className="space-y-5 animate-hero-fade pt-1">
                        <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl drop-shadow-md">
                          {item.description}
                        </p>

                        <div className="pt-2">
                          <Link
                            href={item.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
                          >
                            <span>Explore Project</span>
                            <span>→</span>
                          </Link>
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

          {/* Bottom Row: 2 Cards */}
          <div className="flex flex-col md:flex-row gap-6 min-h-[480px] lg:min-h-[520px] w-full">
            {showcases.slice(3, 5).map((item) => {
              const isActive = activeShowcaseId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveShowcaseId((prev) => (prev === item.id ? "" : item.id))}
                  className={`group relative rounded-[36px] overflow-hidden cursor-pointer transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white border ${
                    isActive
                      ? "flex-[3.5] border-white/40 shadow-2xl bg-black/40 ring-1 ring-white/20"
                      : "flex-1 border-white/10 hover:border-white/30 opacity-90 hover:opacity-100 bg-black/60"
                  }`}
                >
                  {/* Background Cover Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover filter contrast-105 transition-transform duration-700 ${
                      isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Ambient Dark Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />

                  {/* Top Row: Glassmorphism Client Badge & Arrow Button */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                      <span>{item.client}</span>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center text-sm font-bold shadow-xl transition-transform duration-500 ${
                        isActive ? "rotate-45 bg-white text-[#0E121B]" : "group-hover:scale-110"
                      }`}
                    >
                      {isActive ? "←" : "↗"}
                    </div>
                  </div>

                  {/* Bottom Area: Title, Description & Action Button */}
                  <div className="relative z-10 space-y-3 pt-4">
                    <div className="text-xs uppercase tracking-wider text-white/70 font-mono font-semibold">
                      {item.category}
                    </div>
                    <h3
                      className={`font-bold text-white tracking-tight leading-tight drop-shadow-lg transition-all duration-300 ${
                        isActive ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {isActive ? (
                      <div className="space-y-5 animate-hero-fade pt-1">
                        <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl drop-shadow-md">
                          {item.description}
                        </p>

                        <div className="pt-2">
                          <Link
                            href={item.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
                          >
                            <span>Explore Project</span>
                            <span>→</span>
                          </Link>
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
        </div>
      </section>

      {/* Service work and co-production Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="bg-[#090B0F] rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 lg:p-16 text-white border border-white/10 shadow-2xl space-y-12">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#161B24] border border-white/10 text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-300">
              PIPELINE COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              Service work and <em className="font-serif-accent italic text-white/90">co-production</em>
            </h2>

            <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed">
              Got an animated series or feature you need a partner for? We can come into your pipeline at any stage.
            </p>
          </div>

          {/* 9 Pipeline Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {pipelineStages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {stage.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-zinc-800">
            <div>
              <h4 className="text-xl font-bold text-white">Ready to collaborate?</h4>
              <p className="text-sm text-zinc-400 font-light">Tell us about your project or production stage requirement.</p>
            </div>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Work with us</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
