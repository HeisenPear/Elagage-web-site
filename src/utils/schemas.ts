/**
 * Générateurs de schemas Schema.org JSON-LD pour SEO optimisé
 */
import { siteConfig } from '@/data/siteConfig';

/**
 * Schema LocalBusiness - Page d'accueil principale
 */
export function getLocalBusinessSchema() {
  const gr = siteConfig.business.googleReviews;
  // N'injecte la note agrégée QUE si de vrais avis Google sont renseignés.
  const realRating =
    gr?.enabled && gr.ratingValue && gr.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: gr.ratingValue.toString(),
            bestRating: '5',
            worstRating: '1',
            reviewCount: gr.reviewCount.toString(),
            ratingCount: gr.reviewCount.toString(),
          },
        }
      : {};

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${import.meta.env.SITE}/#organization`,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: import.meta.env.SITE,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    taxID: siteConfig.business.siret,
    priceRange: '€€',
    image: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
    logo: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressRegion: siteConfig.business.address.region,
      addressCountry: siteConfig.business.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.coordinates.lat.toString(),
      longitude: siteConfig.business.coordinates.lng.toString(),
    },
    // SEO local : cercle d'intervention + liste explicite des communes desservies
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.business.coordinates.lat.toString(),
          longitude: siteConfig.business.coordinates.lng.toString(),
        },
        geoRadius: `${siteConfig.serviceArea.radius * 1000}`,
      },
      ...siteConfig.serviceArea.cities.map((cityName) => ({
        '@type': 'City',
        name: cityName,
      })),
    ],
    // Carte Google + point de contact (renforce l'intention d'appel)
    hasMap: `https://www.google.com/maps/search/?api=1&query=${siteConfig.business.coordinates.lat},${siteConfig.business.coordinates.lng}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.business.phone,
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
    // Domaines d'expertise (signal sémantique pour Google)
    knowsAbout: [
      'Élagage',
      "Abattage d'arbres",
      'Dessouchage',
      'Taille de haies',
      'Soin aux arbres',
      'Arboriculture',
      "Démontage d'arbre",
      'Taille raisonnée',
      'Entretien des espaces verts',
    ],
    // SEO: Horaires réels (pas 00:00-23:59 qui invalide le schema Google)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '20:00',
      },
    ],
    ...realRating,
    // SEO: Catalogue de services pour les rich results Google
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Services d'élagage en Indre-et-Loire",
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Élagage d'arbres", url: `${import.meta.env.SITE}/services/elagage-arbres` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Abattage d'arbres", url: `${import.meta.env.SITE}/services/abattage-arbres` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dessouchage', url: `${import.meta.env.SITE}/services/dessouchage-arbres` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taille de haies', url: `${import.meta.env.SITE}/services/taille-haies` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien espaces verts', url: `${import.meta.env.SITE}/services/entretien-espaces-verts` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Élagage arbres fruitiers', url: `${import.meta.env.SITE}/services/elagage-fruitiers` } },
      ],
    },
    sameAs: Object.values(siteConfig.business.social).filter(Boolean),
  };
}

/**
 * Schema LocalBusiness spécifique à une ville (pages zones)
 * SEO: serviceArea pointe sur la ville précise pour le SEO local
 */
// Identifiants Wikidata des communes (pour lier l'entité ville à Google KG).
const CITY_WIKIDATA: Record<string, string> = {
  'Tours': 'Q47317',
  'Amboise': 'Q182878',
  'Joué-lès-Tours': 'Q242921',
  'Saint-Cyr-sur-Loire': 'Q749973',
  'Montlouis-sur-Loire': 'Q691846',
  'Chambray-lès-Tours': 'Q691634',
  'Saint-Avertin': 'Q629864',
  'Ballan-Miré': 'Q649432',
  'Fondettes': 'Q629797',
  'La Riche': 'Q629849',
  'Saint-Pierre-des-Corps': 'Q629860',
};

export function getCityLocalBusinessSchema(cityName: string, cityPostalCode: string) {
  const wikidataId = CITY_WIKIDATA[cityName];
  const cityEntity: Record<string, unknown> = { '@type': 'City', name: cityName };
  if (wikidataId) {
    cityEntity['@id'] = `https://www.wikidata.org/wiki/${wikidataId}`;
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${import.meta.env.SITE}/#organization`,
    name: siteConfig.business.name,
    description: `${siteConfig.business.name} — Élagueur professionnel à ${cityName} (${cityPostalCode}). Élagage, abattage, dessouchage. Certifié, assuré RC Pro 8M€.`,
    url: import.meta.env.SITE,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: '€€',
    image: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
    logo: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressRegion: siteConfig.business.address.region,
      addressCountry: siteConfig.business.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.coordinates.lat.toString(),
      longitude: siteConfig.business.coordinates.lng.toString(),
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.business.coordinates.lat.toString(),
          longitude: siteConfig.business.coordinates.lng.toString(),
        },
        geoRadius: `${siteConfig.serviceArea.radius * 1000}`,
      },
      cityEntity,
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '20:00',
      },
    ],
    // Note agrégée injectée uniquement si de vrais avis Google sont renseignés.
    ...(siteConfig.business.googleReviews?.enabled &&
    siteConfig.business.googleReviews.ratingValue &&
    siteConfig.business.googleReviews.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: siteConfig.business.googleReviews.ratingValue.toString(),
            bestRating: '5',
            worstRating: '1',
            reviewCount: siteConfig.business.googleReviews.reviewCount.toString(),
            ratingCount: siteConfig.business.googleReviews.reviewCount.toString(),
          },
        }
      : {}),
  };
}

/**
 * Schema Service - Pages services individuelles
 */
export function getServiceSchema(serviceName: string, serviceDescription: string, serviceSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@id': `${import.meta.env.SITE}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.serviceArea.mainCity,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '€€',
    },
    url: `${import.meta.env.SITE}/services/${serviceSlug}`,
  };
}

/**
 * Schema FAQPage - Pour pages avec FAQ
 */
export function getFAQSchema(faqs?: typeof siteConfig.faq) {
  const faqData = faqs || siteConfig.faq;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema BreadcrumbList - Pour toutes les pages non-homepage
 */
export function getBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Schema Review - Pour les avis clients
 */
export function getReviewSchema(review: typeof siteConfig.testimonials[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${import.meta.env.SITE}/#organization`,
    },
    author: {
      '@type': 'Person',
      name: review.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: review.city,
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewBody: review.text,
    datePublished: review.date,
  };
}

/**
 * Schema Article - Pour le blog (si ajouté ultérieurement)
 */
export function getArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified: string,
  imageUrl: string,
  authorName: string = siteConfig.business.name
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
      },
    },
  };
}

/**
 * Schema Organization - Définit clairement l'organisation pour Google
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${import.meta.env.SITE}/#organization`,
    name: siteConfig.business.name,
    alternateName: siteConfig.business.name,
    legalName: siteConfig.business.name,
    url: import.meta.env.SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
      width: 400,
      height: 400,
    },
    description: siteConfig.business.description,
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressRegion: siteConfig.business.address.region,
      addressCountry: siteConfig.business.address.countryCode,
    },
    sameAs: Object.values(siteConfig.business.social).filter(Boolean),
  };
}

/**
 * Schema WebSite - Search box (si recherche ajoutée)
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${import.meta.env.SITE}/#website`,
    url: import.meta.env.SITE,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${import.meta.env.SITE}/#organization`,
      name: siteConfig.business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${import.meta.env.SITE}/images/logos/Logo%20abatteur.webp`,
      },
    },
    inLanguage: 'fr-FR',
  };
}

/**
 * Combine plusieurs schemas
 */
export function combineSchemas(...schemas: object[]) {
  return schemas.filter(Boolean);
}
