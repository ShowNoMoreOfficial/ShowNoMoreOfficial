"use client";

import { Reveal } from "./Reveal";
import { Sparkline } from "./Sparkline";

const caseStudies = [
  {
    kicker: "Case Study 001",
    title: "The Squirrels",
    desc: "Tech parody juggernaut optimized for maximum watch time.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    trend: [8, 14, 22, 30, 46, 60, 72, 90],
    stat1: { label: "Total Views", value: "1.2B+" },
    stat2: { label: "Avg Retention", value: "68.5%" },
  },
  {
    kicker: "Case Study 002",
    title: "Breaking Tube",
    desc: "The technology-news standard, scaled to daily output.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    trend: [20, 24, 30, 28, 40, 52, 66, 84],
    stat1: { label: "Avg CTR", value: "10.4%" },
    stat2: { label: "Uploads/Wk", value: "7×" },
  },
  {
    kicker: "Case Study 003",
    title: "Cosmic Guru",
    desc: "Science explained visually, dominating the education niche.",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    trend: [10, 12, 20, 34, 42, 58, 70, 88],
    stat1: { label: "Monthly Views", value: "25M" },
    stat2: { label: "Engagement", value: "14.1%" },
  },
];

export function CaseStudies() {
  return (
    <section className="pb-32 md:pb-40 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {caseStudies.map((study, idx) => (
            <Reveal key={study.title} delay={idx * 0.1} className="group flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-[#14161B]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image}
                  alt={`${study.title} channel artwork`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700"
                />
              </div>
              <div className="h-px w-full bg-white/10 mb-6" />
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest pt-1">
                  {study.kicker}
                </div>
                <Sparkline data={study.trend} className="opacity-80" />
              </div>
              <h3 className="font-display text-3xl mb-3 font-medium">{study.title}</h3>
              <p className="font-sans text-white/50 italic text-sm mb-8 flex-1">{study.desc}</p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                  <div className="font-mono text-xl text-white mb-1">{study.stat1.value}</div>
                  <div className="font-sans text-[10px] text-white/40 uppercase tracking-widest">
                    {study.stat1.label}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl text-white mb-1">{study.stat2.value}</div>
                  <div className="font-sans text-[10px] text-white/40 uppercase tracking-widest">
                    {study.stat2.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
