"use client";

import { trackPageView } from "@/lib/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedPathRef = useRef<string | null>(null);

  const pagePath = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!pagePath || trackedPathRef.current === pagePath) {
      return;
    }

    trackedPathRef.current = pagePath;
    trackPageView(pagePath);
  }, [pagePath]);

  return null;
}
