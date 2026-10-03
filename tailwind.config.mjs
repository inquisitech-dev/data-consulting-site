/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          void: '#020617',
          surface: '#0B132B',
          primary: '#0284C7',
          cyan: '#06B6D4',
          border: 'rgba(2, 132, 199, 0.2)',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0284C7',
          600: '#0369A1',
          900: '#020617',
          950: '#f8fafc',
          accent: '#06B6D4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 0)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};