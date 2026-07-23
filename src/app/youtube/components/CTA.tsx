"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Ticker } from "./Ticker";

const testimonials = [
  { q: "Their retention scripts changed our entire business model.", a: "Tech Flow, 2M subs" },
  { q: "We stopped guessing. Every video hits.", a: "Cosmic Guru, 1.8M subs" },
  { q: "Daftar OS feels like cheating.", a: "The Squirrels, 5M subs" },
];

export function CTA() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOfWeek = 3; // July 1, 2026 is a Wednesday

  const isToday = (day: number) => day === 23;
  const isAvailable = (day: number) => day > 23 && day % 2 !== 0;

  return (
    <>
      <section
        id="demo"
        className="py-32 md:py-40 bg-[#14161B] relative border-t border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 yt-grid-bg opacity-50" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Left: CTA + calendar */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
            >
              Ready To
              <br />
              <span className="relative inline-block mt-2">
                Scale?
                <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-4 bg-[#FF3B30] -z-10" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-white/60 max-w-lg mb-12"
            >
              Join the content-operations platform powering YouTube&rsquo;s most ambitious channels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mb-16"
            >
              <button
                type="button"
                className="bg-white text-black font-sans font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                Schedule Demo →
              </button>
              <button
                type="button"
                className="border border-white/20 text-white font-sans font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                See The System ↓
              </button>
            </motion.div>

            {/* Inline calendar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-md border border-white/10 p-6 bg-[#0B0C0E]/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-sm uppercase tracking-widest">July 2026</h3>
                <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest text-white/50">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF3B30] rounded-full" /> Today
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" /> Open
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2 text-center text-[10px] font-mono text-white/30 pb-2 border-b border-white/10">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: startDayOfWeek }).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}
                {days.map((day) => {
                  const today = isToday(day);
                  const available = isAvailable(day);
                  const selected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={!available && !today}
                      aria-pressed={selected}
                      onClick={() => available && setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center font-mono text-xs transition-colors
                        ${today ? "text-[#FF3B30] font-bold" : ""}
                        ${selected ? "bg-white text-black font-bold" : ""}
                        ${!today && !selected && available ? "text-white hover:bg-white/10" : ""}
                        ${!today && !available ? "text-white/20 cursor-not-allowed" : ""}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              {selectedDate && (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
                  Selected · July {selectedDate}, 2026
                </p>
              )}
            </motion.div>
          </div>

          {/* Right: testimonials */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-12 border-l border-white/10 pl-0 lg:pl-16">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.a}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.15 + idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-6 lg:-left-12 top-0 text-[#FF3B30] font-display text-4xl leading-none hidden md:block">
                  &ldquo;
                </div>
                <p className="font-sans italic text-xl md:text-2xl text-white/90 leading-tight mb-4">
                  {t.q}
                </p>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  — {t.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0C0E]">
      <div className="border-t border-white/10">
        <Ticker
          items={[
            "Book A Demo",
            "Scale Operations",
            "Increase Retention",
            "Predictive Analytics",
            "Join The Network",
            "Daftar OS",
          ]}
          direction="right"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-2xl text-white">SNM</span>
          <span className="w-px h-4 bg-white/20 hidden md:block" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 hidden md:block">
            The engine behind high-growth channels.
          </span>
        </div>
        <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <Link href="/" className="hover:text-white transition-colors">
            Main Site
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <span>© 2026</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
          Powered by <span className="text-white">Daftar OS</span>
        </div>
      </div>
    </footer>
  );
}
