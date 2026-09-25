"use client";

export default function AboutValues() {
  const magicPillars = [
    {
      letter: "M",
      title: "Mastery",
      description: "We constantly refine our craft to always deliver exceptional work.",
    },
    {
      letter: "A",
      title: "Authenticity",
      description: "We want to tell stories that are rich with depth and are capable of invoking deep emotions.",
    },
    {
      letter: "G",
      title: "Growth",
      description: "We foster growth, continuous learning and development.",
    },
    {
      letter: "I",
      title: "Innovation",
      description: "We are always looking for the best software to tell our stories and remain on top of our game.",
    },
    {
      letter: "C",
      title: "Creativity",
      description: "We add our own oomph to your story if you let us.",
    },
  ];

  return (
    <section id="values" className="py-4 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          {/* <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
            GUIDING PRINCIPLES
          </span> */}
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B]">
            Our <em className="font-serif-accent italic text-[#062a82]">Values</em>
          </h2>
        </div>

        {/* 5-Item MAGIC Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {magicPillars.map((item) => (
            <div
              key={item.letter}
              className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-[#0E121B] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group space-y-4"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0E121B] text-white flex items-center justify-center text-xl font-bold font-mono mb-4 transition-transform group-hover:scale-110 shadow-md">
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold text-[#0E121B] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0E121B]/75 leading-relaxed font-light mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
