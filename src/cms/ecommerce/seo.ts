import type { SeoProps } from "@/types/seo"

export const seo: SeoProps = {
  title: "StyleCraft - Handcrafted Artisan Products",
  description: "Discover unique, sustainably made goods from independent creators around the world. Each piece tells a story.",
  keywords: ["ecommerce", "artisan", "handcrafted", "sustainable", "shop"],
  canonical: "https://yourdomain.com/templates/ecommerce",
  og: {
    title: "StyleCraft E-commerce",
    description: "Shop unique, handcrafted products from artisans worldwide.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    url: "https://yourdomain.com/templates/ecommerce"
  },
  twitter: {
    card: "summary_large_image",
    site: "@stylecraft",
    title: "StyleCraft - Handcrafted Artisan Products",
    description: "Discover unique, sustainable goods from independent creators.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  }
}
