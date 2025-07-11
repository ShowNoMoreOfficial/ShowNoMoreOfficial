"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NavBar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	// 1. Add a new state to track if the component has mounted on the client
	const [hasMounted, setHasMounted] = useState(false);

	// 2. Set hasMounted to true only on the client, after initial render
	useEffect(() => {
		setHasMounted(true);
	}, []);

	// Function to handle scroll events
	const handleScroll = () => {
		if (window.scrollY > lastScrollY) { // Scrolling down
			setIsVisible(false);
		} else { // Scrolling up
			setIsVisible(true);
		}
		setLastScrollY(window.scrollY); // Update last scroll position
	};

	useEffect(() => {
		// Only add the event listener if the component has mounted
		if (hasMounted) {
			window.addEventListener('scroll', handleScroll);

			// Cleanup the event listener
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [lastScrollY, hasMounted]); // Re-run effect if dependencies change

	// 3. Don't render anything on the server or during the initial client hydration
	if (!hasMounted) {
		return null;
	}

	return (
		<nav className={`fixed w-full top-0 p-6 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-transparent z-50`}>
			<div className="flex items-center justify-between">
				{/* Left section: Logo/Brand Name */}
				<a href='/' className="cursor-pointer">
					<Image src="/images/ShowNoMore.png" alt="ShowNoMore" height={65} width={65} className="cursor-pointer" />
				</a>

				{/* Middle section: Navigation Links */}
				<div className="flex space-x-3">
					{/* Partnership Link */}
					<a href="/partnerships" className="relative flex items-baseline text-2xl text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium group">
						<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(01)</span>
						<span className="relative">
							Partnerships,
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</a>
					{/* Capabilities Link */}
					<a href="/capabilities" className="relative flex items-baseline text-2xl text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium group">
						<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(02)</span>
						<span className="relative">
							Capabilities,
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</a>
					{/* Conversations Link */}
					<a href="/conversations" className="relative flex items-baseline text-2xl text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium group">
						<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(03)</span>
						<span className="relative">
							Collective
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</a>
				</div>

				{/* Right section: About Link */}
				<div>
					<a href="/about" className="relative text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium group">
						<span className="relative">
							About
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
