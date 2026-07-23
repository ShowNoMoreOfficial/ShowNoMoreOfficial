"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

/**
 * Spring-animated number that counts up the first time it scrolls into view.
 * (The original template passed a `duration` alongside stiffness/damping to
 * useSpring, which framer-motion ignores — this uses a clean spring instead.)
 */
export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 40, stiffness: 90, mass: 1 });
  const text = useTransform(spring, (latest) => prefix + latest.toFixed(decimals) + suffix);

  if (inView) motionValue.set(value);

  return (
    <motion.span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {text}
    </motion.span>
  );
}
