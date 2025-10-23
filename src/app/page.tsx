import { 
  HeroSection, 
  TrustLogosSection, 
  ThreeCardsSection, 
  ImageLeftTextRightSection,
  FaqSection
} from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { headerData, footerData } from "@/cms/home/layout";
import { heroData } from "@/cms/home/hero";
import { trustLogosData } from "@/cms/home/trustLogos";
import { threeCardsData } from "@/cms/home/threeCards";
import { imageTextData } from "@/cms/home/imageText";
import { faqData } from "@/cms/home/faq";
import { seo } from "@/cms/home/seo";
import { generateSeoMetadata } from "@/lib/seo";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";
import { SkipToContent } from "@/components/accessibility";

export const metadata = generateSeoMetadata(seo);

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
    component: <ThreeCardsSection {...threeCardsData} />
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
      <SkipToContent />
      <OrganizationStructuredData
        name="LpApp"
        description="Professional landing page builder with ready-to-use sections"
        url={process.env.NEXT_PUBLIC_SITE_URL ?? "https://lpapp.example.com"}
        logo={`${process.env.NEXT_PUBLIC_SITE_URL ?? "https://lpapp.example.com"}/logo.png`}
        sameAs={[
          "https://twitter.com/lpapp",
          "https://linkedin.com/company/lpapp"
        ]}
      />
      <Header {...headerData} />
      <main id="main-content">
        {/* Page Header */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto py-30 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              LpApp Sections Library
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive collection of reusable landing page sections. Mix and match to create stunning pages in minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
                8+ Components
              </span>
              <span className="px-4 py-2 bg-green-900 text-green-200 rounded-full text-sm font-medium">
                Fully Responsive
              </span>
              <span className="px-4 py-2 bg-purple-900 text-purple-200 rounded-full text-sm font-medium">
                TypeScript Ready
              </span>
            </div>
          </div>
        </section>

        {/* Sections Showcase */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Available Sections
            </h2>
            
            <div className="space-y-16">
              {sectionsLibrary.map((section, _index) => (
                <div key={section.id} className="space-y-6">
                  {/* Section Info */}
                  <div className="bg-gray-950 rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {section.name}
                        </h3>
                        <p className="text-gray-400 mt-1">
                          {section.description}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {section.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Component ID: <code className="bg-gray-800 px-2 py-1 rounded">
                        {section.id}
                      </code>
                    </div>
                  </div>
                  
                  {/* Section Preview */}
                  <div className="border-2 border-dashed border-gray-600 rounded-lg overflow-hidden">
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
                href="/templates/saas"
                className="bg-gray-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors border border-gray-700"
              >
                View SaaS Example
              </a>
              <a
                href="/templates/ecommerce"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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
