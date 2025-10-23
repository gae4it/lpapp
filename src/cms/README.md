# CMS - Content Management

Questa cartella contiene tutti i contenuti/testi per i componenti della landing page.

## Struttura

Ogni file rappresenta un tipo di section component e contiene diverse varianti di contenuto.

### File disponibili:

- **`hero.ts`** - Contenuti per HeroSection
- **`trustLogos.ts`** - Loghi e partner
- **`threeCards.ts`** - Cards con features/benefits
- **`imageText.ts`** - Sezioni con immagine e testo
- **`faq.ts`** - Domande frequenti
- **`testimonials.ts`** - Recensioni clienti
- **`pricing.ts`** - Piani di prezzo
- **`cta.ts`** - Call-to-action
- **`layout.ts`** - Header e Footer condivisi

## Come usare

### Esempio: Hero Section

```typescript
// src/cms/hero.ts
export const heroMockData: Record<string, HeroSectionProps> = {
  default: {
    title: "Build Amazing Landing Pages",
    subtitle: "Create stunning pages...",
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
  variant2: {
    title: "Different Hero Title",
    subtitle: "Another subtitle...",
    ctaText: "Try Now",
    ctaHref: "/trial",
  },
};
```

### Usare in una pagina

```typescript
import { heroMockData } from "@/cms/hero";

export default function Page() {
  return <HeroSection {...heroMockData.default} />;
}
```

## Vantaggi

✅ **Semplice** - Solo file TypeScript, niente CMS esterno  
✅ **Type-safe** - TypeScript controlla tutti i dati  
✅ **Veloce** - Niente chiamate API, tutto locale  
✅ **Versioning** - Tutto sotto Git  
✅ **Flessibile** - Crea quante varianti vuoi

## Creare nuove varianti

1. Apri il file del componente in `src/cms/`
2. Aggiungi una nuova chiave con i dati:

```typescript
export const heroMockData: Record<string, HeroSectionProps> = {
  default: { /* ... */ },
  newVariant: {
    title: "New Title",
    subtitle: "New Subtitle",
    // ...
  },
};
```

3. Usa nella pagina: `{...heroMockData.newVariant}`

## Best Practices

- Usa nomi descrittivi per le varianti: `saas`, `ecommerce`, `agency`, ecc.
- Mantieni una variante `default` per ogni componente
- Commenta le varianti complesse
- Riutilizza le varianti su più pagine
