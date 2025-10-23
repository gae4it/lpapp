import type { HeaderProps, FooterSectionProps } from "@/types";

export const headerData: HeaderProps = {
  logo: {
    src: "/logo.svg",
    alt: "CloudFlow",
    href: "/examples/saas"
  },
  navigation: [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Integrations", href: "#integrations" },
    { title: "Docs", href: "#docs" },
  ],
  ctaButton: {
    text: "Get Started",
    href: "/signup"
  }
};

export const footerData: FooterSectionProps = {
  companyName: "CloudFlow",
  description: "The all-in-one workflow automation platform for modern teams. Automate anything, integrate everything.",
  sections: [
    {
      title: "Product",
      links: [
        { title: "Features", href: "#features" },
        { title: "Integrations", href: "#integrations" },
        { title: "Pricing", href: "#pricing" },
        { title: "Security", href: "#security" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", href: "#docs" },
        { title: "API Reference", href: "#api" },
        { title: "Templates", href: "#templates" },
        { title: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "#about" },
        { title: "Blog", href: "#blog" },
        { title: "Careers", href: "#careers" },
        { title: "Contact", href: "#contact" }
      ]
    }
  ]
};
