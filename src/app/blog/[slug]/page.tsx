import { notFound } from "next/navigation";
import Reveal from "../../components/motion/Reveal";
import BackButton from "../../components/BackButton";
import { getPost, readTime, formatDateShort, parseHeadline } from "../../../lib/gather";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return { title: "Article Not Found | Show No More" };
  return {
    title: `${article.title} | Show No More`,
    description: article.title,
    openGraph: article.coverImage
      ? { images: [{ url: article.coverImage }] }
      : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getPost(slug);

  if (!article) {
    notFound();
  }

  const segments = parseHeadline(article.title);
  const author = article.author?.name || "ShowNoMore";

  return (
    <div className="min-h-screen px-6 md:px-10 pt-28 pb-24">
      {/* Top meta line */}
      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-10">
        <BackButton fallback="/blog" className="hover:text-[#cc0906] transition-colors cursor-pointer">
          &larr; Back
        </BackButton>
        <span>
          {formatDateShort(article.createdAt)} &middot; {readTime(article)} min read
        </span>
      </div>

      {/* Hero cover image — floated to the right of centre */}
      {article.coverImage && (
        <Reveal y={36} className="w-full mb-14 md:mb-20">
          <div className="w-[86%] mx-auto md:mx-0 md:w-[42%] md:ml-auto md:mr-[6%] aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      )}

      {/* Headline — left-aligned, two-tone via Px-Grotesk weight contrast */}
      <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] tracking-tight leading-[1.02]">
        {segments.map((s, i) => (
          <span key={i} className={s.bold ? "font-bold" : "font-light"}>
            {s.text}
          </span>
        ))}
      </h1>

      {/* Author — centred credit */}
      <p className="text-center text-sm text-gray-600 italic mt-10">(By {author})</p>

      {/* Divider */}
      <hr className="mt-10 border-t border-gray-300" />

      {/* Body — narrow column offset toward centre-right; images break wider
          and sit left, each with a small caption label (magazine asymmetry). */}
      <div className="mt-16 md:grid md:grid-cols-12">
        <div
          className="md:col-start-5 md:col-span-6 xl:col-start-5 xl:col-span-5
            prose prose-sm md:prose-base max-w-none
            prose-headings:font-medium prose-headings:text-[#1a1a1a] prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-gray-900
            prose-a:text-[#cc0906] prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
            prose-ul:text-gray-700 prose-ol:text-gray-700
            prose-blockquote:border-l-2 prose-blockquote:border-l-[#cc0906] prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-[#1a1a1a] prose-blockquote:tracking-tight
            prose-figure:my-10
            prose-figcaption:mt-0 prose-figcaption:mb-3 prose-figcaption:text-[10px] prose-figcaption:uppercase prose-figcaption:tracking-[0.15em] prose-figcaption:text-gray-400 prose-figcaption:font-medium
            prose-img:w-full prose-img:max-w-none prose-img:my-10
            md:prose-img:w-[140%] md:prose-img:-ml-[40%]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-16 md:grid md:grid-cols-12">
          <div className="md:col-start-5 md:col-span-6 xl:col-start-5 xl:col-span-5 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span
                  key={t.name}
                  className="px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-500 border border-gray-200 rounded-full"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="mt-16 pt-8 border-t border-gray-300">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-[#cc0906] transition-colors"
        >
          &larr; Back to Blog
        </a>
      </div>
    </div>
  );
}
