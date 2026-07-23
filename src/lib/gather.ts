/**
 * Gather CMS client (vritti.shownomore.com).
 *
 * Wraps the public v1 API used to power the /blog section. All calls are
 * authenticated with a workspace API key and fail soft — a network error or
 * missing key returns empty data so the blog renders its "no articles" state
 * instead of crashing the page.
 */

const API_URL = (process.env.GATHER_API_URL || "https://vritti.shownomore.com").replace(/\/$/, "");
const API_KEY = process.env.GATHER_API_KEY || "";
// Optional: restrict the blog to children of a single parent document.
const BLOG_PARENT = process.env.GATHER_BLOG_PARENT || "";

export interface GatherTag {
  name: string;
  color: string | null;
}

export interface GatherPost {
  id: string;
  slug: string;
  title: string;
  icon: string | null;
  coverImage: string | null;
  content: string; // HTML when fetched with format=html
  parentSlug: string | null;
  tags: GatherTag[];
  author?: { name: string | null; image: string | null };
  createdAt: string;
  updatedAt: string;
}

interface GatherListResponse {
  data: GatherPost[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

async function gatherFetch<T>(path: string): Promise<T | null> {
  if (!API_KEY) {
    console.warn("[gather] GATHER_API_KEY is not set — blog will render empty.");
    return null;
  }
  try {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.warn(`[gather] ${path} -> ${res.status} ${res.statusText}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[gather] request failed for ${path}:`, err);
    return null;
  }
}

function parentQuery(): string {
  return BLOG_PARENT ? `&parent=${encodeURIComponent(BLOG_PARENT)}` : "";
}

/** List published posts, newest first. Content is returned as HTML. */
export async function getPosts(page = 1, limit = 20): Promise<GatherPost[]> {
  const res = await gatherFetch<GatherListResponse>(
    `/api/v1/documents?format=html&page=${page}&limit=${limit}&sort=createdAt&order=desc${parentQuery()}`
  );
  return res?.data ?? [];
}

/** Fetch a single post by slug (HTML content), or null if not found. */
export async function getPost(slug: string): Promise<GatherPost | null> {
  return gatherFetch<GatherPost>(`/api/v1/documents/${encodeURIComponent(slug)}?format=html`);
}

/** All published slugs — used for the sitemap. */
export async function getAllPostSlugs(): Promise<string[]> {
  const res = await gatherFetch<GatherListResponse>(
    `/api/v1/documents?format=json&limit=100&sort=createdAt&order=desc${parentQuery()}`
  );
  return res?.data.map((p) => p.slug) ?? [];
}

/* ----------------------------- derived helpers ---------------------------- */

/** Strip HTML tags down to plain text. */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** A short plain-text excerpt derived from the post body. */
export function excerptFrom(post: GatherPost, max = 160): string {
  const text = stripHtml(post.content);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/** Estimated read time in minutes (≈200 wpm). */
export function readTime(post: GatherPost): number {
  const words = stripHtml(post.content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Plain word count of the post body. */
export function wordCount(post: GatherPost): number {
  return stripHtml(post.content).split(/\s+/).filter(Boolean).length;
}

/** Format an ISO date the way the rest of the site does. */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Compact editorial date, e.g. "12.9.24" (M.D.YY) — matches the Watson style. */
export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr);
  const yy = String(d.getFullYear()).slice(-2);
  return `${d.getMonth() + 1}.${d.getDate()}.${yy}`;
}

export interface HeadlineSegment {
  text: string;
  bold: boolean;
}

/**
 * Parse a headline into light/bold segments for the two-tone editorial
 * treatment (rendered with Px-Grotesk Light vs Bold).
 *
 * Authoring control: wrap the bold portion of the CMS title in double
 * asterisks — the split can be anywhere, any length, in either order:
 *   "Weaponizing **Secrecy**"                  → light + bold
 *   "**A Look Back:** The Tortured Poets…"      → bold + light
 *   "Staying ahead of trends **in an industry…**"
 *
 * If the title has no `**` markers, it falls back to emphasising the second
 * half of the headline so existing titles still get a two-tone look.
 */
export function parseHeadline(title: string): HeadlineSegment[] {
  const t = title.trim();

  if (t.includes("**")) {
    // Split on `**`; every odd-indexed chunk was between markers → bold.
    return t
      .split("**")
      .map((text, i) => ({ text, bold: i % 2 === 1 }))
      .filter((s) => s.text.length > 0);
  }

  // Fallback: light first half, bold second half.
  const words = t.split(/\s+/);
  if (words.length < 2) return [{ text: t, bold: false }];
  const mid = Math.ceil(words.length / 2);
  return [
    { text: words.slice(0, mid).join(" ") + " ", bold: false },
    { text: words.slice(mid).join(" "), bold: true },
  ];
}
