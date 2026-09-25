"use client";

import Link from "next/link";

export default function WhatWeDo() {
  const cards = [
    {
      title: "Commercial Animation",
      description: "Animated ads, Brand films and Campaign content.",
      link: "/services",
      image: "/Akousa2.png",
    },
    {
      title: "Explainer & Educational Animation",
      description: "Clear, engaging animation for products, organisations and complex ideas.",
      link: "/services",
      image: "/Meet The Igwes Image (1).jpg",
    },
    {
      title: "Series & Feature Production",
      description: "End-to-end production for animated series, shorts and feature films.",
      link: "/services",
      image: "/IMG-20241016-WA0004.jpg",
    },
  ];

  return (
    <section className="pt-8 sm:pt-12 pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-[#0E121B] bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white bg-[#062a82] px-4 py-1.5 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-[#0E121B]">
            We take your idea, turn it into a story, and <em className="font-serif-accent italic text-[#062a82]">animate it.</em>
          </h2>
          <p className="text-[#0E121B]/70 text-lg leading-relaxed pt-2">
            We are a full service animation studio and our services include:
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#0E121B]/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] bg-slate-50 hover:bg-[#062a82] hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>VIEW OUR SERVICES</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-[32px] bg-white border border-slate-200/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Artwork Area */}
            <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-[#0E121B]">
                    {card.title}
                  </h3>
                  <Link
                    href={card.link}
                    className="text-2xl text-[#0E121B] hover:scale-125 transition-transform duration-300 shrink-0"
                  >
                    ↗
                  </Link>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
