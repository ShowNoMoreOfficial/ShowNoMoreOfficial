import type { CSSProperties } from "react";
import Image from "next/image";

/**
 * The hero's flowing card carousel.
 *
 * Upright cards (never tilted) flow along a diagonal path with one gentle bow.
 * The track is anchored at its top-left corner and rotated -38° so it runs from
 * the lower-left up toward the nav on the right; each card is counter-rotated
 * +38° to stay upright.
 *
 * Loop: the image set is repeated 6× and the track translates exactly -50%.
 *   - `w-max` sizes the track to its exact content width so -50% lands on a
 *     whole period (seamless).
 *   - The track is LEFT-anchored (never centred) — a centred track runs out on
 *     one side and leaves a gap.
 *   - Each half is wider than the visible diagonal, so the path is always full.
 *
 * Curve: one half-sine bow per loop-half (so it repeats with the loop and stays
 * seamless). Fades: angled top entry + bottom, dissolving cards into the cream.
 */
const cardImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/Summer.jpg",
  "/images/About.jpg",
  "/images/Camera.jpeg",
];

const CURVE_AMP = 70; // px — one gentle bow. Flip sign to bow the other way; 0 = straight.

const creamFade =
  "linear-gradient(to top, #F5F0E6 0%, #F5F0E6 16%, rgba(245,240,230,0) 42%)," +
  "linear-gradient(52deg, #F5F0E6 0%, rgba(245,240,230,0) 18%, rgba(245,240,230,0) 76%, #F5F0E6 100%)";

const blurMask = "linear-gradient(52deg, transparent 0%, transparent 70%, #000 100%)";

export default function FlowingCards() {
  const cards = Array.from({ length: 6 }, () => cardImages).flat();
  const half = cards.length / 2; // bow period == loop period → seamless

  return (
    <div className="booking-cards pointer-events-none absolute inset-0 overflow-hidden">
      {/* Left-anchored diagonal track — origin at top-left so rotation is
          predictable and the marquee never runs out. */}
      <div className="absolute left-[46%] top-[58%] origin-top-left rotate-[-38deg]">
        <div className="animate-booking-scroll flex w-max items-center">
          {cards.map((src, i) => {
            const curve = Math.sin((Math.PI * (i % half)) / half) * CURVE_AMP;
            return (
              <div
                key={i}
                className="booking-card relative -ml-20 shrink-0"
                style={
                  { transform: `translateY(${curve}px)`, "--card-z": cards.length - i } as CSSProperties
                }
              >
                <div className="relative h-80 w-56 overflow-hidden rounded-[20px] bg-neutral-200 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/10 rotate-[38deg]">
                  <Image src={src} alt="" fill sizes="224px" className="object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Angled blur, strongest toward the top entry */}
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[4px]"
        style={{ WebkitMaskImage: blurMask, maskImage: blurMask }}
      />

      {/* Cream blend — bottom + angled ends, dissolves cards into the background */}
      <div className="pointer-events-none absolute inset-0" style={{ background: creamFade }} />
    </div>
  );
}
