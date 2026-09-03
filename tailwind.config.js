/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        'cream-deep': 'rgb(var(--color-cream-deep) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-deep': 'rgb(var(--color-ink-deep) / <alpha-value>)',
        brown: 'rgb(var(--color-brown) / <alpha-value>)',
        'brown-deep': 'rgb(var(--color-brown-deep) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        'gold-bright': 'rgb(var(--color-gold-bright) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Fraunces', 'serif'],
        body: ['var(--font-body)', 'Work Sans', 'sans-serif'],
        label: ['var(--font-label)', 'Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}