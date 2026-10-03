/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          void: '#020617',       // Midnight slate
          surface: '#0B132B',    // Slightly elevated section background
          primary: '#0284C7',    // Sky blue
          cyan: '#06B6D4',       // Cyan accent
          border: 'rgba(2, 132, 199, 0.2)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'], // For impactful headers
        sans: ['"Inter"', 'sans-serif'],            // For readable body copy
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 0)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};