"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Visual Effects (VFX)",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-hero-fade">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-light text-white">Start Your Next Project</h2>
            <p className="text-xs text-white/50 mt-1">Connect with our executive production team</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white text-sm"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-hero-fade">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-medium text-white">Inquiry Received</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto">
              Thank you, {form.name || "friend"}. An executive producer from our team will reach out shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cal.com Quick Schedule Banner */}
            <div className="p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Fast Track Meeting</div>
                <div className="text-xs text-white/80 mt-0.5">Book a 30-minute discovery call directly on our calendar</div>
              </div>
              <button
                type="button"
                data-cal-namespace="30min"
                data-cal-link="magic-carpet-ywfdx8/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-yellow-400 text-black text-xs font-bold whitespace-nowrap hover:bg-yellow-300 transition-colors shadow-md"
              >
                Book Call 📅
              </button>
            </div>

            <div className="relative text-center my-2">
              <span className="bg-neutral-950 px-3 text-xs text-white/40 uppercase tracking-widest">Or Send A Message</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jean Dupont"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                  Company / Agency
                </label>
                <input
                  type="text"
                  placeholder="Brand or Studio name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                  Primary Capability
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option>Visual Effects (VFX)</option>
                  <option>Brand & Commercial Campaign</option>
                  <option>Film & Episodic Series</option>
                  <option>Virtual Production & AI</option>
                  <option>Color Grading & Finishing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-medium">
                Project Overview
              </label>
              <textarea
                rows={4}
                placeholder="Briefly describe your vision, timeline, and scope..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 shadow-xl"
            >
              Submit Project Inquiry
            </button>
          </form>
          </div>
        )}
      </div>
    </div>
  );
}
