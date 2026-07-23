import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import SmoothScroll from "./components/motion/SmoothScroll";
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
    "ShowNoMore is a creative & artistic company based in Delhi and Goa, India. We specialize in content distribution, creative production, performance marketing, and AI-powered automation.",
  openGraph: {
    title: "Show No More | Creative & Artistic Company",
    description:
      "A creative & artistic company specializing in content distribution, creative production, performance marketing, and AI-powered automation.",
    url: "https://shownomore.com",
    siteName: "ShowNoMore",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Show No More | Creative & Artistic Company",
    description:
      "Content distribution, creative production, performance marketing, and AI-powered automation.",
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#cc0906] focus:px-4 focus:py-2 focus:text-lg focus:font-medium focus:rounded">
          Skip To Content
        </a>
        <NavBar></NavBar>
        <SmoothScroll>
          <div id="main-content">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
