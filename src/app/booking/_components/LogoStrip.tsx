import Image from "next/image";

/**
 * Client / channel ticker — a seamless horizontal marquee that fades into the
 * cream at both edges.
 *
 * To use real logos: drop files in `public/images/logos/` and fill `logos` with
 * `{ src, alt, width, height }` entries — the text fallback is only until the
 * logo files are provided. SVG (transparent) is ideal; PNG with transparent
 * background also works. Logos render grayscale/dimmed to sit quietly.
 */
type Logo = { src?: string; alt: string; width?: number; height?: number };

const logos: Logo[] = [
  { alt: "The Squirrels" },
  { alt: "Breaking Tube" },
  { alt: "Cosmic Guru" },
  { alt: "Daftar" },
];

// Fade the ticker into the cream at both ends.
const edgeFade =
  "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)";

export default function LogoStrip() {
  // Repeat enough times that a single half of the track is wider than the
  // viewport (otherwise the strip runs out and shows a gap). Even number of
  // reps keeps the two halves equal so the -50% loop stays seamless.
  const items = Array.from({ length: 6 }, () => logos).flat();

  return (
    <div className="border-t border-black/10 pt-8">
      <div
        className="relative overflow-hidden"
        style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}
      >
        <div className="flex w-max animate-marquee items-center">
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center px-10 opacity-60 grayscale transition-opacity duration-300 hover:opacity-100"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width ?? 120}
                  height={logo.height ?? 32}
                  className="h-7 w-auto object-contain"
                />
              ) : (
                <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-black/45">
                  {logo.alt}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
