import type { PricingSectionProps } from "@/types"

export const pricingData: PricingSectionProps = {
  title: "Investment levels",
  subtitle: "Transparent pricing for every stage of growth",
  tiers: [
    {
      name: "Brand Foundation",
      price: "$15,000",
      period: "project",
      description: "Perfect for startups and small businesses ready to establish their market presence",
      features: [
        "Brand strategy & positioning",
        "Logo & visual identity",
        "Brand guidelines",
        "Website design & development",
        "Basic SEO optimization",
        "30 days of support"
      ],
      highlighted: false,
      ctaText: "Get Started",
      ctaHref: "#contact"
    },
    {
      name: "Growth Accelerator", 
      price: "$35,000",
      period: "project",
      description: "Comprehensive solution for established companies looking to scale rapidly",
      features: [
        "Everything in Brand Foundation",
        "Custom web application",
        "Marketing automation setup",
        "Advanced analytics & tracking",
        "Content strategy & creation",
        "Ongoing optimization",
        "90 days of support"
      ],
      highlighted: true,
      ctaText: "Most Popular",
      ctaHref: "#contact"
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex requirements",
      features: [
        "Custom strategy development",
        "Multi-platform integration",
        "Advanced security features",
        "Dedicated project team",
        "Training & workshops",
        "Ongoing partnership",
        "SLA & priority support"
      ],
      highlighted: false,
      ctaText: "Contact Sales",
      ctaHref: "#enterprise"
    }
  ]
}
