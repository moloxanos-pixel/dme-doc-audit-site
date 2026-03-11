import { useEffect } from "react";

const defaultDescription =
  "DME Records Reviews provides DME documentation audits focused on compliance, cleaner submissions, and operational readiness.";

export default function usePageMeta(title, description = defaultDescription) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
}
