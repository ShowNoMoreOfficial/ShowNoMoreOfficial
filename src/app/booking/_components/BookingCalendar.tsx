"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * "Partner with ShowNoMore" — heading + line on the left, a live inline cal.com
 * calendar on the right (self-hosted at cal.shownomore.com), themed to the brand.
 *
 * Perf: we preconnect to the cal origin and show a skeleton immediately, then
 * reveal the calendar on cal.com's `linkReady` event (with a timeout fallback),
 * so the section never sits blank while the embed's script + iframe load.
 */
const ORIGIN = "https://cal.shownomore.com";
const EMBED_JS = `${ORIGIN}/embed/embed.js`;

function CalendarSkeleton() {
  return (
    <div className="grid w-full max-w-5xl animate-pulse grid-cols-1 gap-10 px-6 md:grid-cols-[1fr_auto]">
      {/* Month grid */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-32 rounded bg-black/10" />
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded bg-black/5" />
            <div className="h-7 w-7 rounded bg-black/5" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2.5">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-md bg-black/5" />
          ))}
        </div>
      </div>
      {/* Slots column */}
      <div className="hidden w-56 flex-col gap-3 md:flex">
        <div className="mb-2 h-6 w-24 rounded bg-black/10" />
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-11 w-full rounded-md bg-black/5" />
        ))}
      </div>
    </div>
  );
}

export default function BookingCalendar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let done = false;
    (async function () {
      const cal = await getCalApi({
        namespace: "partner-with-shownomore",
        embedJsUrl: EMBED_JS,
      });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#cc0906" },
          dark: { "cal-brand": "#cc0906" },
        },
      });
      cal("on", {
        action: "linkReady",
        callback: () => {
          done = true;
          setLoaded(true);
        },
      });
    })();
    // Fallback: reveal even if the ready event never fires.
    const t = setTimeout(() => {
      if (!done) setLoaded(true);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="book" className="px-6 md:px-12">
      <link rel="preconnect" href={ORIGIN} crossOrigin="anonymous" />
      <link rel="dns-prefetch" href={ORIGIN} />

      <div className="mx-auto max-w-screen-2xl border-t border-black/10" />

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-start gap-12 py-28 md:py-40 lg:grid-cols-12 lg:gap-16">
        {/* Left — heading + line (nudged down to match cal.com's internal top
            padding so the heading top lines up with the calendar's card) */}
        <div className="lg:col-span-4 lg:pt-20">
          <h2 className="font-[family-name:var(--font-fraunces)] text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Partner with ShowNoMore
          </h2>
          <p className="mt-7 max-w-md text-xl leading-relaxed text-black/55">
            Bring your channel, your goals, your bottleneck. We&apos;ll tell you
            exactly what we&apos;d scale first.
          </p>
        </div>

        {/* Right — inline calendar with a skeleton while it loads */}
        <div className="relative lg:col-span-8" style={{ height: 680 }}>
          <Cal
            namespace="partner-with-shownomore"
            calLink="lavanya/partner-with-shownomore"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            calOrigin={ORIGIN}
            embedJsUrl={EMBED_JS}
          />
          {!loaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F5F0E6]">
              <CalendarSkeleton />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
