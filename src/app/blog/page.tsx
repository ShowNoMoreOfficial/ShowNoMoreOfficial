import { ArrowUpRight } from "lucide-react";

const DAFTAR_API =
  "https://daftar.shownomore.com/api/public/articles?key=daftar_pub_8509d3e5ad66589ab03fe1f2211411cb60db7b5adedad651";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string | null;
  author: string | null;
  tags: string[];
  coverImage: string | null;
  seoTitle: string;
  seoDescription: string;
  wordCount: number;
  readTimeMin: number;
  publishedAt: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${DAFTAR_API}&format=json&limit=20`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data || [];
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "Blog | Show No More",
  description:
    "Insights, analysis, and commentary from ShowNoMore — a Delhi-based media-tech studio.",
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl">
          Insights, analysis, and commentary from ShowNoMore.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-5xl mx-auto">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No articles published yet.</p>
            <p className="mt-2 text-gray-400">Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {articles.map((article, index) => (
              <a
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group block"
              >
                {/* Cover Image */}
                {article.coverImage && (
                  <div className="overflow-hidden mb-4">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  {article.category && (
                    <span className="text-[#cc0906] font-medium uppercase tracking-wide text-xs">
                      {article.category}
                    </span>
                  )}
                  {article.publishedAt && (
                    <span>{formatDate(article.publishedAt)}</span>
                  )}
                  <span>{article.readTimeMin} min read</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#cc0906] transition-colors duration-200 leading-tight">
                  {article.title}
                </h2>

                {/* Excerpt */}
                {article.excerpt && (
                  <p className="mt-2 text-gray-500 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                )}

                {/* Read More */}
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[#cc0906] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Article{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
