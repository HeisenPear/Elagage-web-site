/**
 * Générateurs de schemas Schema.org JSON-LD pour SEO optimisé
 */
import { siteConfig } from '@/data/siteConfig';

/**
 * Schema LocalBusiness - Page d'accueil principale
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${import.meta.env.SITE}/#organization`,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: import.meta.env.SITE,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: '€€',
    image: `${import.meta.env.SITE}/images/logo.jpg`,
    logo: `${import.meta.env.SITE}/images/logo.jpg`,
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
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.business.coordinates.lat.toString(),
        longitude: siteConfig.business.coordinates.lng.toString(),
      },
      geoRadius: `${siteConfig.serviceArea.radius * 1000}`, // Convertir en mètres
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: siteConfig.testimonials.length.toString(),
    },
    sameAs: Object.values(siteConfig.business.social).filter(Boolean),
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
        url: `${import.meta.env.SITE}/images/logo.jpg`,
      },
    },
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
      '@id': `${import.meta.env.SITE}/#organization`,
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
