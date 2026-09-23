"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-colors duration-300">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-5 md:py-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/cropped-hhdfhdfh.png"
            alt="Magic Carpet Studios Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-semibold">
          <li>
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Our WORK
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              ABOUT
            </Link>
          </li>
        </ul>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <Link
            href="/work-with-us"
            className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#0E121B] text-xs font-semibold uppercase tracking-wider text-white bg-[#0E121B] hover:bg-[#1A2232] transition-all duration-300 shadow-xl inline-block"
          >
            WORK WITH US
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white focus:outline-none p-1.5"
          aria-label="Open menu"
        >
          <span className="text-xs font-semibold border border-white/30 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white shadow-lg flex items-center gap-2">
            <span>Menu</span>
            <span className="text-base leading-none">☰</span>
          </span>
        </button>
      </nav>

      {/* Full-Screen Full-Width Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 w-screen h-screen bg-[#0E121B]/98 backdrop-blur-3xl z-[100] flex flex-col justify-between p-6 sm:p-8 animate-hero-fade text-white overflow-y-auto">
          {/* Header Row Inside Full Screen Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/cropped-hhdfhdfh.png"
                alt="Magic Carpet Studios Logo"
                className="h-16 w-auto object-contain filter drop-shadow-md"
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white text-[#0E121B] flex items-center justify-center font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-6 flex-1 flex flex-col justify-center">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
              NAVIGATION
            </div>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-light uppercase tracking-wider text-white hover:text-slate-300 hover:translate-x-2 transition-all"
            >
              HOME
            </Link>

            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-light uppercase tracking-wider text-white hover:text-slate-300 hover:translate-x-2 transition-all"
            >
              Our WORK
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-light uppercase tracking-wider text-white hover:text-slate-300 hover:translate-x-2 transition-all"
            >
              SERVICES
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl sm:text-4xl font-light uppercase tracking-wider text-white hover:text-slate-300 hover:translate-x-2 transition-all"
            >
              ABOUT
            </Link>
          </div>

          {/* Bottom Call to Action & Contact Info */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <Link
              href="/work-with-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-white text-[#0E121B] font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:bg-slate-100 transition-all"
            >
              <span>WORK WITH US</span>
              <span>→</span>
            </Link>

            <div className="text-center text-xs font-mono text-slate-400 pt-2">
              hello@magiccarpet.studio • Lagos, Nigeria
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
