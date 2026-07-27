import { ArrowUpRight } from "lucide-react";
import Reveal from "../../components/motion/Reveal";
import FlowingCards from "./FlowingCards";
import LogoStrip from "./LogoStrip";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-10 pt-36 md:px-12 md:pt-44">
      {/* Diagonal flowing card carousel — right half only */}
      <FlowingCards />

      <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center">
          {/* Headline — left column, clear of the cards */}
          <div className="w-full lg:w-[48%]">
            <Reveal>
              <h1
                className="font-[family-name:var(--font-fraunces)] font-light leading-[0.9] tracking-tight text-[#1a1a1a]"
                style={{ fontSize: "clamp(44px, 5.2vw, 92px)" }}
              >
                <span className="block">The Engine</span>
                <span className="block">Behind</span>
                <span className="block">High-Growth</span>
                <span className="block">
                  Channels<span className="text-[#cc0906]">.</span>
                </span>
              </h1>
            </Reveal>
          </div>

          {/* Subtext + Book a call on the same line */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <Reveal delay={0.15} className="max-w-md lg:w-[48%]">
              <p className="text-lg leading-relaxed text-black/55">
                The unfair advantage for premium content creators — a fused
                studio and AI-Content OS that automates production, maximizes
                retention, and guarantees reach.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="shrink-0">
              <a
                href="#book"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1a1a1a] px-7 py-4 text-base font-medium text-[#F5F0E6] transition-colors duration-300 hover:bg-[#cc0906]"
              >
                Book a call
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Client / channel strip */}
        <div className="relative z-10 mt-10">
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}
