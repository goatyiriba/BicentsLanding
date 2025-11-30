# Bicents Landing

## Overview
This is a Remix + Vite landing page application for Bicents, featuring internationalization support (i18n) with English and French languages. The application showcases Bicents' capabilities, definition, partners, and includes forms for contact and recruitment.

## Project Structure
- **Framework**: Remix v2.9.1 with Vite v5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI components (Accordion, Label, Slot)
- **Internationalization**: i18next with remix-i18next
- **Animations**: GSAP
- **Form Validation**: remix-validated-form with Zod

## Key Features
- Multi-language support (French default, English available)
- Server-side rendering (SSR)
- Flat file-based routing system
- Responsive design with Tailwind CSS
- Component library with shadcn/ui-style components
- Image lazy loading
- Form validation

## Development Setup

### Environment
- Node.js >= 18.0.0
- npm package manager
- Port 5000 for dev server

### Running Locally
```bash
npm install
npm run dev
```

The dev server will start on http://0.0.0.0:5000

### Building for Production
```bash
npm run build
npm start
```

## Configuration Files

### Vite Configuration (vite.config.ts)
- Configured for Replit environment
- Server binds to 0.0.0.0:5000
- HMR configured for secure websocket connections
- Uses remix-flat-routes for file-based routing

### i18n Configuration
- **Server**: Uses i18next-fs-backend for loading translations from file system
- **Client**: Uses i18next-http-backend for loading translations via HTTP
- **Locales**: Located in `/public/locales/{lang}/{namespace}.json`
- **Default locale**: French (fr)
- **Supported locales**: French (fr), English (en)

## Routes Structure
- `/` - Home page with hero section and capabilities
- `/our-capabilities` - Services including innovation, marketing, and UX research
- `/our-definition` - Company definition and philosophy
- `/our-partners` - Partner information
- `/what-next` - Next steps and future plans
- `/contact-us` - Contact form
- `/join-us` - Recruitment form
- `/legal` - Legal information
- `/privacy` - Privacy policy

## Components
- **Layout Components**: Home layout, Page layout
- **Home Components**: Header, Footer, Hero text, Accordion content
- **Form Components**: Input, Textarea, Submit button
- **UI Components**: Button, Accordion, Label (shadcn/ui style)
- **Icons**: Custom logo component

## Deployment
The application is configured for deployment on Replit using autoscale deployment target:
- **Build**: `npm run build`
- **Run**: `npm start`
- **Type**: Autoscale (stateless, scales to zero when not in use)

## Recent Changes (November 30, 2025)
1. Configured Vite dev server for Replit environment (host: 0.0.0.0, port: 5000)
2. Fixed i18next client-side configuration to use i18next-http-backend instead of i18next-fs-backend
3. Configured HMR for secure websocket connections
4. Set up deployment configuration for Replit autoscale
5. Installed all npm dependencies
6. Implemented comprehensive mobile-first responsive design:
   - PageLayout uses `lg:max-w-7xl` constraint only on large screens
   - Hero text uses responsive sizing (text-4xl to lg:text-[80px])
   - Header/footer stack vertically on mobile with responsive padding
   - Accordion and sections adapt to mobile with proper spacing
   - What's Next cards use responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
   - Our Definition sections have anchor IDs for navigation
   - Forms center on mobile with full-width inputs
   - Added overflow-x-hidden to prevent horizontal scroll

## Known Issues
- Minor hydration warnings in development mode (app still functions correctly)
- Browserslist needs updating (non-critical)

## Technologies Stack
- React 18.2.0
- Remix 2.9.1
- Vite 5.1.0
- TypeScript 5.1.6
- Tailwind CSS 3.4.3
- i18next 23.11.4
- GSAP 2.1.1
- Radix UI components
- Lucide React icons
