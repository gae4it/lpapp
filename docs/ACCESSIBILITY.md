# Accessibility Guide

## Overview
This project implements WCAG 2.1 Level AA accessibility standards to ensure an inclusive experience for all users.

## Key Features

### 1. Keyboard Navigation
- **Skip to Content Link**: Press `Tab` on page load to reveal a skip link that bypasses navigation
- All interactive elements are keyboard accessible
- Focus indicators are visible on all focusable elements
- Logical tab order throughout the application

### 2. Screen Reader Support
- Semantic HTML structure with proper heading hierarchy
- ARIA labels on navigation landmarks
  - `<nav aria-label="Main navigation">` for primary navigation
  - `<main id="main-content">` for main content area
- Alternative text for all images
- Descriptive link text and button labels

### 3. Visual Accessibility
- High contrast text-to-background ratios
- Responsive typography scales appropriately
- Focus indicators with clear visual feedback
- Dark mode support for reduced eye strain

### 4. Component-Level Accessibility

#### SkipToContent Component
```tsx
import { SkipToContent } from '@/components/accessibility'

// Add at the top of your page
<SkipToContent />
```
- Hidden by default
- Appears on keyboard focus
- Links to `#main-content` ID
- Keyboard users can bypass navigation

#### Header Component
- Logo link has `aria-label="Homepage"`
- Navigation has `aria-label="Main navigation"`
- Mobile menu button has `aria-label` and `aria-expanded`

#### Images
- All images use Next.js `<Image>` component
- Proper `alt` attributes for context
- Decorative images have empty `alt=""`

## Testing Checklist

### Keyboard Navigation
- [ ] Can navigate entire page with Tab/Shift+Tab
- [ ] Skip to content link appears on first Tab
- [ ] All interactive elements are reachable
- [ ] Focus order is logical
- [ ] No keyboard traps

### Screen Readers
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] All images have meaningful alt text
- [ ] Form inputs have associated labels
- [ ] Navigation landmarks are announced
- [ ] Heading hierarchy makes sense

### Visual
- [ ] Text contrast meets WCAG AA standards
- [ ] UI is usable at 200% zoom
- [ ] No information conveyed by color alone
- [ ] Focus indicators are clearly visible

## Best Practices

### Semantic HTML
```tsx
// ✅ Good - semantic and accessible
<nav aria-label="Main navigation">
  <ul>
    <li><Link href="/">Home</Link></li>
  </ul>
</nav>

// ❌ Bad - not semantic
<div className="navigation">
  <a href="/">Home</a>
</div>
```

### ARIA Labels
```tsx
// ✅ Good - descriptive label
<button aria-label="Open mobile menu">
  <Menu />
</button>

// ❌ Bad - no label for icon-only button
<button>
  <Menu />
</button>
```

### Image Optimization
```tsx
// ✅ Good - Next.js Image with alt
<Image
  src="/logo.png"
  alt="Company Logo"
  width={120}
  height={40}
/>

// ❌ Bad - native img without optimization
<img src="/logo.png" />
```

## Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Next.js Accessibility](https://nextjs.org/docs/accessibility)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Tools
- **axe DevTools**: Browser extension for automated accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built-in Chrome DevTools accessibility audit
- **Screen Readers**: NVDA (Windows), VoiceOver (Mac), JAWS (Windows)
