"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Returns true when the user has requested reduced motion.
 *
 * Starts as `null` (unknown) on the server and first client render to avoid a
 * hydration mismatch. Consumers should treat `null` as "don't animate yet".
 * Combined with the no-motion-first primitives (content is visible in the DOM
 * by default, motion is layered on after mount), this keeps the site fully
 * usable with reduced motion, no JS, or before hydration.
 */
export function useReducedMotion(): boolean | null {
	const [reduced, setReduced] = useState<boolean | null>(null);

	useEffect(() => {
		const mql = window.matchMedia(QUERY);
		setReduced(mql.matches);
		const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	return reduced;
}
