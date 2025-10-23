import type { FaqSectionProps } from "@/types"

export const faqData: FaqSectionProps = {
  title: "Frequently asked questions",
  items: [
    {
      question: "How long is the free trial?",
      answer: "Our free trial lasts 14 days and includes access to all Professional features. No credit card required."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Absolutely. Our Enterprise plan includes custom integrations, and we have an extensive API for developers."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use enterprise-grade encryption and are SOC 2 Type II certified."
    }
  ]
}
