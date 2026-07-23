import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Webhook endpoint for Gather CMS.
 *
 * When a document is published/updated/unpublished in Gather, this endpoint
 * revalidates the affected pages so the blog picks up changes instantly
 * instead of waiting for the 60s ISR timer.
 *
 * Setup in Gather:
 *   URL:    https://shownomore.com/api/revalidate
 *   Secret: (same value as REVALIDATE_SECRET env var)
 *   Events: document.published, document.updated, document.unpublished
 *
 * Gather signs the request body with HMAC-SHA256 in the x-webhook-signature
 * header. If REVALIDATE_SECRET is unset, all requests are accepted (dev only).
 */
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;

  if (secret) {
    const signature = req.headers.get("x-webhook-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const body = await req.text();
    const crypto = await import("crypto");
    const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");

    if (signature !== expected) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    return handleRevalidation(JSON.parse(body));
  }

  return handleRevalidation(await req.json());
}

function handleRevalidation(payload: {
  event?: string;
  document?: { slug?: string };
}) {
  const slug = payload.document?.slug;

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
  // Always refresh the listing.
  revalidatePath("/blog");

  return NextResponse.json({
    revalidated: true,
    event: payload.event ?? null,
    slug: slug ?? null,
  });
}
