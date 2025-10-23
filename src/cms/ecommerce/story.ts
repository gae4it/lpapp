import type { ImageTextSectionProps } from "@/types"

export const storyData: ImageTextSectionProps = {
  title: "Our Artisan Story",
  subtitle: "Craftsmanship Meets Modern Design",
  description: "For over a decade, we've traveled the world to find the most talented artisans and bring their incredible work to modern homes. Each piece in our collection represents hours of skilled craftsmanship and tells a unique story of cultural heritage and artistic expression.",
  image: {
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
    alt: "Artisan crafting"
  },
  ctaText: "Meet Our Artisans",
  ctaHref: "#artisans",
  features: [
    {
      title: "10+ Years Experience",
      description: "Working with master craftspeople worldwide"
    },
    {
      title: "500+ Unique Products",
      description: "Curated collection from 50+ countries"
    },
    {
      title: "Carbon Neutral Shipping",
      description: "Environmental responsibility in every order"
    }
  ]
}
