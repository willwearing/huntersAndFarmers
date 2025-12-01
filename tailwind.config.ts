import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A',
          900: '#000000',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262627',
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#6366F1',
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: ['4.5rem', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '600'
        }],
        h1: ['3rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600'
        }],
        h2: ['2.25rem', {
          lineHeight: '1.3',
          fontWeight: '600'
        }],
        h3: ['1.5rem', {
          lineHeight: '1.4',
          fontWeight: '600'
        }],
        'body-lg': ['1.125rem', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        body: ['1rem', {
          lineHeight: '1.6',
          fontWeight: '400'
        }],
        small: ['0.875rem', {
          lineHeight: '1.5',
          fontWeight: '400'
        }],
        xs: ['0.75rem', {
          lineHeight: '1.4',
          fontWeight: '400'
        }],
        stat: ['4rem', {
          lineHeight: '1',
          fontWeight: '700',
          letterSpacing: '-0.03em'
        }],
      },
      maxWidth: {
        container: '1280px',
        content: '1200px',
        narrow: '800px',
        wide: '1400px',
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
        'section-xl': '12rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config

