"use client";

import { useReducedMotion } from "../../hooks/useReducedMotion";

type MarqueeProps = {
	children: React.ReactNode;
	className?: string;
	/** Seconds for one full loop. Lower = faster. */
	speed?: number;
	reverse?: boolean;
};

/**
 * Seamless infinite marquee. Duplicates its content and slides -50% (matching
 * the .animate-marquee keyframe in globals.css). Pauses under reduced motion.
 */
export default function Marquee({
	children,
	className,
	speed = 24,
	reverse = false,
}: MarqueeProps) {
	const reduced = useReducedMotion();

	return (
		<div className={`overflow-hidden ${className ?? ""}`}>
			<div
				className="inline-flex w-max flex-nowrap animate-marquee will-change-transform"
				style={{
					animationDuration: `${speed}s`,
					animationDirection: reverse ? "reverse" : "normal",
					animationPlayState: reduced ? "paused" : "running",
				}}
			>
				<span className="inline-flex shrink-0">{children}</span>
				<span className="inline-flex shrink-0" aria-hidden="true">
					{children}
				</span>
			</div>
		</div>
	);
}
