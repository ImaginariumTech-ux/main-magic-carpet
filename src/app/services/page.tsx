"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

function StorytellingSection() {
  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 bg-white">
      {/* Full width container, boxed layout */}
      <div className="max-w-7xl mx-auto bg-slate-50/80 border border-slate-200/90 rounded-[36px] p-8 sm:p-12 lg:p-16 space-y-8 shadow-xl">
        <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#0E121B]/85 font-light leading-relaxed">
          <p className="text-lg sm:text-2xl font-normal text-[#0E121B] leading-snug">
            Whether you need a single animated asset or an end-to-end production partner, Magic Carpet can take your project from development through to final delivery.
          </p>

          <p>
            We're a full-service animation studio working across 2D and 3D. Beyond animation, our story team can help shape your idea, strengthen the narrative, and find the right creative approach to communicate your message while keeping audiences engaged.
          </p>

          <p>
            Our multidisciplinary team brings together experienced artists and creatives across story development, character design, animation, voice acting, editing, music, and sound design. This means you can work with one only production partner across the different stages of your project.
          </p>

          <p>
            We work across a range of formats and needs, from advertising and explainer videos to TV series and feature films.
          </p>

          <p>
            Whatever you're looking to create, we bring the creative, production expertise, and team to take it from an idea to something people can see, hear, and connect with.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesHero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const initPlayer = () => {
      if ((window as any).YT && (window as any).YT.Player && iframeRef.current) {
        playerRef.current = new (window as any).YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              event.target.mute();
              event.target.playVideo();
              event.target.seekTo(13, true);
            },
            onStateChange: (event: any) => {
              if (event.data === 0) {
                event.target.seekTo(13, true);
                event.target.playVideo();
              }
            },
          },
        });

        interval = setInterval(() => {
          if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
            const currentTime = playerRef.current.getCurrentTime();
            if (currentTime >= 73 || (currentTime > 0 && currentTime < 12.5)) {
              playerRef.current.seekTo(13, true);
              playerRef.current.playVideo();
            }
          }
        }, 500);
      }
    };

    if (!(window as any).YT || !(window as any).YT.Player) {
      const existingScript = document.getElementById("youtube-iframe-api");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const previousOnReady = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousOnReady) previousOnReady();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      if (interval) clearInterval(interval);
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-end pb-14 sm:pb-24 pt-32 sm:pt-44 lg:pt-48 overflow-hidden border-b border-[#0E121B]/10">
      {/* Full-Width Background Video (Looping YouTube video epqVW8GTJTw from 13s to 73s) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <iframe
          ref={iframeRef}
          id="services-hero-yt-player"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-105"
          src="https://www.youtube.com/embed/epqVW8GTJTw?autoplay=1&mute=1&controls=0&loop=1&playlist=epqVW8GTJTw&start=13&end=73&playsinline=1&modestbranding=1&rel=0&enablejsapi=1"
          title="Services Hero Background Video"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 pointer-events-none" />
      </div>

      {/* Inset Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-2xl">
            Our Services <br className="hidden sm:inline" />
            {/* <em className="font-serif-accent italic text-white">Production Studio</em> */}
          </h1>

          {/* <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-lg">
            Whether you need a single animated asset or an end-to-end production partner, Magic Carpet can take your project from development through to final delivery.
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default function ServicesOverviewPage() {
  const [contactOpen, setContactOpen] = useState(false);

  // Showcase Cards from the Brief
  const showcases = [
    {
      id: "ida-ad",
      title: "Animated Advertising",
      category: "ANIMATED ADVERTISING",
      client: "MTN / Brand Campaign",
      description: "",
      image: "/superdad.jpg",
      youtubeId: "XaPEfmvxeLo",
      youtubeUrl: "https://youtu.be/XaPEfmvxeLo",
      href: "/services/brand-storytelling",
    },
    {
      id: "nnpc-explainer",
      title: "Animated Explainer",
      category: "ANIMATED EXPLAINER",
      client: "NNPC Corporate",
      description: "",
      image: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789995052/Nnpc_khjcu6.jpg",
      videoUrl: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789995052/Nnpc_khjcu6.mp4",
      href: "/services/explainer-videos",
    },
    {
      id: "titi-series",
      title: "Animated Series ",
      category: "ANIMATED SERIES",
      client: "Tangerine Africa",
      description: "",
      image: "/tangerine.png",
      youtubeId: "IL9g7Xh9oOM",
      youtubeUrl: "https://youtu.be/IL9g7Xh9oOM",
      href: "/services/brand-storytelling",
    },
    {
      id: "dmag-education",
      title: "Education Animation ",
      category: "EDUCATION ANIMATION",
      client: "RAES / Public Health",
      description: "",
      image: "/majss.jpg.jpeg",
      youtubeId: "NQ01ewwk0dk",
      youtubeUrl: "https://youtu.be/NQ01ewwk0dk",
      href: "/work",
    },
    {
      id: "access-motion",
      title: "Motion Graphics",
      category: "MOTION GRAPHICS",
      client: "Access Bank",
      description: "",
      image: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.jpg",
      videoUrl: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.mp4",
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

      {/* Storytelling Capabilities Section */}
      <StorytellingSection />

      {/* A peek into what we have done before */}
      <section className="pt-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="mb-14 space-y-3">
          {/* <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
            PORTFOLIO HIGHLIGHTS
          </span> */}
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B]">
            A peek into what we have <em className="font-serif-accent italic text-[#062a82]">done before</em>
          </h2>
          <p className="text-[#0E121B]/70 text-base max-w-2xl">
            Selected showcases across advertising, explainers, series, education, and motion graphics.
          </p>
        </div>

        {/* Fully Expanded Cards Grid: Top 3 Cards (1/3 width), Bottom 2 Cards (1/2 width to occupy full width) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {showcases.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white border border-slate-200/90 shadow-xl min-h-[480px] bg-slate-900 ${
                idx < 3 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              {/* Background Cover Video or Image */}
              {item.youtubeId ? (
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <iframe
                    className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-125"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&playsinline=1&modestbranding=1&rel=0`}
                    title={item.title}
                    allow="autoplay; encrypted-media"
                  />
                </div>
              ) : item.videoUrl ? (
                <video
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 pointer-events-none z-0"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 z-0"
                />
              )}

              {/* Ambient Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none z-10" />

              {/* Top Row: Client Badge */}
              <div className="relative z-20 flex items-center justify-between w-full">
                {/* <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                  <span>{item.client}</span>
                </div> */}
              </div>

              {/* Bottom Area: Title, Category, Description & Action Button */}
              <div className="relative z-20 space-y-4 pt-4">
                {/* <div className="text-xs uppercase tracking-wider text-white/70 font-mono font-semibold">
                  {item.category}
                </div> */}

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-lg">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-white/90 font-light leading-relaxed drop-shadow-md">
                    {item.description}
                  </p>
                )}

                {/* <div className="pt-2 flex items-center gap-3">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
                  >
                    <span>Explore Project</span>
                    <span>→</span>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service work and co-production Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 lg:p-16 text-white border border-white/10 shadow-2xl space-y-12 bg-slate-950">
          {/* YouTube Video Background (IJmiDCY_tAE, start=371s [6m11s], end=491s [8m11s]) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <iframe
              className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-125"
              src="https://www.youtube.com/embed/IJmiDCY_tAE?autoplay=1&mute=1&controls=0&loop=1&playlist=IJmiDCY_tAE&start=371&end=491&playsinline=1&modestbranding=1&rel=0"
              title="Pipeline Background Video"
              allow="autoplay; encrypted-media"
            />
          </div>

          {/* Light Blue #062a82 Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062a82]/75 via-[#062a82]/45 to-[#062a82]/30 pointer-events-none z-10" />

          {/* Header */}
          <div className="relative z-20 space-y-4 max-w-3xl">
            {/* <span className="inline-block px-4 py-1.5 rounded-full bg-[#161B24] border border-white/10 text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-300">
              PIPELINE COLLABORATION
            </span> */}

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
               <em className="font-serif-accent italic text-white/90">Co-production</em>
            </h2>

            <p className="text-zinc-200 text-lg sm:text-xl font-light leading-relaxed">
              Got an animated series or feature you need a partner for? We can come into your pipeline at any stage.
            </p>
          </div>

          {/* 9 Pipeline Stages Grid */}
          <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {pipelineStages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 rounded-2xl bg-[#062a82]/30 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-[#062a82]/50 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  {/* <span className="font-mono text-xs font-bold text-slate-400">
                    {stage.num}
                  </span> */}
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {stage.title}
                </h3>
                {/* <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {stage.description}
                </p> */}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative z-20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/20">
            <div>
              <h4 className="text-xl font-bold text-white">Ready to collaborate?</h4>
              <p className="text-sm text-zinc-300 font-light">Tell us about your project or production stage requirement.</p>
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
