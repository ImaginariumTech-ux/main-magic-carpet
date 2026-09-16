"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import IPHeroBillboard from "@/components/IPHeroBillboard";
import IPContentRail, { IPItem } from "@/components/IPContentRail";
import IPTheaterModal from "@/components/IPTheaterModal";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<IPItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const partnerList: IPItem[] = [
    {
      id: "cartoon-network",
      youtubeId: "15Zfj4qgLB0",
      youtubeUrl: "https://www.youtube.com/watch?v=15Zfj4qgLB0",
      title: "Cartoon Network Partnership",
      category: "Broadcast Animation Leaders",
      badgeStatus: "FEATURED BROADCAST PARTNER",
      releaseYear: "2025",
      maturityRating: "TV-PG",
      duration: "Prime Time Series",
      logline: "Crafting high-octane 2D and 3D animated content, short series, and character-driven stories that entertain and inspire young audiences globally.",
      synopsis: "In collaboration with Cartoon Network, Magic Carpet Studios delivers vibrant broadcast animation, engaging storyboards, and short-form original content.",
      director: "Cartoon Network & Magic Carpet",
      thumbnail: "https://img.youtube.com/vi/15Zfj4qgLB0/sddefault.jpg",
      backdrop: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
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

      {/* Hero Billboard Spotlight Carousel for Clients & Partners */}
      <IPHeroBillboard
        items={partnerList}
        onPlayTrailer={(partner) => setSelectedPartner(partner)}
      />

      {/* Content Rail: Featured Clients & Global Alliances */}
      <IPContentRail
        title="Global Clients & Partner Alliances"
        subtitle="Explore official campaigns, co-productions, and international streaming partnerships"
        items={partnerList}
        onSelectIp={(partner) => setSelectedPartner(partner)}
      />

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
