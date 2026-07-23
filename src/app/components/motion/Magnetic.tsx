"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type MagneticProps = {
	children: React.ReactNode;
	className?: string;
	/** How strongly the element tracks the pointer (0–1). */
	strength?: number;
};

/**
 * Wraps interactive elements (CTAs, logo, links) so they subtly lean toward
 * the cursor and spring back on leave. No-op on touch / coarse pointers and
 * under reduced motion, so it never interferes with tap or keyboard use.
 */
export default function Magnetic({
	children,
	className,
	strength = 0.35,
}: MagneticProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced !== false) return;
			const el = ref.current;
			if (!el) return;
			if (!window.matchMedia("(pointer: fine)").matches) return;

			const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
			const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

			const onMove = (e: MouseEvent) => {
				const r = el.getBoundingClientRect();
				const mx = e.clientX - (r.left + r.width / 2);
				const my = e.clientY - (r.top + r.height / 2);
				xTo(mx * strength);
				yTo(my * strength);
			};
			const onLeave = () => {
				xTo(0);
				yTo(0);
			};

			el.addEventListener("mousemove", onMove);
			el.addEventListener("mouseleave", onLeave);
			return () => {
				el.removeEventListener("mousemove", onMove);
				el.removeEventListener("mouseleave", onLeave);
			};
		},
		{ dependencies: [reduced], scope: ref },
	);

	return (
		<span ref={ref} className={`inline-block ${className ?? ""}`}>
			{children}
		</span>
	);
}
