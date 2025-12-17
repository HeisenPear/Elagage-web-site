import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.elagageabattage37.com', // Nom de domaine principal
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // On gère le CSS de base nous-mêmes
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false, // Sharp gère déjà l'optimisation
      JavaScript: true,
      SVG: true,
    }),
  ],
  image: {
    domains: [],
    remotePatterns: [],
  },
  vite: {
    ssr: {
      noExternal: ['swiper', 'three'],
    },
  },
});
