# Hunters and Farmers

A sophisticated, minimalist landing page built with Next.js, Tailwind CSS, and TypeScript. Inspired by the clean design aesthetics of D.E. Shaw, Millennium Management, and Stripe.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Package Manager**: Bun
- **Testing**: Vitest + React Testing Library
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **TypeScript**: Yes

## Getting Started

### Prerequisites

- Bun installed ([Install Bun](https://bun.sh))

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The app will be available at http://localhost:3123

### Testing

```bash
bun run test
```

### Build

```bash
bun run build
```

## Project Structure

```
huntersAndFarmers/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   └── ui/                # shadcn/ui components
├── lib/                    # Utilities and constants
├── styles/                 # Global styles
├── tests/                  # Test files
└── docs/                   # Documentation and phase plans
```

## Design System

The project uses a carefully crafted design system with:

- **Colors**: Neutral grays with accent colors
- **Typography**: Inter font family with custom sizes
- **Spacing**: Consistent spacing scale
- **Components**: Minimal, elegant UI components

See `/test-design` route to view the complete design system.

## Development Phases

This project follows a phased development approach:

1. **Phase 1**: Project Setup
2. **Phase 2**: Design System Foundation
3. **Phase 3**: Core Layout
4. **Phase 4**: Home Page
5. **Phase 5**: Content Pages
6. **Phase 6**: Contact Page
7. **Phase 7**: Polish & Launch

See `docs/` directory for detailed phase documentation.

## License

Private project - All rights reserved

