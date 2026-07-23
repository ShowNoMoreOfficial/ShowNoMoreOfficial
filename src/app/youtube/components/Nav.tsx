"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#system", label: "System" },
  { href: "#results", label: "Results" },
  { href: "#platform", label: "Daftar OS" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-[#0B0C0E]/95 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — links back to the main site */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="ShowNoMore home">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">SNM</span>
          <span className="font-sans font-normal text-sm tracking-wide text-white/50 hidden sm:inline-block">
            for YouTube
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden lg:flex items-center text-xs font-mono tracking-widest text-white/60">
          {LINKS.map((l, i) => (
            <div key={l.href} className="flex items-center">
              {i > 0 && <span className="w-px h-4 bg-white/10" />}
              <a href={l.href} className="hover:text-white transition-colors uppercase px-6">
                {l.label}
              </a>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
              34,219 Live Viewers
            </span>
          </div>
          <a
            href="#demo"
            className="font-sans font-medium text-sm text-white flex items-center gap-2 group"
          >
            <span className="text-[#FF3B30] group-hover:translate-x-1 transition-transform">→</span>
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
