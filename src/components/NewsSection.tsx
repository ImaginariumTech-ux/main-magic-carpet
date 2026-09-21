"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/data/blogPosts";

export default function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const newsList: BlogPost[] = blogPosts.slice(0, 6);

  return (
    <section id="news" className="py-20 md:py-28 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto flex items-start justify-between mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-yellow-400 font-semibold mb-2">Editorial</div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light">News & Insights</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm text-white/60 hover:text-yellow-400 transition-colors flex items-center gap-1 mt-3 group"
        >
          All News <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Desktop Expanding Flex Accordion */}
      <div className="hidden md:flex items-end gap-3 px-4 sm:px-6 lg:px-10 aspect-[2.2/1] max-w-7xl mx-auto">
        {newsList.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              onMouseEnter={() => setActiveIndex(index)}
              className="news-accordion-item h-[80%] relative cursor-pointer group rounded-xl overflow-hidden block"
              style={{
                flex: isActive ? "0 0 45%" : "1 1 0%",
                opacity: isActive ? 1 : 0.5,
                transition: "all 0.5s ease",
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
                <h3 className="text-xl font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 mt-1 line-clamp-2">{item.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile Scrollable Cards Carousel */}
      <div className="md:hidden flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory hide-scrollbar">
        {newsList.map((item) => (
          <Link
            key={item.id}
            href={`/blog/${item.slug}`}
            className="shrink-0 w-[85%] snap-center rounded-xl overflow-hidden border border-white/10 bg-neutral-900 block group"
          >
            <div className="aspect-[3/2] relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-white">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-base font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-2">{item.title}</h3>
              <p className="text-xs text-white/60 line-clamp-2">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
