"use client";

import Link from "next/link";

export default function WhyWorkWithUs() {
  const reasons = [
    {
      title: "End-to-end production",
      description: "From concept and development to animation and final delivery.",
      link: "/about",
      image: "/superdad.jpg",
    },
    {
      title: "Experienced creative talent",
      description: "A multidisciplinary team across 2D and 3D production.",
      link: "/about",
      image: "/IMG_0732.JPG",
    },
    {
      title: "International production standards",
      description: "Able to collaborate across markets: US, EMEA and APAC",
      link: "/about",
      image: "/IMG-20241016-WA0006.jpg",
    },
    {
      title: "Flexible collaboration",
      description: "Engage us for a specific production stage or end-to-end delivery.",
      link: "/about",
      image: "/IMG-20241016-WA0007.jpg",
    },
  ];

  return (
    <section className="pt-3 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10 bg-white text-[#0E121B]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-[#0E121B]">
            Why work <em className="font-serif-accent italic text-[#062a82]">with us?</em>
          </h2>
        </div>

        <div className="shrink-0">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#0E121B]/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] bg-slate-50 hover:bg-[#062a82] hover:text-white transition-all duration-300 shadow-lg"
          >
            <span>ABOUT THE STUDIO</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="relative rounded-[32px] bg-white border border-slate-200/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Artwork Area */}
            <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight leading-snug text-[#0E121B]">
                    {reason.title}
                  </h3>
                  <Link
                    href={reason.link}
                    className="text-2xl text-[#0E121B] hover:scale-125 transition-transform duration-300 shrink-0"
                  >
                    ↗
                  </Link>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

