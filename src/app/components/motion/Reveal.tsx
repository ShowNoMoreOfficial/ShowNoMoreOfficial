"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE, DURATION, DISTANCE, STAGGER, REVEAL_START } from "../../lib/motion";

type RevealProps = {
	children: React.ReactNode;
	/** Element tag to render. Default "div". */
	as?: React.ElementType;
	className?: string;
	/** Rise distance in px. */
	y?: number;
	/** Delay before the reveal (s). */
	delay?: number;
	/**
	 * Stagger direct children instead of the container itself.
	 * `true` uses the default stagger; a number overrides it.
	 */
	stagger?: boolean | number;
	duration?: number;
	/** ScrollTrigger start position. */
	start?: string;
};

/**
 * No-motion-first scroll reveal. Content is fully present in the DOM and
 * visible without JS or under reduced motion; when motion is allowed the
 * element (or its children) rises + fades in on scroll, once.
 */
export default function Reveal({
	children,
	as = "div",
	className,
	y = DISTANCE.base,
	delay = 0,
	stagger = false,
	duration = DURATION.base,
	start = REVEAL_START,
}: RevealProps) {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			// Only animate once we know motion is explicitly allowed.
			if (reduced !== false) return;
			const el = ref.current;
			if (!el) return;

			const targets: gsap.TweenTarget =
				stagger !== false ? Array.from(el.children) : el;

			gsap.from(targets, {
				opacity: 0,
				y,
				duration,
				delay,
				ease: EASE.reveal,
				stagger:
					stagger === true
						? STAGGER.base
						: typeof stagger === "number"
							? stagger
							: 0,
				scrollTrigger: { trigger: el, start, once: true },
			});
		},
		{ dependencies: [reduced], scope: ref },
	);

	// Cast to an explicit signature so children/ref always type-check under a
	// broad ElementType.
	const Tag = as as unknown as React.FC<{
		ref?: React.Ref<HTMLElement>;
		className?: string;
		children?: React.ReactNode;
	}>;
	return (
		<Tag ref={ref} className={className}>
			{children}
		</Tag>
	);
}
