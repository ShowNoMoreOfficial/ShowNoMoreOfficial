"use client";

import { useRef } from "react";
import { gsap, SplitText, ScrollTrigger, useGSAP } from "../../lib/gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { EASE, DURATION, REVEAL_START } from "../../lib/motion";

type SplitMode = "rise" | "focus";
type SplitType = "lines" | "words" | "chars";

type SplitRevealProps = {
	children: React.ReactNode;
	as?: React.ElementType;
	className?: string;
	/** "rise" = mask + slide up (default). "focus" = blur→sharp (Trionn style). */
	mode?: SplitMode;
	type?: SplitType;
	/** Reveal on scroll (default) or immediately on mount (heroes). */
	onScroll?: boolean;
	delay?: number;
	duration?: number;
	start?: string;
};

// Watson-style deliberate cascade: lines and characters clip up one after
// another with a clearly readable stagger (not a near-instant blur).
const STAGGER_BY_TYPE: Record<SplitType, number> = {
	lines: 0.12,
	words: 0.07,
	chars: 0.03,
};

/**
 * Reveals oversized display type one line/word/char at a time. Text remains
 * real, selectable markup (SplitText wraps it, then reverts on cleanup); under
 * reduced motion or no JS it simply shows normally.
 */
export default function SplitReveal({
	children,
	as = "div",
	className,
	mode = "rise",
	type = "lines",
	onScroll = true,
	delay = 0,
	duration = DURATION.slow,
	start = REVEAL_START,
}: SplitRevealProps) {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();

	useGSAP(
		() => {
			if (reduced !== false) return;
			const el = ref.current;
			if (!el) return;

			let split: SplitText | null = null;
			let tween: gsap.core.Tween | null = null;

			const build = () => {
				split = new SplitText(el, {
					type,
					// "rise" clips each segment in an overflow-hidden wrapper.
					mask: mode === "rise" ? type : undefined,
					autoSplit: true,
				});
				const targets = split[type] as Element[];
				if (!targets?.length) return;

				const fromVars =
					mode === "rise"
						? { yPercent: 110, opacity: 0 }
						: { filter: "blur(12px)", opacity: 0, y: 10 };

				tween = gsap.from(targets, {
					...fromVars,
					duration,
					delay,
					ease: EASE.reveal,
					stagger: STAGGER_BY_TYPE[type],
					scrollTrigger: onScroll
						? { trigger: el, start, once: true }
						: undefined,
				});
			};

			// Split after fonts are ready so line breaks are measured correctly.
			if (document.fonts?.status === "loaded") {
				build();
			} else {
				document.fonts?.ready.then(() => {
					build();
					ScrollTrigger.refresh();
				});
			}

			return () => {
				tween?.scrollTrigger?.kill();
				tween?.kill();
				split?.revert();
			};
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
