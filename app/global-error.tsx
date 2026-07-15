"use client";

import { useEffect } from "react";
import posthog from "@/lib/posthog-browser";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error, {
      source: "global_error_boundary",
      digest: error.digest,
    });

    posthog.capture("app_error_seen", {
      source: "global_error_boundary",
      digest_present: Boolean(error.digest),
    });
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center px-5">
        <main className="max-w-xl space-y-4 text-center">
          <h1>Something went wrong</h1>
          <p>Something unexpected happened. Please try again.</p>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-primary hover:bg-primary/90 cursor-pointer rounded-[6px] px-4 py-2.5 text-lg font-semibold text-black"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
