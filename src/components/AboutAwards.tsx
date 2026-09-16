"use client";

export default function AboutAwards() {
  const honors = [
    {
      title: "Disney & Netflix Collaborations",
      category: "Global Animated Series & Features",
      year: "Global Broadcast",
      project: "Original IPs & Co-Productions",
      description: "Partnering with global streaming leaders to bring authentic African animation to millions of households worldwide.",
    },
    {
      title: "Cartoon Network Partnership",
      category: "Broadcast Animation",
      year: "Featured Partner",
      project: "Shorts & Animated Campaigns",
      description: "Crafting high-octane 2D and 3D animated content that entertains and inspires young audiences globally.",
    },
    {
      title: "United Nations Development Programme",
      category: "Social Impact & Motion Graphics",
      year: "UNDP Partner",
      project: "Sustainability & Cultural Awareness",
      description: "Creating powerful visual campaigns that drive social change, environmental sustainability, and education.",
    },
    {
      title: "DreamWorks Alliance",
      category: "International Feature Collaboration",
      year: "Production Partner",
      project: "Feature Storytelling & Character Design",
      description: "Collaborating with iconic animation studios on world-class character design, storyboarding, and 3D assets.",
    },
    {
      title: "African Animation Excellence Award",
      category: "Original IP Production",
      year: "Winner",
      project: "Original Short Films & Series Slate",
      description: "Honored for pioneering authentic storytelling and elevating African animation standards on the global stage.",
    },
    {
      title: "MagicLab Academy Industry Initiative",
      category: "Talent Development & Skill Building",
      year: "Annual Laureate",
      project: "Young Animator Incubator",
      description: "Recognized for training and placing over 200 young African animators into international production pipelines.",
    },
  ];

  return (
    <section id="awards" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>Partnerships & Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Clients & Global Alliances</h2>
          </div>
          <p className="text-sm text-white/60 max-w-md">
            Major entertainment giants, streaming platforms, and international organizations trust Magic Carpet Studios to deliver world-class animation.
          </p>
        </div>

        {/* 3x2 Grid of Honors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-md hover:bg-white/[0.08] flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-xs text-white/40 font-mono">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-light text-white group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {item.category}
                </div>

                <p className="text-sm text-white/75 leading-relaxed pt-2 font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/50 font-mono truncate">
                Focus: <span className="text-white/80">{item.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
