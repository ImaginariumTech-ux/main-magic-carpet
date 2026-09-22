"use client";

import Link from "next/link";

export default function WhyWorkWithUs() {
  const reasons = [
    {
      num: "01",
      title: "End-to-End Production",
      description: "From initial concept development and visual design to final animation and post-production delivery.",
      link: "/about",
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
      title: "Experienced Talent",
      description: "A multidisciplinary team of world-class animators, directors, and artists across 2D and 3D pipelines.",
      link: "/about",
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
      title: "Global Standards",
      description: "Proven capability collaborating seamlessly across international markets: US, EMEA, and APAC region.",
      link: "/about",
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
    {
      num: "04",
      title: "Flexible Engagement",
      description: "Tailored production models — engage us for a specific milestone or complete end-to-end execution.",
      link: "/about",
      theme: {
        cardBg: "bg-[#04140F] border-[#10382B]",
        panelBg: "bg-[#081F17]",
        textColor: "text-white",
        descColor: "text-white/70",
        numColor: "text-white",
        arrowColor: "text-white/80",
        artGradient: "from-[#0A4D34] via-[#0D6343] to-[#041A12]",
        artGraphic: (
          <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <div className="w-52 h-36 bg-gradient-to-tr from-emerald-400 via-teal-600 to-emerald-950 rounded-full blur-lg transform -translate-y-6" />
            <div className="absolute w-40 h-28 border border-emerald-300/30 rounded-2xl rotate-[20deg]" />
          </div>
        ),
      },
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10 bg-white text-[#0E121B]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-[#0E121B]">
            Why work <em className="font-serif-accent italic text-[#0E121B]">with us?</em>
          </h2>
          <p className="text-[#0E121B]/70 text-lg leading-relaxed pt-2">
            Partner with Africa&apos;s premier animation studio to bring your creative vision to life with world-class quality.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#0E121B]/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] bg-slate-50 hover:bg-[#0E121B] hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>ABOUT THE STUDIO</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 4 Folder Cutout Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className={`relative rounded-[36px] p-2.5 border ${reason.theme.cardBg} transition-all duration-500 hover:scale-[1.02] shadow-xl flex flex-col justify-between overflow-hidden group h-[520px]`}
          >
            {/* Top Artwork Area */}
            <div className={`relative h-[220px] w-full rounded-[28px] overflow-hidden bg-gradient-to-b ${reason.theme.artGradient}`}>
              {reason.theme.artGraphic}
            </div>

            {/* Folder Cutout Content Panel Overlay */}
            <div className="relative -mt-16 z-10 flex-1 flex flex-col justify-between">
              {/* Tab Header Row */}
              <div className="flex items-end">
                {/* Left Raised Tab with Big Number */}
                <div
                  className={`${reason.theme.panelBg} pt-5 px-7 pb-2 rounded-t-[28px] relative inline-block`}
                >
                  <span className={`text-5xl font-bold font-sans tracking-tighter ${reason.theme.numColor}`}>
                    {reason.num}
                  </span>
                  {/* Inverted Concave Corner Right */}
                  <div
                    className={`absolute bottom-0 -right-6 w-6 h-6 ${reason.theme.panelBg}`}
                    style={{
                      clipPath: "path('M 0,24 A 24,24 0 0 0 24,0 L 0,0 Z')",
                    }}
                  />
                </div>

                {/* Right Top Shelf with Arrow */}
                <div className="flex-1 flex justify-end pb-3 pr-6">
                  <Link
                    href={reason.link}
                    className={`text-2xl ${reason.theme.arrowColor} hover:scale-125 transition-transform duration-300`}
                  >
                    ↗
                  </Link>
                </div>
              </div>

              {/* Main Panel Content Box */}
              <div
                className={`${reason.theme.panelBg} rounded-b-[28px] rounded-tr-[28px] p-7 pt-4 flex-1 flex flex-col justify-start border-t-0`}
              >
                <div className="space-y-3 pt-2">
                  <h3 className={`text-2xl font-bold tracking-tight leading-snug ${reason.theme.textColor}`}>
                    {reason.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${reason.theme.descColor}`}>
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

