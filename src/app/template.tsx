"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./lib/gsap";
import { useReducedMotion } from "./hooks/useReducedMotion";

/**
 * template.tsx re-mounts on every navigation, so this gives each route a quiet
 * entrance (a soft fade + rise). Kept deliberately subtle so it never competes
 * with the in-page scroll reveals. No motion under reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced !== false || !ref.current) return;
			gsap.from(ref.current, {
				opacity: 0,
				y: 12,
				duration: 0.5,
				ease: "power2.out",
			});
		},
		{ dependencies: [reduced], scope: ref },
	);

	return <div ref={ref}>{children}</div>;
}
