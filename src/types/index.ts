// Section component types
export interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
  backgroundVideo?: string
}

export interface TrustLogosSectionProps {
  title?: string
  logos: Array<{
    name: string
    src: string
    alt: string
    href?: string
  }>
}

export interface ThreeCardsSectionProps {
  title?: string
  subtitle?: string
  cards: Array<{
    title: string
    description: string
    icon?: string
    image?: string
    href?: string
  }>
}

export interface ImageTextSectionProps {
  title: string
  subtitle?: string
  description: string
  image: {
    src: string
    alt: string
  }
  ctaText?: string
  ctaHref?: string
  features?: Array<{
    title: string
    description: string
  }>
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSectionProps {
  title?: string
  subtitle?: string
  items: FaqItem[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

export interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
}

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  ctaHref?: string
}

export interface PricingSectionProps {
  title?: string
  subtitle?: string
  tiers: PricingTier[]
}

export interface CtaSectionProps {
  title: string
  subtitle?: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  backgroundImage?: string
}

export interface FooterLink {
  title: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterSectionProps {
  companyName: string
  description?: string
  sections: FooterSection[]
  socialLinks?: Array<{
    name: string
    href: string
    icon: string
  }>
}

export interface HeaderProps {
  logo: {
    src: string
    alt: string
    href?: string
  }
  navigation: Array<{
    title: string
    href: string
    items?: Array<{
      title: string
      href: string
      description?: string
    }>
  }>
  ctaButton?: {
    text: string
    href: string
  }
}

// Common types
export interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface LinkData {
  text: string
  href: string
  external?: boolean
}

// CMS types
export interface PageSection {
  type: string
  data: Record<string, unknown>
}

export interface Page {
  uid: string
  title: string
  description?: string
  sections: PageSection[]
  seo?: {
    title?: string
    description?: string
    image?: ImageData
  }
}