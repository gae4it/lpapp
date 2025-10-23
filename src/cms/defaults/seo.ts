import type { SeoProps } from "@/types/seo"

export const seo: SeoProps = {
  title: "LpApp - Default Landing Page",
  description: "Build amazing landing pages with our powerful components library.",
  keywords: ["landing page", "builder", "components"],
  canonical: "https://yourdomain.com/",
  og: {
    title: "LpApp",
    description: "Build amazing landing pages",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    url: "https://yourdomain.com/"
  },
  twitter: {
    card: "summary_large_image",
    site: "@lpapp",
    title: "LpApp",
    description: "Build amazing landing pages",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
  }
}
