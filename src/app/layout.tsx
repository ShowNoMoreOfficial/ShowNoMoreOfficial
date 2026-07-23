import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Show No More | Delhi-India",
  description:
    "ShowNoMore is a creative & artistic cult based in Delhi and Goa, India. We specialize in content distribution, creative production, performance marketing, and AI-powered automation.",
  openGraph: {
    title: "Show No More | Creative & Artistic Cult",
    description:
      "No mediocrity. We specialize in content distribution, creative production, performance marketing, and AI-powered automation.",
    url: "https://shownomore.com",
    siteName: "ShowNoMore",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Show No More | Creative & Artistic Cult",
    description:
      "No mediocrity. Content distribution, creative production, performance marketing, and AI-powered automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
