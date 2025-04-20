import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://astro-site-example.com',
  integrations: [
    react(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
});