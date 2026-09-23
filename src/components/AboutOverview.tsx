"use client";

interface AboutOverviewProps {
  onOpenContact: () => void;
}

export default function AboutOverview({ onOpenContact }: AboutOverviewProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] w-full bg-slate-100">
            <img
              src="/illia_poster.jpg"
              alt="Magic Carpet Animation Production"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            {/* <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
              <span>LAGOS HQ • ANIMATION STUDIO</span>
            </div> */}
          </div>
        </div>

        {/* Right Column: Body Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B] leading-tight">
              African Storytelling, <br />
              <em className="font-serif-accent italic text-[#0E121B]">Global Animation Quality</em>
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#0E121B]/80 font-light leading-relaxed">
            <p>
              Magic Carpet Studios is an animation production company based in Lagos, Nigeria.
            </p>
            <p>
              We work with brands, agencies, entertainment companies and organisations to produce high-quality 2D and 3D animation from commercials and explainers to animated series, short films, feature films and original IP for audiences and clients across markets.
            </p>
            <p>
              Beyond that, we create our own authentic African stories because at our core, our stories fuel us.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E121B] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#1A2232] transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span>Work with us</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
