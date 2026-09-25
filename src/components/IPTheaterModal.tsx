"use client";

import { useEffect } from "react";
import { IPItem } from "./IPContentRail";

interface IPTheaterModalProps {
  ip: IPItem | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function IPTheaterModal({ ip, onClose }: IPTheaterModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-hero-fade">
      {/* Background Click Overlay to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Theater Box — Pure Video Player (Zero Bottom Info) */}
      <div className="relative z-10 w-full max-w-5xl bg-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-black border border-white/20 flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Embedded Video Player Container (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black">
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
      </div>
    </div>
  );
}
