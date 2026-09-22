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
          {/* HOME */}
          <li>
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              HOME
            </Link>
          </li>

          {/* Our WORK */}
          <li>
            <Link
              href="/work"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Our WORK
            </Link>
          </li>

          {/* SERVICES */}
          <li>
            <Link
              href="/services"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              SERVICES
            </Link>
          </li>

          {/* ABOUT */}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-white text-sm font-medium focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-lg text-[#0E121B]">✕ Close</span>
          ) : (
            <span className="text-sm font-semibold border border-white/20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
              Menu
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 animate-hero-fade text-[#0E121B]">
          <div className="space-y-6 pt-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-light uppercase tracking-wider text-[#0E121B] hover:text-blue-900 transition-colors"
            >
              HOME
            </Link>

            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-light uppercase tracking-wider text-[#0E121B] hover:text-blue-900 transition-colors"
            >
              Our WORK
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-light uppercase tracking-wider text-[#0E121B] hover:text-blue-900 transition-colors"
            >
              SERVICES
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-light uppercase tracking-wider text-[#0E121B] hover:text-blue-900 transition-colors"
            >
              ABOUT
            </Link>
          </div>

          <div className="border-t border-[#0E121B]/10 pt-4">
            <Link
              href="/work-with-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3.5 rounded-full bg-[#0E121B] text-white font-semibold text-center text-sm uppercase tracking-wider shadow-xl"
            >
              WORK WITH US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
