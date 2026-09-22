"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPHeroBillboard from "@/components/IPHeroBillboard";
import IPContentRail, { IPItem } from "@/components/IPContentRail";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
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
      thumbnail: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      backdrop: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
      backdrop: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
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
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      backdrop: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      tags: ["Drama", "Surreal Art", "Award Winner", "Short Film"],
    },
  ];

  const clientWorkList = [
    {
      title: "Garbage Boy and Trash Can",
      category: "Animated Series",
      description: "Light-hearted family animated series produced for Cartoon Network.",
      tag: "Cartoon Network / Family Series",
    },
    {
      title: "Adventures of Titi",
      category: "Animated Explainer Series",
      description: "A series to make life insurance easy to understand and fun to watch for Tangerine Africa.",
      tag: "Tangerine Africa / Explainer",
    },
    {
      title: "Dr Majek and The Ghost (DMAG)",
      category: "Public Health Education Series",
      description: "A public health education series about female reproductive health.",
      tag: "RAES / Public Health",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
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
        subtitle="Explore official trailers for Magic Carpet's original animated movies and series. For Investment, licensing, co-pro and distribution enquiries, click below to talk to our team."
        items={ipList}
        onSelectIp={(ip) => setSelectedIp(ip)}
      />

      {/* Client Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Client <span className="font-serif-accent italic text-yellow-400">Work</span>
          </h2>
          <p className="text-white/60 text-base mt-2 max-w-2xl">
            We collaborate with global networks, agencies, and brands to deliver high-impact animated series, commercials, and explainer campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientWorkList.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#0B0E14] border border-white/10 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-yellow-400 font-mono font-semibold">
                  {client.tag}
                </span>
                <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  {client.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {client.description}
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-6">
                <Link
                  href="/work-with-us"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-yellow-400 transition-colors"
                >
                  <span>Inquire about service work</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Start Project Banner */}
      <section className="py-16 bg-gradient-to-r from-yellow-400/10 via-black to-yellow-400/10 border-y border-white/10 text-center px-4">
        <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
          Your next project <em className="font-serif-accent italic">starts here.</em>
        </h3>
        <Link
          href="/work-with-us"
          className="inline-block px-8 py-3.5 rounded-full bg-yellow-400 text-black font-semibold uppercase tracking-wider text-sm hover:bg-yellow-300 transition-all duration-300 shadow-xl"
        >
          Work with us
        </Link>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

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
