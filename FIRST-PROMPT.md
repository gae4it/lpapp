LPAPP

Perfect 🔥 — here’s your final, production-grade prompt, written in English in Markdown format (.md) so you can copy-paste it directly into GitHub Copilot (agent mode) to scaffold your project.


---

# 🚀 Prompt: Generate a Fullstack Landing Page Builder – Next.js (T3 Stack + shadcn/ui + Prismic CMS + Storybook)

Name: LpApp

## 🎯 Goal
Create a **Next.js (latest)** project using the **T3 Stack** and **shadcn/ui** to build a modular landing-page system.  
All content (text, images, links) will be managed through **Prismic Headless CMS (free tier)**.  
The site will be hosted on **Vercel**.

---

## ⚙️ Tech Stack
- **Next.js 15+ (App Router with Server Components)**
- **TypeScript 5+**
- **TailwindCSS 3+ (latest)**
- **T3 Stack (create-t3-app)**
  - **Prisma** (with PostgreSQL for production, SQLite for development)
  - **tRPC v11** (type-safe API routes)
  - **NextAuth.js v5** (authentication setup)
- **shadcn/ui v2** (UI primitives + design system foundation)  
- **Storybook 8+** (component documentation & testing)
- **Prismic Headless CMS** (Slice Machine + TypeScript SDK)
- **Vercel** (deployment platform with ISR support)
- **Additional Tools:**
  - **Framer Motion** (animations)
  - **React Hook Form + Zod** (forms & validation)
  - **Lucide React** (icons)
  - **clsx + tailwind-merge** (utility functions)

---

## 🧱 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header + Footer
│   ├── page.tsx           # Home (showcase all sections)
│   ├── [slug]/page.tsx    # Dynamic landing pages
│   └── globals.css        # Global styles + Tailwind imports
├── components/
│   ├── layout/            # Header, Footer, Container, etc.
│   ├── ui/                # shadcn/ui components (auto-generated)
│   └── sections/          # Reusable sections (Hero, FAQ, Pricing, etc.)
├── lib/
│   ├── prismic/           # CMS client, types & utilities
│   ├── utils.ts           # Utility functions (cn, etc.)
│   └── validations.ts     # Zod schemas
├── mocks/                 # Mock data for Storybook
├── types/                 # TypeScript type definitions
└── styles/                # Additional stylesheets
```

---

## 🎨 UI & Design System

### Foundation:
- Use **shadcn/ui** for all base components (`Button`, `Card`, `Accordion`, `Tabs`, `Badge`, `Dialog`, etc.)
- Configure Tailwind theme tokens (colors, radius, typography) for a consistent visual identity
- Support light/dark mode

### Sections Library:
Build each landing-page section as a React component in `src/components/sections/`, all responsive and reusable.  
Each section receives **typed props** and uses **shadcn/ui** components inside.

Sections to include:
1. `HeroSection`
2. `TrustLogosSection`
3. `ThreeCardsSection`
4. `ImageLeftTextRightSection`
5. `ImageRightTextLeftSection`
6. `FaqSection`
7. `TestimonialsSection`
8. `PricingSection`
9. `CtaSection`
10. `FooterSection` (common)
11. `Header` (common)

Each section:
- written in TypeScript
- fully responsive
- styled with TailwindCSS
- documented in Storybook with controls for props
- example mock data file in `/src/mocks/`

Example:

```tsx
// src/components/sections/FaqSection.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function FaqSection({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {items.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


---

🏗️ Home Page

The Home page (app/page.tsx) should showcase all available sections sequentially.

Serves as a visual library of all reusable blocks.

Include placeholder mock data for each section.



---

## 🌐 Landing Pages

All landing pages share the same layout (Header, Footer) with dynamic content.

**Route examples:** `/landing-1`, `/product`, `/pricing`, `/about`, etc.

Each page imports only the sections it needs:

```tsx
import { HeroSection, FaqSection, PricingSection } from "@/components/sections"

export default function Page() {
  return (
    <>
      <HeroSection {...heroData} />
      <PricingSection {...pricingData} />
      <FaqSection items={faqData} />
    </>
  )
}
```

**Dynamic CMS-driven pages:**
```tsx
import { getPageData } from "@/lib/prismic/client"
import { renderSection } from "@/lib/prismic/render"

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug)
  
  return (
    <main>
      {page.data.slices.map((slice, index) => 
        renderSection(slice, index)
      )}
    </main>
  )
}
```



---

## 🧩 Prismic CMS Integration

### Setup:
- Connect to a **Prismic repository** (free tier)
- Use **Slice Machine** for content modeling
- Configure a **"page" custom type** with a slices zone (array of sections)
- Generate **TypeScript types** automatically

### Slice Types (each corresponds to a section component):
- `hero_section`
- `trust_logos_section`
- `three_cards_section`
- `image_left_text_right_section`
- `image_right_text_left_section`
- `faq_section`
- `testimonials_section`
- `pricing_section`
- `cta_section`

### Data Fetching:
Create CMS utilities in `/lib/prismic/`:

```tsx
// lib/prismic/client.ts
import { createClient } from "@prismicio/client"

export const client = createClient(process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT!)

export async function getPageData(uid: string) {
  try {
    const page = await client.getByUID("page", uid)
    return page
  } catch (error) {
    console.error("Failed to fetch page:", error)
    throw new Error(`Page "${uid}" not found`)
  }
}
```

```tsx
// lib/prismic/render.tsx
import { 
  HeroSection, 
  FaqSection, 
  PricingSection 
  // ... other sections
} from "@/components/sections"

export function renderSection(slice: any, index: number) {
  switch (slice.slice_type) {
    case "hero_section":
      return <HeroSection key={index} {...slice.primary} />
    case "faq_section":
      return <FaqSection key={index} items={slice.items} />
    case "pricing_section":
      return <PricingSection key={index} {...slice.primary} />
    default:
      return null
  }
}
```

### ISR Implementation:
```tsx
// app/[slug]/page.tsx
export const revalidate = 60 // Revalidate every 60 seconds

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug)
  
  return (
    <main>
      {page.data.slices.map(renderSection)}
    </main>
  )
}
```


---

## 📚 Storybook Setup

### Configuration:
- Configure Storybook 8+ for **Tailwind + TypeScript + shadcn/ui**
- Support **dark mode** theming
- Include **viewport** controls for responsive testing
- Set up **accessibility** addon for compliance testing

### Story Structure:
Each section must have its own `.stories.tsx` file with:

```tsx
// components/sections/HeroSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'
import { heroMockData } from '@/mocks/hero'

const meta: Meta<typeof HeroSection> = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: heroMockData.default
}

export const WithBackgroundImage: Story = {
  args: heroMockData.withBackground
}
```

### Additional Stories:
- **"Sections Gallery"** - Show all sections together on one page
- **"Layout Components"** - Header, Footer, Container variations
- **"UI Components"** - Individual shadcn/ui components
- **Mock data** organized in `/src/mocks/` by section type



---

## 🚀 Deployment

### Vercel Configuration:
- **Platform**: Vercel (recommended for Next.js)
- **ISR**: Enable Incremental Static Regeneration for CMS content
- **Environment Variables**: Set all required env vars in Vercel dashboard
- **Analytics**: Enable Vercel Analytics for performance monitoring
- **Image Optimization**: Automatic with Vercel's image service

### Environment Variables:
```bash
# Database
DATABASE_URL="your-postgresql-connection-string"

# Prismic CMS
PRISMIC_ACCESS_TOKEN="your-prismic-access-token"
NEXT_PUBLIC_PRISMIC_ENVIRONMENT="your-prismic-repo-name"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="https://your-domain.vercel.app"

# Optional: Analytics, monitoring, etc.
```

### Development Tools:
- **ESLint + Prettier**: Code formatting and linting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Strict mode enabled
- **Commitlint**: Conventional commit messages

### Performance Optimizations:
- **Bundle Analyzer**: Analyze and optimize bundle size
- **Core Web Vitals**: Monitor LCP, FID, CLS metrics
- **Image Optimization**: Next.js Image component usage
- **Font Optimization**: Next.js font optimization



---

## ✅ Deliverables

### Core Configuration:
- **next.config.mjs** - Next.js configuration with image domains
- **tailwind.config.ts** - Custom theme, colors, typography
- **tsconfig.json** - Path aliases (@/components, @/lib, @/types)
- **.storybook/** - Complete Storybook setup with addons
- **prisma/schema.prisma** - Database schema
- **.eslintrc.json** + **prettier.config.js** - Code quality tools

### Component Library:
- **11 fully-typed section components** with responsive design
- **TypeScript interfaces** for all props and data structures
- **shadcn/ui integration** throughout all components
- **Mock data files** for each section type
- **Accessibility compliance** (ARIA labels, keyboard navigation)

### CMS Integration:
- **Prismic Slice Machine** setup with all slice types
- **TypeScript SDK** integration with auto-generated types
- **Dynamic page rendering** system
- **ISR implementation** for performance
- **Error handling** for missing content

### Documentation & Testing:
- **Storybook stories** for all components with controls
- **"Sections Gallery"** overview story
- **Component documentation** with usage examples
- **Mock data** organized by section type

### Production Ready:
- **Vercel deployment** configuration
- **Environment variables** setup guide
- **Performance optimizations** implemented
- **SEO metadata** system
- **Error boundaries** and fallback UI



---

🧠 Summary

Create a modern landing-page builder system where:

Design system = shadcn/ui

Layout patterns inspired by Flowbite / Tailwind UI

Content = managed in Prismic CMS

Hosting = Vercel

Dev experience = TypeScript, Storybook, T3 Stack


Result:
A fully modular, composable landing-page framework for building unlimited marketing pages with consistent UI and dynamic CMS-driven content.

---

Create 

CHANGES.MD
README.MD
COPILOT_INSTRUCTIONS.MD
FIRST-PROMPT.MD
 
