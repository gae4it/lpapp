import type { SeoProps } from "@/types/seo"

export const seo: SeoProps = {
  title: "LpApp - Landing Page Builder for Developers & Marketers",
  description: "Create beautiful, high-converting landing pages in minutes. Mix & match ready-made sections, edit content in TypeScript, and deploy instantly.",
  keywords: ["landing page", "builder", "typescript cms", "react", "nextjs", "shadcn", "t3 stack"],
  canonical: "https://yourdomain.com/",
  og: {
    title: "LpApp - Landing Page Builder",
    description: "Create beautiful, high-converting landing pages in minutes.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    url: "https://yourdomain.com/"
  },
  twitter: {
    card: "summary_large_image",
    site: "@lpapp",
    title: "LpApp - Landing Page Builder",
    description: "Create beautiful, high-converting landing pages in minutes.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  }
}
