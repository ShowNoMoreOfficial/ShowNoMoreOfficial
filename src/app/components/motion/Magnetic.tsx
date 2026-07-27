import React from "react";

type MagneticProps = {
	children: React.ReactNode;
	className?: string;
	/** Retained for API compatibility; no longer used. */
	strength?: number;
};

/**
 * Static wrapper. The cursor-tracking "magnetic" effect was removed (it read as
 * jiggly / poor UX), so this just renders its children inline. Kept as a
 * component so existing call sites don't need to change.
 */
export default function Magnetic({ children, className }: MagneticProps) {
	return <span className={`inline-block ${className ?? ""}`}>{children}</span>;
}
