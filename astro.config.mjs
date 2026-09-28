import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://synapsedatalabs.com', // Replace with your production domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});