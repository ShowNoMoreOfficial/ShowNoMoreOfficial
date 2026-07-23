import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ShowNoMore for YouTube — The Engine Behind High-Growth Channels",
  description:
    "The content-operations system for premium YouTube channels. A fused studio and AI content OS that industrializes production, engineers retention, and turns data into reach. 1.2B+ views generated, $0 on ads.",
  alternates: { canonical: "https://shownomore.com/youtube" },
  openGraph: {
    title: "ShowNoMore for YouTube — The Engine Behind High-Growth Channels",
    description:
      "A fused studio and AI content OS that industrializes production, engineers retention, and turns data into reach.",
    url: "https://shownomore.com/youtube",
    siteName: "ShowNoMore",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShowNoMore for YouTube",
    description:
      "The content-operations system behind high-growth YouTube channels. 1.2B+ views, engineered retention, $0 on ads.",
  },
};

export default function YouTubeLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} yt-root font-sans min-h-screen bg-[#0B0C0E] text-[#F4F4F6] antialiased selection:bg-[#FF3B30]/30 selection:text-white`}
    >
      {children}
    </div>
  );
}
