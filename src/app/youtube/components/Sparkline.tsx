"use client";

import { motion } from "framer-motion";

/**
 * Tiny inline trend line for case-study cards. Normalizes an array of numbers
 * into a compact sparkline with an animated draw-in.
 */
export function Sparkline({
  data,
  className = "",
  width = 120,
  height = 32,
}: {
  data: number[];
  className?: string;
  width?: number;
  height?: number;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 2;

  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (width - pad * 2);
    const y = pad + (1 - (v - min) / span) * (height - pad * 2);
    return { x, y };
  });

  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const last = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="#FF3B30"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx={last.x}
        cy={last.y}
        r={2.5}
        fill="#FF3B30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </svg>
  );
}
