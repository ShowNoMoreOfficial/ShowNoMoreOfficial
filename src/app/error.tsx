"use client";

export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
			<p className="text-sm text-gray-500 uppercase tracking-wide mb-4">[Error]</p>
			<h1 className="text-7xl md:text-9xl font-extrabold uppercase tracking-tighter leading-none text-[#cc0906]">
				Something
				<br />
				Broke
			</h1>
			<p className="text-xl md:text-2xl text-gray-700 font-medium mt-6 max-w-md leading-relaxed">
				We Hit A Wall. This Wasn&apos;t Supposed To Happen, But Here We Are.
			</p>
			<button
				onClick={() => reset()}
				className="mt-10 text-2xl text-[#cc0906] hover:underline underline-offset-8 font-medium cursor-pointer"
			>
				Try Again &rarr;
			</button>
		</main>
	);
}
