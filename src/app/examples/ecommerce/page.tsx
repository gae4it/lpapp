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
import { headerData, footerData } from "@/cms/ecommerce/layout";
import { heroData } from "@/cms/ecommerce/hero";
import { testimonialsData } from "@/cms/ecommerce/testimonials";
import { trustLogosData } from "@/cms/ecommerce/trustLogos";
import { featuresData } from "@/cms/ecommerce/features";
import { storyData } from "@/cms/ecommerce/story";
import { faqData } from "@/cms/ecommerce/faq";
import { ctaData } from "@/cms/ecommerce/cta";

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