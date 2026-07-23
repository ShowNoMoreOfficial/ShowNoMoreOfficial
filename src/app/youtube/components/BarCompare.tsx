"use client";

import { motion } from "framer-motion";

const DATA = [
  { label: "The Squirrels", value: 10.4 },
  { label: "Breaking Tube", value: 9.1 },
  { label: "Cosmic Guru", value: 8.9 },
  { label: "Tech Flow", value: 7.6 },
];
const BENCHMARK = 4.0; // platform median CTR
const MAX = 12;

export function BarCompare() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        {DATA.map((d, i) => (
          <div key={d.label} className="flex items-center gap-4">
            <div className="w-28 shrink-0 text-right font-mono text-[10px] uppercase tracking-widest text-white/50">
              {d.label}
            </div>
            <div className="relative flex-1 h-8">
              {/* track */}
              <div className="absolute inset-0 bg-white/[0.04]" />
              {/* benchmark marker */}
              <div
                className="absolute top-0 bottom-0 w-px bg-white/40"
                style={{ left: `${(BENCHMARK / MAX) * 100}%` }}
              />
              {/* bar */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-[#FF3B30]"
                initial={{ width: 0 }}
                whileInView={{ width: `${(d.value / MAX) * 100}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-y-0 right-2 flex items-center font-mono text-xs text-white/80">
                {d.value.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-6 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/45">
        <span className="flex items-center gap-2">
          <span className="w-3 h-2 bg-[#FF3B30]" /> SNM channels
        </span>
        <span className="flex items-center gap-2">
          <span className="w-px h-3 bg-white/40" /> Platform median · {BENCHMARK.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
