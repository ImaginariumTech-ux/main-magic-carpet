"use client";

import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: string;
  type: "ip" | "partner";
  poster: string;
  video: string;
  youtubeId?: string;
  span: "col-span-1" | "col-span-2";
  aspect: "aspect-[3/2]" | "aspect-square";
  description: string;
  credits: string[];
}

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "ip" | "partner">("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "mallam-illia",
      type: "ip",
      title: "The Passport of Mallam Illia",
      client: "Magic Carpet Original • Feature Film",
      category: "Original Feature Film",
      poster: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      youtubeId: "wePT7aKdgPM",
      video: "https://www.youtube.com/watch?v=wePT7aKdgPM",
      span: "col-span-1",
      aspect: "aspect-[3/2]",
      description: "Based on Cyprian Ekwensi's renowned classic novel, following an elderly warrior recounting a lifelong tale of fiery passion, deadly duels, betrayal, and revenge in pre-independence northern Nigeria.",
      credits: ["Director: Ferdinand Adimefe", "Studio: Magic Carpet Studios", "Format: 2D/3D Animated Feature"],
    },
    {
      id: "legends-of-bulan",
      type: "ip",
      title: "Legends of Bulan",
      client: "Magic Carpet Original • Series",
      category: "Original Fantasy Series",
      poster: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
      youtubeId: "15Zfj4qgLB0",
      video: "https://www.youtube.com/watch?v=15Zfj4qgLB0",
      span: "col-span-1",
      aspect: "aspect-[3/2]",
      description: "Immersing viewers into a breathtaking fantasy universe where ancient African gods, mythical beasts, and young heroes clash to protect the moonlit realms.",
      credits: ["Director: Chekwube Okonkwo", "Studio: Magic Carpet Studios", "Format: Animated Series Slate"],
    },
    {
      id: "sip",
      type: "ip",
      title: "Sip",
      client: "Magic Carpet Original • Short Film",
      category: "Award-Winning Short Film",
      poster: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      youtubeId: "IJmiDCY_tAE",
      video: "https://www.youtube.com/watch?v=IJmiDCY_tAE",
      span: "col-span-1",
      aspect: "aspect-[3/2]",
      description: "A critically acclaimed animated short film blending surrealistic 2D art with emotional storytelling, capturing an intimate journey through temptation and redemption.",
      credits: ["Director: Ferdinand Adimefe", "Awards: Multi-Festival Laureate", "Format: 2D Surreal Art Short"],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "ip") return project.type === "ip";
    if (activeFilter === "partner") return project.type === "partner";
    return true;
  });

  return (
    <section id="featured-work" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Portfolio Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span>Studio Portfolio & Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Featured Work</h2>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-yellow-400 text-black shadow-lg"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            All Portfolio ({projects.length})
          </button>

          <button
            onClick={() => setActiveFilter("ip")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeFilter === "ip"
                ? "bg-yellow-400 text-black shadow-lg"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            Original IPs ({projects.filter((p) => p.type === "ip").length})
          </button>

          <button
            onClick={() => setActiveFilter("partner")}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeFilter === "partner"
                ? "bg-yellow-400 text-black shadow-lg"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            Clients & Partners ({projects.filter((p) => p.type === "partner").length})
          </button>
        </div>
      </div>

      {/* Portfolio Grid / Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                className={`${project.span} group cursor-pointer animate-hero-fade`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
              >
                <div
                  className={`relative w-full ${project.aspect} bg-neutral-900 rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:border-yellow-400/40 transition-all duration-300 shadow-xl`}
                >
                  {/* Static Image Poster */}
                  <img
                    src={project.poster}
                    alt={project.title}
                    className="h-full w-full object-cover scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.type === "ip" && (
                      <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-black text-[10px] font-extrabold uppercase tracking-widest">
                        IP
                      </span>
                    )}
                  </div>

                  {/* Hover Play Button Trigger */}
                  <div
                    className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg text-white group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.client && <p className="text-sm text-white/50 font-mono">{project.client}</p>}
                  </div>
                  <span className="text-white/40 group-hover:text-yellow-400 transition-colors text-sm">↗</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md px-6">
          <h3 className="text-xl font-medium text-white mb-2">No Client & Partner Projects Currently Featured</h3>
          <p className="text-sm text-white/60 max-w-md mx-auto">
            Our client showcase and partner collaborations section will be updated soon.
          </p>
        </div>
      )}
    </section>
  );
}
