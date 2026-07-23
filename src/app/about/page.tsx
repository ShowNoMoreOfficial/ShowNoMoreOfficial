// This would be your file at `app/page.tsx` in a Next.js App Router project.
// Make sure you have Tailwind CSS configured in your project.
"use client"
import React from 'react';
import Image from 'next/image';
import Reveal from '../components/motion/Reveal';
import SplitReveal from '../components/motion/SplitReveal';

// Define the TypeScript interface for a team member's data.
// This ensures type safety for your team data.
interface TeamMember {
	id: number;
	order?: string;
	name: string;
	role: string;
	imageUrl: string;
	altText: string;
	imageClassName?: string;
}

// An array of team member objects.
// You can easily add, remove, or edit team members here.
const teamMembers: TeamMember[] = [
	{
		id: 1,
		order: "01",
		name: 'Lavan',
		role: 'CEO & Founder',
		imageUrl: '/images/Lavan.jpeg',
		altText: 'Portrait of Lavanya, CEO & Founder',
	},
	{
		id: 2,
		order: "02",
		name: 'Muskaan',
		role: 'Head Of Operations',
		imageUrl: '/images/Muskaan.jpeg',
		altText: 'Portrait of Muskan, Head Of Operations',
	},
	{
		id: 3,
		order: "03",
		name: 'Stallone',
		role: 'Software Engineer',
		imageUrl: '/images/Stallone.jpeg',
		altText: 'Portrait of Stallone, Head Of Development',
	},
	{
		id: 4,
		order: "04",
		name: 'Deepak',
		role: 'Creative Visual Architect',
		imageUrl: '/images/Deepak.jpeg',
		altText: 'Portrait of Deepak, Creative Visual Architect',
		imageClassName: 'object-top',
	},
	{
		id: 5,
		order: "05",
		name: 'Archit Jain',
		role: 'Creative Motion Architect',
		imageUrl: '/images/Archit.jpeg',
		altText: 'Portrait of Archit Jain, Creative Motion Architect',
		imageClassName: 'object-top',
	},

];

/**
 * A reusable component to display a single team member's card.
 * This version has minimal styling to match the "cutout" look.
 * @param {TeamMember} member - The team member data object.
 */
const TeamMemberCard = ({ member }: { member: TeamMember }) => (
	<Reveal y={36} className="flex flex-col items-start text-center group">
		<div className="relative w-full aspect-[3/4] mb-2 overflow-hidden">
			<Image
				src={member.imageUrl}
				alt={member.altText}
				fill
				className={`object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 ${member.imageClassName ?? ''}`}
			/>
		</div>
		<p className='text-sm text-gray-500'>[{member.order}]</p>
		<h3 className="text-lg font-bold uppercase tracking-wide">{member.name}</h3>
		<p className="text-sm text-gray-500">{member.role}</p>
	</Reveal>
);

/**
 * The main About Us page component.
 * It features a two-column layout where the left column is sticky during scroll.
 */
export default function About() {
	return (
		<div className="text-gray-900 font-sans">
			{/* Main container for the two-column layout */}
			<main className="px-6 lg:px-8">
				<div className="lg:flex lg:gap-x-16 xl:gap-x-24">
					{/* Left Column: This will be sticky */}
					<aside className="lg:w-1/3 xl:w-2/5">
						{/* The sticky container now has vertical padding to control spacing from viewport edges. */}
						<div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-24 z-[-10]">
							{/* Top part: Heading - Font size and weight are reduced. */}
							<SplitReveal as="h1" type="chars" onScroll={false} className="text-7xl md:text-8xl font-medium uppercase tracking-tighter leading-none text-[#cc0906]">
								[ Meet The<br />Team ]
							</SplitReveal>
							{/* Bottom part: Paragraphs - Padding is now controlled by the parent. */}
							<div className="space-y-5 text-base text-gray-700 max-w-md">
								<Reveal as="p" delay={0.2}>
									The Digital Canvas Was Changing. Where Formulas Once Reigned, Artistry Now Held The Key To True Connection. The Old Marketing Vernacular Was Obsolete; Success Now Spoke A New Language—The Language Of Powerful, Creative Content. A Strange Paradox Emerged, As The Very Agencies Built For Performance Were Creatively Mute. Lavanya Heard The Dissonance. He Founded <span className='font-bold font-sans italic text-[#cc0906]'>'SHOWNOMORE'</span> To Give The Future A Voice.
								</Reveal>
							</div>
						</div>
					</aside>

					{/* Right Column: This will scroll with a staggered layout */}
					<div className="lg:w-2/3 xl:w-3/5 mt-16 lg:mt-0">
						{/* Padding top is adjusted to match the left column's padding for vertical alignment. */}
						<div className="flex flex-wrap justify-center gap-x-8 lg:gap-x-12 pt-24">
							{teamMembers.map((member, index) => (
								// Each card takes up roughly half the width.
								// We add a top margin to every second item to push it down, creating the stagger.
								<div key={member.id} className={`w-[45%] mb-12 lg:mb-20 ${index % 2 !== 0 ? 'mt-24 md:mt-40' : ''}`}>
									<TeamMemberCard member={member} />
								</div>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
