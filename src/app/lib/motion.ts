// Motion design tokens — the single source of truth for the site's "feel".
// Every animation pulls its timing, distance, and easing from here so the
// whole experience speaks one consistent language. Consistency = elegance.

// Signature easing. "snm" is a custom cubic-bezier registered in lib/gsap.ts
// (a confident ease-out with a soft settle). Fallbacks are built-in GSAP eases.
export const EASE = {
	reveal: "snm", // primary reveal ease (registered CustomEase)
	soft: "power2.out", // gentle UI transitions
	inOut: "power3.inOut", // curtains / transitions
	expo: "expo.out", // fast-in, long-tail (hero)
} as const;

// The custom bezier control points for "snm" (registered once at init).
// easeOutQuint — a long, gentle, deliberate settle. Refined, never snappy.
export const SNM_BEZIER = "0.22, 1, 0.36, 1";

// Slow and unhurried — premium restraint. Motion should barely register.
export const DURATION = {
	fast: 0.5,
	base: 1.0,
	slow: 1.3,
	curtain: 0.7,
} as const;

export const STAGGER = {
	tight: 0.04,
	base: 0.07,
	loose: 0.1,
} as const;

// Reveal travel distances (px). Deliberately tiny — a whisper of movement.
export const DISTANCE = {
	sm: 6,
	base: 12,
	lg: 18,
} as const;

// Standard ScrollTrigger start position for reveals.
export const REVEAL_START = "top 88%";
