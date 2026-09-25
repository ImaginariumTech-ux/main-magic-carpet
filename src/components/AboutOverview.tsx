"use client";

interface AboutOverviewProps {
  onOpenContact: () => void;
}

export default function AboutOverview({ onOpenContact }: AboutOverviewProps) {
  return (
    <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 bg-white">
      {/* Full width container, boxed layout like Services page section */}
      <div className="max-w-7xl mx-auto bg-slate-50/80 border border-slate-200/90 rounded-[36px] p-8 sm:p-12 lg:p-16 space-y-8 shadow-xl">
        <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#0E121B]/85 font-light leading-relaxed">
          <p className="text-lg sm:text-2xl font-normal text-[#0E121B] leading-snug">
            Magic Carpet Studios is an animation production company based in Lagos, Nigeria.
          </p>

          <p>
            We work with brands, agencies, entertainment companies and organisations to produce high-quality 2D and 3D animation from commercials and explainers to animated series, short films, feature films and original IP for audiences and clients across markets.
          </p>

          <p>
            Beyond that, we create our own authentic African stories because at our core, our stories fuel us.
          </p>
        </div>

        {/* <div className="pt-2">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#062a82] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#062a82]/90 transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>Work with us</span>
            <span>→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}
