import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Collective | Show No More",
	description:
		"The ShowNoMore collective \u2014 our culture, our people, and how to get involved. No mediocrity, ever.",
};

const sections = [
	{
		id: "01",
		title: "Culture",
		content: [
			"ShowNoMore Was Born Out Of A Simple Belief: Mediocrity Has No Place In Creative Work. We Are A Collective Of Thinkers, Makers, And Doers Who Refuse To Settle For Average.",
			"Our Culture Is Built On Radical Honesty, Relentless Curiosity, And The Understanding That Great Work Comes From People Who Actually Care. We Don't Clock In And Clock Out \u2014 We Show Up With Intention.",
		],
	},
	{
		id: "02",
		title: "How We Work",
		content: [
			"We Operate At The Intersection Of Creativity And Strategy. Every Project Gets The Same Treatment: Deep Research, Bold Ideas, And Meticulous Execution. No Templates, No Shortcuts.",
			"Our Team Spans Delhi And Goa, Working Across Time Zones And Disciplines. Whether It's A Brand Overhaul Or A Single Campaign, We Bring The Full Weight Of The Collective To Bear.",
		],
	},
	{
		id: "03",
		title: "Join Us",
		content: [
			"We're Always Looking For People Who Are Restless, Talented, And Allergic To Mediocrity. If You Think You Belong Here, You Probably Do.",
		],
		cta: {
			text: "View Open Roles \u2192",
			href: "https://www.linkedin.com/company/shownomore/jobs/",
		},
	},
	{
		id: "04",
		title: "Connect",
		content: [],
	},
];

export default function Conversations() {
	return (
		<main className="min-h-screen p-8 md:p-16 lg:p-24">
			<div className="lg:flex lg:gap-x-16 xl:gap-x-24">
				{/* Left Column: Sticky sidebar */}
				<aside className="lg:w-1/3 xl:w-2/5">
					<div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-24">
						<div>
							<h1 className="text-7xl md:text-8xl font-medium uppercase tracking-tighter leading-none text-[#cc0906]">
								[ The
								<br />
								Collective ]
							</h1>
							<p className="text-lg text-gray-700 mt-8 max-w-sm leading-relaxed">
								More Than A Team. A Creative &amp; Artistic Cult Built On Shared Values And An Uncompromising Standard For The Work We Put Into The World.
							</p>
						</div>
						<div className="mt-8 lg:mt-0">
							<p className="text-sm text-gray-500">Delhi, India &amp; Goa, India</p>
							<p className="text-lg font-medium">Est. 2024</p>
						</div>
					</div>
				</aside>

				{/* Right Column: Scrollable content */}
				<div className="lg:w-2/3 xl:w-3/5 mt-16 lg:mt-0">
					<div className="pt-24">
						{sections.map((section) => (
							<div
								key={section.id}
								className="border-t border-[#1a1a1a] py-12 grid grid-cols-1 md:grid-cols-3 gap-12"
							>
								<div className="md:col-span-1">
									<p className="text-sm text-gray-500">[{section.id}]</p>
									<p className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
										({section.title})
									</p>
								</div>
								<div className="md:col-span-2">
									<div className="text-lg font-medium leading-relaxed max-w-prose space-y-4">
										{section.id === "04" ? (
											<>
												<p>
													Want To Work Together, Join The Team, Or Just Say Hello? Reach Out At{" "}
													<a
														href="mailto:dev@shownomore.com"
														className="text-[#cc0906] hover:underline underline-offset-8"
													>
														dev@shownomore.com
													</a>
													.
												</p>
												<p>
													Phone: +91 96507 01275
													<br />
													Karkardooma, DL 110092 / Siolim, GA 403517
												</p>
											</>
										) : (
											<>
												{section.content.map((paragraph, i) => (
													<p key={i}>{paragraph}</p>
												))}
												{section.cta && (
													<a
														href={section.cta.href}
														target="_blank"
														rel="noopener noreferrer"
														className="inline-block text-[#cc0906] hover:underline underline-offset-8 font-medium text-xl mt-2"
													>
														{section.cta.text}
													</a>
												)}
											</>
										)}
									</div>
								</div>
							</div>
						))}

						{/* Back link */}
						<a
							href="/"
							className="text-4xl text-[#cc0906] hover:underline underline-offset-8 font-medium pt-10 inline-block"
						>
							&larr; Back Home
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
