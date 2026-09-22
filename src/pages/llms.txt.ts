/**
 * /llms.txt — résumé factuel du site pour les moteurs de réponse IA
 * (ChatGPT, Perplexity, Claude, Gemini…). Généré depuis les mêmes données que le site.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/data/siteConfig';
import { servicePages } from '@/data/servicePages';
import { cityPages } from '@/data/cityPages';

export const GET: APIRoute = async ({ site }) => {
  const b = siteConfig.business;
  const u = (p: string) => new URL(p, site).href;
  const posts = await getCollection('blog');

  const lines = [
    `# ${b.name}`,
    '',
    `> ${b.description}`,
    '',
    '## Fiche entreprise',
    `- Nom commercial : ${b.name}`,
    `- Gérant : ${b.founder}, élagueur grimpeur (${b.legal.form.toLowerCase()})`,
    ...(b.foundedYear ? [`- Création : ${b.foundedYear}`] : []),
    `- Adresse : ${b.address.street}, ${b.address.postalCode} ${b.address.city}, ${b.address.region}`,
    `- Téléphone : ${b.phoneDisplay} (ligne directe du gérant)`,
    `- E-mail : ${b.email}`,
    `- Disponibilité : ${b.hours.display}`,
    `- Zone : Tours, métropole de Tours et Indre-et-Loire, rayon d'environ ${siteConfig.serviceArea.radius} km autour de ${b.address.city}`,
    `- Devis : gratuit, écrit, après visite ou sur photo envoyée par SMS. Aucun tarif n'est publié : chaque prix est établi sur devis.`,
    `- Assurance : ${b.insurance}`,
    '- Méthode : travail en grimpe (cordes, rétention des branches), pas d\'étêtage, chantier nettoyé.',
    '',
    '## Prestations',
    ...servicePages.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}) : ${s.lead}`),
    `- [Urgence arbre après tempête](${u('/elagueur-urgence/')}) : mise en sécurité d'arbres tombés ou dangereux.`,
    '',
    '## Communes desservies (pages dédiées)',
    ...cityPages.map((c) => `- [Élagueur ${c.name}](${u(`/zones/${c.slug}/`)})`),
    `- Également : ${siteConfig.serviceArea.cities.filter((n) => !cityPages.some((c) => c.name === n)).join(', ')}.`,
    '',
    '## Questions fréquentes',
    ...siteConfig.faq.flatMap((f) => [`### ${f.question}`, f.answer, '']),
    '## Conseils',
    ...posts.map((p) => `- [${p.data.title}](${u(`/blog/${p.slug}/`)}) : ${p.data.description}`),
    '',
    '## Pages clés',
    `- [Qui sommes-nous](${u('/a-propos/')})`,
    `- [Contact et devis gratuit](${u('/contact/')})`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
