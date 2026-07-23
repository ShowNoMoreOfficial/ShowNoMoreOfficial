import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Reveal from '../../components/motion/Reveal';
import SplitReveal from '../../components/motion/SplitReveal';

// --- Centralized Data ---
// We'll store all the data for our capabilities here.
// This makes it easy to manage and access on both the main page and this detail page.

type Service = {
	id: number;
	name: string;
	description: string; // Added description for each sub-service
};

type Capability = {
	title: string;
	slug: string;
	description: [string, string, string]; // e.g., ["Guiding with", "purpose,", "insights..."]
	imageUrl: string; // Added image URL for each capability
	services: Service[];
};

const capabilitiesData: Capability[] = [
	{
		title: "Content Distribution",
		slug: "content-distribution",
		description: ["Guiding with", "purpose,", "insights, and curiosity."],
		imageUrl: "/images/1.jpg",
		services: [
			{ id: 1, name: 'Campaign Planning', description: "No two campaigns are identical, but we start each by breaking down the key milestones and phases, identifying the communication tasks for each, and developing the ongoing messaging strategy to narrate the campaign. All of this is further established under a campaign positioning to holistically guide the work." },
			{ id: 2, name: 'Brand Vision', description: "Beyond individual campaigns, we also work with our partners to develop their brand vision through key initiatives, product expansions, or entirely new ventures. This includes everything from establishing brand social strategies, shaping product ecosystems, and developing evergreen content strategies for global brands and fans alike." },
			{ id: 3, name: 'Audience & Insights', description: "We dive deep into understanding your target audience, using data and research to uncover key insights that inform strategy and creative direction, ensuring your message resonates effectively." },
			{ id: 4, name: 'Positioning', description: "We help define your unique place in the market. By analyzing competitors and market trends, we craft a distinct brand positioning that highlights your strengths and appeals to your target customers." },
			{ id: 5, name: 'Event Strategy', description: "From product launches to experiential marketing, we develop comprehensive event strategies that create memorable experiences and drive engagement, ensuring every event has a clear purpose and measurable impact." },
		]
	},
	{
		title: "Platform Growth",
		slug: "platform-growth",
		description: ["Building a", "community,", "not just an audience."],
		imageUrl: "/images/2.jpg",
		services: [
			{ id: 1, name: 'Lenses', description: "We create captivating AR lenses and filters for social platforms that encourage user-generated content and boost brand visibility in a fun, interactive way." },
			{ id: 2, name: 'Websites', description: "We design and develop beautiful, high-performance websites that serve as the central hub for your brand, optimized for user experience and conversion." },
			{ id: 3, name: 'Social Media', description: "Our team develops and executes tailored social media strategies to grow your following, foster engagement, and build a loyal community around your brand." },
			{ id: 4, name: 'Content Creation', description: "We produce high-quality, platform-specific content, from stunning visuals to compelling copy, designed to capture attention and tell your brand's story." },
		]
	},
	{
		title: "Creative Production",
		slug: "creative-production",
		description: ["Creating with", "intention,", "impact, and artistry."],
		imageUrl: "/images/3.jpg",
		services: [
			{ id: 1, name: 'Video Production', description: "From concept to final cut, we produce cinematic-quality video content for commercials, social media, and brand storytelling." },
			{ id: 2, name: 'Photography', description: "Our photographers capture stunning, on-brand imagery for campaigns, products, and lifestyle content." },
			{ id: 3, name: 'Graphic Design', description: "We create compelling visual identities, marketing collateral, and digital assets that communicate your brand's message." },
			{ id: 4, name: 'Motion Graphics', description: "We bring static designs to life with engaging animations and motion graphics for videos, websites, and social media." },
			{ id: 5, name: 'Copywriting', description: "Crafting persuasive and memorable copy that captures your brand's voice and drives action across all platforms." },
		]
	},
	{
		title: "Performance Marketing",
		slug: "performance-marketing",
		description: ["Driving results with", "data,", "strategy, and precision."],
		imageUrl: "/images/4.jpg",
		services: [
			{ id: 1, name: 'Paid Media', description: "We manage and optimize paid advertising campaigns across social, search, and display networks to maximize ROI." },
			{ id: 2, name: 'SEO', description: "Improving your organic search visibility to attract high-quality traffic and leads through technical and content-based SEO strategies." },
			{ id: 3, name: 'Analytics', description: "We implement robust tracking and reporting to provide actionable insights into your marketing performance and user behavior." },
			{ id: 4, name: 'Email Marketing', description: "Developing targeted email campaigns and automation flows to nurture leads, retain customers, and drive conversions." },
			{ id: 5, name: 'Conversion Rate Optimization', description: "Using A/B testing and user data to improve your website and landing pages, turning more visitors into customers." },
		]
	},
	{
		title: "AI And Automation",
		slug: "ai-and-automation",
		description: ["Innovating with", "intelligence,", "efficiency, and foresight."],
		imageUrl: "/images/5.jpg",
		services: [
			{ id: 1, name: 'Workflow Automation', description: "We analyze your business processes and implement automation solutions to save time, reduce errors, and increase efficiency." },
			{ id: 2, name: 'AI-Powered Insights', description: "Leveraging machine learning models to analyze your data and uncover predictive insights for smarter business decisions." },
			{ id: 3, name: 'Chatbot Development', description: "We build intelligent chatbots for customer service, lead generation, and user engagement on your website and messaging platforms." },
			{ id: 4, name: 'Personalization Engines', description: "Implementing AI-driven personalization to deliver unique experiences, content, and product recommendations to every user." },
		]
	}
];


// --- Dynamic Metadata ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const capability = capabilitiesData.find(c => c.slug === slug);
	if (!capability) {
		return { title: "Not Found | Show No More" };
	}
	return {
		title: `${capability.title} | Show No More`,
		description: `${capability.description.join(" ")} Explore our ${capability.title.toLowerCase()} services.`,
	};
}

// --- The Page Component ---

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	// Await the params since it's now a Promise in Next.js 15
	const { slug } = await params;

	// Find the data for the current page using the slug from the URL
	const capability = capabilitiesData.find(c => c.slug === slug);

	// If no data is found for the slug, show a 404 page
	if (!capability) {
		notFound();
	}

	// Split the services into two arrays for the two-column layout
	const half = Math.ceil(capability.services.length / 2);
	const firstColumnServices = capability.services.slice(0, half);
	const secondColumnServices = capability.services.slice(half);

	return (
		<main className="text-[#1a1a1a] min-h-screen font-serif p-8 md:p-16 lg:p-24">
			<div className="">
				{/* Large descriptive heading */}
				<SplitReveal as="h1" type="lines" onScroll={false} className="max-w-5xl mx-auto text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-24 md:mb-32 mt-25 text-center">
					{capability.description[0]}{' '}
					<span className="font-bold italic">{capability.description[1]}</span>{' '}
					{capability.description[2]}
				</SplitReveal>

				{/* Services section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* "(Including)" label */}
					<div className="md:col-span-1">
						<p className="text-4xl border-t border-[#1a1a1a] pt-4">(Including)</p>
					</div>

					{/* Two-column list of services */}
					<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xl">
						{/* Column 1 */}
						<div className="border-t border-[#1a1a1a] pt-4">
							{firstColumnServices.map(service => (
								<p key={service.id} className="pb-4">{service.name}</p>
							))}
						</div>
						{/* Column 2 */}
						<div className="border-t border-[#1a1a1a] pt-4">
							{secondColumnServices.map(service => (
								<p key={service.id} className="pb-4">{service.name}</p>
							))}
						</div>
					</div>
				</div>

				{/* Image Section */}
				<Reveal y={40} className="mt-24 md:mt-32 flex justify-center">
					<div className="w-full max-w-5xl overflow-hidden">
						<Image
							src={capability.imageUrl}
							alt={`${capability.title} visualization`}
							width={1200}
							height={800}
							className="w-full max-h-[90vh] object-cover shadow-xl"
						/>
					</div>
				</Reveal>

				{/* Sub-Service Explanations Section */}
				<div className="mt-24 md:mt-32">
					{capability.services.map((service) => (
						<Reveal key={service.id} stagger={0.1} y={30} className="border-t border-[#1a1a1a] py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
							<div className="md:col-span-1">
								<p className="text-5xl font-medium leading-relaxed tracking-tighter">({service.name})</p>
							</div>
							<div className="md:col-span-2">
								<p className="text-lg font-medium leading-relaxed max-w-prose ml-auto">{service.description}</p>
							</div>
						</Reveal>
					))}
				</div>

			</div>
			<a href='/capabilities' className='text-4xl text-[#cc0906] hover:underline underline-offset-8 font-medium pt-10 '>&larr; Other Capabilities</a>
		</main>
	);
};

export default ServiceDetailPage;
