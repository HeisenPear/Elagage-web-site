/**
 * robots.txt généré au build : l'URL du sitemap suit l'adresse du site
 * (SITE_URL), quel que soit le domaine utilisé.
 */
import type { APIRoute } from 'astro';

const RULES = `# Élagage Abattage 37
# Tout le site est ouvert aux moteurs de recherche et aux moteurs de réponse IA.

User-agent: *
Allow: /

# Moteurs IA (réponses et citations) : explicitement autorisés
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).href;
  return new Response(`${RULES}\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
