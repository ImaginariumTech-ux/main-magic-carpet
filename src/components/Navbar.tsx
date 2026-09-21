"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Mobile submenu accordions
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWorksOpen, setMobileWorksOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 text-base font-semibold tracking-tight">
          {/* Home Link */}
          <li>
            <Link
              href="/"
              onClick={() => {
                setAboutOpen(false);
                setWorksOpen(false);
                setServicesOpen(false);
              }}
              className="text-white/80 hover:text-yellow-400 transition-colors py-2"
            >
              Home
            </Link>
          </li>

          {/* About Us Link & Dropdown */}
          <li className="relative">
            <Link
              href="/about"
              onMouseEnter={() => {
                setAboutOpen(true);
                setWorksOpen(false);
                setServicesOpen(false);
              }}
              className={`transition-colors py-2 flex items-center gap-1.5 focus:outline-none ${
                aboutOpen ? "text-yellow-400 font-bold" : "text-white/80 hover:text-white"
              }`}
            >
              About Us
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* About Us Dropdown Panel */}
            {aboutOpen && (
              <div
                onMouseLeave={() => setAboutOpen(false)}
                className="absolute top-full left-0 w-64 mt-1 bg-[#0B0E14] border border-white/10 rounded-xl p-4 shadow-2xl z-50 animate-hero-fade space-y-2"
              >
                <Link
                  href="/about#team"
                  onClick={() => setAboutOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Our Team
                </Link>
                <Link
                  href="/about#awards"
                  onClick={() => setAboutOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Awards & Recognition
                </Link>
                <Link
                  href="/about#timeline"
                  onClick={() => setAboutOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Our 8-Year Story
                </Link>
              </div>
            )}
          </li>

          {/* Works Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setWorksOpen(!worksOpen);
                setAboutOpen(false);
                setServicesOpen(false);
              }}
              onMouseEnter={() => {
                setWorksOpen(true);
                setAboutOpen(false);
                setServicesOpen(false);
              }}
              className={`transition-colors py-2 flex items-center gap-1.5 focus:outline-none ${
                worksOpen ? "text-yellow-400 font-bold" : "text-white/80 hover:text-white"
              }`}
            >
              Works
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  worksOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Works Dropdown Panel */}
            {worksOpen && (
              <div
                onMouseLeave={() => setWorksOpen(false)}
                className="absolute top-full left-0 w-64 mt-1 bg-[#0B0E14] border border-white/10 rounded-xl p-4 shadow-2xl z-50 animate-hero-fade space-y-2"
              >
                <Link
                  href="/projects"
                  onClick={() => setWorksOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Our IPs
                </Link>
                <Link
                  href="/partners"
                  onClick={() => setWorksOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Clients and Partners
                </Link>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setAboutOpen(false);
                setWorksOpen(false);
              }}
              onMouseEnter={() => {
                setServicesOpen(true);
                setAboutOpen(false);
                setWorksOpen(false);
              }}
              className={`transition-colors py-2 flex items-center gap-1.5 focus:outline-none ${
                servicesOpen ? "text-yellow-400 font-bold" : "text-white/80 hover:text-white"
              }`}
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Services Dropdown Panel */}
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 w-72 mt-1 bg-[#0B0E14] border border-white/10 rounded-xl p-4 shadow-2xl z-50 animate-hero-fade space-y-2"
              >
                <Link
                  href="/services/explainer-videos"
                  onClick={() => setServicesOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Explainer Videos & Motion Graphics
                </Link>
                <Link
                  href="/services/2d-3d-animation"
                  onClick={() => setServicesOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Original 2D & 3D IP Animation
                </Link>
                <Link
                  href="/services/brand-storytelling"
                  onClick={() => setServicesOpen(false)}
                  className="block text-base font-bold text-white hover:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  Brand & Commercial Storytelling
                </Link>
              </div>
            )}
          </li>

          {/* Create With Us */}
          <li>
            <button
              data-cal-namespace="30min"
              data-cal-link="magic-carpet-ywfdx8/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="text-white/80 hover:text-white transition-colors py-2 focus:outline-none"
            >
              Create With Us
            </button>
          </li>

          {/* Blog */}
          <li>
            <Link
              href="/blog"
              onClick={() => {
                setAboutOpen(false);
                setWorksOpen(false);
                setServicesOpen(false);
              }}
              className="text-white/80 hover:text-yellow-400 transition-colors py-2"
            >
              Blog
            </Link>
          </li>

          {/* Academy */}
          <li>
            <a
              href="https://magiclab.studio"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-yellow-400 transition-colors py-2 flex items-center gap-1"
            >
              Academy ↗
            </a>
          </li>
        </ul>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <button
            data-cal-namespace="30min"
            data-cal-link="magic-carpet-ywfdx8/30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-6 py-2.5 rounded-full border border-white/20 hover:border-yellow-400 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-white text-sm font-medium focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-lg">✕ Close</span>
          ) : (
            <span className="text-sm font-semibold border border-white/20 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md">
              Menu
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0B0E14]/95 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 animate-hero-fade">
          <div className="space-y-4 pt-4 overflow-y-auto">
            {/* Home Direct Link */}
            <div>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-light text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
            </div>

            {/* About Us Group - Collapsible */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-xl font-light text-white hover:text-yellow-400 py-1 transition-colors text-left"
              >
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileAboutOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileAboutOpen && (
                <div className="space-y-2.5 pt-2 pb-1 pl-3 border-l-2 border-yellow-400/40 ml-2 mt-2 space-y-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    About Overview
                  </Link>
                  <Link
                    href="/about#team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about#awards"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Awards & Recognition
                  </Link>
                  <Link
                    href="/about#timeline"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Our 8-Year Story
                  </Link>
                </div>
              )}
            </div>

            {/* Works Group - Collapsible */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => setMobileWorksOpen(!mobileWorksOpen)}
                className="w-full flex items-center justify-between text-xl font-light text-white hover:text-yellow-400 py-1 transition-colors text-left"
              >
                <span>Works</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileWorksOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileWorksOpen && (
                <div className="space-y-2.5 pt-2 pb-1 pl-3 border-l-2 border-yellow-400/40 ml-2 mt-2 space-y-2">
                  <Link
                    href="/projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Our IPs
                  </Link>
                  <Link
                    href="/partners"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Clients and Partners
                  </Link>
                </div>
              )}
            </div>

            {/* Services Group - Collapsible */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-xl font-light text-white hover:text-yellow-400 py-1 transition-colors text-left"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180 text-yellow-400" : "text-white/60"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="space-y-2.5 pt-2 pb-1 pl-3 border-l-2 border-yellow-400/40 ml-2 mt-2 space-y-2">
                  <Link
                    href="/services/explainer-videos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Explainer Videos & Motion Graphics
                  </Link>
                  <Link
                    href="/services/2d-3d-animation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Original 2D & 3D Animation
                  </Link>
                  <Link
                    href="/services/brand-storytelling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    Brand Storytelling
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <button
                data-cal-namespace="30min"
                data-cal-link="magic-carpet-ywfdx8/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-light text-left text-white hover:text-yellow-400 transition-colors"
              >
                Create With Us
              </button>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-light text-white hover:text-yellow-400 transition-colors"
              >
                Blog
              </Link>

              <a
                href="https://magiclab.studio"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-light text-white hover:text-yellow-400 transition-colors"
              >
                Academy ↗
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-4">
            <button
              data-cal-namespace="30min"
              data-cal-link="magic-carpet-ywfdx8/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-yellow-400 text-black font-semibold text-center text-sm uppercase tracking-wider shadow-xl"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
