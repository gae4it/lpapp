import type { TestimonialsSectionProps } from "@/types"

export const testimonialsMockData: TestimonialsSectionProps = {
  title: "Loved by thousands of users",
  subtitle: "See what our customers have to say about LpApp",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow",
      content: "LpApp transformed how we create landing pages. What used to take weeks now takes hours!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder", 
      company: "InnovateCo",
      content: "The best landing page builder I've ever used. Clean, fast, and incredibly powerful.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "GrowthLabs", 
      content: "Finally, a tool that makes beautiful landing pages without the complexity. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]
}