# Phase 1: Project Setup
## Initialize Repository and Configure Tools

**Goal**: Set up a working Next.js project with all necessary tools and dependencies configured.

**Prerequisites**: Bun installed on your system.

---

## Step 1: Initialize Next.js Project

```bash
bunx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

**Options explained:**
- `--typescript` - Enable TypeScript
- `--tailwind` - Include Tailwind CSS
- `--app` - Use App Router (not Pages Router)
- `--no-src-dir` - Keep files in root (cleaner structure)

**When prompted:**
- ESLint: Yes
- `src/` directory: No
- Import alias: Use default (`@/*`)

---

## Step 2: Install Core Dependencies

```bash
bun add framer-motion react-hook-form zod @hookform/resolvers
```

**Dependencies:**
- `framer-motion` - Animations (optional but recommended)
- `react-hook-form` - Form handling
- `zod` - Schema validation
- `@hookform/resolvers` - Zod resolver for React Hook Form

---

## Step 3: Install Development Dependencies

```bash
bun add -d vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event @vitejs/plugin-react jsdom
```

**Dependencies:**
- `vitest` - Testing framework
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - DOM matchers
- `@testing-library/user-event` - User interaction simulation
- `@vitejs/plugin-react` - React plugin for Vitest
- `jsdom` - DOM environment for tests

---

## Step 4: Set Up Vitest

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

Create `tests/setup.ts`:

```typescript
import '@testing-library/jest-dom'
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## Step 5: Set Up shadcn/ui

```bash
bunx shadcn-ui@latest init
```

**Configuration options:**
- Style: Default
- Base color: Neutral
- CSS variables: Yes
- Components directory: `components/ui`
- Utils directory: `lib/utils`
- Use alias: Yes (`@/components`)

After initialization, install initial components:

```bash
bunx shadcn-ui@latest add button card input form label textarea
```

**Components to install:**
- `button` - Button component
- `card` - Card container
- `input` - Text input
- `form` - Form wrapper
- `label` - Form label
- `textarea` - Textarea input

---

## Step 6: Create Project Structure

Create the following directories:

```bash
mkdir -p components/layout components/sections components/forms
mkdir -p lib public/images tests/components
```

**Directory structure:**
- `components/layout/` - Header, Footer
- `components/sections/` - Page sections (Hero, Stats, etc.)
- `components/forms/` - Form components
- `lib/` - Utility functions and constants
- `public/images/` - Image assets
- `tests/components/` - Component tests

---

## Step 7: Create Utility Files

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Create `lib/constants.ts`:

```typescript
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description',
  url: 'https://yoursite.com',
}
```

---

## Step 8: Configure TypeScript Paths

Update `tsconfig.json` to include path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## Step 9: Verify Setup

1. **Start dev server:**
   ```bash
   bun run dev
   ```
   Should start on http://localhost:3000

2. **Run tests:**
   ```bash
   bun run test
   ```
   Should run without errors

3. **Check linting:**
   ```bash
   bun run lint
   ```
   Should pass (or show only warnings)

---

## Checklist

- [ ] Next.js project initialized with TypeScript and Tailwind
- [ ] Core dependencies installed (framer-motion, react-hook-form, zod)
- [ ] Dev dependencies installed (vitest, testing library)
- [ ] Vitest configured and working
- [ ] shadcn/ui initialized
- [ ] Initial shadcn/ui components installed (button, card, input, form, label, textarea)
- [ ] Project structure created (components, lib, public, tests directories)
- [ ] Utility files created (lib/utils.ts, lib/constants.ts)
- [ ] TypeScript paths configured
- [ ] Dev server starts successfully
- [ ] Tests run successfully
- [ ] Linting passes

---

## Step 10: Commit Changes

Once Phase 1 is complete, commit your changes:

```bash
git add .
git commit -m "Phase 1: Project setup complete - Next.js, Tailwind, Vitest, shadcn/ui configured"
git push
```

---

## Next Steps

Once Phase 1 is complete, proceed to **Phase 2: Design System Foundation** (`phase-2-design-system.md`) to set up the complete Tailwind configuration with colors, typography, and spacing.

---

## Troubleshooting

**Issue**: Bun command not found
- **Solution**: Install Bun from https://bun.sh

**Issue**: shadcn/ui init fails
- **Solution**: Make sure you're in the project root directory

**Issue**: Vitest tests fail
- **Solution**: Check that `tests/setup.ts` exists and imports `@testing-library/jest-dom`

**Issue**: TypeScript errors with path aliases
- **Solution**: Restart your IDE/editor after updating `tsconfig.json`

