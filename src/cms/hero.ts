import type { HeroSectionProps } from "@/types"

export const heroMockData: Record<string, HeroSectionProps> = {
  default: {
    title: "Build Amazing Landing Pages",
    subtitle: "Create stunning, high-converting landing pages with our powerful drag-and-drop builder. No coding required.",
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
  withBackground: {
    title: "Transform Your Ideas Into Reality",
    subtitle: "Join thousands of entrepreneurs who trust our platform to grow their business online.",
    ctaText: "Start Building",
    ctaHref: "/signup",
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
}