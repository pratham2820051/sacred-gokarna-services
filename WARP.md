# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Sacred Gokarna Services** website - a multilingual React application for a religious/spiritual services website focused on Gokarna temple services. Built with modern web technologies and designed to serve content in English, Kannada, and Telugu languages.

**Key Technologies:**
- Vite + React + TypeScript
- shadcn/ui component library
- TailwindCSS with custom theming
- React Router for navigation
- TanStack Query for data management
- i18next for internationalization
- Bun/npm for package management

## Development Commands

### Essential Commands
```bash
# Install dependencies (prefer npm since package-lock.json exists)
npm install

# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development mode (useful for debugging)
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build locally
npm run preview
```

### Single Component Development
When working on individual components:
- Use `npm run dev` and navigate to the specific route
- Components are hot-reloaded automatically
- Check browser console for TypeScript/React errors

## Code Architecture

### High-Level Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (Button, Dialog, etc.)
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # Site footer
│   ├── LoadingScreen.tsx
│   └── LanguageSwitcher.tsx
├── pages/              # Route-based page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About temple/services
│   ├── Poojas.tsx      # Religious services listing
│   ├── Blogs.tsx       # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post
│   ├── Contact.tsx     # Contact form and info
│   ├── HowToReach.tsx  # Location and directions
│   └── NotFound.tsx    # 404 page
├── i18n/               # Internationalization setup
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files (en.json, kn.json, te.json)
├── lib/                # Utility functions
│   └── utils.ts        # Tailwind class merging utility
├── hooks/              # Custom React hooks
└── assets/             # Static assets (images, fonts)
```

### Key Architectural Patterns

**1. Internationalization Architecture**
- Three-language support: English (en), Kannada (kn), Telugu (te)
- Dynamic font switching based on language (Inter, Noto Sans Kannada, Noto Sans Telugu)
- Translation keys stored in JSON files under `src/i18n/locales/`
- Language preference affects document.documentElement.lang and font family CSS variables

**2. Component Architecture**
- Uses shadcn/ui as the base component library
- Custom components extend shadcn/ui with domain-specific logic
- Page components are route-level containers
- Shared components (Header, Footer) provide consistent layout

**3. Routing & State Management**
- React Router with BrowserRouter for client-side routing
- TanStack Query for server state management
- Loading screen with 2.5-second delay on app initialization
- Toast notifications via Sonner + shadcn/ui toaster

**4. Styling System**
- TailwindCSS with extensive custom theme extensions
- Custom animations: `divine-pulse`, `fade-in-up`, `float`, `om-spin`
- CSS custom properties for theming with HSL color system
- Responsive design with mobile-first approach

### Lovable Integration
- Built with Lovable platform (low-code/AI-generated)
- Contains `lovable-tagger` for development mode component tagging
- Automatic deployment through Lovable platform

## Important Development Notes

### Language & Font Handling
When working with multilingual content:
- Always use `useTranslation()` hook for text content
- Test font rendering across all three languages
- Kannada/Telugu fonts may require specific character handling
- Language switching updates both content and typography

### Custom Animations & Theming
- The project has extensive custom animations for religious/spiritual feel
- Primary color scheme uses CSS custom properties
- `divine-pulse` animation is specifically designed for spiritual imagery
- Custom color palette includes `primary-glow` for special effects

### Route Structure
- All pages are statically defined routes (no dynamic routing currently)
- Blog posts use `:slug` parameter but implementation may need backend integration
- Contact page likely contains forms that need form validation with react-hook-form + Zod

### Component Development
- Use existing shadcn/ui components as base
- Follow the established pattern in `/components/ui/` for new UI components
- Page-level components should be placed in `/pages/`
- Shared logic components go in `/components/`

### Styling Guidelines
- Use Tailwind utility classes primarily
- Custom animations are available for spiritual/religious themed interactions
- Component variants should use `class-variance-authority` (cva) pattern
- Dark mode is supported via `next-themes`

## Testing & Debugging

### Browser Testing
- Test language switching functionality
- Verify font loading for all three languages
- Check animations on different screen sizes
- Test loading screen experience

### Performance Considerations
- Large component library (many @radix-ui components) may affect bundle size
- Image optimization should be considered for religious imagery
- Font loading strategy for multiple language fonts