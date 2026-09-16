"use client";

import { useEffect } from "react";
import { Project } from "./FeaturedWork";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/95 backdrop-blur-2xl animate-hero-fade">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-neutral-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Close Button Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-white">
              {project.category}
            </span>
            {project.client && <span className="text-xs text-white/50">{project.client}</span>}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white text-lg font-light focus:outline-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black w-full overflow-hidden">
          <video
            src={project.video}
            controls
            autoPlay
            poster={project.poster}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Information Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-light text-white">{project.title}</h2>
              <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors shrink-0"
            >
              Inquire Similar Craft
            </button>
          </div>

          {/* Credits Grid */}
          <div className="border-t border-white/10 pt-6">
            <div className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">
              Production Credits
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  {credit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
