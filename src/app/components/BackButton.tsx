"use client";

import { useRouter } from "next/navigation";

/**
 * A "back" control that returns to the previous page in history, falling back
 * to a given route (default /blog) when there's no history to go back to
 * (e.g. the article was opened directly).
 */
export default function BackButton({
  fallback = "/blog",
  className = "",
  children = "← Back",
}: {
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
