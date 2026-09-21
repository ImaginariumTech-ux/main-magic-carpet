"use client";

import Link from "next/link";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-black text-white border-t border-white/15">
      <div className="px-4 sm:px-6 lg:px-10 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Main CTA Block */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              Your next project <br />
              <em className="font-serif-accent font-normal text-white/80 not-italic italic">starts here.</em>
            </h2>

            <button
              data-cal-namespace="30min"
              data-cal-link="magic-carpet-ywfdx8/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 hover:border-white text-base font-medium bg-white/5 hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span>Get in touch</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Sitemap Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Explore</div>
              <ul className="space-y-2.5 text-white/70">
                <li>
                  <Link href="/#featured-work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog & News
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Studio HQ</div>
              <ul className="space-y-2 text-white/70 text-xs leading-relaxed">
                <li className="font-semibold text-white">Lagos, Nigeria</li>
                <li>Plot 18, Nike Art Gallery Road</li>
                <li>Ikate, Lekki, Lagos</li>
                <li className="pt-2 text-yellow-400 font-mono">hello@magiccarpet.studio</li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Social</div>
              <ul className="space-y-2.5 text-white/70">
                <li>
                  <a href="https://www.instagram.com/magiccarpetstudios_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href="https://x.com/magiccarpetng" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    X (Twitter) ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@MagicCarpetStudios" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    YouTube ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/magic-carpet-studios" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>© {new Date().getFullYear()} Magic Carpet Studios. All rights reserved. Authentic African Storytelling.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Use</a>
            <a href="#" className="hover:text-white/70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
