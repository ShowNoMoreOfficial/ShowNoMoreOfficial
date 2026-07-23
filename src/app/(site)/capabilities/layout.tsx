import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Capabilities | Show No More",
	description:
		"Content distribution, platform growth, creative production, performance marketing, and AI automation. See what ShowNoMore can do.",
};

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
