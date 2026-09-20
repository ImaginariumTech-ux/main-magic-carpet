"use client";

import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Leadership" | "Animation & IP";
  image: string;
  quote: string;
  specialty: string;
}

export default function AboutTeam() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const team: TeamMember[] = [
    {
      id: "ferdy-adimefe",
      name: "Ferdy Adimefe",
      role: "Founder & Chief Executive Officer",
      department: "Leadership",
      image: "/WhatsApp-Image-2024-09-23-at-14.34.25_778bc483-1024x830.jpg",
      quote: "Storytelling is the carpet on which cultures fly across borders, connecting humanity through shared wonder.",
      specialty: "Creative Vision, Executive Producing & IP Strategy",
    },
    {
      id: "chekwube-okonkwo",
      name: "Chekwube Okonkwo",
      role: "Head of Animation & Art Director",
      department: "Animation & IP",
      image: "/checksss.jpg",
      quote: "Every frame we animate carries the rhythm, color, and soul of authentic African art.",
      specialty: "2D/3D Character Rigging & Visual Art Direction",
    },
    {
      id: "duru-azubuike",
      name: "Duru Azubuike",
      role: "Executive Producer & Operations Lead",
      department: "Leadership",
      image: "/durururu.jpg",
      quote: "Transforming ambitious creative visions into world-class production pipelines.",
      specialty: "Production Management, Operations & Studio Strategy",
    },
  ];

  const filteredTeam =
    selectedDept === "All"
      ? team
      : team.filter((member) => member.department === selectedDept);

  const departments = ["All", "Leadership", "Animation & IP"];

  return (
    <section id="team" className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto border-b border-white/10">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>Our Storytellers</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Creative Team & Leadership</h2>
          </div>

          {/* Department Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedDept === dept
                    ? "bg-yellow-400 text-black shadow-md"
                    : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300 group flex flex-col justify-between backdrop-blur-md"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top scale-[1.01] group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white/90 font-medium">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium text-white group-hover:text-yellow-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-white/50 font-medium mt-1">
                    {member.role}
                  </div>
                </div>

                <blockquote className="text-sm italic text-white/80 border-l-2 border-yellow-400/50 pl-3 py-1 font-serif-accent">
                  "{member.quote}"
                </blockquote>

                <div className="pt-3 border-t border-white/10 text-xs text-white/40 font-mono">
                  Specialty: <span className="text-white/70">{member.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
