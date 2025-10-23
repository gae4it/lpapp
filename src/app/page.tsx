import { HeroSection, TrustLogosSection, ThreeCardsSection, ImageLeftTextRightSection, FaqSection } from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Mock data for demonstration
const headerData = {
  logo: {
    src: "/logo.svg",
    alt: "LpApp Logo",
    href: "/"
  },
  navigation: [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  ctaButton: {
    text: "Get Started",
    href: "/signup"
  }
};

const heroData = {
  title: "Build Amazing Landing Pages",
  subtitle: "Create stunning, high-converting landing pages with our powerful builder. No coding required.",
  ctaText: "Start Building Free",
  ctaHref: "/signup",
  backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const trustLogosData = {
  logos: [
    { name: "Microsoft", src: "/logos/microsoft.png", alt: "Microsoft" },
    { name: "Google", src: "/logos/google.png", alt: "Google" },
    { name: "Apple", src: "/logos/apple.png", alt: "Apple" },
    { name: "Amazon", src: "/logos/amazon.png", alt: "Amazon" },
    { name: "Meta", src: "/logos/meta.png", alt: "Meta" },
  ]
};

const cardsData = {
  title: "Why Choose LpApp?",
  subtitle: "Everything you need to create professional landing pages",
  cards: [
    {
      title: "Lightning Fast",
      description: "Build and deploy your landing pages in minutes, not hours",
      icon: "zap"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      icon: "shield"
    },
    {
      title: "Smart Features",
      description: "AI-powered insights and automatic optimization tools",
      icon: "lightbulb"
    }
  ]
};

const imageTextData = {
  title: "Create Beautiful Pages Effortlessly",
  subtitle: "Powerful Builder",
  description: "Our intuitive drag-and-drop interface makes it easy to create professional landing pages. With pre-built components, custom styling options, and mobile-responsive designs, you'll have everything you need to convert visitors into customers.",
  image: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    alt: "Dashboard screenshot"
  },
  ctaText: "Try It Now",
  ctaHref: "/signup",
  features: [
    {
      title: "Drag & Drop Builder",
      description: "Intuitive interface that anyone can use"
    },
    {
      title: "Mobile Responsive",
      description: "Your pages look great on any device"
    },
    {
      title: "Performance Optimized",
      description: "Fast loading times guaranteed"
    }
  ]
};

const faqData = {
  items: [
    {
      question: "How long does it take to create a landing page?",
      answer: "With our intuitive builder, you can create a professional landing page in as little as 15 minutes."
    },
    {
      question: "Do I need coding skills?",
      answer: "Not at all! Our drag-and-drop interface is designed for everyone, regardless of technical background."
    },
    {
      question: "Can I customize the design?",
      answer: "Yes, you have full control over colors, fonts, layouts, and can even add custom CSS if needed."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features."
    }
  ]
};

const footerData = {
  companyName: "LpApp",
  description: "The easiest way to create high-converting landing pages.",
  sections: [
    {
      title: "Product",
      links: [
        { title: "Features", href: "/features" },
        { title: "Pricing", href: "/pricing" },
        { title: "Templates", href: "/templates" },
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Blog", href: "/blog" },
        { title: "Careers", href: "/careers" },
      ]
    },
    {
      title: "Support",
      links: [
        { title: "Help Center", href: "/help" },
        { title: "Contact", href: "/contact" },
        { title: "Status", href: "/status" },
      ]
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        <TrustLogosSection {...trustLogosData} />
        <ThreeCardsSection {...cardsData} />
        <ImageLeftTextRightSection {...imageTextData} />
        <FaqSection {...faqData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}
