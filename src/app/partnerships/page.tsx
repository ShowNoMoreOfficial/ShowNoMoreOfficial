import type { Metadata } from "next";
import Reveal from "../components/motion/Reveal";
import SplitReveal from "../components/motion/SplitReveal";

export const metadata: Metadata = {
	title: "Partnerships | Show No More",
	description:
		"Explore ShowNoMore's brand partnerships and collaborations. See how we bring creative vision to life for our partners.",
};

const partnerships = [
	{
		id: "01",
		name: "TheSquirrelsTV",
		scope: "X (Formerly Twitter) Management, Automation, Video Optimization & Content Creation",
		description:
			"We Partnered With TheSquirrelsTV To Overhaul Their Entire X Presence. From Automating Their Content Pipeline To Optimizing Video For Maximum Reach, We Built A System That Consistently Delivers Engagement Without Sacrificing Creative Quality.",
		results: "3x Engagement Growth, 40% Faster Content Turnaround",
	},
	{
		id: "02",
		name: "Brand Identity Project",
		scope: "Creative Production, Brand Vision & Positioning",
		description:
			"A Ground-Up Brand Identity Build For An Emerging Lifestyle Label. We Developed The Visual Language, Tone Of Voice, And Social Strategy That Took Them From Zero To A Recognized Name In Their Space.",
		results: "Full Brand System Delivered, Launch Campaign Executed",
	},
	{
		id: "03",
		name: "Performance Growth Campaign",
		scope: "Performance Marketing, Paid Media & Analytics",
		description:
			"We Ran A Full-Funnel Performance Campaign Across Paid Social And Search, Using Data-Driven Creative Testing To Find Winning Combinations. Every Rupee Spent Was Tracked, Optimized, And Accounted For.",
		results: "2.5x ROAS, 60% Lower CPA Within 8 Weeks",
	},
	{
		id: "04",
		name: "AI Workflow Integration",
		scope: "AI And Automation, Workflow Automation & Personalization",
		description:
			"We Designed And Implemented Custom AI-Powered Workflows For A Mid-Size Agency, Automating Repetitive Tasks And Introducing Intelligent Content Recommendations That Freed Their Team To Focus On Strategy.",
		results: "50% Reduction In Manual Tasks, 2x Output Capacity",
	},
];

export default function Partnerships() {
	return (
		<main className="text-[#1a1a1a] min-h-screen p-8 md:p-16 lg:p-24">
			<div className="lg:flex lg:gap-x-16 xl:gap-x-24">
				{/* Left Column: Sticky sidebar */}
				<aside className="lg:w-1/3 xl:w-2/5">
					<div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-24">
						<div>
							<SplitReveal as="h1" type="chars" onScroll={false} className="text-7xl md:text-8xl font-medium uppercase tracking-tighter leading-none text-[#cc0906]">
								[ Partner-
								<br />
								ships ]
							</SplitReveal>
							<Reveal as="p" delay={0.2} className="text-lg text-gray-700 mt-8 max-w-sm leading-relaxed">
								We Don&apos;t Do Clients. We Do Partners. Every Collaboration Is Built On Shared Vision, Mutual Respect, And A Commitment To Work That Actually Matters.
							</Reveal>
						</div>
						<div className="mt-8 lg:mt-0">
							<p className="text-sm text-gray-500">New Business</p>
							<a
								href="mailto:dev@shownomore.com"
								className="text-lg font-medium text-[#cc0906] hover:underline underline-offset-8"
							>
								dev@shownomore.com
							</a>
						</div>
					</div>
				</aside>

				{/* Right Column: Scrollable partnership content */}
				<div className="lg:w-2/3 xl:w-3/5 mt-16 lg:mt-0">
					<div className="pt-24">
						{partnerships.map((partner) => (
							<Reveal
								key={partner.id}
								stagger={0.1}
								y={30}
								className="border-t border-[#1a1a1a] py-12 grid grid-cols-1 md:grid-cols-3 gap-12"
							>
								<div className="md:col-span-1">
									<p className="text-sm text-gray-500">[{partner.id}]</p>
									<p className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
										({partner.name})
									</p>
								</div>
								<div className="md:col-span-2 space-y-4">
									<p className="text-sm uppercase tracking-wide text-gray-500">
										{partner.scope}
									</p>
									<p className="text-lg font-medium leading-relaxed max-w-prose">
										{partner.description}
									</p>
									<p className="text-base text-[#cc0906] font-medium">
										{partner.results}
									</p>
								</div>
							</Reveal>
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
