import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50: '#E8ECF5',
          100: '#C5CFDF',
          200: '#9AAFC8',
          300: '#6F8FB0',
          400: '#4D7099',
          500: '#0D1B3E',
          600: '#0A1532',
          700: '#081026',
          800: '#06091A',
          900: '#03040D',
        },
        electricBlue: {
          DEFAULT: '#1E6FFF',
          50: '#E8F0FF',
          100: '#C5D8FF',
          200: '#9ABEFF',
          300: '#70A4FF',
          400: '#5594FF',
          500: '#1E6FFF',
          600: '#0057F5',
          700: '#0044C2',
          800: '#00318F',
          900: '#001E5C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#FAF4E5',
          100: '#F2E5BE',
          200: '#E8D297',
          300: '#DDBF70',
          400: '#D4B76A',
          500: '#C9A84C',
          600: '#B08A2E',
          700: '#8A6B23',
          800: '#654C18',
          900: '#3F2E0D',
        },
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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
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
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        'dm-sans': ['var(--font-dm-sans)', ...fontFamily.sans],
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
        display: ['var(--font-poppins)', ...fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'bounce-gentle': 'bounce-gentle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
