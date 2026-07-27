"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Branded (red) YouTube glyph. */
function YouTubeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <path
        d="M27.4 3.12A3.5 3.5 0 0 0 24.94.64C22.76.05 14 .05 14 .05S5.24.05 3.06.64A3.5 3.5 0 0 0 .6 3.12 36.5 36.5 0 0 0 0 10a36.5 36.5 0 0 0 .6 6.88 3.5 3.5 0 0 0 2.46 2.48C5.24 19.95 14 19.95 14 19.95s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.46-2.48A36.5 36.5 0 0 0 28 10a36.5 36.5 0 0 0-.6-6.88Z"
        fill="#FF0000"
      />
      <path d="M11.2 14.3 18.4 10l-7.2-4.3Z" fill="#fff" />
    </svg>
  );
}

/**
 * "What clients say" — an infinite carousel. Each slide is a composite: a
 * lavender quote card beside a visual card, with neighbouring slides peeking.
 * ShowNoMore's own testimonials + codebase imagery.
 *
 * Loop: the set is tripled and we track a position in the middle copy; after
 * each slide the position silently resets into the middle copy so it wraps
 * seamlessly both ways.
 */
const testimonials = [
  {
    quote:
      "ShowNoMore doubled our channel in sixty days. The data operation behind every upload is terrifyingly precise.",
    name: "The Squirrels",
    role: "100K Subscribers",
    image: "/images/1.jpg",
  },
  {
    quote:
      "Seven uploads a week and the quality never slips. They turned our newsroom into a machine that just keeps performing.",
    name: "Breaking Tube",
    role: "120K Subscribers",
    image: "/images/2.jpg",
  },
  {
    quote:
      "We stopped guessing. Every video lands, retention keeps climbing, and the whole operation runs like clockwork.",
    name: "Cosmic Guru",
    role: "123K Subscribers",
    image: "/images/3.jpg",
  },
];

const LEN = testimonials.length;
const slides = [...testimonials, ...testimonials, ...testimonials]; // tripled
const CARD = "#FFFFFF";

export default function Testimonials() {
  const [pos, setPos] = useState(LEN); // start in the middle copy
  const [anim, setAnim] = useState(true);

  const step = (dir: number) => {
    setAnim(true);
    setPos((p) => p + dir);
  };

  const handleEnd = () => {
    if (pos >= 2 * LEN) {
      setAnim(false);
      setPos(pos - LEN);
    } else if (pos < LEN) {
      setAnim(false);
      setPos(pos + LEN);
    }
  };

  useEffect(() => {
    if (!anim) {
      const id = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(id);
    }
  }, [anim]);

  const activeDot = ((pos % LEN) + LEN) % LEN;

  return (
    <section className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Heading + arrows */}
        <div className="mb-14 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-fraunces)] text-4xl tracking-tight md:text-5xl">
            What clients say
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => step(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-[#F5F0E6]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => step(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-[#F5F0E6]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex gap-16 ${anim ? "transition-transform duration-500 ease-out" : ""}`}
            style={{ transform: `translateX(calc(-${pos * 100}% - ${pos * 4}rem))` }}
            onTransitionEnd={handleEnd}
          >
            {slides.map((t, i) => (
              <div key={i} className="flex w-full shrink-0 gap-6 md:px-10">
                {/* Quote card — skewed into a rounded parallelogram (desktop);
                    content is counter-skewed to stay upright. */}
                <figure
                  className="w-full rounded-2xl md:w-1/2 md:-skew-x-[8deg]"
                  style={{ backgroundColor: CARD }}
                >
                  <div className="flex min-h-[22rem] flex-col justify-between p-8 md:min-h-[26rem] md:skew-x-[8deg] md:p-10 md:pr-14">
                    <blockquote className="font-[family-name:var(--font-fraunces)] text-xl leading-snug text-[#1a1a1a] md:text-2xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-end gap-4">
                      <div>
                        <div className="font-semibold tracking-tight text-[#1a1a1a]">{t.name}</div>
                        <div className="text-sm text-black/50">{t.role}</div>
                      </div>
                      <YouTubeLogo className="h-5 w-auto" />
                    </figcaption>
                  </div>
                </figure>

                {/* Visual card — matching skew; image counter-skewed + scaled to
                    fill the parallelogram. */}
                <div
                  className="relative hidden overflow-hidden rounded-2xl md:block md:min-h-[26rem] md:w-1/2 md:-skew-x-[8deg]"
                  style={{ backgroundColor: CARD }}
                >
                  <div className="absolute inset-0 md:skew-x-[8deg] md:scale-[1.25]">
                    <Image src={t.image} alt={t.name} fill sizes="40vw" className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setAnim(true);
                setPos(LEN + i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeDot ? "w-6 bg-[#1a1a1a]" : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
