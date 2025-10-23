import { 
  HeroSection, 
  TrustLogosSection, 
  ThreeCardsSection, 
  ImageLeftTextRightSection,
  TestimonialsSection,
  FaqSection,
  CtaSection
} from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const headerData = {
  logo: {
    src: "/logo.svg", 
    alt: "StyleCraft",
    href: "/examples/ecommerce"
  },
  navigation: [
    { title: "Shop", href: "#shop" },
    { title: "Collections", href: "#collections" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ],
  ctaButton: {
    text: "Shop Now",
    href: "#shop"
  }
};

const heroData = {
  title: "Handcrafted Style, Delivered",
  subtitle: "Discover unique, artisan-made products that tell a story. Every piece is carefully curated for the modern lifestyle.",
  ctaText: "Explore Collection",
  ctaHref: "#shop",
  backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const trustLogosData = {
  title: "Featured in",
  logos: [
    { name: "Vogue", src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Vogue_logo.svg", alt: "Vogue" },
    { name: "Elle", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/ELLE_logo.svg", alt: "Elle" },
    { name: "GQ", src: "https://upload.wikimedia.org/wikipedia/commons/6/66/GQ_logo.svg", alt: "GQ" },
    { name: "Harper's Bazaar", src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Harper%27s_Bazaar_Logo.svg", alt: "Harper's Bazaar" },
    { name: "Marie Claire", src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Marie_Claire_logo.svg", alt: "Marie Claire" }
  ]
};

const featuresData = {
  title: "Why choose StyleCraft?",
  subtitle: "Quality, sustainability, and style in every product",
  cards: [
    {
      title: "Handcrafted Quality",
      description: "Every product is made by skilled artisans using traditional techniques and premium materials.",
      icon: "shield"
    },
    {
      title: "Sustainable Materials",
      description: "We source eco-friendly materials and support fair trade practices with our partner artisans.",
      icon: "lightbulb"
    },
    {
      title: "Worldwide Shipping",
      description: "Fast, secure shipping to over 100 countries with tracking and insurance included.",
      icon: "zap"
    }
  ]
};

const storyData = {
  title: "Our Artisan Story",
  subtitle: "Craftsmanship Meets Modern Design",
  description: "For over a decade, we've traveled the world to find the most talented artisans and bring their incredible work to modern homes. Each piece in our collection represents hours of skilled craftsmanship and tells a unique story of cultural heritage and artistic expression.",
  image: {
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
    alt: "Artisan crafting"
  },
  ctaText: "Meet Our Artisans",
  ctaHref: "#artisans",
  features: [
    {
      title: "10+ Years Experience",
      description: "Working with master craftspeople worldwide"
    },
    {
      title: "500+ Unique Products",
      description: "Curated collection from 50+ countries"
    },
    {
      title: "Carbon Neutral Shipping",
      description: "Environmental responsibility in every order"
    }
  ]
};

const testimonialsData = {
  title: "Customer love",
  testimonials: [
    {
      name: "Isabella Chen",
      role: "Interior Designer",
      company: "Design Studio",
      content: "The quality is exceptional! These pieces have become conversation starters in every room.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1594736797933-d0d4bfb86e75?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson",
      role: "Art Collector", 
      company: "Private Collector",
      content: "StyleCraft bridges the gap between traditional craftsmanship and contemporary aesthetics perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f8c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sofia Rodriguez",
      role: "Lifestyle Blogger",
      company: "@SofiaStyle",
      content: "I love knowing the story behind each piece. The quality and attention to detail is unmatched.",
      rating: 5,  
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]
};

const faqData = {
  title: "Frequently asked questions",
  items: [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery."
    },
    {
      question: "Do you offer returns?",
      answer: "Yes, we offer a 30-day return policy for all items in original condition. Return shipping is free."
    },
    {
      question: "Are the products authentic?",
      answer: "Absolutely. We work directly with artisans and provide certificates of authenticity for all handcrafted items."
    },
    {
      question: "Do you offer customization?",
      answer: "Many of our artisans offer custom work. Contact us with your vision and we'll connect you with the right craftsperson."
    }
  ]
};

const ctaData = {
  title: "Start Your Collection Today",
  subtitle: "Discover one-of-a-kind pieces that transform your space and support artisan communities worldwide.",
  primaryCtaText: "Browse Collection",
  primaryCtaHref: "#shop",
  secondaryCtaText: "Gift Cards", 
  secondaryCtaHref: "#gifts",
  backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const footerData = {
  companyName: "StyleCraft",
  description: "Handcrafted products for the modern lifestyle.",
  sections: [
    {
      title: "Shop",
      links: [
        { title: "All Products", href: "#products" },
        { title: "Home Decor", href: "#home" },
        { title: "Jewelry", href: "#jewelry" },
        { title: "Textiles", href: "#textiles" }
      ]
    },
    {
      title: "Support",
      links: [
        { title: "Shipping Info", href: "#shipping" },
        { title: "Returns", href: "#returns" },
        { title: "Size Guide", href: "#sizing" },
        { title: "Care Instructions", href: "#care" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "Our Story", href: "#story" },
        { title: "Artisan Partners", href: "#artisans" },
        { title: "Sustainability", href: "#sustainability" },
        { title: "Press", href: "#press" }
      ]
    }
  ]
};

export default function EcommerceLanding() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        <TrustLogosSection {...trustLogosData} />
        <ThreeCardsSection {...featuresData} />
        <ImageLeftTextRightSection {...storyData} />
        <TestimonialsSection {...testimonialsData} />
        <FaqSection {...faqData} />
        <CtaSection {...ctaData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}