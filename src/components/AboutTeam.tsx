"use client";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export default function AboutTeam() {
  const team: TeamMember[] = [
    {
      id: "ferdy",
      name: "Ferdy Adimefe",
      position: "Founder & Chief Executive Officer",
      image: "/WhatsApp-Image-2024-09-23-at-14.34.25_778bc483-1024x830.jpg",
    },
    {
      id: "cheks",
      name: "Cheks",
      position: "Head of 2D Animation & Art Director",
      image: "/checksss.jpg",
    },
    {
      id: "duru",
      name: "Duru",
      position: "Head of 3D Animation & Production Pipeline",
      image: "/durururu.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-t border-[#0E121B]/10">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0E121B]/60 font-semibold font-mono">
            CREATIVE LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#0E121B]">
            Creative <em className="font-serif-accent italic text-[#0E121B]">Team & Leadership</em>
          </h2>
        </div>

        {/* 3 Creative Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50/80 border border-slate-200/80 rounded-3xl overflow-hidden hover:border-[#0E121B] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Text Info: ONLY Name and Position */}
              <div className="p-6 space-y-1">
                <h3 className="text-2xl font-bold text-[#0E121B] tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-[#0E121B]/70 font-mono font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
