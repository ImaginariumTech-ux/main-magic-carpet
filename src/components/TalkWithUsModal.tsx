"use client";

import { useState, useEffect } from "react";

interface TalkWithUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function TalkWithUsModal({
  isOpen,
  onClose,
  defaultProject = "Legends of bulan",
}: TalkWithUsModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    project: defaultProject,
    interest: "Investment",
  });

  useEffect(() => {
    if (defaultProject) {
      setForm((prev) => ({ ...prev, project: defaultProject }));
    }
  }, [defaultProject]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-xl animate-hero-fade overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-[#0E121B] my-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#0E121B]">
              Talk With Us
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Connect directly with our production & partnerships team
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0E121B] hover:text-white transition-colors flex items-center justify-center text-[#0E121B] text-sm font-bold"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-hero-fade">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#0E121B]">Message Sent!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#0E121B]">{form.name}</span>. Our executive production team will review your inquiry for <span className="text-[#062a82] font-semibold">{form.project}</span> and get back to you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0E121B] placeholder-slate-400 focus:outline-none focus:border-[#062a82] focus:ring-1 focus:ring-[#062a82] transition-colors"
                />
              </div>

              {/* Company & Email in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Studio, Brand or Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0E121B] placeholder-slate-400 focus:outline-none focus:border-[#062a82] focus:ring-1 focus:ring-[#062a82] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0E121B] placeholder-slate-400 focus:outline-none focus:border-[#062a82] focus:ring-1 focus:ring-[#062a82] transition-colors"
                  />
                </div>
              </div>

              {/* What project are you interested in */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                  What project are you interested in?
                </label>
                <select
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0E121B] focus:outline-none focus:border-[#062a82] focus:ring-1 focus:ring-[#062a82] transition-colors cursor-pointer"
                >
                  <option value="Legends of bulan">Legends of bulan</option>
                  <option value="Passport of mallam ilia">Passport of mallam ilia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* What are you interested in */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">
                  What are you interested in?
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0E121B] focus:outline-none focus:border-[#062a82] focus:ring-1 focus:ring-[#062a82] transition-colors cursor-pointer"
                >
                  <option value="Investment">Investment</option>
                  <option value="Coproduction">Coproduction</option>
                  <option value="Licensing">Licensing</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#062a82] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0836a8] transition-all duration-300 shadow-2xl hover:scale-[1.02]"
              >
                Submit Inquiry
              </button>
            </form>

            {/* Direct Call Link Banner at the End */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-3">
              <p className="text-xs text-slate-500 font-medium">
                Prefer a direct conversation?
              </p>
              <a
                href="https://cal.com/magic-carpet-ywfdx8/talk-with-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#062a82] hover:text-white text-[#0E121B] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Book a Call</span>
                <span>📅</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
