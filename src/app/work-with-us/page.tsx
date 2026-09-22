"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkWithUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Commercial",
    description: "",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => {}} />

      {/* Main Container */}
      <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white bg-[#0E121B] px-4 py-1.5 rounded-full shadow-md">
            Work With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#0E121B]">
            Have an animation project <br className="hidden sm:block" />
            <em className="font-serif-accent italic text-[#0E121B]">in mind?</em>
          </h1>
          <p className="text-[#0E121B]/70 text-lg max-w-2xl mx-auto">
            Tell us what you&apos;re building and we&apos;ll get back to you in less than 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-50 border border-[#0E121B]/20 rounded-3xl p-10 text-center space-y-6 animate-hero-fade shadow-xl">
            <div className="w-16 h-16 bg-[#0E121B] text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">
              ✓
            </div>
            <h2 className="text-3xl font-semibold text-[#0E121B]">Message Received!</h2>
            <p className="text-[#0E121B]/70 max-w-md mx-auto">
              Thank you for reaching out to Magic Carpet Studios. Our team is reviewing your project details and will be in touch within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full border border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] hover:bg-[#0E121B] hover:text-white transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] placeholder-gray-400 focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] placeholder-gray-400 focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] placeholder-gray-400 focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                />
              </div>

              {/* What are you looking to create? */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                  What are you looking to create? *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                >
                  <option value="Commercial">Commercial / Brand Film</option>
                  <option value="Explainer">Explainer / Educational Animation</option>
                  <option value="Series">Animated Series</option>
                  <option value="Feature film">Feature Film</option>
                  <option value="Short film">Short Film</option>
                  <option value="Character or visual development">Character or Visual Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Tell us more about the project */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                  Tell us more about the project *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project idea, audience, goals, style preferences..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] placeholder-gray-400 focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#0E121B]/80 font-semibold">
                  Timeline — When would you like this project finished ideally?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Q4 2026, within 3 months, ASAP..."
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#0E121B] placeholder-gray-400 focus:outline-none focus:border-[#0E121B] transition-colors text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0E121B] hover:bg-[#1A2232] text-white font-extrabold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl"
              >
                SEND
              </button>
            </form>

            {/* Fast Track Call Booking Alternative */}
            <div className="mt-10 pt-8 border-t border-slate-200 text-center space-y-3">
              <p className="text-[#0E121B]/60 text-sm">
                Prefer a direct conversation?
              </p>
              <button
                data-cal-namespace="30min"
                data-cal-link="magic-carpet-ywfdx8/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#0E121B]/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-[#0E121B] hover:bg-[#0E121B] hover:text-white transition-colors"
              >
                <span>📅 Or Book a 30-minute call</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer onOpenContact={() => {}} />
    </main>
  );
}
