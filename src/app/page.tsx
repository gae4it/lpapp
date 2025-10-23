import { 
  HeroSection, 
  TrustLogosSection, 
  ThreeCardsSection, 
  ImageLeftTextRightSection,
  FaqSection
} from "@/components/sections";
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
    { 
      title: "Examples", 
      href: "/examples",
      items: [
        { title: "SaaS Landing", href: "/examples/saas", description: "Modern software product page" },
        { title: "E-commerce", href: "/examples/ecommerce", description: "Online store landing page" },
        { title: "Agency", href: "/examples/agency", description: "Creative agency showcase" }
      ]
    },
    { title: "Components", href: "/components" },
    { title: "Docs", href: "/docs" },
    { title: "Pricing", href: "/pricing" },
  ],
  ctaButton: {
    text: "Start Building",
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

// Sections Library - Component Showcase
const sectionsLibrary = [
  {
    id: "hero",
    name: "Hero Section",
    description: "Eye-catching hero with title, subtitle, CTA and optional background",
    category: "Headers",
    component: <HeroSection {...heroData} />
  },
  {
    id: "trust-logos", 
    name: "Trust Logos",
    description: "Display client logos and social proof",
    category: "Social Proof",
    component: <TrustLogosSection {...trustLogosData} />
  },
  {
    id: "three-cards",
    name: "Feature Cards",
    description: "Highlight key features with icons and descriptions",
    category: "Features", 
    component: <ThreeCardsSection {...cardsData} />
  },
  {
    id: "image-text-left",
    name: "Image + Content (Left)",
    description: "Content section with image on the left side",
    category: "Content",
    component: <ImageLeftTextRightSection {...imageTextData} />
  },
  {
    id: "faq",
    name: "FAQ Section",
    description: "Collapsible frequently asked questions",
    category: "Support",
    component: <FaqSection {...faqData} />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        {/* Page Header */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              LpApp Sections Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive collection of reusable landing page sections. Mix and match to create stunning pages in minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                8+ Components
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Fully Responsive
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                TypeScript Ready
              </span>
            </div>
          </div>
        </section>

        {/* Sections Showcase */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Available Sections
            </h2>
            
            <div className="space-y-16">
              {sectionsLibrary.map((section, _index) => (
                <div key={section.id} className="space-y-6">
                  {/* Section Info */}
                  <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {section.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {section.description}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {section.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Component ID: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {section.id}
                      </code>
                    </div>
                  </div>
                  
                  {/* Section Preview */}
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    {section.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Landing Page?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Check out our example landing pages to see these sections in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/examples/saas"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View SaaS Example
              </a>
              <a
                href="/examples/ecommerce"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View E-commerce Example
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer {...footerData} />
    </div>
  );
}
