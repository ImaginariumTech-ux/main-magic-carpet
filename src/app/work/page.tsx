"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPHeroBillboard from "@/components/IPHeroBillboard";
import IPContentRail, { IPItem } from "@/components/IPContentRail";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WorkPage() {
  const [selectedIp, setSelectedIp] = useState<IPItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const ipList: IPItem[] = [
    {
      id: "mallam-illia",
      youtubeId: "wePT7aKdgPM",
      youtubeUrl: "https://www.youtube.com/watch?v=wePT7aKdgPM",
      title: "The Passport of Mallam Illia",
      category: "Animated Feature Film",
      badgeStatus: "IN PRODUCTION • FEATURE FILM",
      releaseYear: "2026",
      maturityRating: "PG-13",
      duration: "95 min",
      logline: "An epic heroic saga of love, honor, betrayal, and vengeance set across northern Nigeria.",
      synopsis: "Based on Cyprian Ekwensi's renowned classic novel, The Passport of Mallam Illia follows an elderly warrior recounting a lifelong tale of fiery passion, deadly duels, betrayal, and revenge in pre-independence northern Nigeria.",
      director: "Ferdinand Adimefe",
      thumbnail: "/illia_poster.jpg",
      backdrop: "/illia_poster.jpg",
      tags: ["Epic Action", "Historical Legend", "Cultural Heritage", "Feature Film"],
    },
    {
      id: "legends-of-bulan",
      youtubeId: "15Zfj4qgLB0",
      youtubeUrl: "https://www.youtube.com/watch?v=15Zfj4qgLB0",
      title: "Legends of Bulan",
      category: "Animated Fantasy Series",
      badgeStatus: "ORIGINAL SERIES • INVESTMENT STAGE",
      releaseYear: "2025",
      maturityRating: "TV-PG",
      duration: "24 min / episode",
      logline: "A mythic voyage of ancient spirits, mystical kingdoms, and heroics across African realm lore.",
      synopsis: "Legends of Bulan immerses viewers into a breathtaking fantasy universe where ancient African gods, mythical beasts, and young heroes clash to protect the moonlit realms from shadow spirits.",
      director: "Chekwube Okonkwo",
      thumbnail: "/akousa.png",
      backdrop: "/akousa.png",
      tags: ["Mythology", "Action-Fantasy", "Magical Realism", "Animation Series"],
    },
    {
      id: "sip",
      youtubeId: "IJmiDCY_tAE",
      youtubeUrl: "https://www.youtube.com/watch?v=IJmiDCY_tAE",
      title: "Sip",
      category: "Animated Short Film",
      badgeStatus: "FESTIVAL WINNER • SHORT FILM",
      releaseYear: "2024",
      maturityRating: "PG",
      duration: "8 min",
      logline: "A poignant visual poem exploring human choices, addiction, and the fragile moments that define us.",
      synopsis: "Sip is a critically acclaimed animated short film blending surrealistic 2D art with emotional storytelling, capturing an intimate journey through temptation, introspection, and redemption.",
      director: "Ferdinand Adimefe",
      thumbnail: "/sip_poster.jpg",
      backdrop: "/sip_poster.jpg",
      tags: ["Drama", "Surreal Art", "Award Winner", "Short Film"],
    },
  ];

  const [activeClientId, setActiveClientId] = useState<string>("");

  const clientWorkList = [
    {
      id: "garbage-boy",
      title: "Garbage Boy and Trash Can",
      category: "Animated Series",
      description: "Light-hearted family animated series produced for Cartoon Network.",
      client: "CARTOON NETWORK",
      poster: "/garbage_boy.webp",
    },
    {
      id: "titi",
      title: "Adventures of Titi",
      category: "Animated Explainer Series",
      description: "A series to make life insurance easy to understand and fun to watch for Tangerine Africa.",
      client: "TANGERINE AFRICA",
      poster: "/tangerine.png",
    },
    {
      id: "dmag",
      title: "Dr Majek and The Ghost",
      category: "Public Health Education Series",
      description: "A public health education series about female reproductive health.",
      client: "RAES",
      poster: "/majss.jpg.jpeg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Spotlight Banner Carousel */}
      <IPHeroBillboard
        items={ipList}
        onPlayTrailer={(ip) => setSelectedIp(ip)}
      />

      {/* Main Original IPs Rail */}
      <IPContentRail
        title="Featured Original IPs"
        subtitle="Explore official trailers for Magic Carpet's original animated movies and series. For Investment, licensing, co-pro and Distribution enquiries, click below to talk to our team."
        items={ipList}
        onSelectIp={(ip) => setSelectedIp(ip)}
      />

      {/* Awards for Our Work Section */}
      <AwardsSection />

      {/* Client Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E121B]">
              Client <em className="font-serif-accent italic text-[#0E121B]">Work</em>
            </h2>
            <p className="text-[#0E121B]/70 text-lg leading-relaxed">
              We collaborate with global networks, agencies, and organisations to deliver high-impact animated series, commercials, and explainer campaigns.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E121B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1A2232] transition-all duration-300 shadow-xl"
            >
              <span>Talk to our team</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Interactive Expanding Card Accordion */}
        <div className="flex flex-col md:flex-row gap-6 min-h-[560px] lg:min-h-[600px] w-full">
          {clientWorkList.map((client) => {
            const isActive = activeClientId === client.id;
            return (
              <div
                key={client.id}
                onClick={() => setActiveClientId((prev) => (prev === client.id ? "" : client.id))}
                className={`group relative rounded-[36px] overflow-hidden cursor-pointer transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-white border ${
                  isActive
                    ? "flex-[3.5] border-white/40 shadow-2xl bg-black/40 ring-1 ring-white/20"
                    : "flex-1 border-white/10 hover:border-white/30 opacity-90 hover:opacity-100 bg-black/60"
                }`}
              >
                {/* Background Cover Image */}
                <img
                  src={client.poster}
                  alt={client.title}
                  className={`absolute inset-0 w-full h-full object-cover filter contrast-105 transition-transform duration-700 ${
                    isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                  }`}
                />

                {/* Ambient Dark Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none" />

                {/* Top Row: Glassmorphism Client Badge & Arrow Button */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                    <span>{client.client}</span>
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
                    {client.category}
                  </div>
                  <h3
                    className={`font-bold text-white tracking-tight leading-tight drop-shadow-lg transition-all duration-300 ${
                      isActive ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {client.title}
                  </h3>

                  {isActive ? (
                    <div className="space-y-5 animate-hero-fade pt-1">
                      <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-xl drop-shadow-md">
                        {client.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          href="/work-with-us"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
                        >
                          <span>Talk to our team</span>
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
      </section>


      {/* Footer */}
      <Footer showPreFooter={true} onOpenContact={() => setContactOpen(true)} />

      {/* Full-Screen YouTube Theater Player Modal */}
      <IPTheaterModal
        ip={selectedIp}
        onClose={() => setSelectedIp(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Inquiry Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}

