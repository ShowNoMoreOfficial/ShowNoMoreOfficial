export default function Footer() {
	return (
		<footer className="w-full px-6 md:px-16 lg:px-24 pt-16 pb-0 overflow-hidden">
			<div className="border-t border-gray-300 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
				{/* Navigation */}
				<div>
					<p className="text-sm text-gray-500 mb-4">(Navigation)</p>
					<ul className="space-y-2 text-lg font-medium text-gray-800">
						<li>
							<a href="/partnerships" className="hover:text-[#cc0906] transition-colors duration-200">
								Partnerships
							</a>
						</li>
						<li>
							<a href="/capabilities" className="hover:text-[#cc0906] transition-colors duration-200">
								Capabilities
							</a>
						</li>
						<li>
							<a href="/conversations" className="hover:text-[#cc0906] transition-colors duration-200">
								Collective
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-[#cc0906] transition-colors duration-200">
								About
							</a>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<p className="text-sm text-gray-500 mb-4">(Contact)</p>
					<div className="space-y-2 text-lg font-medium text-gray-800">
						<p>
							<a
								href="mailto:dev@shownomore.com"
								className="text-[#cc0906] hover:underline underline-offset-8"
							>
								dev@shownomore.com
							</a>
						</p>
						<p>+91 96507 01275</p>
						<p className="text-base text-gray-600">
							Karkardooma, DL 110092
							<br />
							Siolim, GA 403517
						</p>
					</div>
				</div>

				{/* Legal */}
				<div>
					<p className="text-sm text-gray-500 mb-4">(Legal)</p>
					<ul className="space-y-2 text-lg font-medium text-gray-800">
						<li>
							<a href="/privacy-policy" className="hover:text-[#cc0906] transition-colors duration-200">
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<p className="text-sm text-gray-500">
					&copy; {new Date().getFullYear()} ShowNoMore&reg; &mdash; All Rights Reserved.
				</p>
				<p className="text-sm text-gray-500">
					Creative &amp; Artistic Cult. Delhi &amp; Goa, India.
				</p>
			</div>

			{/* Big brand name — half-cut */}
			<div className="mt-8 overflow-hidden h-[10vw] md:h-[8vw]">
				<a href="/" className="block">
					<p className="text-[15vw] md:text-[12vw] font-extrabold uppercase tracking-tighter leading-none text-[#cc0906] hover:text-[#1a1a1a] transition-colors duration-300 whitespace-nowrap">
						SHOWNOMORE<sup className="text-[3vw] align-super">&reg;</sup>
					</p>
				</a>
			</div>
		</footer>
	);
}
