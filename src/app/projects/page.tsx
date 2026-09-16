"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPHeroBillboard from "@/components/IPHeroBillboard";
import IPContentRail, { IPItem } from "@/components/IPContentRail";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
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
      badgeStatus: "ORIGINAL SERIES • SEASON 1",
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

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Spotlight Banner Carousel */}
      <IPHeroBillboard
        items={ipList}
        onPlayTrailer={(ip) => setSelectedIp(ip)}
      />

      {/* Main Catalogue Content Rail */}
      <IPContentRail
        title="Featured Original IPs"
        subtitle="Explore official trailers for Magic Carpet's original animated movies and series"
        items={ipList}
        onSelectIp={(ip) => setSelectedIp(ip)}
      />

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
