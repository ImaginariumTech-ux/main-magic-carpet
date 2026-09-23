"use client";

import { useEffect } from "react";
import { IPItem } from "./IPContentRail";

interface IPTheaterModalProps {
  ip: IPItem | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function IPTheaterModal({ ip, onClose, onOpenContact }: IPTheaterModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (ip) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ip, onClose]);

  if (!ip) return null;

  const handleTalkToTeam = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.location.href = "/work-with-us";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-xl animate-hero-fade">
      {/* Background Click Overlay to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Light Theme Theater Box */}
      <div className="relative z-10 w-full max-w-5xl bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto text-[#0E121B]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#0E121B] text-white hover:bg-slate-800 flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Embedded Video Player Container (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black shrink-0">
          {ip.videoUrl ? (
            <video
              src={ip.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : ip.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ip.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={ip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/50 text-sm font-mono">
              Video media preview coming soon
            </div>
          )}
        </div>

        {/* Details & Information Body */}
        <div className="p-6 sm:p-10 space-y-6 bg-white">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#0E121B] text-white text-xs font-mono font-bold tracking-wider uppercase">
                  {ip.category}
                </span>
                <span className="text-xs font-mono text-slate-500">{ip.releaseYear}</span>
                <span className="px-2 py-0.5 border border-slate-300 rounded text-[10px] text-slate-600 font-mono">
                  {ip.maturityRating}
                </span>
                <span className="text-xs text-[#0E121B] font-mono font-semibold">{ip.duration}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E121B] tracking-tight">
                {ip.title}
              </h2>
            </div>

            {/* Action Button: Talk to our team */}
            <div>
              <button
                onClick={handleTalkToTeam}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E121B] hover:bg-[#1A2232] text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105"
              >
                <span>Talk to our team</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Logline & Full Synopsis */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Story Synopsis</h3>
            <p className="text-base sm:text-lg text-[#0E121B]/80 font-light leading-relaxed max-w-3xl">
              {ip.synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
