"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1518151811650-e17f54955627?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop",
];

function BentoCell({
  src,
  alt,
  className,
  delay = 0,
  large = false,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  large?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.6 }}
      className={`relative overflow-hidden group cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-[#FF3B30]/0 group-hover:bg-[#FF3B30]/20 mix-blend-multiply transition-colors duration-500 z-10" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span
          className={`font-display font-bold text-white drop-shadow-lg flex items-center gap-3 ${
            large ? "text-4xl" : "text-2xl"
          }`}
        >
          <Play fill="currentColor" className={large ? "w-8 h-8" : "w-6 h-6"} /> PLAY
        </span>
      </div>
    </motion.div>
  );
}

export function Showreel() {
  return (
    <section id="work" className="py-32 md:py-40 relative border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="border-t border-white/10 pt-8 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest">
              The Work
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl lg:text-[100px] tracking-tighter leading-[0.85] uppercase">
              <span className="font-light text-white block">The ShowNoMore</span>
              <span className="font-black text-[#FF3B30] block">Aesthetic.</span>
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-24">
          <BentoCell src={images[0]} alt="Showreel still 1" delay={0} large className="md:col-span-8 aspect-video md:aspect-auto md:h-[600px]" />
          <BentoCell src={images[1]} alt="Showreel still 2" delay={0.1} className="md:col-span-4 aspect-square md:aspect-auto md:h-[600px]" />
          <BentoCell src={images[2]} alt="Showreel still 3" delay={0.2} className="md:col-span-4 aspect-square md:aspect-auto md:h-[400px]" />
          <BentoCell src={images[3]} alt="Showreel still 4" delay={0.3} large className="md:col-span-8 aspect-video md:aspect-auto md:h-[400px]" />
        </div>

        {/* A/B test pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center border-y border-white/10 py-16 px-6"
        >
          <div className="font-display text-[#FF3B30] text-6xl mb-4 leading-none">&ldquo;</div>
          <h3 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-tight">
            Stop guessing. Run our AI-driven A/B test on your next thumbnail before it goes live.
          </h3>
          <button
            type="button"
            className="font-sans font-medium text-sm text-white flex items-center gap-2 mx-auto group"
          >
            <span className="border-b border-white/20 pb-1 group-hover:border-white transition-colors">
              Start free test
            </span>
            <span className="text-[#FF3B30] group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
