"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("snm-cookie-consent");
		if (!consent) {
			setVisible(true);
		}
	}, []);

	const accept = () => {
		localStorage.setItem("snm-cookie-consent", "accepted");
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white px-6 md:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
			<p className="text-sm leading-relaxed max-w-2xl">
				We Use Cookies And Vercel Analytics To Understand How You Use Our Site.{" "}
				<a href="/privacy-policy" className="text-[#cc0906] hover:underline underline-offset-4">
					Privacy Policy
				</a>
			</p>
			<button
				onClick={accept}
				className="text-sm font-medium border border-white px-6 py-2 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200 cursor-pointer shrink-0"
			>
				Got It
			</button>
		</div>
	);
}
