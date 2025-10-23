import { 
  HeroSection, 
  TrustLogosSection, 
  ThreeCardsSection, 
  ImageRightTextLeftSection,
  TestimonialsSection,
  PricingSection,
  CtaSection
} from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { defaultHeaderData, defaultFooterData } from "@/cms/layout";

const heroData = {
  title: "We Create Digital Experiences That Matter",
  subtitle: "Transform your brand with cutting-edge design and development. From strategy to execution, we craft digital solutions that drive results.",
  ctaText: "View Our Work",
  ctaHref: "#portfolio",
  backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

const trustLogosData = {
  title: "Trusted by industry leaders",
  logos: [
    { name: "Apple", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { name: "Nike", src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", alt: "Nike" },
    { name: "Tesla", src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", alt: "Tesla" }
  ]
};

const servicesData = {
  title: "What we do",
  subtitle: "Full-service digital solutions for modern brands",
  cards: [
    {
      title: "Brand Strategy",
      description: "Complete brand identity development from positioning to visual systems that connect with your audience.",
      icon: "lightbulb"
    },
    {
      title: "Digital Experiences", 
      description: "Custom websites and applications built with the latest technologies for optimal performance.",
      icon: "zap"
    },
    {
      title: "Growth Marketing",
      description: "Data-driven marketing campaigns that scale your business and maximize ROI across all channels.",
      icon: "shield"
    }
  ]
};

const portfolioData = {
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
};

const testimonialsData = {
  title: "Client success stories",
  testimonials: [
    {
      name: "Sarah Kim",
      role: "CEO",
      company: "TechFlow", 
      content: "Nexus Creative didn't just redesign our brand - they transformed our entire business trajectory. The results speak for themselves.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Martinez",
      role: "Founder",
      company: "GreenSpace",
      content: "Working with Nexus was like having an extension of our team. They understood our vision and made it reality.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson", 
      role: "Marketing Director",
      company: "Bloom Health",
      content: "The strategic approach and attention to detail exceeded our expectations. Our conversion rates doubled within 3 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]
};

const pricingData = {
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
};

const ctaData = {
  title: "Ready to Transform Your Brand?",
  subtitle: "Let's discuss how we can help you achieve your business goals with strategic design and development.",
  primaryCtaText: "Start Your Project",
  primaryCtaHref: "#contact",
  secondaryCtaText: "View Portfolio",
  secondaryCtaHref: "#portfolio",
  backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
};

export default function AgencyLanding() {
  return (
    <div className="min-h-screen">
      <Header {...defaultHeaderData} />
      <main>
        <HeroSection {...heroData} />
        <TrustLogosSection {...trustLogosData} />
        <ThreeCardsSection {...servicesData} />
        <ImageRightTextLeftSection {...portfolioData} />
        <TestimonialsSection {...testimonialsData} />
        <PricingSection {...pricingData} />
        <CtaSection {...ctaData} />
      </main>
      <Footer {...defaultFooterData} />
    </div>
  );
}