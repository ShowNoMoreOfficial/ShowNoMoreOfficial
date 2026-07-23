"use client";

import { motion } from "framer-motion";
import { Ticker } from "./Ticker";

export function Hero() {
  return (
    <section className="relative pt-40 md:pt-56 pb-0 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-mono text-xs md:text-sm text-[#FF3B30] tracking-widest uppercase">
            Issue 001 — YouTube Operations — July 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display leading-[0.9] tracking-tighter mb-16 md:mb-24 uppercase"
          style={{ fontSize: "clamp(56px, 11vw, 200px)" }}
        >
          <span className="block font-light text-white/90">The Engine</span>
          <span className="block font-bold text-white">Behind High-Growth</span>
          <span className="block font-black text-white">
            Channels<span className="text-[#FF3B30]">.</span>
          </span>
        </motion.h1>

        {/* Deck grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 relative">
          <div className="absolute -top-6 left-0 right-0 h-px bg-white/10 hidden md:block" />

          {/* Subhead */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-5"
          >
            <p className="text-lg md:text-xl font-sans text-white/60 leading-relaxed font-light">
              ShowNoMore is the unfair advantage for premium YouTube creators — a fused studio
              and AI content OS that industrializes the production pipeline, engineers retention,
              and turns data into reach.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 md:border-l md:border-white/10 md:pl-8 lg:pl-12 flex flex-col justify-center"
          >
            <blockquote className="font-sans font-medium text-white/90 text-xl leading-snug mb-4">
              &ldquo;SNM doubled our channel in 60 days. The data operation is terrifyingly
              precise.&rdquo;
            </blockquote>
            <cite className="font-mono text-xs text-white/40 uppercase tracking-widest not-italic">
              — The Squirrels, 5M subs
            </cite>
          </motion.div>

          {/* Live stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-3 md:border-l md:border-white/10 md:pl-8 lg:pl-12 flex flex-col justify-center gap-6"
          >
            <div>
              <div className="font-mono text-3xl md:text-4xl text-white mb-1">34k</div>
              <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest">
                Live Viewers
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl text-white mb-1">9.2%</div>
              <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest">
                Avg. CTR
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Ticker
          items={[
            "The Squirrels", "1.2B Views",
            "Breaking Tube", "10.4% CTR",
            "Cosmic Guru", "25M Monthly Views",
            "Tech Flow", "8.9% Retention Lift",
          ]}
        />
      </motion.div>
    </section>
  );
}
