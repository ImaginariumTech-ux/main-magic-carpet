"use client";

import Link from "next/link";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <>
      {/* Pre-Footer CTA Section with Video Background */}
      <section className="relative min-h-[420px] sm:min-h-[500px] w-full overflow-hidden bg-[#0E121B] text-white flex flex-col items-center justify-center text-center px-4 py-20 border-t border-[#0E121B]/10">
        {/* Background Cloudinary Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dt2vu9jje/video/upload/v1790149693/LOB_o8iwfb.mp4"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-100 contrast-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B]/90 via-[#0E121B]/40 to-black/30 pointer-events-none" />
        </div>

        {/* Banner Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight drop-shadow-2xl">
            Have a project <em className="font-serif-accent font-normal text-sky-200 not-italic italic">in mind?</em>
          </h2>

          <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            Let&apos;s bring it to life.
          </p>

          <div className="pt-4">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0E121B] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span>Work with us</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sitemap Footer */}
      <footer className="bg-white text-[#0E121B] border-t border-[#0E121B]/10">
        <div className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20 max-w-7xl mx-auto">
          {/* Sitemap Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-sm">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#0E121B]/40 font-semibold">Explore</div>
              <ul className="space-y-2.5 text-[#0E121B]/70">
                <li>
                  <Link href="/work-with-us" className="hover:text-[#0E121B] transition-colors font-medium">
                    Work with us
                  </Link>
                </li>
                <li>
                  <a href="https://magiclab.studio" target="_blank" rel="noreferrer" className="hover:text-[#0E121B] transition-colors inline-flex items-baseline gap-1.5 font-medium">
                    <span>Academy</span>
                    <span className="text-[11px] text-[#0E121B] font-bold">Learn how to animate</span>
                  </a>
                </li>
                <li className="pt-1"> 
                  <span className="font-medium text-[#0E121B]/50">For Partnerships:</span> <span className="font-semibold text-[#0E121B]">hello@magiccarpet.studio</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#0E121B]/40 font-semibold">Address</div>
              <ul className="space-y-2 text-[#0E121B]/70 text-xs leading-relaxed">
                <li className="font-bold text-[#0E121B]">Lagos, Nigeria</li>
                <li>Plot 18, Nike Art Gallery Road</li>
                <li>Ikate, Lekki, Lagos</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#0E121B]/40 font-semibold">Social</div>
              <ul className="space-y-2.5 text-[#0E121B]/70">
                <li>
                  <a href="https://www.instagram.com/magiccarpetstudios_" target="_blank" rel="noreferrer" className="hover:text-[#0E121B] transition-colors font-medium">
                    Instagram (IG) ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/magic-carpet-studios" target="_blank" rel="noreferrer" className="hover:text-[#0E121B] transition-colors font-medium">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@MagicCarpetStudios" target="_blank" rel="noreferrer" className="hover:text-[#0E121B] transition-colors font-medium">
                    YouTube (YT) ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Credits & Copyright */}
          <div className="mt-16 pt-8 border-t border-[#0E121B]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#0E121B]/50 gap-4">
            <div>© {new Date().getFullYear()} Magic Carpet Studios. All rights reserved. Lagos, Nigeria.</div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#0E121B]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#0E121B]">Terms of Use</Link>
              <Link href="/cookies" className="hover:text-[#0E121B]">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
