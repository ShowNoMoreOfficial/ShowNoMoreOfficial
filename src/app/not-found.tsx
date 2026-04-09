import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 | Show No More",
	description: "Page not found.",
};

export default function NotFound() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
			<p className="text-sm text-gray-500 uppercase tracking-wide mb-4">[404]</p>
			<h1 className="text-7xl md:text-[10rem] font-extrabold uppercase tracking-tighter leading-none text-[#cc0906]">
				Lost
			</h1>
			<p className="text-xl md:text-2xl text-gray-700 font-medium mt-6 max-w-md leading-relaxed">
				This Page Doesn&apos;t Exist. Maybe It Never Did. Either Way, There&apos;s Nothing For You Here.
			</p>
			<a
				href="/"
				className="mt-10 text-2xl text-[#cc0906] hover:underline underline-offset-8 font-medium"
			>
				&larr; Back Home
			</a>
		</main>
	);
}
