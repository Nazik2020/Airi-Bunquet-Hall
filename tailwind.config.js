/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#fbf9f5',
          dim: '#dbdad6',
          bright: '#fbf9f5',
          lowest: '#ffffff',
          low: '#f5f3ef',
          container: '#f0eeea',
          high: '#eae8e4',
          highest: '#e4e2de',
          card: '#ffffff',
          input: '#fbf9f5',
        },
        'neutral-warm': '#fbf9f5',
        obsidian: {
          DEFAULT: '#1c1917',
          light: '#292524',
          deep: '#12100e',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f8f4ec',
          200: '#f0e6d2',
          300: '#e5d1a8',
          400: '#d7ba7c',
          500: '#c5a059', // Primary Gold
          600: '#b08b45',
          700: '#997a2e', // Deep bronze / accessible gold
          800: '#775a19',
          900: '#5a4302',
        },
        gold: {
          spun: '#e5c378',
          glow: 'rgba(229, 195, 120, 0.3)',
          border: 'rgba(197, 160, 89, 0.28)',
          'border-strong': 'rgba(197, 160, 89, 0.55)',
        },
        text: {
          primary: '#1b1c1a',
          secondary: '#4d4540',
          muted: '#78716c',
          bronze: '#997a2e',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-rest': '0 2px 8px -2px rgba(28, 25, 23, 0.05), 0 1px 3px -1px rgba(28, 25, 23, 0.03)',
        'card-hover': '0 16px 36px -8px rgba(28, 25, 23, 0.08), 0 4px 12px -2px rgba(197, 160, 89, 0.15)',
        'gold-subtle': '0 4px 20px -2px rgba(197, 160, 89, 0.08), 0 2px 6px -1px rgba(28, 25, 23, 0.04)',
        'gold-card': '0 12px 32px -8px rgba(197, 160, 89, 0.12), 0 4px 12px -2px rgba(28, 25, 23, 0.03)',
        'gold-elevated': '0 20px 48px -12px rgba(28, 25, 23, 0.08), 0 0 0 1px rgba(197, 160, 89, 0.25)',
        'gold-glow': '0 0 30px rgba(229, 195, 120, 0.25)',
        'modal': '0 24px 64px -12px rgba(28, 25, 23, 0.25), 0 8px 24px -4px rgba(197, 160, 89, 0.12)',
      },
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },
      maxWidth: {
        '8xl': '1440px',
      }
    },
  },
  plugins: [],
}
