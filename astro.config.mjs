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
      lastmod: new Date(),
      // Configuration personnalisée des priorités SEO
      serialize(item) {
        // Page accueil = priorité max (cible principale "élagage tours")
        if (item.url === 'https://www.elagageabattage37.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Page Tours = très haute priorité (zone principale)
        else if (item.url.includes('/zones/tours/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Articles blog = haute priorité (contenu SEO)
        else if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Page blog index
        else if (item.url.endsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Pages zones secondaires = priorité basse (contenu dupliqué)
        else if (item.url.includes('/zones/') && !item.url.includes('/zones/tours/')) {
          item.priority = 0.3;
          item.changefreq = 'monthly';
        }
        // Page index zones
        else if (item.url.endsWith('/zones/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        // Pages services
        else if (item.url.includes('/services/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Pages secondaires (contact, galerie, mentions légales)
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
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
