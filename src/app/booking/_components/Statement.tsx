import Reveal from "../../components/motion/Reveal";

/**
 * Big two-tone editorial statement — muted opener, solid emphasis, muted tail —
 * left-indented and wide, matching the statement band that follows the hero
 * ticker on the reference.
 */
export default function Statement() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-44">
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <p
            className="max-w-[70rem] font-[family-name:var(--font-fraunces)] font-normal leading-[1.12] tracking-tight md:pl-[9%]"
            style={{ fontSize: "clamp(32px, 4.6vw, 68px)" }}
          >
            <span className="text-black/30">At ShowNoMore, we </span>
            <span className="text-[#1a1a1a]">
              build content engines that move beyond posting
            </span>
            <span className="text-black/30">
              {" "}
              — engineering the scripts, systems, and data that turn premium
              channels into compounding growth.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
