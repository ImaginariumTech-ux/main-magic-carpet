"use client";

import Link from "next/link";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Reach out",
      desc: "You send us a message using the form in our Work with us page.",
      link: "/work-with-us",
    },
    {
      num: "02",
      title: "Discovery call",
      desc: "We call you to understand your idea, audience, and final goal.",
    },
    {
      num: "03",
      title: "Proposal",
      desc: "We send you a proposal with a quote and a timeline within 48 hours.",
    },
    {
      num: "04",
      title: "Contract",
      desc: "Once we are agreed, we draw up a contract.",
    },
    {
      num: "05",
      title: "Onboard",
      desc: "We introduce you to the team that will work on your project and how communication will flow.",
    },
    {
      num: "06",
      title: "Production",
      desc: "Concept, script, storyboard, design, animation. You review at every stage.",
    },
    {
      num: "07",
      title: "Delivery",
      desc: "We deliver your completed project in the format(s) you require.",
    },
    {
      num: "08",
      title: "Review",
      desc: "If you love our work and production, you are welcome to give us a review and refer us.",
    },
  ];

  // Duplicate list for infinite seamless marquee scrolling
  const marqueeSteps = [...steps, ...steps];

  return (
    <section className="py-24 border-t border-[#0E121B]/10 bg-white text-[#0E121B] overflow-hidden">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E121B]">
            HOW WE <em className="font-serif-accent italic text-[#0E121B]">WORK</em>
          </h2>
          <p className="text-[#0E121B]/70 text-lg leading-relaxed pt-2">
            From initial idea to final delivery, our 8-step process guarantees transparency, creativity, and quality.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E121B] hover:bg-[#1A2232] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl"
          >
            <span>Work with us</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {marqueeSteps.map((step, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[340px] shrink-0 bg-slate-50 border border-slate-200/80 rounded-[32px] p-7 hover:border-[#0E121B] hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-white bg-[#0E121B] px-3.5 py-1 rounded-full inline-block">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0E121B] tracking-tight group-hover/card:text-[#0E121B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0E121B]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {step.link ? (
                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0E121B] hover:underline"
                  >
                    <span>Go to form</span>
                    <span>→</span>
                  </Link>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-200/60 flex justify-end">
                  <span className="text-slate-300 text-xs font-mono">MAGIC CARPET</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

