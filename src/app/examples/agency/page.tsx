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
import { headerData, footerData } from "@/cms/agency/layout";
import { heroData } from "@/cms/agency/hero";
import { testimonialsData } from "@/cms/agency/testimonials";
import { trustLogosData } from "@/cms/agency/trustLogos";
import { servicesData } from "@/cms/agency/services";
import { portfolioData } from "@/cms/agency/portfolio";
import { pricingData } from "@/cms/agency/pricing";
import { ctaData } from "@/cms/agency/cta";

export default function AgencyLanding() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        <TrustLogosSection {...trustLogosData} />
        <ThreeCardsSection {...servicesData} />
        <ImageRightTextLeftSection {...portfolioData} />
        <TestimonialsSection {...testimonialsData} />
        <PricingSection {...pricingData} />
        <CtaSection {...ctaData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}