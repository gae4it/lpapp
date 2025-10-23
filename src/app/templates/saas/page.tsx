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
import { headerData, footerData } from "@/cms/saas/layout";
import { heroData } from "@/cms/saas/hero";
import { testimonialsData } from "@/cms/saas/testimonials";
import { pricingData } from "@/cms/saas/pricing";
import { trustLogosData } from "@/cms/saas/trustLogos";
import { featuresData } from "@/cms/saas/features";
import { faqData } from "@/cms/saas/faq";
import { ctaData } from "@/cms/saas/cta";
import { seo } from "@/cms/saas/seo";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata(seo);

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