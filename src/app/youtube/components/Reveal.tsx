"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Lightweight scroll-reveal wrapper used across the editorial sections so the
 * enter animations stay consistent. Respects prefers-reduced-motion via
 * framer-motion's built-in reduced-motion handling.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
