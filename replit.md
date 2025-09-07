# Overview

This is a full-stack web application built with React frontend and Express backend, designed as a Discord bot landing page for "Tsuna". The application uses a modern tech stack with TypeScript, Tailwind CSS for styling, and shadcn/ui components for the user interface. The backend is set up with Express.js and includes database integration using Drizzle ORM with PostgreSQL support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application using React 18 with TypeScript for type safety
- **Routing**: Client-side routing implemented with Wouter library for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management with custom query client configuration
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui component library
- **Component System**: Radix UI primitives wrapped with custom styling for consistent design system
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Database Layer**: Drizzle ORM for type-safe database operations with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with both memory-based and database implementations
- **Development Setup**: Hot reload with tsx for development, esbuild for production bundling
- **Middleware**: JSON parsing, URL encoding, and custom logging middleware for API requests

## Data Storage
- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with Zod schema validation for type safety
- **Schema**: User management with username/password authentication structure
- **Migrations**: Database migrations managed through Drizzle Kit

## Authentication & Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with ID, username, and password fields
- **Storage Interface**: Abstracted user CRUD operations for flexible implementation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Connection Pooling**: Built-in connection management for serverless environments

## UI Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives for React components
- **shadcn/ui**: Pre-built component library with Tailwind CSS integration
- **Lucide Icons**: Icon library for consistent iconography throughout the application

## Development Tools
- **Drizzle Kit**: Database migration and schema management toolkit
- **Vite Plugins**: Runtime error overlay and cartographer for enhanced development experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

## Utility Libraries
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing solution for React
- **date-fns**: Date manipulation and formatting utilities
- **clsx & tailwind-merge**: Conditional CSS class name utilities