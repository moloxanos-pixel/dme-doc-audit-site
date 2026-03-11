import { useEffect } from "react";

const defaultDescription =
  "DME Records Reviews delivers compliance-focused DME documentation review, medical necessity review, and secure reporting workflows.";

export default function Seo({ title, description = defaultDescription }) {
  useEffect(() => {
    document.title = title ? `${title} | DME Records Reviews` : "DME Records Reviews";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
