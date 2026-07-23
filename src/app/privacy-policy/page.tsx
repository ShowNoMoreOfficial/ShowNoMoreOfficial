import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | Show No More",
	description: "Privacy Policy for ShowNoMore creative agency.",
};

const policySections = [
	{
		id: "01",
		title: "Introduction",
		content: [
			'ShowNoMore ("We", "Us", "Our") Operates The Shownomore.com Website. This Privacy Policy Explains How We Collect, Use, Disclose, And Safeguard Your Information When You Visit Our Website.',
			"Please Read This Policy Carefully. If You Do Not Agree With The Terms, Please Discontinue Use Of Our Site.",
		],
	},
	{
		id: "02",
		title: "Information We Collect",
		content: [
			"We May Collect Personal Information That You Voluntarily Provide When Contacting Us, Including Your Name, Email Address, Phone Number, And Any Message Content Submitted Through Contact Forms.",
			"We Automatically Collect Certain Information When You Visit Our Site, Including Your IP Address, Browser Type, Operating System, Referring URLs, And Pages Viewed.",
		],
	},
	{
		id: "03",
		title: "How We Use Your Information",
		content: [
			"We Use The Information We Collect To Respond To Your Inquiries And Communicate With You About Our Services, To Improve And Optimize Our Website Experience, And To Monitor And Analyze Usage Patterns And Trends.",
			"We May Also Use Your Information To Send You Marketing Communications Related To Our Services, Which You May Opt Out Of At Any Time.",
		],
	},
	{
		id: "04",
		title: "Cookies & Tracking",
		content: [
			"Our Website May Use Cookies And Similar Tracking Technologies To Enhance Your Browsing Experience. We Use Vercel Analytics To Understand Site Performance And Visitor Patterns.",
			"You Can Instruct Your Browser To Refuse All Cookies Or To Indicate When A Cookie Is Being Sent. However, Some Features Of Our Site May Not Function Properly Without Cookies.",
		],
	},
	{
		id: "05",
		title: "Third-Party Services",
		content: [
			"We May Share Your Information With Third-Party Service Providers Who Perform Services On Our Behalf, Such As Website Hosting, Analytics, And Email Delivery.",
			"These Third Parties Have Access To Your Personal Information Only To Perform Specific Tasks And Are Obligated To Not Disclose Or Use It For Any Other Purpose.",
		],
	},
	{
		id: "06",
		title: "Data Retention & Security",
		content: [
			"We Retain Your Personal Information Only For As Long As Necessary To Fulfill The Purposes Outlined In This Policy, Unless A Longer Retention Period Is Required By Law.",
			"We Implement Appropriate Technical And Organizational Security Measures To Protect Your Personal Information. However, No Method Of Transmission Over The Internet Is 100% Secure.",
		],
	},
	{
		id: "07",
		title: "Your Rights",
		content: [
			"Depending On Your Jurisdiction, You May Have The Right To Access, Correct, Or Delete Personal Information We Hold About You. You May Also Have The Right To Restrict Or Object To Certain Processing Of Your Data.",
			"To Exercise Any Of These Rights, Please Contact Us Using The Information Provided Below. We Will Respond To Your Request Within A Reasonable Timeframe.",
		],
	},
	{
		id: "08",
		title: "Contact Us",
		content: [],
	},
];

export default function PrivacyPolicy() {
	return (
		<main className="text-[#1a1a1a] min-h-screen p-8 md:p-16 lg:p-24">
			<div className="lg:flex lg:gap-x-16 xl:gap-x-24">
				{/* Left Column: Sticky sidebar */}
				<aside className="lg:w-1/3 xl:w-2/5">
					<div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-24">
						<h1 className="text-7xl md:text-8xl font-medium uppercase tracking-tighter leading-none text-[#cc0906]">
							[ Privacy<br />Policy ]
						</h1>
						<div className="mt-8 lg:mt-0">
							<p className="text-sm text-gray-500">Last Updated</p>
							<p className="text-lg font-medium">April 1, 2026</p>
						</div>
					</div>
				</aside>

				{/* Right Column: Scrollable policy content */}
				<div className="lg:w-2/3 xl:w-3/5 mt-16 lg:mt-0">
					<div className="pt-24">
						{policySections.map((section) => (
							<div key={section.id} className="border-t border-[#1a1a1a] py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
								<div className="md:col-span-1">
									<p className="text-sm text-gray-500">[{section.id}]</p>
									<p className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
										({section.title})
									</p>
								</div>
								<div className="md:col-span-2">
									<div className="text-lg font-medium leading-relaxed max-w-prose space-y-4">
										{section.id === "08" ? (
											<>
												<p>
													If You Have Questions Or Concerns About This Privacy Policy Or Our Data Practices, Please Contact Us At{" "}
													<a
														href="mailto:dev@shownomore.com"
														className="text-[#cc0906] hover:underline underline-offset-8"
													>
														dev@shownomore.com
													</a>
													.
												</p>
												<p>
													ShowNoMore — Karkardooma, DL 110092 / Siolim, GA 403517.
													<br />
													Phone: +91 96507 01275.
												</p>
											</>
										) : (
											section.content.map((paragraph, i) => (
												<p key={i}>{paragraph}</p>
											))
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
