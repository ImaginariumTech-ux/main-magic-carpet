"use client";

import { useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function AboutStoryTimeline() {
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras: TimelineEvent[] = [
    {
      year: "2016",
      title: "Inception in Lagos, Nigeria",
      subtitle: "Building the Foundations of African Animation",
      description: "Founded in Lagos with a bold vision: to celebrate African culture by bringing its rich storytelling heritage to the world stage through high-quality animated media.",
      image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1280&auto=format&fit=crop",
      highlights: [
        "Established Lagos animation production studio",
        "Assembled top 2D & 3D artists across Africa",
        "Pioneered authentic cultural narrative pipelines",
      ],
    },
    {
      year: "2019",
      title: "Original IPs & Breakthrough Short Films",
      subtitle: "Captivating Audiences & International Festivals",
      description: "Released flagship original short films and series pilots, proving that African storytelling possesses immense global appeal and commercial viability.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1280&auto=format&fit=crop",
      highlights: [
        "Selected at international animation festivals",
        "Expanded into 3D character rigging & motion graphics",
        "Partnered with corporate & brand clients",
      ],
    },
    {
      year: "2022",
      title: "Global Alliances: Cartoon Network & UNDP",
      subtitle: "Cross-Border Collaborations & Social Impact",
      description: "Collaborated with major international networks and United Nations agencies to create impactful animated campaigns, explainer videos, and social awareness series.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1280&auto=format&fit=crop",
      highlights: [
        "Produced content for Cartoon Network & UNDP",
        "Received international creative storytelling awards",
        "Launched talent incubation programs",
      ],
    },
    {
      year: "2024",
      title: "Feature-Length Slate & Streaming Production",
      subtitle: "Disney, Netflix & DreamWorks Collaborations",
      description: "Expanded pipeline to produce feature-length animated stories and episodic series alongside leading global streaming giants and international animation hubs.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1280&auto=format&fit=crop",
      highlights: [
        "Collaborating with Netflix, Disney, and Cartoon Network",
        "Established MagicLab Academy for animator training",
        "Built state-of-the-art Lekki, Lagos studio complex",
      ],
    },
    {
      year: "2026+",
      title: "Next-Gen Animation & Global Distribution",
      subtitle: "Connecting Cultures Worldwide Through Animation",
      description: "Today, Magic Carpet Studios stands as a globally recognized powerhouse for authentic African animation, unlocking vast creative potential through world-class original IPs and client productions.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1280&auto=format&fit=crop",
      highlights: [
        "Multiple original feature films in production",
        "Global distribution across streaming platforms",
        "Nurturing the next generation of African animators",
      ],
    },
  ];

  const currentEvent = eras[activeEra];

  return (
    <section id="timeline" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="space-y-12">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>8 Years of Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Our 8-Year Story & Growth</h2>
          </div>
          <p className="text-sm text-white/60 max-w-md">
            Trace our evolution from an ambitious Lagos studio startup into a globally recognized animation powerhouse.
          </p>
        </div>

        {/* Horizontal Year Selector Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-white/15">
          {eras.map((era, index) => {
            const isActive = activeEra === index;
            return (
              <button
                key={era.year}
                onClick={() => setActiveEra(index)}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {era.year} — {era.title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Active Era Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-xl animate-hero-fade">
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-mono font-semibold">
              MILESTONE {currentEvent.year}
            </div>

            <h3 className="text-2xl sm:text-4xl font-light leading-tight text-white">
              {currentEvent.title}
            </h3>

            <div className="text-sm font-medium text-white/50 uppercase tracking-widest">
              {currentEvent.subtitle}
            </div>

            <p className="text-base text-white/80 leading-relaxed">
              {currentEvent.description}
            </p>

            {/* Key Accomplishments Checklist */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <div className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-3">Key Highlights</div>
              {currentEvent.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Frame */}
          <div className="lg:col-span-5 relative group rounded-xl overflow-hidden aspect-[4/3] border border-white/15 shadow-2xl">
            <img
              src={currentEvent.image}
              alt={currentEvent.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/80 font-mono backdrop-blur-md bg-black/40 p-2.5 rounded-lg border border-white/10">
              [MAGIC CARPET ARCHIVE // {currentEvent.year}]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
