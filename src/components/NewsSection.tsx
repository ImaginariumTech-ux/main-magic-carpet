"use client";

import { useState } from "react";

export interface NewsItem {
  id: string;
  title: string;
  category: "News" | "Events" | "Awards";
  date: string;
  image: string;
  excerpt: string;
}

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const newsList: NewsItem[] = [
    {
      id: "mpc-mill-unify",
      title: "MPC and The Mill Join Forces Under One Brand in New Era of Creative Production",
      category: "News",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Combining award-winning VFX artistry and production scale to deliver unprecedented visual craftsmanship globally.",
    },
    {
      id: "cannes-lions-2026",
      title: "Cannes Lions, Three words: Endless inspiration",
      category: "Events",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Insights and takeaways from our global creative directors on the future of real-time rendering and brand experience.",
    },
    {
      id: "cannes-film-festival",
      title: "Two Collaborations Honoured at the 2026 Cannes Film Festival",
      category: "Awards",
      date: "June 2026",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Recognizing exceptional creature design and seamless environment integration across international feature film selections.",
    },
    {
      id: "tiff-2026",
      title: "Two The Mill VFX Collaborations at TIFF 2026",
      category: "Awards",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Premiering high-impact virtual production and digital doubles at Toronto International Film Festival.",
    },
    {
      id: "mill-liege-reel",
      title: "The Mill Liège - Film & Series Reel 2026",
      category: "News",
      date: "April 2026",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Showcasing our Belgium studio's expertise in high-end color grading, matte painting, and episodic VFX.",
    },
    {
      id: "cesar-vfx-award",
      title: "César 2026 | Best VFX for Lise Fischer",
      category: "Awards",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Celebrating top honors for artistic excellence and visual innovation in French cinema.",
    },
  ];

  return (
    <section id="news" className="py-20 md:py-28 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto flex items-start justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">Editorial</div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light">News & Insights</h2>
        </div>
        <a
          href="#news"
          className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 mt-3"
        >
          All News <span className="text-base">→</span>
        </a>
      </div>

      {/* Desktop Expanding Flex Accordion */}
      <div className="hidden md:flex items-end gap-3 px-4 sm:px-6 lg:px-10 aspect-[2.2/1] max-w-7xl mx-auto">
        {newsList.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="news-accordion-item h-[80%] relative cursor-pointer group rounded-xl overflow-hidden"
              style={{
                flex: isActive ? "0 0 45%" : "1 1 0%",
                opacity: isActive ? 1 : 0.5,
              }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Text Container Positioned Below / Revealing on Active */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 z-10 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs text-white font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/60">{item.date}</span>
                </div>
                <h3 className="text-xl font-medium text-white line-clamp-2">{item.title}</h3>
                <p className="text-xs text-white/70 mt-1 line-clamp-2">{item.excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Scrollable Cards Carousel */}
      <div className="md:hidden flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory hide-scrollbar">
        {newsList.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[85%] snap-center rounded-xl overflow-hidden border border-white/10 bg-neutral-900"
          >
            <div className="aspect-[3/2] relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-white">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-base font-medium text-white line-clamp-2">{item.title}</h3>
              <p className="text-xs text-white/60 line-clamp-2">{item.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
