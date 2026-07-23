"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '../lib/gsap';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Magnetic from './motion/Magnetic';

export default function NavBar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [hasMounted, setHasMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	// Stagger the mobile menu links in each time the overlay opens.
	useGSAP(() => {
		if (reduced !== false || !isMenuOpen || !menuRef.current) return;
		gsap.from(menuRef.current.children, {
			opacity: 0,
			y: 24,
			duration: 0.6,
			ease: 'power3.out',
			stagger: 0.07,
		});
	}, { dependencies: [isMenuOpen, reduced], scope: menuRef });

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > lastScrollY) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		if (hasMounted) {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [lastScrollY, hasMounted]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isMenuOpen]);

	if (!hasMounted) {
		return null;
	}

	// Links for the mobile menu view
	const allNavLinks = [
		{ href: "/partnerships", number: "01", text: "Partnerships," },
		{ href: "/capabilities", number: "02", text: "Capabilities," },
		{ href: "/conversations", number: "03", text: "Collective," },
		{ href: "/blog", number: "04", text: "Blog" },
		{ href: "/about", text: "About" }
	];

	return (
		<>
			<nav className={`fixed w-full top-0 p-6 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-transparent z-50`}>
				<div className="flex items-center justify-between">
					{/* Left section: Logo */}
					<Magnetic strength={0.25}>
							<a href='/' className="cursor-pointer">
						<Image src="/images/ShowNoMore.png" alt="ShowNoMore" height={65} width={65} className="cursor-pointer" />
					</a>
						</Magnetic>

					{/* --- DESKTOP LAYOUT --- */}
					{/* Middle section: Navigation Links (Hidden on mobile) */}
					<div className="hidden md:flex space-x-3">
						<a href="/partnerships" className="relative flex items-baseline text-2xl text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium group">
							<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(01)</span>
							<span className="relative">
								Partnerships,
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</a>
						<a href="/capabilities" className="relative flex items-baseline text-2xl text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium group">
							<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(02)</span>
							<span className="relative">
								Capabilities,
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</a>
						<a href="/conversations" className="relative flex items-baseline text-2xl text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium group">
							<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(03)</span>
							<span className="relative">
								Collective,
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</a>
						<a href="/blog" className="relative flex items-baseline text-2xl text-gray-600 hover:text-red-500 transition-colors duration-200 font-medium group">
							<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500 transition-colors duration-200">(04)</span>
							<span className="relative">
								Blog
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</a>
					</div>

					{/* Right section: About Link (Hidden on mobile) */}
					<div className="hidden md:block">
						<a href="/about" className="relative text-2xl text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium group">
							<span className="relative">
								About
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</span>
						</a>
					</div>
					{/* --- END DESKTOP LAYOUT --- */}


					{/* --- MOBILE LAYOUT --- */}
					{/* Hamburger Menu Button (Visible on mobile) */}
					<div className="md:hidden">
						<button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc0906] rounded">
							<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div className="fixed inset-0 bg-white z-60 flex flex-col items-center justify-center" role="dialog" aria-modal="true" aria-label="Navigation menu">
					<button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-8 right-7 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc0906] rounded">
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
					<div ref={menuRef} className="flex flex-col items-center space-y-8">
						{allNavLinks.map((link) => (
							link.number ? (
								<a key={link.href} href={link.href} className="relative flex items-baseline text-2xl text-gray-600 hover:text-red-500 font-medium group">
									<span className="relative text-sm -top-2.5 mr-1 text-gray-500 group-hover:text-red-500">( {link.number})</span>
									<span className="relative">{link.text}</span>
								</a>
							) : (
								<a key={link.href} href={link.href} className="relative text-2xl text-gray-700 hover:text-red-500 font-medium group">
									<span className="relative">{link.text}</span>
								</a>
							)
						))}
					</div>
				</div>
			)}
		</>
	);
}
