import type { HeaderProps, FooterSectionProps } from "@/types";

export const defaultHeaderData: HeaderProps = {
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

export const defaultFooterData: FooterSectionProps = {
  companyName: "LpApp",
  description: "Build beautiful landing pages with our modern components library. Fast, flexible, and fully customizable.",
  sections: [
    {
      title: "Product",
      links: [
        { title: "Features", href: "#features" },
        { title: "Pricing", href: "#pricing" },
        { title: "Templates", href: "#templates" },
        { title: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", href: "#docs" },
        { title: "Guides", href: "#guides" },
        { title: "Blog", href: "#blog" },
        { title: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "#about" },
        { title: "Careers", href: "#careers" },
        { title: "Contact", href: "#contact" },
        { title: "Partners", href: "#partners" }
      ]
    }
  ]
};
