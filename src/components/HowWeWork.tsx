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

  return (
    <section className="py-24 border-t border-[#0E121B]/10 bg-white text-[#0E121B]">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#0E121B]">
            How we <em className="font-serif-accent italic text-[#062a82]">work</em>
          </h2>
        </div>

        <div className="shrink-0">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#062a82] hover:bg-[#1A2232] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl"
          >
            <span>Work with us</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Static 4-Column Grid Layout (4 Up, 4 Down) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[28px] p-6 sm:p-7 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-white bg-[#062a82] px-3.5 py-1 rounded-full inline-block">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
                    STEP {step.num}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0E121B] tracking-tight group-hover:text-[#062a82] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {step.link ? (
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#062a82] hover:underline"
                  >
                    <span>Go to form</span>
                    <span>→</span>
                  </Link>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-100 flex justify-end">
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

