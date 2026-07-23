interface TickerProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export function Ticker({ items, direction = "left", className = "" }: TickerProps) {
  const allItems = [...items, ...items, ...items, ...items]; // duplicate for a seamless loop

  return (
    <div
      className={`overflow-hidden flex bg-[#14161B] border-y border-white/10 py-3 whitespace-nowrap select-none ${className}`}
    >
      <div
        className={`flex items-center w-max ${
          direction === "left" ? "yt-animate-scroll-left" : "yt-animate-scroll-right"
        }`}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center shrink-0" aria-hidden={i >= items.length}>
            <span className="text-xs md:text-sm font-mono tracking-widest text-white/75 uppercase">
              {item}
            </span>
            <span className="mx-6 text-[#FF3B30] text-[8px] leading-none">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
