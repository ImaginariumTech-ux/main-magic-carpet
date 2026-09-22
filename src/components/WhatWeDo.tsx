"use client";

import Link from "next/link";

export default function WhatWeDo() {
  const cards = [
    {
      num: "01",
      title: "Commercial Animation",
      description: "Animated ads, Brand films and Campaign content.",
      link: "/services",
      theme: {
        cardBg: "bg-[#040316] border-[#1D174E]",
        panelBg: "bg-[#060424]",
        textColor: "text-white",
        descColor: "text-white/70",
        numColor: "text-white",
        arrowColor: "text-white/80",
        artGradient: "from-[#1A1054] via-[#4326B6] to-[#0A0529]",
        artGraphic: (
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <div className="w-48 h-32 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-[40%] rotate-45 blur-md transform -translate-y-4 shadow-2xl" />
            <div className="absolute w-36 h-24 border-4 border-cyan-300/40 rounded-[35%] rotate-12 backdrop-blur-sm" />
          </div>
        ),
      },
    },
    {
      num: "02",
      title: "Explainer & Educational",
      description: "Clear, engaging animation for products, organisations and complex ideas.",
      link: "/services",
      theme: {
        cardBg: "bg-[#F3F4F6] border-[#D1D5DB]",
        panelBg: "bg-[#FFFFFF]",
        textColor: "text-[#0E121B]",
        descColor: "text-gray-600",
        numColor: "text-[#0E121B]",
        arrowColor: "text-[#0E121B]",
        artGradient: "from-[#D9381E] via-[#E85D04] to-[#0D0504]",
        artGraphic: (
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <div className="w-56 h-36 bg-gradient-to-tr from-amber-500 via-red-600 to-black rounded-full blur-xl transform -translate-y-6" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
          </div>
        ),
      },
    },
    {
      num: "03",
      title: "Series & Feature Production",
      description: "End-to-end production for animated series, shorts and feature films.",
      link: "/services",
      theme: {
        cardBg: "bg-[#0E121B] border-[#1E293B]",
        panelBg: "bg-[#141B28]",
        textColor: "text-white",
        descColor: "text-white/70",
        numColor: "text-white",
        arrowColor: "text-white/80",
        artGradient: "from-[#0F2942] via-[#1E4D75] to-[#040A12]",
        artGraphic: (
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <div className="w-52 h-36 bg-gradient-to-bl from-sky-400 via-cyan-600 to-slate-900 rounded-full blur-lg transform -translate-y-6" />
            <div className="absolute w-44 h-28 border border-sky-300/30 rounded-2xl rotate-[-15deg]" />
          </div>
        ),
      },
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-[#0E121B] bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl space-y-4">
          {/* <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white bg-[#0E121B] px-4 py-1.5 rounded-full">
            What We Do
          </span> */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-[#0E121B]">
            We take your idea, turn it into a story, and <em className="font-serif-accent italic text-[#0E121B]">animate it.</em>
          </h2>
          <p className="text-[#0E121B]/70 text-lg leading-relaxed pt-2">
            We are a full service animation studio that take your idea, turn it in a story and then animate it in different forms.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#0E121B]/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] bg-slate-50 hover:bg-[#0E121B] hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>VIEW OUR SERVICES</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 3 Folder Cutout Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative rounded-[36px] p-2.5 border ${card.theme.cardBg} transition-all duration-500 hover:scale-[1.02] shadow-xl flex flex-col justify-between overflow-hidden group h-[520px]`}
          >
            {/* Top Artwork Area */}
            <div className={`relative h-[220px] w-full rounded-[28px] overflow-hidden bg-gradient-to-b ${card.theme.artGradient}`}>
              {card.theme.artGraphic}
            </div>

            {/* Folder Cutout Content Panel Overlay */}
            <div className="relative -mt-16 z-10 flex-1 flex flex-col justify-between">
              {/* Tab Header Row */}
              <div className="flex items-end">
                {/* Left Raised Tab with Big Number */}
                <div
                  className={`${card.theme.panelBg} pt-5 px-7 pb-2 rounded-t-[28px] relative inline-block`}
                >
                  <span className={`text-5xl font-bold font-sans tracking-tighter ${card.theme.numColor}`}>
                    {card.num}
                  </span>
                  {/* Inverted Concave Corner Right */}
                  <div
                    className={`absolute bottom-0 -right-6 w-6 h-6 ${card.theme.panelBg}`}
                    style={{
                      clipPath: "path('M 0,24 A 24,24 0 0 0 24,0 L 0,0 Z')",
                    }}
                  />
                </div>

                {/* Right Top Shelf with Arrow */}
                <div className="flex-1 flex justify-end pb-3 pr-6">
                  <Link
                    href={card.link}
                    className={`text-2xl ${card.theme.arrowColor} hover:scale-125 transition-transform duration-300`}
                  >
                    ↗
                  </Link>
                </div>
              </div>

              {/* Main Panel Content Box */}
              <div
                className={`${card.theme.panelBg} rounded-b-[28px] rounded-tr-[28px] p-7 pt-4 flex-1 flex flex-col justify-between border-t-0`}
              >
                <div className="space-y-3 pt-2">
                  <h3 className={`text-2xl font-bold tracking-tight leading-snug ${card.theme.textColor}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${card.theme.descColor}`}>
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/10 dark:border-white/10 mt-6">
                  <Link
                    href={card.link}
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${card.theme.textColor} transition-colors`}
                  >
                    <span>Learn more</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
