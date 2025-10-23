import { 
  HeroSection, 
  TrustLogosSection, 
  ThreeCardsSection, 
  TestimonialsSection,
  PricingSection,
  FaqSection,
  CtaSection
} from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// SaaS Landing Page Data
const headerData = {
  logo: {
    src: "/logo.svg",
    alt: "CloudFlow",
    href: "/examples/saas"
  },
  navigation: [
    { title: "Product", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Resources", href: "#resources" },
    { title: "About", href: "#about" },
  ],
  ctaButton: {
    text: "Start Free Trial",
    href: "#signup"
  }
};

const heroData = {
  title: "Scale Your Business with CloudFlow",
  subtitle: "The all-in-one platform that helps teams collaborate, automate workflows, and deliver results faster than ever before.",
  ctaText: "Start 14-Day Free Trial",
  ctaHref: "#signup",
  backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const trustLogosData = {
  title: "Trusted by 10,000+ teams worldwide",
  logos: [
    { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", alt: "Slack" },
    { name: "Shopify", src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", alt: "Shopify" },
    { name: "Zoom", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg", alt: "Zoom" },
    { name: "Airbnb", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg", alt: "Airbnb" },
    { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg", alt: "Stripe" }
  ]
};

const featuresData = {
  title: "Everything you need to succeed",
  subtitle: "Powerful features designed to streamline your workflow",
  cards: [
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and focus on what matters most with our AI-powered workflow engine.",
      icon: "zap"
    },
    {
      title: "Team Collaboration", 
      description: "Real-time collaboration tools that keep your team aligned and productive from anywhere.",
      icon: "shield"
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with comprehensive reporting and dashboards.",
      icon: "lightbulb"
    }
  ]
};

const testimonialsData = {
  title: "What our customers say",
  testimonials: [
    {
      name: "Alex Thompson",
      role: "CEO",
      company: "TechStartup Inc",
      content: "CloudFlow transformed how we operate. Our productivity increased by 300% in just 3 months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Santos", 
      role: "Operations Manager",
      company: "GrowthCorp",
      content: "The automation features are incredible. We save 20 hours per week on manual processes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Product Director", 
      company: "InnovateNow",
      content: "Best investment we've made. The ROI was visible within the first month of implementation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    }
  ]
};

const pricingData = {
  title: "Choose your plan",
  subtitle: "Start free, scale as you grow",
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic integrations",
        "Email support"
      ],
      ctaText: "Get Started Free",
      ctaHref: "#signup"
    },
    {
      name: "Professional", 
      price: "$29",
      period: "month",
      description: "For growing teams that need more power",
      highlighted: true,
      features: [
        "Up to 50 team members",
        "100GB storage", 
        "Advanced integrations",
        "Priority support",
        "Custom workflows",
        "Advanced analytics"
      ],
      ctaText: "Start Free Trial",
      ctaHref: "#signup"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom integrations", 
        "24/7 dedicated support",
        "Advanced security",
        "Custom workflows",
        "White-label solution"
      ],
      ctaText: "Contact Sales",
      ctaHref: "#contact"
    }
  ]
};

const faqData = {
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
};

const ctaData = {
  title: "Ready to transform your workflow?",
  subtitle: "Join thousands of teams already using CloudFlow to scale their business.",
  primaryCtaText: "Start Free Trial", 
  primaryCtaHref: "#signup",
  secondaryCtaText: "Schedule Demo",
  secondaryCtaHref: "#demo",
  backgroundImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const footerData = {
  companyName: "CloudFlow",
  description: "The all-in-one platform for modern teams.",
  sections: [
    {
      title: "Product",
      links: [
        { title: "Features", href: "#features" },
        { title: "Pricing", href: "#pricing" },
        { title: "Security", href: "#security" },
        { title: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Resources", 
      links: [
        { title: "Documentation", href: "#docs" },
        { title: "Help Center", href: "#help" },
        { title: "Blog", href: "#blog" },
        { title: "Changelog", href: "#changelog" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "#about" },
        { title: "Careers", href: "#careers" },
        { title: "Contact", href: "#contact" },
        { title: "Privacy", href: "#privacy" }
      ]
    }
  ]
};

export default function SaaSLanding() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        <TrustLogosSection {...trustLogosData} />
        <ThreeCardsSection {...featuresData} />
        <TestimonialsSection {...testimonialsData} />
        <PricingSection {...pricingData} />
        <FaqSection {...faqData} />
        <CtaSection {...ctaData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}