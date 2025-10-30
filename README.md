# Nx Monorepo - Multi-Framework Development Platform

A production-ready Nx monorepo featuring a shared component library and multiple frontend frameworks, demonstrating modern web development patterns and best practices.

## 🏗️ What's Included

This monorepo contains:

- **Shared Component Library** - React components with Storybook, built with shadcn/ui and Tailwind CSS
- **Astro Site** - Ultra-fast static site with SSR support
- **Next.js App** - Full-featured React framework with App Router
- **Vite App** - Lightning-fast React SPA with TanStack Router
- **Fastify API** - High-performance Node.js backend

All frontend apps consume the shared component library using proper npm workspace dependencies.

## 🚀 Tech Stack

### Core Technologies
- **Nx** - Smart monorepo build system with caching
- **TypeScript** - Type-safe development
- **React 19** - Latest React features
- **Tailwind CSS v3** - Utility-first styling
- **shadcn/ui** - High-quality component system

### Frameworks & Tools
- **Storybook 10** - Component development and documentation
- **Astro 5** - Content-focused sites with islands architecture
- **Next.js 15** - Production React framework
- **Vite 7** - Next-generation frontend tooling
- **TanStack Router** - Type-safe routing for React
- **Fastify** - Fast and low overhead web framework

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/popcorn245/repo.git
cd repo

# Install dependencies (use legacy-peer-deps due to Storybook v10)
npm install --legacy-peer-deps
```

## 🎯 Quick Start

```bash
# Start all development servers
npm run dev:all

# Or start individual apps
npm run dev:components   # Storybook at http://localhost:46611
npm run dev:astro        # Astro at http://localhost:4321
npm run dev:nextjs       # Next.js at http://localhost:3000
npm run dev:vite         # Vite at http://localhost:4200
npm run dev:snout        # API server
```

## 📚 Available Commands

### Development Commands

Start development servers for local development:

```bash
npm run dev:all          # Start all apps in parallel
npm run dev:components   # Component library (Storybook)
npm run dev:astro        # Astro static site
npm run dev:nextjs       # Next.js application
npm run dev:vite         # Vite React app
npm run dev:snout        # Fastify API server
```

### Build Commands

Build apps for production:

```bash
npm run build:all        # Build all projects
npm run build:components # Build component library
npm run build:astro      # Build Astro site
npm run build:nextjs     # Build Next.js app
npm run build:vite       # Build Vite app
npm run build:storybook  # Build Storybook as static site
npm run build:snout      # Build API server
```

### Preview Commands

Preview production builds locally:

```bash
npm run preview:astro    # Preview Astro build
npm run preview:nextjs   # Preview Next.js build
npm run preview:vite     # Preview Vite build (port 4300)
npm run preview:snout    # Preview API build
```

### Code Quality Commands

Maintain code quality and consistency:

```bash
npm run lint:all         # Lint all projects
npm run lint:fix         # Auto-fix linting issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking
npm run test:all         # Run all tests
npm run test:watch       # Run tests in watch mode
```

### Nx Smart Commands

Leverage Nx's intelligent build system:

```bash
npm run affected:build   # Build only affected projects
npm run affected:test    # Test only affected projects
npm run affected:lint    # Lint only affected projects
npm run graph            # View dependency graph
npm run clean            # Clean build artifacts
npm run reset            # Reset Nx cache
```

## 📁 Project Structure

```
org/
├── apps/
│   ├── components/          # Shared React component library
│   │   ├── src/
│   │   │   ├── components/ui/   # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   └── card.tsx
│   │   │   ├── styles.css       # Global styles
│   │   │   └── index.ts         # Public exports
│   │   ├── .storybook/          # Storybook configuration
│   │   └── package.json         # "@org/components"
│   │
│   ├── astro-site/          # Astro static site
│   │   ├── src/
│   │   │   └── pages/
│   │   │       ├── index.astro
│   │   │       └── contact.astro
│   │   └── package.json     # depends on "@org/components"
│   │
│   ├── nextjs-site/         # Next.js application
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── page.tsx
│   │   │       └── contact/
│   │   │           └── page.tsx
│   │   └── package.json     # depends on "@org/components"
│   │
│   ├── vite-app/            # Vite + React app
│   │   ├── src/
│   │   │   ├── routes/      # TanStack Router routes
│   │   │   │   ├── __root.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── contact.tsx
│   │   │   └── main.tsx
│   │   └── package.json     # depends on "@org/components"
│   │
│   └── snout/               # Fastify API
│       ├── src/
│       │   ├── app/
│       │   └── main.ts
│       └── package.json
│
├── package.json             # Root package with all scripts
├── nx.json                  # Nx configuration
└── tsconfig.base.json       # Shared TypeScript config
```

## 🔧 Component Library

The shared component library (`@org/components`) provides:

- **shadcn/ui Components** - Button, Card, and more
- **Tailwind CSS** - Utility-first styling
- **Storybook** - Interactive component documentation
- **TypeScript** - Full type safety

### Using Components

All apps import components the same way:

```typescript
import { Button } from '@org/components';

function MyComponent() {
  return <Button variant="outline">Click me</Button>;
}
```

### Available Components

- **Button** - Multiple variants (default, secondary, destructive, outline, ghost, link)
- **Card** - Container component with header, content, and footer
- More components coming soon...

## 🎨 Styling

All apps use Tailwind CSS v3 with a shared theme from shadcn/ui:

- **CSS Variables** - Consistent design tokens
- **Dark Mode Ready** - Theme support built-in
- **Responsive** - Mobile-first approach
- **Customizable** - Extend the theme as needed

## 🚢 Deployment

### Building for Production

```bash
# Build all apps
npm run build:all

# Or build individually
npm run build:astro      # Output: apps/astro-site/dist/
npm run build:nextjs     # Output: apps/nextjs-site/.next/
npm run build:vite       # Output: apps/vite-app/dist/
npm run build:storybook  # Output: apps/components/storybook-static/
```

### Preview Production Builds

Test production builds locally before deploying:

```bash
npm run preview:astro    # Astro preview server
npm run preview:nextjs   # Next.js preview server  
npm run preview:vite     # Vite preview server
```

## 🧪 Testing

```bash
# Run all tests
npm run test:all

# Run tests in watch mode
npm run test:watch

# Run tests for affected projects only
npm run affected:test
```

## 📊 Nx Features

This monorepo leverages Nx's powerful features:

- **Smart Caching** - Build once, cache everywhere
- **Affected Commands** - Only build/test what changed
- **Dependency Graph** - Visualize project relationships
- **Distributed Execution** - Parallelize tasks across machines
- **Code Generation** - Scaffold new apps and libraries

### View Dependency Graph

```bash
npm run graph
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint:fix` and `npm run format`
4. Run `npm run affected:test` to test changes
5. Submit a pull request

## 📝 Common Tasks

### Adding a New Component

```bash
# Create component in apps/components/src/components/ui/
# Export from apps/components/src/index.ts
# Create Storybook story
# Use in any app with: import { YourComponent } from '@org/components'
```

### Adding a New App

```bash
# Use Nx generator
npx nx g @nx/react:app my-app

# Add @org/components dependency
cd apps/my-app
# Add to package.json: "@org/components": "*"

# Install dependencies
npm install --legacy-peer-deps
```

## 🔍 Troubleshooting

### Installation Issues

If you encounter peer dependency conflicts:

```bash
npm install --legacy-peer-deps
```

### Build Cache Issues

If builds are acting strange, reset the cache:

```bash
npm run reset
npm run clean
```

### TypeScript Errors

Sync TypeScript project references:

```bash
npm run build:all
```

## 📚 Learn More

- [Nx Documentation](https://nx.dev)
- [React Documentation](https://react.dev)
- [Astro Documentation](https://docs.astro.build)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [TanStack Router](https://tanstack.com/router)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 License

MIT

---

**Built with ❤️ using Nx, React, and modern web technologies**
