"use client";

export default function AboutValues() {
  const magicPillars = [
    {
      letter: "M",
      title: "Mastery",
      tagline: "Unmatched Craftsmanship",
      description: "Constantly refining our animation, character rigging, and visual art techniques to world-class standards.",
      color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    },
    {
      letter: "A",
      title: "Authenticity",
      tagline: "Rooted in Real Heritage",
      description: "Telling rich, culturally grounded African narratives with truth, depth, and genuine emotional resonance.",
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    },
    {
      letter: "G",
      title: "Growth",
      tagline: "Empowering Creative Minds",
      description: "Fostering continuous learning, talent development, and expanding creative opportunities across Africa.",
      color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    },
    {
      letter: "I",
      title: "Innovation",
      tagline: "Pioneering Animation Tech",
      description: "Combining traditional art forms with cutting-edge 2D/3D software, real-time engines, and digital pipelines.",
      color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    },
    {
      letter: "C",
      title: "Creativity",
      tagline: "Limitless Imagination",
      description: "Breathing life into bold visual ideas that captivate, inspire, and entertain audiences worldwide.",
      color: "border-rose-500/40 text-rose-400 bg-rose-500/10",
    },
  ];

  return (
    <section id="values" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Our Core Values: <em className="font-serif-accent text-white/90">M.A.G.I.C.</em>
          </h2>
          <p className="text-base text-white/70">
            The foundation of our work is built on the principles of MAGIC. These values guide every aspect of our storytelling and business practices, ensuring that we deliver exceptional content while upholding a strong commitment to excellence and integrity.
          </p>
        </div>

        {/* 5-Item MAGIC Horizontal / Grid Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {magicPillars.map((item) => (
            <div
              key={item.letter}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/[0.08] flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl font-bold font-mono mb-4 transition-transform group-hover:scale-110 ${item.color}`}>
                  {item.letter}
                </div>
                <h3 className="text-xl font-medium text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3 mt-1">
                  {item.tagline}
                </div>
                <p className="text-xs text-white/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Statements Showcase */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl relative overflow-hidden space-y-4 group hover:border-yellow-500/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 flex items-center justify-center text-lg font-bold">
              ★
            </div>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Mission Statement
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Our mission at Magic Carpet Studios is to celebrate African culture by bringing its rich storytelling heritage to the world stage. We are dedicated to crafting compelling narratives that inspire, entertain, and educate, while fostering cross-cultural dialogue. Through our work, we aim to challenge stereotypes, promote diversity, and drive inclusivity in the global media landscape.
            </p>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/40">
              [CELEBRATING HERITAGE // INSPIRING DIALOGUE]
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl relative overflow-hidden space-y-4 group hover:border-blue-500/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center text-lg font-bold">
              ✦
            </div>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Vision Statement
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              We envision Magic Carpet Studios as a global leader in authentic African storytelling. Our goal is to share the magic of African narratives with audiences everywhere, encouraging cultural appreciation and creating new opportunities for African creatives to shine. We are committed to leaving a lasting imprint on the international entertainment industry by showcasing the depth and diversity of African stories.
            </p>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/40">
              [GLOBAL LEADERSHIP // AUTHENTIC STORYTELLING]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
