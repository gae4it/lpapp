import type { Metadata } from "next";
import type { SeoProps } from "@/types/seo";

/**
 * Genera metadata Next.js dai dati SEO del CMS
 */
export function generateSeoMetadata(seo: SeoProps): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: seo.og ? {
      title: seo.og.title ?? seo.title,
      description: seo.og.description ?? seo.description,
      images: seo.og.image ? [seo.og.image] : undefined,
      url: seo.og.url,
    } : undefined,
    twitter: seo.twitter ? {
      card: seo.twitter.card as "summary" | "summary_large_image" | "app" | "player" | undefined,
      site: seo.twitter.site,
      title: seo.twitter.title ?? seo.title,
      description: seo.twitter.description ?? seo.description,
      images: seo.twitter.image ? [seo.twitter.image] : undefined,
    } : undefined,
    alternates: seo.canonical ? {
      canonical: seo.canonical,
    } : undefined,
  };
}
