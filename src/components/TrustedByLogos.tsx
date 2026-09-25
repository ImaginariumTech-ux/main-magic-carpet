"use client";

export default function TrustedByLogos() {
  const logoItems = [
    { name: "Cartoon Network", src: "/logos/Cn-logog-1024x662.png" },
    { name: "Access Bank", src: "/logos/access.png" },
    { name: "MTN", src: "/logos/mtn.png" },
    { name: "NNPC", src: "/logos/nn.png" },
    { name: "Sesame Street", src: "/logos/sessss-1024x662.png" },
    { name: "Tangerine Africa", src: "/logos/tange.png" },
    { name: "UNDP", src: "/logos/undpppp-1024x662.png" },
    { name: "RAES", src: "/logos/raes.png" },
    { name: "Microsoft & Partners", src: "/logos/Cn-logog-2-1024x662.png" },
  ];

  const marqueeLogos = [...logoItems, ...logoItems];

  return (
    <section className="bg-white border-y border-[#0E121B]/10 pt-10 pb-8 sm:pt-12 sm:pb-8 overflow-hidden relative text-[#0E121B]">
      {/* Subtle fade edges for smooth marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-[#062a82]/50 font-semibold font-mono">
          Trusted by
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 shrink-0">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center px-4 group cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 sm:h-14 md:h-16 w-auto max-w-[160px] sm:max-w-[200px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
