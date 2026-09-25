"use client";

export interface AwardItem {
  id?: string;
  number?: string;
  title: string;
  fullText: string;
  event: string;
  project?: string;
  year: string;
  category?: string;
}

const defaultAwards: AwardItem[] = [
  {
    title: "UN Innovation Challenge for the Sahel",
    fullText: "Winner of the United Nations Innovation Challenge for the Sahel 2022",
    event: "United Nations Innovation Challenge",
    project: "Sahel Innovation",
    year: "2022",
    category: "WINNER",
  },
  {
    title: "Best African Animation Hourglass Award",
    fullText: 'Winner International Film Festival (RTF 2019) Best African animation hourglass awards for short film "Meet the Igwes"',
    event: "Real Time Film Festival (RTF 2019)",
    project: "Meet the Igwes",
    year: "2019",
    category: "WINNER",
  },
  {
    title: "Africa Film for Impact Festival Award",
    fullText: 'Winner Africa Film for Impact Festival Award (Dear Diary short film subtitled "The Right Decision") 2020',
    event: "Africa Film for Impact Festival",
    project: "Dear Diary: The Right Decision",
    year: "2020",
    category: "WINNER",
  },
  {
    title: "Best Animation In Africa",
    fullText: 'Best animation In Africa CANEX 2023 "Super Dad"',
    event: "CANEX 2023",
    project: "Super Dad",
    year: "2023",
    category: "WINNER",
  },
  {
    title: "Top 100 Fastest Growing SMEs in Nigeria",
    fullText: "Winner Business Day's Top 100 Fastest Growing SMEs in Nigeria award.",
    event: "Business Day SME Awards",
    project: "Magic Carpet Studios",
    year: "2023",
    category: "WINNER",
  },
];

function AwardLaurelCard({ item }: { item: AwardItem }) {
  return (
    <div className="flex-shrink-0 w-[310px] sm:w-[370px] bg-slate-50/95 border border-slate-200/90 rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-between text-center space-y-5 shadow-lg hover:shadow-2xl hover:border-[#062a82]/40 hover:-translate-y-1 transition-all duration-500 group">
      {/* 5-Star Header */}
      <div className="flex items-center gap-1.5 text-amber-400 text-sm">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      {/* Golden Laurel Wreath Emblem & Award Title */}
      <div className="relative w-full flex items-center justify-between px-1">
        {/* Left Golden Laurel Branch SVG */}
        <svg
          className="w-8 h-16 text-amber-500/90 shrink-0 transition-transform duration-500 group-hover:-translate-x-1"
          viewBox="0 0 32 60"
          fill="currentColor"
        >
          <path
            d="M20 6C14 12 8 20 8 30C8 40 13 48 20 54"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M20 8C13 11 7 17 5 24C10 24 16 19 20 8Z" />
          <path d="M20 22C12 24 6 30 5 36C10 36 16 31 20 22Z" />
          <path d="M20 34C12 36 7 43 6 49C11 48 17 42 20 34Z" />
        </svg>

        {/* Center Content */}
        <div className="px-2 space-y-2 z-10 flex-1">
          <span className="text-[10px] font-mono font-bold tracking-widest text-amber-600 uppercase bg-amber-500/10 px-3 py-1 rounded-full inline-block border border-amber-500/20">
            {item.category || "WINNER"}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#0E121B] tracking-tight leading-snug">
            {item.title}
          </h3>
          <p className="text-xs text-[#0E121B]/80 font-medium leading-relaxed italic">
            "{item.fullText}"
          </p>
        </div>

        {/* Right Golden Laurel Branch SVG */}
        <svg
          className="w-8 h-16 text-amber-500/90 shrink-0 transform scale-x-[-1] transition-transform duration-500 group-hover:translate-x-1"
          viewBox="0 0 32 60"
          fill="currentColor"
        >
          <path
            d="M20 6C14 12 8 20 8 30C8 40 13 48 20 54"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M20 8C13 11 7 17 5 24C10 24 16 19 20 8Z" />
          <path d="M20 22C12 24 6 30 5 36C10 36 16 31 20 22Z" />
          <path d="M20 34C12 36 7 43 6 49C11 48 17 42 20 34Z" />
        </svg>
      </div>

      {/* Festival Event & Details under it */}
      <div className="w-full pt-4 border-t border-slate-200/80 space-y-1.5">
        <p className="text-xs sm:text-sm font-semibold text-[#0E121B]/90 leading-snug">
          {item.event}
        </p>

        <div className="flex items-center justify-center gap-2 text-[11px] font-mono font-semibold text-[#062a82]">
          {item.project && <span>{item.project}</span>}
          {item.project && <span>•</span>}
          <span>{item.year}</span>
        </div>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  // Multiply default awards to ensure smooth infinite marquee scrolling
  const marqueeList = [...defaultAwards, ...defaultAwards, ...defaultAwards];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#0E121B]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12 space-y-3 text-center sm:text-left">
        {/* <span className="text-xs uppercase tracking-widest text-[#062a82] font-semibold font-mono block">
          RECOGNITION & HONORS
        </span> */}
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B]">
          Awards for <em className="font-serif-accent italic text-[#062a82]">our work</em>
        </h2>
        {/* <p className="text-[#0E121B]/70 text-base max-w-2xl">
          Selected international honors, film festival awards, and industry recognitions across animation and original IP storytelling.
        </p> */}
      </div>

      {/* Marquee Track Container with Slower Scroll (animate-marquee-slow) */}
      <div className="relative w-full overflow-hidden py-4 select-none group">
        {/* Left & Right Ambient Fading Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Slower Marquee */}
        <div className="flex gap-6 animate-marquee-slow">
          {marqueeList.map((item, idx) => (
            <AwardLaurelCard key={`${item.title}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
