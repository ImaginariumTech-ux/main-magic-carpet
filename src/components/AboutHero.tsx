"use client";

interface AboutHeroProps {
  onOpenContact: () => void;
}

export default function AboutHero({ onOpenContact }: AboutHeroProps) {
  const stats = [
    { label: "Global Broadcast Partners", value: "AAN", unit: "Cartoon Network & UNDP" },
    { label: "Original IPs & Series", value: "15+", unit: "In Production" },
    { label: "Studio Heritage", value: "Africa", unit: "Lagos Studio HQ" },
    { label: "Global Audience", value: "50M+", unit: "Viewers Reached" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden border-b border-white/10">
      {/* Background Video with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-lights-41528-large.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10 animate-hero-fade">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-widest text-white/90">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span>About Magic Carpet Studios</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Welcome to <br className="hidden sm:inline" />
          <em className="font-serif-accent text-white/90 not-italic italic">Magic Carpet Studios</em>
        </h1>

        {/* Subtitle Paragraphs from official copy */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed">
            Magic Carpet Studios is a globally recognized animation production company based in Africa, crafting captivating short films, animated series, and feature-length stories that inspire audiences worldwide.
          </p>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Beyond our original IPs, we collaborate with corporate, commercial, and entertainment brands to create high-quality explainer videos, motion graphics, and brand storytelling content. As an award-winning creative studio, we merge artistry with technology to bring bold ideas to life, delivering visual storytelling that connects cultures and captivates viewers across the globe.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Create With Us
          </button>
          <a
            href="#values"
            className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white text-sm font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Our MAGIC Values ↓
          </a>
        </div>

        {/* Stat Counter Grid */}
        <div className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all duration-300 text-left group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white group-hover:text-yellow-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/40 mt-2 font-medium">
                {stat.unit}
              </div>
              <div className="text-sm text-white/80 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
