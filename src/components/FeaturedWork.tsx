"use client";

import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: string;
  poster: string;
  video: string;
  span: "col-span-1" | "col-span-2";
  aspect: "aspect-[3/2]" | "aspect-square";
  description: string;
  credits: string[];
}

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "brand-reel",
      title: "The Mill Brand Reel 2026",
      client: "The Mill Global",
      category: "Studio Showreel",
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1280&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-face-animation-41484-large.mp4",
      span: "col-span-2",
      aspect: "aspect-[3/2]",
      description: "Our flagship compilation of visual effects, virtual production, and groundbreaking creative storytelling from studios across London, Paris, Seoul, and Liège.",
      credits: ["Executive Producer: Alex Vance", "VFX Supervisor: Marcus Wright", "Colorist: Elena Rostova"],
    },
    {
      id: "luxury-fashion",
      title: "Luxury & Fashion Reel 2026",
      client: "Haute Couture Collection",
      category: "Fashion & Beauty",
      poster: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
      span: "col-span-1",
      aspect: "aspect-square",
      description: "High-end digital beauty retouching, photorealistic garment simulations, and surreal lighting design for global luxury fashion houses.",
      credits: ["Creative Director: Jean-Luc Dupont", "Lead Compositor: Sophia Chen"],
    },
    {
      id: "film-series",
      title: "Film & Series Reel 2026",
      client: "Global Streaming Studios",
      category: "Episodic & Feature Film",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-futuristic-city-41482-large.mp4",
      span: "col-span-1",
      aspect: "aspect-square",
      description: "High-complexity CG creature effects, digital doubles, and immersive environment extensions for major theatrical releases.",
      credits: ["VFX Director: David Miller", "CG Supervisor: Sarah Jenkins"],
    },
    {
      id: "brand-content",
      title: "Brand & Content Reel 2026",
      client: "Integrated Production",
      category: "Commercial & Content",
      poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1280&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-41530-large.mp4",
      span: "col-span-2",
      aspect: "aspect-[3/2]",
      description: "Integrated multi-platform campaigns blending real-time LED volume shooting with generative CG environments.",
      credits: ["Director: Antoine Laurent", "Lead Animator: Kenji Sato"],
    },
    {
      id: "environment-reel",
      title: "Environment & World Building Reel",
      client: "The Mill VFX Studio",
      category: "CGI Environments",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1280&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-lights-41528-large.mp4",
      span: "col-span-2",
      aspect: "aspect-[3/2]",
      description: "Photorealistic 3D matte painting, volumetric atmospheric simulations, and procedural cityscapes for cinema.",
      credits: ["Environment Lead: Carlos Mendez", "FX Lead: Maya Lin"],
    },
    {
      id: "troll-2",
      title: "Troll 2",
      client: "Motion Picture Release",
      category: "Creature VFX",
      poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-glowing-crystal-ball-41527-large.mp4",
      span: "col-span-1",
      aspect: "aspect-square",
      description: "Full creature pipeline execution involving muscle dynamics, groom simulations, and intricate environmental destruction.",
      credits: ["Creature Supervisor: Henrik Lindqvist", "Lighter: Oliver Thorne"],
    },
    {
      id: "louis-vuitton",
      title: "Louis Vuitton '130th Anniversary'",
      client: "Louis Vuitton",
      category: "Luxury Campaign",
      poster: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-liquid-gold-swirling-background-41480-large.mp4",
      span: "col-span-1",
      aspect: "aspect-square",
      description: "A surreal heritage campaign depicting iconic monogram trunks transforming into liquid gold kinetic sculptures.",
      credits: ["Creative Director: Camille Vane", "Design Lead: Lucas Moreau"],
    },
    {
      id: "ralph-lauren",
      title: "Ralph Lauren 'Wimbledon'",
      client: "Ralph Lauren",
      category: "Sports & Elegance",
      poster: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1280&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-circuit-lines-41529-large.mp4",
      span: "col-span-2",
      aspect: "aspect-[3/2]",
      description: "Dynamic fluid cloth physics and motion-tracked digital stadium extensions capturing the essence of English tennis tradition.",
      credits: ["VFX Director: James Sterling", "Producer: Chloe Bennet"],
    },
    {
      id: "alpine-a390",
      title: "Alpine 'A390'",
      client: "Alpine Motors",
      category: "Automotive CGI",
      poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      video: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-futuristic-tunnel-41483-large.mp4",
      span: "col-span-1",
      aspect: "aspect-square",
      description: "Full CAD vehicle visualization with ray-traced reflections, high-speed camera tracking, and custom lighting rigs.",
      credits: ["Automotive Lead: Pierre Dubois", "Compositor: Leo Rossi"],
    },
  ];

  return (
    <section id="featured-work" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">Portfolio</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">Featured work</h2>
        </div>
        <div className="text-sm text-white/60">
          Showing <span className="text-white font-medium">{projects.length} curated projects</span> across VFX, CGI & Film
        </div>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;
          return (
            <div
              key={project.id}
              className={`${project.span} group cursor-pointer`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject(project)}
            >
              <div
                className={`relative w-full ${project.aspect} bg-neutral-900 rounded-xl overflow-hidden mb-3 border border-white/10`}
              >
                {/* Static Image Poster */}
                <img
                  src={project.poster}
                  alt={project.title}
                  className="h-full w-full object-cover scale-[1.01] transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Seamless Video Hover Overlay */}
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  autoPlay={isHovered}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white/90 font-medium">
                    {project.category}
                  </span>
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
                  <h3 className="font-medium text-lg text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  {project.client && <p className="text-sm text-white/50">{project.client}</p>}
                </div>
                <span className="text-white/40 group-hover:text-white transition-colors text-sm">↗</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
