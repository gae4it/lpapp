import type { PricingSectionProps } from "@/types"

export const pricingMockData: PricingSectionProps = {
  title: "Simple, transparent pricing",
  subtitle: "Choose the perfect plan for your needs. Upgrade or downgrade at any time.",
  tiers: [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      description: "Perfect for small projects and personal use",
      features: [
        "5 Landing Pages",
        "Basic Templates",
        "Standard Support",
        "Custom Domain",
        "SSL Certificate"
      ],
      ctaText: "Start Free Trial",
      ctaHref: "/signup?plan=starter"
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "Best for growing businesses and agencies",
      highlighted: true,
      features: [
        "25 Landing Pages",
        "Premium Templates",
        "Priority Support",
        "Custom Domain",
        "SSL Certificate",
        "Advanced Analytics",
        "A/B Testing",
        "Team Collaboration"
      ],
      ctaText: "Start Free Trial",
      ctaHref: "/signup?plan=pro"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month", 
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited Landing Pages",
        "Custom Templates",
        "24/7 Dedicated Support",
        "Custom Domain",
        "SSL Certificate",
        "Advanced Analytics",
        "A/B Testing",
        "Team Collaboration",
        "White-label Solution",
        "API Access",
        "Custom Integrations"
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact"
    }
  ]
}