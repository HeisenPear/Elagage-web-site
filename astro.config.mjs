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
      // Configuration SEO : concentration du PageRank sur homepage
      serialize(item) {
        // Page accueil = priorité max (cible "élagage tours")
        if (item.url === 'https://www.elagageabattage37.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // SEO: Services principaux = priorité haute (trafic commercial)
        else if (item.url.includes('/services/elagage-arbres') || item.url.includes('/services/abattage-arbres')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        else if (item.url.includes('/services/taille-haies') || item.url.includes('/services/dessouchage-arbres')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        else if (item.url.includes('/services/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Pages zones = SEO local important
        else if (item.url.includes('/zones/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Articles blog
        else if (item.url.includes('/blog/') && !item.url.endsWith('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Page blog index
        else if (item.url.endsWith('/blog/')) {
          item.priority = 0.5;
          item.changefreq = 'weekly';
        }
        // Contact
        else if (item.url.includes('/contact')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Pages secondaires
        else {
          item.priority = 0.4;
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
