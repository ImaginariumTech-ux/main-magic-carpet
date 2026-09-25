"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutOverview from "@/components/AboutOverview";
import AwardsSection from "@/components/AwardsSection";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-white text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Title Section */}
      <AboutHero />

      {/* About Overview Section (Image Left, Body Text Right) */}
      <AboutOverview onOpenContact={() => setContactOpen(true)} />

      {/* Awards We Have Won */}
      <AwardsSection />

      {/* M.A.G.I.C. Values Section */}
      <AboutValues />

      {/* Creative Team Leadership (Ferdy, Cheks, Duru) */}
      <AboutTeam />

      {/* Final CTA Banner */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto my-8">
        <div className="bg-[#090B0F] rounded-[36px] sm:rounded-[48px] p-8 sm:p-16 text-center text-white border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              Your next project <br className="hidden sm:inline" />
              <em className="font-serif-accent italic text-white/95">starts here.</em>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              Let's bring your animation vision to life. Talk to our creative team today.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#062a82] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span>Work with us</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Contact Inquiry Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
