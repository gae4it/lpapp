import type { PricingSectionProps } from "@/types"

export const pricingData: PricingSectionProps = {
  title: "Featured Collections",
  subtitle: "Curated selections for every style and budget",
  tiers: [
    {
      name: "Essential",
      price: "$29",
      period: "starting at",
      description: "Everyday essentials with timeless design",
      features: [
        "Premium materials",
        "Handcrafted quality",
        "Free shipping over $50",
        "30-day returns",
        "Sustainable packaging"
      ],
      ctaText: "Shop Essentials",
      ctaHref: "/collections/essential"
    },
    {
      name: "Premium",
      price: "$79",
      period: "starting at",
      description: "Elevated pieces for the discerning buyer",
      highlighted: true,
      features: [
        "Artisan craftsmanship",
        "Limited editions",
        "Free worldwide shipping",
        "60-day returns",
        "Gift packaging included",
        "Lifetime warranty",
        "Personal styling tips",
        "Early access to new drops"
      ],
      ctaText: "Shop Premium",
      ctaHref: "/collections/premium"
    },
    {
      name: "Luxury",
      price: "$199",
      period: "starting at", 
      description: "Exceptional pieces for collectors",
      features: [
        "Museum-quality craftsmanship",
        "One-of-a-kind pieces",
        "White-glove delivery",
        "90-day returns",
        "Luxury gift packaging",
        "Lifetime warranty",
        "Concierge service",
        "Exclusive events access",
        "Authentication certificate"
      ],
      ctaText: "Explore Luxury",
      ctaHref: "/collections/luxury"
    }
  ]
}
