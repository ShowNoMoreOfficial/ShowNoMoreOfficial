"use client";

import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Raw Ideation", desc: "Data-backed concept generation and predictive trend mapping." },
  { num: "02", title: "Retention Scripts", desc: "Psychology-driven narrative structures engineered to hook." },
  { num: "03", title: "Broadcast Editing", desc: "Cinematic execution with pacing designed for watch time." },
  { num: "04", title: "Packaging", desc: "A/B-tested thumbnails and metadata optimization before upload." },
];

export function Pipeline() {
  return (
    <section id="system" className="py-32 md:py-40 relative bg-[#0B0C0E]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="border-t border-white/10 pt-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs text-[#FF3B30] uppercase tracking-widest">
              The System
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] uppercase">
              <span className="font-light text-white/70 block">Industrialized</span>
              <span className="font-bold text-white block">Content Pipeline.</span>
            </h2>
          </div>
        </div>

        {/* Infographic line */}
        <div className="relative mb-32 pt-12">
          <div className="absolute top-0 left-0 right-0 h-px bg-white/10 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.12} className="relative pt-6 md:pt-12">
                <div className="hidden md:block absolute top-[-5px] left-0 w-2.5 h-2.5 rounded-full bg-[#FF3B30] shadow-[0_0_12px_#FF3B30]" />
                <div className="hidden md:block absolute top-0 left-[4px] w-px h-8 bg-white/10" />
                <div className="font-display font-light text-5xl text-white/20 mb-6">{step.num}</div>
                <h3 className="font-display font-medium text-2xl mb-4 text-white">{step.title}</h3>
                <p className="font-mono text-xs text-white/50 leading-relaxed pr-4">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Editor's note — Daftar OS */}
        <Reveal className="grid grid-cols-1 md:grid-cols-12">
          <div id="platform" className="md:col-start-4 md:col-span-8 lg:col-start-5 lg:col-span-7 scroll-mt-28">
            <div className="bg-[#14161B] border border-white/10 p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#FF3B30]" />
              <div className="font-mono text-[10px] text-[#FF3B30] uppercase tracking-widest mb-6">
                Editor&rsquo;s Note
              </div>
              <h4 className="font-display text-2xl md:text-3xl font-medium mb-4">
                Powered by Daftar OS
              </h4>
              <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed mb-8">
                Our entire pipeline is managed through our proprietary Daftar content OS.
                Predictive analytics, automated scripting insights, and real-time competitor
                tracking are integrated directly into every stage of production. No guessing.
                Just execution.
              </p>
              <button
                type="button"
                className="font-sans font-medium text-sm text-white flex items-center gap-2 group border-b border-white/20 pb-1 hover:border-white transition-colors"
              >
                Explore the tech
                <span className="text-[#FF3B30] group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
