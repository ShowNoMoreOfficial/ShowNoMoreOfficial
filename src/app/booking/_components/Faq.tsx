"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/**
 * FAQs accordion — serif heading + questions, a "+" that rotates into an "×" on
 * open, dividers between rows, and a smooth grid-rows expand. One open at a time.
 * ShowNoMore's own questions and answers.
 */
const faqs = [
  {
    q: "What makes ShowNoMore different from other agencies?",
    a: "We're not your typical agency. We're a creative company. We don't follow trends or recycle templates. Every project gets original thinking, hands-on execution, and a team that actually cares about the outcome.",
  },
  {
    q: "How do you know what content works?",
    a: "We analyze every piece of content against real performance data. What resonates gets amplified. What doesn't gets replaced. No guesswork.",
  },
  {
    q: "How does the partnership process work?",
    a: "It starts with a conversation. We learn your brand, your goals, and your pain points. From there we build a tailored strategy, execute relentlessly, and iterate based on real data. No long onboarding decks.",
  },
  {
    q: "Do you work with startups or only established brands?",
    a: "Both. We've built brands from zero and scaled existing ones. What matters isn't your size — it's your ambition and willingness to do work that actually stands out.",
  },
  {
    q: "What is your approach to AI and automation?",
    a: "We use AI as a force multiplier, not a replacement for creativity. From workflow automation to intelligent content recommendations, we integrate AI where it saves time and amplifies output without losing the human touch.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 capitalize md:px-12">
      <div className="mx-auto max-w-5xl border-t border-black/10" />

      <div className="mx-auto max-w-5xl py-28 md:py-40">
        <h2 className="mb-12 font-[family-name:var(--font-fraunces)] text-5xl tracking-tight md:mb-16 md:text-6xl">
          FAQs
        </h2>

        <div className="border-t border-black/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left capitalize"
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-xl leading-snug text-[#1a1a1a] md:text-2xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[#1a1a1a] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-8 pr-8 text-lg leading-relaxed text-black/55">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
