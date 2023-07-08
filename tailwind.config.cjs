const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'border': 'var(--c-divider)',
        'text-1': 'var(--c-text-1)',
        'text-2': 'var(--c-text-2)',
        'text-3': 'var(--c-text-3)',
        'brand': 'var(--c-brand)',
      },
      height: {
        nav: 'var(--nav-height)',
      },
      padding: {
        nav: 'var(--nav-height)',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
