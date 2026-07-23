import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

const DAFTAR_API =
  "https://daftar.shownomore.com/api/public/articles?key=daftar_pub_8509d3e5ad66589ab03fe1f2211411cb60db7b5adedad651";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  author: string | null;
  brand: string | null;
  tags: string[];
  coverImage: string | null;
  seoTitle: string;
  seoDescription: string;
  wordCount: number;
  readTimeMin: number;
  publishedAt: string;
  updatedAt: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${DAFTAR_API}&slug=${slug}&format=html`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch {
    return null;
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.seoTitle || article.title} | Show No More`,
    description: article.seoDescription || article.excerpt || "",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#cc0906] transition-colors mb-8"
        >
          &larr; Back to Blog
        </a>

        {/* Category + Date */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
          {article.category && (
            <span className="text-[#cc0906] font-medium uppercase tracking-wide text-xs">
              {article.category}
            </span>
          )}
          {article.publishedAt && (
            <span>{formatDate(article.publishedAt)}</span>
          )}
          <span>{article.readTimeMin} min read</span>
          <span>{article.wordCount.toLocaleString()} words</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight mb-4">
          {article.title}
        </h1>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-xl text-gray-500 leading-relaxed mb-8">
            {article.excerpt}
          </p>
        )}

        {/* Author */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10 pb-8 border-b border-gray-200">
          <span>By</span>
          <a href="/about" className="font-medium text-gray-800 hover:text-[#cc0906] transition-colors">
            {article.author || "ShowNoMore"}
          </a>
        </div>

        {/* Cover Image */}
        {article.coverImage && (
          <div className="mb-10 overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-800 prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-gray-800
            prose-a:text-[#cc0906] prose-a:no-underline hover:prose-a:underline
            prose-ul:text-gray-600 prose-ol:text-gray-600
            prose-blockquote:border-l-[#cc0906] prose-blockquote:text-gray-500 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-[#cc0906] transition-colors"
          >
            &larr; More Articles
          </a>
        </div>
      </article>
    </div>
  );
}
