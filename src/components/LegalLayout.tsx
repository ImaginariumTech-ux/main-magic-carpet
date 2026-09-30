"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export interface LegalSection {
  id: string;
  title: string;
  badge?: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  titleItalic?: string;
  subtitle: string;
  effectiveDate: string;
  currentPath: "/privacy" | "/terms" | "/cookies";
  sections: LegalSection[];
  relatedPages?: { title: string; href: string; desc: string }[];
}

export default function LegalLayout({
  badge,
  title,
  titleItalic,
  subtitle,
  effectiveDate,
  currentPath,
  sections,
  relatedPages,
}: LegalLayoutProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [copiedLink, setCopiedLink] = useState(false);

  // Monitor scroll position to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const navTabs = [
    { label: "Privacy Policy", href: "/privacy", active: currentPath === "/privacy" },
    { label: "Terms of Use", href: "/terms", active: currentPath === "/terms" },
    { label: "Cookie Policy", href: "/cookies", active: currentPath === "/cookies" },
  ];

  return (
    <main className="relative min-h-screen bg-[#FBFBFC] text-[#0E121B] selection:bg-[#0E121B] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Header Section */}
      <section className="relative w-full pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 bg-[#0E121B] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Studio Lighting Gradients */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-br from-amber-500/15 via-sky-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl space-y-6">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              {title}{" "}
              {titleItalic && (
                <em className="font-serif-accent italic font-normal text-amber-300">
                  {titleItalic}
                </em>
              )}
            </h1>

            {/* Subtitle / Overview */}
            <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed max-w-3xl">
              {subtitle}
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Effective: {effectiveDate}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lagos, Nigeria • Global Operations
              </span>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors"
                title="Copy link to clipboard"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copiedLink ? "Link Copied!" : "Share Link"}
              </button>
            </div>
          </div>

          {/* Quick Legal Switcher Tabs */}
          <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <span className="text-xs uppercase tracking-wider text-white/40 mr-2 font-mono shrink-0">
              Legal Documents:
            </span>
            {navTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  tab.active
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20 font-bold"
                    : "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area (Two Columns with Sticky Sidebar) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Desktop Table of Contents Sidebar */}
          <aside className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white border border-[#0E121B]/10 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#0E121B]/10">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0E121B]">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[#0E121B]/50">
                  {sections.length} Sections
                </span>
              </div>

              <nav className="mt-4 space-y-1 max-h-[55vh] overflow-y-auto pr-1">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                        isActive
                          ? "bg-[#0E121B] text-white font-semibold shadow-sm"
                          : "text-[#0E121B]/70 hover:text-[#0E121B] hover:bg-slate-100"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] pt-0.5 ${
                          isActive ? "text-amber-300" : "text-[#0E121B]/40 group-hover:text-[#0E121B]"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-1 leading-snug">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact & NDA Box */}
            <div className="bg-gradient-to-br from-[#0E121B] to-[#1c2436] text-white p-6 rounded-2xl border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Confidential Projects & NDAs</span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                Have a confidential IP, commercial pitch, or script that requires an executed Non-Disclosure Agreement (NDA)? Our executive team executes mutual NDAs before reviewing proprietary client materials.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full text-center px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Contact Legal & Production
                </button>
              </div>
              <div className="text-[11px] text-white/50 text-center">
                Or email direct: <a href="mailto:hello@magiccarpet.studio" className="text-amber-300 underline font-medium">hello@magiccarpet.studio</a>
              </div>
            </div>
          </aside>

          {/* Main Sections Body */}
          <div className="lg:col-span-8 space-y-12">
            {sections.map((section, idx) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 bg-white border border-[#0E121B]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#0E121B] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  {section.badge && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0E121B]/70 font-semibold">
                      {section.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0E121B] mb-6">
                  {section.title}
                </h2>

                <div className="prose prose-slate max-w-none text-[#0E121B]/80 text-sm sm:text-base leading-relaxed space-y-4">
                  {section.content}
                </div>
              </article>
            ))}

            {/* Related Policies Switcher Grid */}
            {relatedPages && relatedPages.length > 0 && (
              <div className="mt-16 pt-10 border-t border-[#0E121B]/10 space-y-6">
                <div className="text-xs uppercase tracking-widest text-[#0E121B]/50 font-bold">
                  Additional Legal Documentation
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group p-6 rounded-2xl bg-white border border-[#0E121B]/10 hover:border-[#0E121B]/30 hover:shadow-md transition-all space-y-2 block"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-[#0E121B] group-hover:text-amber-600 transition-colors text-base">
                          {page.title}
                        </h3>
                        <span className="text-lg transform group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                      <p className="text-xs text-[#0E121B]/65 leading-relaxed">
                        {page.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Support Banner */}
            <div className="bg-slate-100 border border-[#0E121B]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-[#0E121B] text-base">Have specific privacy or compliance questions?</h4>
                <p className="text-xs text-[#0E121B]/70 max-w-md">
                  Our studio legal and operations desk in Lagos is available to assist with contract questions, data requests, and vendor agreements.
                </p>
              </div>
              <button
                onClick={() => setContactOpen(true)}
                className="shrink-0 px-6 py-3 rounded-full bg-[#0E121B] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Inquire With Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
