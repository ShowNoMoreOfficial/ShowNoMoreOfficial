"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Work showcase (dark). The section is tall and its content is sticky-pinned, so
 * scrolling stays on the section while the project images SLIDE UP from the
 * bottom (scroll-linked) — a new project rises to cover the previous one. The
 * numbered menu highlights the active project and clicking it scrolls to that
 * project. ShowNoMore's own case studies.
 */
const projects = [
  {
    name: "The Squirrels",
    desc: "Tech parody juggernaut optimized for maximum watch time.",
    tag: "Entertainment",
    image: "/images/1.jpg",
    stat1: { label: "Total Views", value: "1.2B+" },
    stat2: { label: "Avg Retention", value: "68.5%" },
  },
  {
    name: "Breaking Tube",
    desc: "The technology news standard, scaled to daily output.",
    tag: "News",
    image: "/images/2.jpg",
    stat1: { label: "Avg CTR", value: "10.4%" },
    stat2: { label: "Uploads / Wk", value: "7x" },
  },
  {
    name: "Cosmic Guru",
    desc: "Science explained visually, dominating the education niche.",
    tag: "Education",
    image: "/images/3.jpg",
    stat1: { label: "Monthly Views", value: "25M" },
    stat2: { label: "Engagement", value: "14.1%" },
  },
  {
    name: "Daftar",
    desc: "The proprietary content OS powering the entire production pipeline.",
    tag: "Platform",
    image: "/images/5.jpg",
    stat1: { label: "Pipeline", value: "Automated" },
    stat2: { label: "Guesswork", value: "0%" },
  },
];

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export default function WorkShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastIdx = useRef(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, Math.max(total, 1));
      // Continuous progress across the projects: 0 → projects.length - 1
      const prog = total > 0 ? (scrolled / total) * (projects.length - 1) : 0;

      // Each image slides up from the bottom (100% → 0%) as progress reaches it.
      imageRefs.current.forEach((img, i) => {
        if (img) img.style.transform = `translateY(${clamp(i - prog, 0, 1) * 100}%)`;
      });

      const idx = clamp(Math.round(prog), 0, projects.length - 1);
      if (idx !== lastIdx.current) {
        lastIdx.current = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Click a menu item → scroll to that project's segment.
  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const docTop = window.scrollY + rect.top;
    const total = el.offsetHeight - window.innerHeight;
    const target = docTop + (total * i) / (projects.length - 1);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const p = projects[active];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0d0d0d] text-white"
      style={{ height: `${projects.length * 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-24 md:px-12">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Work label */}
            <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:gap-4">
              <span className="font-[family-name:var(--font-fraunces)] text-3xl">Work</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            {/* Project images — slide up from the bottom, stacked (later on top) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 ring-1 ring-white/10">
                {projects.map((proj, i) => (
                  <div
                    key={proj.name}
                    ref={(el) => {
                      imageRefs.current[i] = el;
                    }}
                    className="absolute inset-0 will-change-transform"
                    style={{ zIndex: i, transform: `translateY(${i === 0 ? 0 : 100}%)` }}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Numbered project menu */}
            <div className="lg:col-span-4 lg:pl-6">
              <div className="mb-6 hidden h-px w-full bg-white/15 lg:block" />
              <ul className="space-y-4">
                {projects.map((proj, i) => (
                  <li key={proj.name}>
                    <button
                      onClick={() => goTo(i)}
                      className={`flex w-full items-baseline gap-4 text-left text-xl transition-colors duration-200 md:text-2xl ${
                        i === active ? "text-white" : "text-white/30 hover:text-white/60"
                      }`}
                    >
                      <span className="font-mono text-sm text-white">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      {proj.name}
                    </button>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="group mt-8 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="border-b border-white/30 pb-1 group-hover:border-white">
                  Explore all
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Details for the active project */}
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6 lg:col-start-3 lg:col-span-5">
              <h3 className="mb-3 font-[family-name:var(--font-fraunces)] text-3xl">{p.name}</h3>
              <p className="mb-4 max-w-md text-white/50">{p.desc}</p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                {p.tag}
              </span>
            </div>
            <div className="flex gap-12 md:col-span-6 lg:col-span-4">
              <div>
                <div className="mb-1 font-mono text-2xl">{p.stat1.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {p.stat1.label}
                </div>
              </div>
              <div>
                <div className="mb-1 font-mono text-2xl">{p.stat2.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {p.stat2.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
