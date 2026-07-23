"use client";

import { motion } from "framer-motion";

// Retention (% of audience still watching) across the length of a video.
const SNM = [
  { x: 0, y: 100 }, { x: 10, y: 92 }, { x: 20, y: 86 }, { x: 30, y: 80 },
  { x: 40, y: 75 }, { x: 50, y: 71 }, { x: 60, y: 69 }, { x: 70, y: 68 },
  { x: 80, y: 68 }, { x: 90, y: 68 }, { x: 100, y: 68.5 },
];
const PLATFORM = [
  { x: 0, y: 100 }, { x: 10, y: 72 }, { x: 20, y: 55 }, { x: 30, y: 44 },
  { x: 40, y: 37 }, { x: 50, y: 32 }, { x: 60, y: 29 }, { x: 70, y: 27 },
  { x: 80, y: 26 }, { x: 90, y: 25 }, { x: 100, y: 24 },
];

const W = 660;
const H = 360;
const M = { top: 28, right: 28, bottom: 44, left: 48 };
const IW = W - M.left - M.right;
const IH = H - M.top - M.bottom;

const sx = (x: number) => M.left + (x / 100) * IW;
const sy = (y: number) => M.top + (1 - y / 100) * IH;

function smooth(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${sx(pts[0].x)} ${sy(pts[0].y)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const cx = (sx(p0.x) + sx(p1.x)) / 2;
    d += ` C ${cx} ${sy(p0.y)}, ${cx} ${sy(p1.y)}, ${sx(p1.x)} ${sy(p1.y)}`;
  }
  return d;
}

const snmPath = smooth(SNM);
const platformPath = smooth(PLATFORM);
const areaPath = `${snmPath} L ${sx(100)} ${sy(0)} L ${sx(0)} ${sy(0)} Z`;

const yTicks = [0, 25, 50, 75, 100];
const xTicks = [0, 25, 50, 75, 100];

export function RetentionChart() {
  const midX = sx(50);
  const midY = sy(71);

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Line chart: ShowNoMore channels retain 68.5% of viewers at the midpoint of a video versus 32% for the platform average."
      >
        <defs>
          <linearGradient id="yt-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FF3B30" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* horizontal gridlines + y labels */}
        {yTicks.map((t) => (
          <g key={`y-${t}`}>
            <line
              x1={M.left}
              x2={W - M.right}
              y1={sy(t)}
              y2={sy(t)}
              stroke="rgba(244,244,246,0.08)"
              strokeWidth={1}
            />
            <text
              x={M.left - 10}
              y={sy(t) + 4}
              textAnchor="end"
              className="fill-white/40"
              style={{ fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {t}%
            </text>
          </g>
        ))}

        {/* x labels */}
        {xTicks.map((t) => (
          <text
            key={`x-${t}`}
            x={sx(t)}
            y={H - M.bottom + 22}
            textAnchor="middle"
            className="fill-white/40"
            style={{ fontSize: 11, fontFamily: "var(--font-geist-mono), monospace" }}
          >
            {t}%
          </text>
        ))}

        {/* area under SNM */}
        <motion.path
          d={areaPath}
          fill="url(#yt-area)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* platform average — dashed benchmark */}
        <motion.path
          d={platformPath}
          fill="none"
          stroke="rgba(244,244,246,0.35)"
          strokeWidth={2}
          strokeDasharray="5 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* SNM channels — hero line */}
        <motion.path
          d={snmPath}
          fill="none"
          stroke="#FF3B30"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* annotation marker */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <circle cx={midX} cy={midY} r={5} fill="#FF3B30" />
          <circle cx={midX} cy={midY} r={10} fill="none" stroke="#FF3B30" strokeOpacity={0.4} />
          <line x1={midX} y1={midY} x2={midX} y2={M.top + 6} stroke="rgba(255,59,48,0.35)" strokeWidth={1} strokeDasharray="3 3" />
        </motion.g>
      </svg>

      <figcaption className="sr-only">
        At the midpoint of a video, ShowNoMore-operated channels retain 71% of their audience
        versus roughly 32% for the platform average.
      </figcaption>
    </figure>
  );
}
