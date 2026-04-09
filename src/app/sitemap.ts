import type { MetadataRoute } from "next";

const baseUrl = "https://shownomore.com";

const capabilitySlugs = [
	"content-distribution",
	"platform-growth",
	"creative-production",
	"performance-marketing",
	"ai-and-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
		{ url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/capabilities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
		{ url: `${baseUrl}/partnerships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${baseUrl}/conversations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		{ url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
	];

	const capabilityRoutes: MetadataRoute.Sitemap = capabilitySlugs.map((slug) => ({
		url: `${baseUrl}/capabilities/${slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...capabilityRoutes];
}
