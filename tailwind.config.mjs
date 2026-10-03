/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff5f0',
          100: '#dce9df',
          200: '#bfd4c5',
          500: '#3f7058',
          600: '#315943',
          900: '#26332b',
          950: '#fbfaf7',
          accent: '#bd704d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};