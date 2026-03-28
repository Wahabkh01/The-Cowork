# Replit.md

## Overview

This is a premium coworking space website for "The Cowork" located in Lahore, Pakistan. It's a full-stack web application featuring a React frontend with a luxury dark theme aesthetic and an Express backend with PostgreSQL database. The site showcases workspace offerings (hot desks, dedicated desks, private offices), amenities, community features, and handles inquiry submissions from potential members.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled using Vite
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom luxury dark theme (gold accent on black background)
- **Animations**: Framer Motion for page transitions and scroll-triggered animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js (v5) running on Node.js
- **API Design**: RESTful API with typed route definitions shared between client and server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod schemas generated from Drizzle table definitions using drizzle-zod

### Shared Code Structure
- **`shared/schema.ts`**: Database table definitions and Zod insert schemas
- **`shared/routes.ts`**: API route definitions with input/output type specifications
- This pattern enables type safety across the full stack

### Build System
- Development: Vite dev server with HMR, proxying API requests to Express
- Production: Vite builds static assets to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Database migrations: Drizzle Kit with `db:push` command

### Key Design Patterns
- **Storage abstraction**: `IStorage` interface in `server/storage.ts` allows swapping database implementations
- **Centralized API definitions**: Route paths, methods, and schemas defined once in `shared/routes.ts`
- **Component composition**: Section wrapper component handles consistent spacing and scroll animations

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### Frontend Libraries
- **Radix UI**: Accessible, unstyled component primitives (dialogs, dropdowns, forms, etc.)
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **Drizzle Kit**: Database migration tooling
- **TypeScript**: Full-stack type checking

### External Services
- **Unsplash**: Stock images referenced directly via URLs (no API integration)
- **Google Fonts**: Playfair Display and DM Sans font families