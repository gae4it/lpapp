import type { HeaderProps, FooterSectionProps } from "@/types";

export const headerData: HeaderProps = {
  logo: {
    src: "/logo.svg",
    alt: "Nexus Creative Agency",
    href: "/templates/agency"
  },
  navigation: [
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ],
  ctaButton: {
    text: "Start a Project",
    href: "/contact"
  }
};

export const footerData: FooterSectionProps = {
  companyName: "Nexus Creative",
  description: "Award-winning creative agency crafting memorable digital experiences for forward-thinking brands.",
  sections: [
    {
      title: "Services",
      links: [
        { title: "Branding", href: "#branding" },
        { title: "Web Design", href: "#web-design" },
        { title: "Digital Strategy", href: "#strategy" },
        { title: "Content Creation", href: "#content" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About Us", href: "#about" },
        { title: "Our Team", href: "#team" },
        { title: "Careers", href: "#careers" },
        { title: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Connect",
      links: [
        { title: "Contact", href: "#contact" },
        { title: "Instagram", href: "#instagram" },
        { title: "LinkedIn", href: "#linkedin" },
        { title: "Dribbble", href: "#dribbble" }
      ]
    }
  ]
};
