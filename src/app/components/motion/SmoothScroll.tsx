"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Mounts Lenis smooth scroll and syncs it to GSAP's ticker so ScrollTrigger
 * stays perfectly in phase (no jank, single RAF loop). Under prefers-reduced-
 * motion we skip Lenis entirely and fall back to native scrolling.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
	const reduced = useReducedMotion();

	useEffect(() => {
		// Wait until we know the user's preference; skip when reduced motion.
		if (reduced === null || reduced === true) return;

		const lenis = new Lenis({
			duration: 1.1,
			lerp: 0.1,
			smoothWheel: true,
			syncTouch: false, // native momentum on touch feels better than smoothing
		});

		// Drive Lenis from GSAP's ticker and keep ScrollTrigger updated.
		lenis.on("scroll", ScrollTrigger.update);
		const raf = (time: number) => lenis.raf(time * 1000);
		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(raf);
			lenis.destroy();
		};
	}, [reduced]);

	return <>{children}</>;
}
