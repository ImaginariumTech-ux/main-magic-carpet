"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { IPItem } from "@/components/IPContentRail";

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<IPItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const partnerList: IPItem[] = [
    {
      id: "cartoon-network",
      youtubeId: "wgSuS3FAVhE",
      youtubeUrl: "https://www.youtube.com/watch?v=wgSuS3FAVhE",
      title: "Cartoon Network Partnership",
      category: "Broadcast Animation Leaders",
      badgeStatus: "FEATURED BROADCAST PARTNER",
      releaseYear: "2025",
      maturityRating: "TV-PG",
      duration: "Prime Time Series",
      logline: "Crafting high-octane 2D and 3D animated content, short series, and character-driven stories that entertain and inspire young audiences globally.",
      synopsis: "In collaboration with Cartoon Network, Magic Carpet Studios delivers vibrant broadcast animation, engaging storyboards, and short-form original content.",
      director: "Cartoon Network & Magic Carpet",
      thumbnail: "https://img.youtube.com/vi/wgSuS3FAVhE/hqdefault.jpg",
      backdrop: "https://img.youtube.com/vi/wgSuS3FAVhE/maxresdefault.jpg",
      tags: ["Broadcast Animation", "Shorts", "2D/3D Series", "Youth Entertainment"],
    },
    {
      id: "undp",
      youtubeId: "IJmiDCY_tAE",
      youtubeUrl: "https://www.youtube.com/watch?v=IJmiDCY_tAE",
      title: "United Nations Development Programme",
      category: "Social Impact & Motion Graphics",
      badgeStatus: "UNDP STRATEGIC ALLIANCE",
      releaseYear: "2024",
      maturityRating: "PG",
      duration: "Continental Campaign",
      logline: "Creating powerful visual campaigns, animated documentaries, and motion graphics driving social change, environmental sustainability, and education across Africa.",
      synopsis: "Partnering with the UNDP to produce high-impact animated motion graphics and visual storytelling campaigns that champion cultural heritage, climate action, and youth empowerment.",
      director: "UNDP & Magic Carpet",
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/sddefault.jpg",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      tags: ["Social Impact", "UNDP Partner", "Motion Graphics", "Sustainability"],
    },
    {
      id: "african-animation-network",
      youtubeId: "wePT7aKdgPM",
      youtubeUrl: "https://www.youtube.com/watch?v=wePT7aKdgPM",
      title: "African Animation Network (AAN)",
      category: "Continental Animation Alliance",
      badgeStatus: "INDUSTRY NETWORK PARTNER",
      releaseYear: "2025",
      maturityRating: "PG-13",
      duration: "Regional Co-Production",
      logline: "Co-producing and distributing original African animation slates across international film festivals and regional broadcast networks.",
      synopsis: "Partnering with the African Animation Network to empower indigenous animation talent and establish robust distribution channels across the continent.",
      director: "AAN & Magic Carpet Studios",
      thumbnail: "https://img.youtube.com/vi/wePT7aKdgPM/sddefault.jpg",
      backdrop: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      tags: ["Continental Network", "Co-Production", "Film Festivals", "Distribution"],
    },
    {
      id: "british-council",
      youtubeId: "IJmiDCY_tAE",
      youtubeUrl: "https://www.youtube.com/watch?v=IJmiDCY_tAE",
      title: "British Council & Creative Alliances",
      category: "Global Cultural & Arts Exchange",
      badgeStatus: "CULTURAL HERITAGE PARTNER",
      releaseYear: "2024",
      maturityRating: "PG",
      duration: "Cultural Arts Grant",
      logline: "Collaborating on creative economy projects, digital arts initiatives, and cultural heritage preservation through high-end animation.",
      synopsis: "Supported by international cultural funds to preserve African oral traditions, literature, and folklore through cutting-edge digital animation.",
      director: "British Council & Magic Carpet",
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/sddefault.jpg",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      tags: ["Cultural Heritage", "Digital Arts", "Preservation", "Creative Economy"],
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Spotlight Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-yellow-400 font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="uppercase tracking-wider">Clients & Partners Showcase</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
          Global Clients & <br />
          <em className="font-serif-accent font-normal text-yellow-400 not-italic italic">Strategic Partners</em>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
          Collaborating with international broadcasters, cultural organizations, and continental distribution alliances to bring world-class animation to millions.
        </p>
      </section>

      {/* 2-Column Split Projects List (Media on Left, Details on Right) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20">
        {partnerList.map((partner, index) => (
          <div
            key={partner.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md hover:border-yellow-400/40 transition-all duration-500 shadow-2xl"
          >
            {/* Left Column: Image / Video Media Container */}
            <div className="lg:col-span-7 relative group">
              <div
                className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl cursor-pointer"
                onClick={() => setSelectedPartner(partner)}
              >
                <img
                  src={partner.backdrop || partner.thumbnail}
                  alt={partner.title}
                  className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-yellow-400 uppercase tracking-wider font-mono">
                    {partner.badgeStatus}
                  </span>
                </div>

                {/* Play Video Trigger Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/70 font-mono">
                  <span>Partner Showcase Reel</span>
                  <span className="text-yellow-400">Click to Play ↗</span>
                </div>
              </div>
            </div>

            {/* Right Column: Header & Details Text */}
            <div className="lg:col-span-5 space-y-5">
              {/* Category Subtitle */}
              <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span>{partner.category}</span>
              </div>

              {/* Header Text */}
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-snug">
                {partner.title}
              </h2>

              {/* Body Text */}
              <p className="text-base text-white/80 font-light leading-relaxed">
                {partner.synopsis || partner.logline}
              </p>

              {/* Tags / Focus Areas */}
              <div className="space-y-2 pt-2">
                <div className="text-xs uppercase tracking-wider text-white/40 font-mono">Focus Areas & Format</div>
                <div className="flex flex-wrap gap-2">
                  {partner.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedPartner(partner)}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Partner Reel</span>
                </button>

                <button
                  data-cal-namespace="30min"
                  data-cal-link="magic-carpet-ywfdx8/30min"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition-all duration-300"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Full-Screen Theater Player Modal */}
      <IPTheaterModal
        ip={selectedPartner}
        onClose={() => setSelectedPartner(null)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Inquiry Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
