import type { TestimonialsSectionProps } from "@/types"

export const testimonialsData: TestimonialsSectionProps = {
  title: "What our users say",
  subtitle: "Thousands of marketers and developers love LpApp",
  testimonials: [
    {
      name: "Giulia Bianchi",
      role: "Digital Strategist",
      company: "WebBoost",
      content: "LpApp mi ha permesso di lanciare landing page per i miei clienti in poche ore. Semplice, veloce e super personalizzabile!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Luca Rossi",
      role: "Frontend Developer",
      company: "DevWorks",
      content: "Finalmente un sistema CMS che non mi fa impazzire. Tutto in TypeScript, tutto versionato!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Verdi",
      role: "Marketing Manager",
      company: "GrowthLab",
      content: "Con LpApp abbiamo aumentato il tasso di conversione del 30%. Consigliatissimo!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ]
}
