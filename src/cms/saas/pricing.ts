import type { PricingSectionProps } from "@/types"

export const pricingData: PricingSectionProps = {
  title: "Plans that scale with your business",
  subtitle: "Start free, upgrade as you grow. Cancel anytime.",
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "month",
      description: "Perfect for trying out CloudFlow",
      features: [
        "Up to 100 tasks/month",
        "5 Active workflows",
        "Basic integrations",
        "Email support",
        "7-day data retention"
      ],
      ctaText: "Start Free",
      ctaHref: "/signup?plan=free"
    },
    {
      name: "Growth",
      price: "$49",
      period: "month",
      description: "For growing teams and businesses",
      highlighted: true,
      features: [
        "Unlimited tasks",
        "Unlimited workflows",
        "All integrations",
        "Priority support",
        "30-day data retention",
        "Advanced analytics",
        "Team collaboration",
        "Custom branding"
      ],
      ctaText: "Start 14-Day Trial",
      ctaHref: "/signup?plan=growth"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month", 
      description: "Advanced features for large organizations",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited data retention",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "On-premise deployment",
        "API access"
      ],
      ctaText: "Contact Sales",
      ctaHref: "/contact-sales"
    }
  ]
}
