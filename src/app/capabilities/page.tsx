"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

// Define the type for a service item for type safety
type Service = {
	id: number;
	name: string;
};

// Data for the "Strategy" section
const strategyServices: Service[] = [
	{ id: 1, name: 'Campaign Planning' },
	{ id: 2, name: 'Brand Vision' },
	{ id: 3, name: 'Audience & Insights' },
	{ id: 4, name: 'Positioning' },
	{ id: 5, name: 'Event Strategy' },
];

// Data for the "Digital" section
const digitalServices: Service[] = [
	{ id: 1, name: 'Lenses' },
	{ id: 2, name: 'Websites' },
	{ id: 3, name: 'Social Media' },
	{ id: 4, name: 'Content Creation' },
];

const performanceServices: Service[] = [
	{ id: 1, name: 'Paid Media' },
	{ id: 2, name: 'SEO' },
	{ id: 3, name: 'Analytics' },
	{ id: 4, name: 'Email Marketing' },
	{ id: 5, name: 'Conversion Rate Optimization' },
];

// Updated ServiceSection to handle navigation on the title
const ServiceSection: React.FC<{ title: string; services: Service[]; onHoverChange: (title: string | null) => void }> = ({ title, services, onHoverChange }) => {
	const router = useRouter(); // Initialize the router

	// Function to handle clicking on a section title
	const handleTitleClick = (sectionTitle: string) => {
		// Create a URL-friendly slug from the section title
		const slug = sectionTitle.toLowerCase().replace(/\s+/g, '-');
		// Navigate to the dynamic route
		router.push(`/capabilities/${slug}`);
	};

	return (
		<div className="mb-16">
			<h2
				className="text-6xl md:text-8xl mb-6 flex items-center tracking-tighter relative group cursor-pointer"
				onMouseEnter={() => onHoverChange(title)} // Notify parent on mouse enter
				onMouseLeave={() => onHoverChange(null)}   // Notify parent on mouse leave
				onClick={() => handleTitleClick(title)}    // Add onClick to the title
			>
				<span className="
                    inline-block relative
                    hover:text-[#cc0906] hover:scale-105
                    hover:font-serif group-hover:animate-wiggle
                    transition-transform duration-200 ease-out
                    before:content-['('] before:absolute before:left-0 before:-translate-x-full before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
                    after:content-[')'] after:absolute after:right-0 after:translate-x-full after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100
                ">
					{title}
				</span>
			</h2>
			<div className="flex flex-row items-start gap-8 md:gap-12">
				{/* Service count */}
				<div className="text-lg text-gray-700 mt-2">({services.length})</div>
				{/* Service list (no longer clickable) */}
				<div className="flex-grow">
					<div className="border-t border-black"></div>
					{services.map((service) => (
						<div
							key={service.id}
							className="flex justify-between items-center py-4 border-b border-black text-xl"
						>
							<span>{service.name}</span>
							<span className="text-gray-700">{service.id}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};


// Main App Component
const Capabilities: React.FC = () => {
	// State to track the currently hovered section title
	const [hoveredSection, setHoveredSection] = useState<string | null>(null);
	// Function to map section titles to image URLs
	const getSectionImage = (sectionTitle: string | null): string | null => {

		switch (sectionTitle) {
			case "Content Distribution":
				// Using a 9:16 aspect ratio (e.g., 250x444)
				return "/images/1.jpg";
			case "Platform Growth":
				// Using a 9:16 aspect ratio
				return "/images/2.jpg";
			case "Creative Production":
				// Using a 9:16 aspect ratio
				return "/images/3.jpg";
			case "Performance Marketing":
				// Using a 9:16 aspect ratio
				return "/images/4.jpg";
			case "AI And Automation":
				// Using a 9:16 aspect ratio
				return "/images/5.jpg";
			default:
				return null; // No image when not hovering or for unmapped sections
		}
	};

	const currentImage = getSectionImage(hoveredSection);

	return (
		<>
			<main className="text-black min-h-screen font-sans flex justify-center m-3 pt-25 p-4">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-24 w-full items-start">
					{/* Left Column */}
					<div className="lg:col-span-1 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:py-8 lg:pr-12 relative">
						<div>
							<h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none mb-8">
								(Collectively <br /> Made)
							</h1>
							<p className="text-2xl leading-relaxed max-w-md">
								<span className='pl-20'>Through</span> a talent-first approach, we've established ourselves as a truly multidisciplinary
								team with an innate sense of collaboration. We're driven by creativity, guided by insights, and
								managed for efficiency.
							</p>
						</div>

						<div className={`
                            absolute top-[45%] left-[60%] -translate-x-1/2 -translate-y-1/2 
                            w-[100%] /* Adjusted width for smaller size */
                            transition-opacity duration-300 ease-in-out
                            ${currentImage ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'}
                            flex justify-center items-center
                        `}>
							{currentImage && (
								<div className="relative w-full" style={{ paddingBottom: '140%' }}>
									<img
										src={currentImage}
										alt={hoveredSection ? `${hoveredSection} Illustration` : "Section illustration"}
										className="absolute inset-0 object-cover w-full h-full"
									/>
								</div>
							)}
						</div>

						<div className="flex justify-between items-end mt-16 lg:mt-0">
							<span className="text-lg">(2)</span>
							<div className="text-right text-xs uppercase">
								<p>Craft & Conversation</p>
								<p>(DL & GA)</p>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="lg:col-span-2 lg:pl-12 lg:py-8">
						{/* Pass the onHoverChange callback to each ServiceSection */}
						<ServiceSection title="Content Distribution" services={strategyServices} onHoverChange={setHoveredSection} />
						<ServiceSection title="Platform Growth" services={digitalServices} onHoverChange={setHoveredSection} />
						<ServiceSection title="Creative Production" services={strategyServices} onHoverChange={setHoveredSection} />
						<ServiceSection title="Performance Marketing" services={performanceServices} onHoverChange={setHoveredSection} />
						<ServiceSection title="AI And Automation" services={strategyServices} onHoverChange={setHoveredSection} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Capabilities;
