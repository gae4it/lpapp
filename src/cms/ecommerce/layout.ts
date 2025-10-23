import type { HeaderProps, FooterSectionProps } from "@/types";

export const headerData: HeaderProps = {
  logo: {
    src: "/logo.svg",
    alt: "StyleCraft",
    href: "/templates/ecommerce"
  },
  navigation: [
    { title: "Shop", href: "#shop" },
    { title: "Collections", href: "#collections" },
    { title: "Artisans", href: "#artisans" },
    { title: "About", href: "#about" },
  ],
  ctaButton: {
    text: "Cart (0)",
    href: "/cart"
  }
};

export const footerData: FooterSectionProps = {
  companyName: "StyleCraft",
  description: "Connecting you with talented artisans and their handcrafted creations. Every purchase supports independent makers.",
  sections: [
    {
      title: "Shop",
      links: [
        { title: "New Arrivals", href: "#new" },
        { title: "Best Sellers", href: "#bestsellers" },
        { title: "Collections", href: "#collections" },
        { title: "Sale", href: "#sale" }
      ]
    },
    {
      title: "Support",
      links: [
        { title: "Shipping Info", href: "#shipping" },
        { title: "Returns", href: "#returns" },
        { title: "Size Guide", href: "#sizing" },
        { title: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "About",
      links: [
        { title: "Our Story", href: "#story" },
        { title: "Artisans", href: "#artisans" },
        { title: "Sustainability", href: "#sustainability" },
        { title: "Press", href: "#press" }
      ]
    }
  ]
};
