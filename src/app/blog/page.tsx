import Reveal from "../components/motion/Reveal";
import {
  getPosts,
  formatDateShort,
  parseHeadline,
  type GatherPost,
} from "../../lib/gather";

export const metadata = {
  title: "Blog | Show No More",
  description:
    "Field notes, ideas, and commentary from ShowNoMore on tech, production, strategy, and AI automation.",
};

// Refresh at most once a minute; the /api/revalidate webhook makes publishing
// in Gather feel instant.
export const revalidate = 60;

/**
 * A single entry in the editorial feed. Alignment alternates left/right down
 * the page, with the author credit tucked into the opposite corner — matching
 * the Watson "Conversations" layout.
 */
function PostEntry({
  post,
  displayNo,
  alignRight,
}: {
  post: GatherPost;
  displayNo: number;
  alignRight: boolean;
}) {
  const segments = parseHeadline(post.title);
  const author = post.author?.name || "ShowNoMore";
  const href = `/blog/${post.slug}`;

  return (
    <article className="relative border-b border-gray-300 px-6 md:px-10 py-20 md:py-28">
      {/* Index number — top right */}
      <span className="absolute top-8 right-6 md:right-10 text-lg md:text-xl text-gray-800">
        ({displayNo})
      </span>

      <Reveal y={40}>
        {/* Cover image — centered, floating */}
        {post.coverImage && (
          <a href={href} className="group block mb-12">
            <div className="mx-auto w-[86%] md:w-[48%] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </a>
        )}

        {/* Headline block */}
        <a
          href={href}
          className={`group flex flex-col ${
            alignRight ? "items-end text-right" : "items-start text-left"
          }`}
        >
          <span className="text-xs md:text-sm text-gray-500 mb-4">
            ({formatDateShort(post.createdAt)})
          </span>
          <h2 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-[#1a1a1a] group-hover:text-[#cc0906] transition-colors duration-300">
            {segments.map((s, i) => (
              <span key={i} className={s.bold ? "font-bold" : "font-light"}>
                {s.text}
              </span>
            ))}
          </h2>
        </a>

        {/* Author credit — opposite corner from the headline */}
        <p
          className={`mt-10 text-sm text-gray-600 italic ${
            alignRight ? "text-left" : "text-right"
          }`}
        >
          (By {author})
        </p>
      </Reveal>
    </article>
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-3xl text-gray-300 font-medium tracking-tight">
            No conversations yet.
          </p>
          <p className="mt-3 text-gray-400">New writing is on the way — check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {posts.map((post, i) => (
        <PostEntry
          key={post.id}
          post={post}
          displayNo={posts.length - i}
          alignRight={i % 2 === 1}
        />
      ))}
    </div>
  );
}
