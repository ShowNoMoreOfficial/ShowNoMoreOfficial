import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Show No More",
	description:
		"Meet the ShowNoMore team. A creative & artistic company founded to give the future a voice through powerful, creative content.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
