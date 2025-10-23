import type { ImageTextSectionProps } from "@/types"

export const portfolioData: ImageTextSectionProps = {
  title: "Case Study: TechFlow Rebrand",
  subtitle: "From Startup to Industry Leader",
  description: "We helped TechFlow transform from a small startup to a recognized industry leader through comprehensive rebranding, custom web development, and strategic marketing. The result? 300% growth in leads and a complete transformation of their market position.",
  image: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1426&q=80",
    alt: "TechFlow project showcase"
  },
  ctaText: "View Full Case Study",
  ctaHref: "#case-study",
  features: [
    {
      title: "300% Lead Increase",
      description: "Organic traffic and qualified leads tripled in 6 months"
    },
    {
      title: "Award-Winning Design",
      description: "Webby Award for Best User Experience Design"
    },
    {
      title: "Performance Optimization",
      description: "Page load times improved by 85% across all devices"
    }
  ]
}
