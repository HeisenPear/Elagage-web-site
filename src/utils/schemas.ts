/**
 * Données structurées Schema.org (JSON-LD).
 * Une seule entité entreprise (@id stable) référencée partout, un fondateur
 * identifié (Rudy Capello) : Google et les moteurs IA relient ainsi toutes les
 * pages à la même entreprise locale. Aucun prix. Pas d'aggregateRating : la note
 * Google (reprise d'un autre site) est interdite dans les données structurées.
 */
import { siteConfig, getYearsInBusiness } from '@/data/siteConfig';
import { servicePages } from '@/data/servicePages';

const SITE = (import.meta.env.SITE || 'https://www.elagageabattage37.com').replace(/\/$/, '');
const BUSINESS_ID = `${SITE}/#organization`;
const FOUNDER_ID = `${SITE}/#rudy-capello`;
const WEBSITE_ID = `${SITE}/#website`;
const LOGO = `${SITE}/images/logos/logo-512.png`;

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE}${path.startsWith('/') ? '' : '/'}${path}`);

// Identifiants Wikidata des communes (relie l'entité ville au Knowledge Graph).
// Vérifiés via l'API Wikidata le 22/09/2026 — ne pas en ajouter sans vérifier.
const CITY_WIKIDATA: Record<string, string> = {
  'Tours': 'Q288',
  'Amboise': 'Q205116',
  'Joué-lès-Tours': 'Q269364',
  'Saint-Cyr-sur-Loire': 'Q656494',
  'Montlouis-sur-Loire': 'Q638668',
  'Chambray-lès-Tours': 'Q641181',
  'Saint-Avertin': 'Q932130',
  'Ballan-Miré': 'Q632428',
  'Fondettes': 'Q527676',
  'La Riche': 'Q661814',
  'Luynes': 'Q693979',
};

function cityEntity(name: string) {
  const id = CITY_WIKIDATA[name];
  return id
    ? { '@type': 'City', name, sameAs: `https://www.wikidata.org/wiki/${id}` }
    : { '@type': 'City', name };
}

const address = {
  '@type': 'PostalAddress',
  streetAddress: siteConfig.business.address.street,
  addressLocality: siteConfig.business.address.city,
  postalCode: siteConfig.business.address.postalCode,
  addressRegion: siteConfig.business.address.region,
  addressCountry: siteConfig.business.address.countryCode,
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: siteConfig.business.coordinates.lat,
  longitude: siteConfig.business.coordinates.lng,
};

function sameAs() {
  const b = siteConfig.business;
  return [b.googleBusiness.url, b.social.facebook, b.social.instagram].filter(Boolean);
}

/** Entreprise locale — entité principale, présente sur toutes les pages. */
export function getBusinessSchema() {
  const b = siteConfig.business;
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: b.name,
    alternateName: `${b.name} – ${b.founder}`,
    description: b.description,
    url: `${SITE}/`,
    telephone: b.phone,
    email: b.email,
    image: [abs('/images/chantiers/elagueur-grimpeur-demontage-conifere.webp'), abs('/images/chantiers/dessouchage-rogneuse-jardin.webp')],
    logo: LOGO,
    address,
    geo,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${b.name} ${b.address.city}`)}`,
    ...(b.foundedYear ? { foundingDate: String(b.foundedYear) } : {}),
    founder: { '@id': FOUNDER_ID },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: b.hours.days, opens: b.hours.opens, closes: b.hours.closes },
    ],
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: geo,
        geoRadius: siteConfig.serviceArea.radius * 1000,
      },
      ...siteConfig.serviceArea.cities.map(cityEntity),
    ],
    knowsAbout: [
      'Élagage', "Abattage d'arbres", "Démontage d'arbres par rétention", 'Dessouchage', 'Rognage de souches',
      'Taille de haies', 'Taille douce', "Taille d'arbres fruitiers", 'Débroussaillage', 'Arboriculture ornementale',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Travaux d'élagage et d'entretien d'arbres",
      itemListElement: servicePages.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, url: abs(`/services/${s.slug}/`) },
      })),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: b.phone,
      contactType: 'customer service',
      availableLanguage: 'French',
      areaServed: 'FR',
    },
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
  };
}

/** Rudy Capello — fondateur, élagueur grimpeur (E-E-A-T). */
export function getFounderSchema() {
  const years = getYearsInBusiness();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: siteConfig.business.founder,
    jobTitle: 'Élagueur grimpeur, gérant',
    worksFor: { '@id': BUSINESS_ID },
    url: abs('/a-propos/'),
    ...(years ? { description: `Élagueur grimpeur en Indre-et-Loire, à la tête de ${siteConfig.business.name} depuis ${siteConfig.business.foundedYear}.` } : {}),
    knowsAbout: ['Élagage', "Abattage d'arbres", 'Grimpe arboricole', 'Dessouchage'],
    workLocation: { '@type': 'Place', address },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE}/`,
    name: siteConfig.business.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': BUSINESS_ID },
  };
}

/** Page service : le service est rattaché à l'entreprise et aux communes desservies. */
export function getServiceSchema(serviceName: string, serviceDescription: string, serviceSlug: string, cityNames?: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': abs(`/services/${serviceSlug}/#service`),
    serviceType: serviceName,
    name: serviceName,
    description: serviceDescription,
    url: abs(`/services/${serviceSlug}/`),
    provider: { '@id': BUSINESS_ID },
    areaServed: (cityNames ?? siteConfig.serviceArea.cities.slice(0, 12)).map(cityEntity),
  };
}

/** Page ville : l'entreprise, avec la commune mise en avant dans areaServed. */
export function getCityBusinessSchema(cityName: string, pageUrl: string) {
  const base = getBusinessSchema();
  return {
    ...base,
    areaServed: [cityEntity(cityName), ...(base.areaServed as object[])],
    subjectOf: { '@type': 'WebPage', url: abs(pageUrl) },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[] = siteConfig.faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function getBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.url),
    })),
  };
}

export function getArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: abs(opts.url),
    mainEntityOfPage: abs(opts.url),
    image: abs(opts.image || '/images/og-image.jpg'),
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified || opts.datePublished).toISOString(),
    inLanguage: 'fr-FR',
    author: { '@id': FOUNDER_ID, '@type': 'Person', name: siteConfig.business.founder, url: abs('/a-propos/') },
    publisher: { '@id': BUSINESS_ID, '@type': 'Organization', name: siteConfig.business.name, logo: { '@type': 'ImageObject', url: LOGO } },
  };
}

export function combineSchemas(...schemas: (object | null | undefined | false)[]) {
  return schemas.filter(Boolean) as object[];
}
