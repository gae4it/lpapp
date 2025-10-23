# Copilot Instructions for LpApp

## Project Overview
LpApp is a modular landing page builder built with Next.js 15+, T3 Stack, shadcn/ui, and Prismic CMS. It's designed to create beautiful, performant landing pages with reusable components and CMS-driven content.

## Architecture Principles

### Component Design
- All components should be **fully typed** with TypeScript
- Use **shadcn/ui** as the foundation for all UI components
- Follow **composition pattern** - small, focused, reusable components
- Each section component should accept props for complete customization
- Implement **responsive design** mobile-first approach

### File Organization
```
src/
├── components/
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── sections/        # Landing page sections
│   └── layout/          # Layout components (Header, Footer, etc.)
├── lib/
│   ├── prismic/         # CMS integration utilities
│   ├── utils.ts         # Utility functions (cn, etc.)
│   └── validations.ts   # Zod schemas
```

### Coding Standards

#### TypeScript
- Use **strict mode** - no `any` types unless absolutely necessary
- Define **interfaces** for all component props
- Use **Zod schemas** for data validation
- Leverage **tRPC** for type-safe API routes

#### Styling
- Use **TailwindCSS** classes exclusively
- Follow **shadcn/ui patterns** for component styling
- Use **CSS variables** for theme customization
- Implement **dark mode** support with `next-themes`

#### Components
```tsx
// Example section component structure
interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function HeroSection({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaHref = "#" 
}: HeroSectionProps) {
  return (
    <section className="relative py-24 px-4">
      {/* Component implementation */}
    </section>
  )
}
```

## Technology-Specific Guidelines

### Next.js App Router
- Use **Server Components** by default
- Add `"use client"` only when necessary (interactivity, hooks)
- Implement **metadata API** for SEO
- Use **Image component** for optimized images
- Leverage **ISR** for CMS content

### Prisma
- Keep database schema in `schema.prisma`
- Use **typed Prisma client** throughout the app
- Implement **database migrations** for schema changes
- Follow **naming conventions** (camelCase for fields)

### Prismic CMS
- Use **Slice Machine** for content modeling
- Implement **TypeScript types** for all slices
- Create **reusable slice components** in `src/components/sections/`
- Use **@prismicio/client** for data fetching

### Storybook
- Create **stories** for all section components
- Use **mock data** from `src/mocks/`
- Implement **controls** for interactive props
- Document **usage examples** and **variants**

## Development Workflow

### When Adding New Features
1. **Plan the component** - define props interface first
2. **Create the component** in appropriate directory
3. **Add TypeScript types** for all props and data
4. **Write Storybook story** with mock data
5. **Test responsiveness** across devices
6. **Update Prismic schema** if needed for CMS integration

### When Modifying Existing Components
1. **Maintain backward compatibility** when possible
2. **Update TypeScript types** if props change
3. **Update Storybook stories** to reflect changes
4. **Test all usage instances** throughout the app
5. **Update documentation** if behavior changes

### Code Quality
- Use **ESLint** and **Prettier** configurations
- Follow **conventional commits** format
- Write **meaningful component names** and prop names
- Add **JSDoc comments** for complex functions
- Implement **error boundaries** for robust error handling

## Common Patterns

### Data Fetching
```tsx
// Server Component data fetching
async function getPageData(slug: string) {
  const client = createClient()
  return await client.getByUID("page", slug)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageData(params.slug)
  return <PageRenderer data={page} />
}
```

### Component Composition
```tsx
// Composable section pattern
export function LandingPage({ sections }: { sections: SectionData[] }) {
  return (
    <main>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <HeroSection key={index} {...section.data} />
          case 'features':
            return <FeaturesSection key={index} {...section.data} />
          default:
            return null
        }
      })}
    </main>
  )
}
```

### Styling Utilities
```tsx
import { cn } from "@/lib/utils"

// Use cn() for conditional classes
<div className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  className // Allow prop-based overrides
)} />
```

## Performance Considerations
- Use **Next.js Image** for all images
- Implement **lazy loading** for below-fold content
- Use **React.memo** for expensive components
- Leverage **static generation** where possible
- Optimize **bundle size** with dynamic imports

## SEO Best Practices
- Implement **structured data** (JSON-LD)
- Use **semantic HTML** elements
- Add **meta tags** via Next.js metadata API
- Ensure **accessibility** (ARIA labels, keyboard navigation)
- Optimize **Core Web Vitals**

## Error Handling
- Implement **error boundaries** for component trees
- Use **try-catch** blocks for async operations
- Provide **fallback UI** for failed data fetching
- Log errors appropriately for debugging

## Testing Strategy
- Use **Storybook** for component testing
- Implement **visual regression tests** where applicable
- Test **responsive behavior** across breakpoints
- Validate **TypeScript types** compile correctly

Remember: Focus on creating reusable, maintainable, and performant components that provide excellent developer and user experiences.