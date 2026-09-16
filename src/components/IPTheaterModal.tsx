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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-hero-fade">
      {/* Background Click Overlay to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Theater Box */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0B0E14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 text-white hover:bg-yellow-400 hover:text-black border border-white/20 flex items-center justify-center text-lg font-bold transition-all duration-300 shadow-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Embedded YouTube Player Container (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black shrink-0">
          <iframe
            src={`https://www.youtube.com/embed/${ip.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={ip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Details & Information Body */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-extrabold tracking-wider uppercase">
                  {ip.category}
                </span>
                <span className="text-xs font-mono text-white/50">{ip.releaseYear}</span>
                <span className="px-1.5 py-0.5 border border-white/30 rounded text-[10px] text-white/70 font-mono">
                  {ip.maturityRating}
                </span>
                <span className="text-xs text-yellow-400 font-mono">{ip.duration}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                {ip.title}
              </h2>
            </div>

            {/* Direct YouTube Link Button */}
            <a
              href={ip.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
            >
              <span>Watch on YouTube</span>
              <span>↗</span>
            </a>
          </div>

          {/* Logline & Full Synopsis */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Story Synopsis</h3>
              <p className="text-base text-white/90 font-light leading-relaxed">
                {ip.synopsis}
              </p>
            </div>

            {/* Credits Sidebar */}
            <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-yellow-400">Production Credits</h3>
              <div className="space-y-2 text-xs text-white/80 font-mono">
                <div>
                  <span className="text-white/40">Director:</span> {ip.director}
                </div>
                <div>
                  <span className="text-white/40">Studio:</span> Magic Carpet Studios
                </div>
                <div>
                  <span className="text-white/40">Format:</span> 2D / 3D Animation
                </div>
                <div>
                  <span className="text-white/40">Status:</span> {ip.badgeStatus}
                </div>
              </div>

              {onOpenContact && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full mt-4 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                >
                  Inquire Licensing & Co-Pro
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
