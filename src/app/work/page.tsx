"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPHeroBillboard from "@/components/IPHeroBillboard";
import IPContentRail, { IPItem } from "@/components/IPContentRail";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
import TalkWithUsModal from "@/components/TalkWithUsModal";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WorkPage() {
  const [selectedIp, setSelectedIp] = useState<IPItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [talkWithUsOpen, setTalkWithUsOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<string>("Legends of bulan");

  const handleOpenTalkWithUs = (projectName?: string) => {
    if (projectName) {
      setSelectedProjectForModal(projectName);
    }
    setTalkWithUsOpen(true);
  };

  const ipList: IPItem[] = [
    {
      id: "mallam-illia",
      youtubeId: "wePT7aKdgPM",
      youtubeUrl: "https://www.youtube.com/watch?v=wePT7aKdgPM",
      title: "The Passport of Mallam Ilia",
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

  const clientWorkList: IPItem[] = [
    {
      id: "garbage-boy",
      youtubeId: "wgSuS3FAVhE",
      youtubeUrl: "https://www.youtube.com/watch?v=wgSuS3FAVhE",
      title: "Garbage Boy and Trash Can",
      category: "Animated Series",
      badgeStatus: "CARTOON NETWORK • ANIMATED SERIES",
      releaseYear: "2023",
      maturityRating: "TV-Y7",
      duration: "11 min / episode",
      logline: "Light-hearted family animated series produced for Cartoon Network.",
      synopsis: "Light-hearted family animated series produced for Cartoon Network featuring Garbage Boy and Trash Can.",
      director: "Magic Carpet Studios",
      thumbnail: "/garbage_boy.webp",
      backdrop: "/garbage_boy.webp",
      tags: ["Cartoon Network", "Animated Series", "Comedy"],
    },
    {
      id: "titi",
      youtubeId: "IL9g7Xh9oOM",
      youtubeUrl: "https://youtu.be/IL9g7Xh9oOM",
      title: "Adventures of Titi",
      category: "Animated Explainer Series",
      badgeStatus: "TANGERINE AFRICA • EXPLAINER SERIES",
      releaseYear: "2024",
      maturityRating: "G",
      duration: "3 min / episode",
      logline: "A series to make life insurance easy to understand and fun to watch for Tangerine Africa.",
      synopsis: "A fun and educational animated series designed to break down complex financial and insurance concepts into engaging stories for Tangerine Africa.",
      director: "Magic Carpet Studios",
      thumbnail: "/tangerine.png",
      backdrop: "/tangerine.png",
      tags: ["Explainer", "Financial Literacy", "2D Animation"],
    },
    {
      id: "dmag",
      youtubeId: "NQ01ewwk0dk",
      youtubeUrl: "https://youtu.be/NQ01ewwk0dk",
      title: "Dr Majek and The Ghost",
      category: "Public Health Education Series",
      badgeStatus: "RAES • PUBLIC HEALTH EDUCATION",
      releaseYear: "2024",
      maturityRating: "PG",
      duration: "5 min / episode",
      logline: "A public health education series about female reproductive health.",
      synopsis: "Dr Majek and The Ghost is an engaging public health animation series focused on raising awareness around female reproductive health.",
      director: "Magic Carpet Studios",
      thumbnail: "/majss.jpg.jpeg",
      backdrop: "/majss.jpg.jpeg",
      tags: ["Public Health", "Educational", "Social Impact"],
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
        onOpenTalkWithUs={handleOpenTalkWithUs}
      />

      {/* Client Work Section */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E121B]">
              Client <em className="font-serif-accent italic text-[#062a82]">Work</em>
            </h2>
            <p className="text-[#0E121B]/70 text-lg leading-relaxed">
              We collaborate with global networks, agencies, and organisations to deliver high-impact animated series, commercials, and explainer campaigns.
            </p>
          </div>
        </div>

        {/* 3-Column Grid Cards (styled like IPContentRail) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientWorkList.map((client) => (
            <div
              key={client.id}
              className="group relative rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white border border-slate-200/90 shadow-xl min-h-[480px] bg-slate-900"
            >
              {/* Background Cover Image */}
              <img
                src={client.backdrop || client.thumbnail}
                alt={client.title}
                className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Ambient Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 pointer-events-none" />

              {/* Top Row: Client Badge */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/25 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
                  <span>{client.badgeStatus || client.category}</span>
                </div>
              </div>

              {/* Bottom Area: Category, Title, Description & Watch Trailer Action Button */}
              <div className="relative z-10 space-y-4 pt-4">
                <div className="text-xs uppercase tracking-wider text-white/70 font-mono font-semibold">
                  {client.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug drop-shadow-lg">
                  {client.title}
                </h3>

                <p className="text-sm text-white/90 font-light leading-relaxed drop-shadow-md">
                  {client.logline || client.synopsis}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedIp(client)}
                    className="px-5 py-2.5 rounded-full bg-white text-[#0E121B] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Watch Trailer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
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

      {/* Talk With Us Modal */}
      <TalkWithUsModal
        isOpen={talkWithUsOpen}
        onClose={() => setTalkWithUsOpen(false)}
        defaultProject={selectedProjectForModal}
      />
    </main>
  );
}

