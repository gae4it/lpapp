import Script from 'next/script'

export interface OrganizationSchema {
  name: string
  url: string
  logo?: string
  description?: string
  sameAs?: string[]
}

export interface ProductSchema {
  name: string
  description: string
  image?: string
  brand?: string
  offers?: {
    price: string
    priceCurrency: string
  }
}

export interface ArticleSchema {
  headline: string
  description: string
  image?: string
  author?: string
  datePublished?: string
  dateModified?: string
}

interface StructuredDataProps {
  type: 'Organization' | 'Product' | 'Article' | 'WebPage'
  data: OrganizationSchema | ProductSchema | ArticleSchema | Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Helper per Organization schema
export function OrganizationStructuredData({ name, url, logo, description, sameAs }: OrganizationSchema) {
  return (
    <StructuredData
      type="Organization"
      data={{
        name,
        url,
        logo,
        description,
        sameAs,
      }}
    />
  )
}
