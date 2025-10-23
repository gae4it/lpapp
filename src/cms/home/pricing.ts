import type { PricingSectionProps } from "@/types"

export const pricingData: PricingSectionProps = {
  title: "Simple, transparent pricing",
  subtitle: "Choose the perfect plan for your needs. Upgrade or downgrade at any time.",
  tiers: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try all features with no risk",
      features: [
        "Unlimited landing pages",
        "All section components",
        "TypeScript CMS",
        "Community support"
      ],
      ctaText: "Start Free",
      ctaHref: "/signup?plan=free"
    },
    {
      name: "Pro",
      price: "$19",
      period: "month",
      description: "For professionals and agencies",
      highlighted: true,
      features: [
        "Everything in Free",
        "Custom domains",
        "Priority support",
        "Analytics integration",
        "A/B testing"
      ],
      ctaText: "Upgrade Now",
      ctaHref: "/signup?plan=pro"
    }
  ]
}
