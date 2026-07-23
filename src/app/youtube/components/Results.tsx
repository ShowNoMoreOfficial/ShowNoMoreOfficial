"use client";

import { StatCounter } from "./StatCounter";
import { RetentionChart } from "./RetentionChart";
import { BarCompare } from "./BarCompare";
import { Reveal } from "./Reveal";

const METRICS = [
  { label1: "Metric 01", label2: "Total views generated", value: 1.2, decimals: 1, suffix: "B+" },
  { label1: "Metric 02", label2: "Average audience retention", value: 68.5, decimals: 1, suffix: "%" },
  { label1: "Metric 03", label2: "Spent on ads. All organic.", value: 0, decimals: 0, prefix: "$" },
];

export function Results() {
  return (
    <section id="results" className="py-32 md:py-40 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="border-t border-white/10 pt-8 mb-20 md:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest">
              Results / The Data
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-medium text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight">
              We move the metrics <br className="hidden md:block" /> that matter.
            </h2>
          </div>
        </div>

        {/* Massive stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 mb-24 md:mb-32">
          {METRICS.map((m) => (
            <div key={m.label1} className="py-12 md:py-16 md:px-8 lg:px-12 flex flex-col justify-between group">
              <div className="mb-12">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                  {m.label1}
                </span>
                <span className="font-sans text-sm text-white/60">{m.label2}</span>
              </div>
              <div className="relative">
                <StatCounter
                  value={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                  prefix={m.prefix}
                  className="font-mono text-6xl lg:text-8xl xl:text-[110px] leading-none tracking-tighter text-white font-light"
                />
                <div className="absolute -bottom-4 left-0 w-12 h-1 bg-[#FF3B30] group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured chart: retention curve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 items-stretch">
          <Reveal className="lg:col-span-8">
            <div className="h-full bg-[#14161B] border border-white/10 p-6 md:p-8 flex flex-col">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest mb-2">
                    Figure 01
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium">
                    The retention advantage
                  </h3>
                  <p className="font-sans text-sm text-white/50 mt-1">
                    Audience retained across a video&rsquo;s runtime.
                  </p>
                </div>
                <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-[3px] bg-[#FF3B30]" /> SNM channels
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-4 border-t-2 border-dashed border-white/40" /> Platform avg
                  </span>
                </div>
              </div>

              <RetentionChart />

              <div className="mt-4 pt-4 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/30">
                Source: SNM internal cohort · 240 videos · 2025–26
              </div>
            </div>
          </Reveal>

          {/* Annotation callout */}
          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="h-full bg-[#FF3B30] text-black p-8 md:p-10 flex flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/60">
                The takeaway
              </div>
              <div>
                <div className="font-display font-black text-7xl md:text-8xl leading-none tracking-tighter my-6">
                  2.4×
                </div>
                <p className="font-sans text-base md:text-lg font-medium leading-snug">
                  Where the average channel loses two of every three viewers before the
                  midpoint, ours keep <span className="font-bold">68%</span> watching to the end —
                  the single biggest lever on the algorithm.
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-black/60 pt-6">
                Retention → watch time → reach
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTR benchmark */}
        <Reveal>
          <div className="bg-[#14161B] border border-white/10 p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest mb-2">
                  Figure 02
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-3">
                  Click-through, benchmarked
                </h3>
                <p className="font-sans text-sm text-white/50">
                  Packaging is a science. Every thumbnail is A/B tested before it ships — so our
                  channels clear more than double the platform median CTR.
                </p>
              </div>
              <div className="lg:col-span-8">
                <BarCompare />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
