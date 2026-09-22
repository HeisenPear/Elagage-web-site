/**
 * Configuration centralisée du site — SOURCE UNIQUE des informations entreprise.
 *
 * Règles :
 * - Aucun prix affiché sur le site (tout passe par un devis gratuit).
 * - Aucune donnée inventée : pas de faux avis, pas de note Google, pas de
 *   statistiques non vérifiables. Une affirmation fausse repérée par un visiteur
 *   (ex. « 127 avis » alors que la fiche Google en compte 0) coûte l'appel.
 * - Toute affirmation (assurance, certification, horaires) doit pouvoir être
 *   prouvée sur demande (attestation, diplôme).
 */

export interface Testimonial {
  name: string; // prénom + initiale, avec accord du client
  city: string;
  text: string;
  date: string; // AAAA-MM
  source: 'Google' | 'Direct';
}

export const siteConfig = {
  business: {
    name: 'Élagage Abattage 37',
    // Orthographe du registre officiel (INSEE) : Capello, un seul « p ».
    founder: 'Rudy Capello',
    // Année de création au registre (SIREN 510 816 473, créé le 03/03/2009).
    foundedYear: 2009 as number | null,
    tagline: 'Élagueur à Tours et en Indre-et-Loire',
    description:
      "Élagage Abattage 37 est l'entreprise d'élagage de Rudy Capello, élagueur grimpeur basé à Joué-lès-Tours (37). Élagage, abattage et démontage d'arbres, dessouchage, taille de haies et entretien d'espaces verts à Tours et dans un rayon de 50 km. Devis gratuit sur place.",

    phone: '+33631464350',
    phoneDisplay: '06 31 46 43 50',
    email: 'elagueur.abatteur37@gmail.com',

    address: {
      street: '2 rue du Manoir',
      city: 'Joué-lès-Tours',
      postalCode: '37300',
      region: 'Indre-et-Loire',
      country: 'France',
      countryCode: 'FR',
    },
    // Géocodage Base Adresse Nationale de l'adresse ci-dessus.
    coordinates: { lat: 47.359495, lng: 0.690233 },

    // Horaires (une seule source : affichage + données structurées).
    hours: {
      display: '24h/24, 7j/7',
      short: '24h/24',
      opens: '00:00',
      closes: '23:59',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },

    siret: '510 816 473 00019',
    siren: '510816473',

    // Garanties affichées (à justifier sur demande).
    insurance: 'Assurance responsabilité civile professionnelle Allianz',
    insuranceShort: 'Assuré RC Pro',
    certification: 'Élagueur grimpeur formé (CS Arboriste-élagueur)',
    paymentInFewTimes: true,

    // Identité légale (registre officiel) — affichée dans les mentions légales.
    // ⚠️ Le siège déclaré (Veigné) diffère de l'adresse publique ci-dessus :
    // à harmoniser (mise à jour du registre OU de l'adresse du site et de la fiche Google).
    legal: {
      name: 'Rudy Capello',
      form: 'Entrepreneur individuel',
      address: '90 rue de la Bichottière, 37250 Veigné',
      vat: 'FR72510816473',
      // Médiateur de la consommation (obligatoire, art. L612-1 Code de la consommation).
      mediator: null as null | { name: string; url: string },
    },

    // Pas de crédit d'impôt annoncé : l'élagage en hauteur (cordes, harnais),
    // l'abattage et le dessouchage sont exclus des « petits travaux de jardinage »
    // (BOFiP BOI-IR-RICI-150-10 §50, rép. min. Sénat 08/12/2022), et il faudrait
    // de toute façon une déclaration SAP.

    social: {
      facebook: '',
      instagram: '',
    },

    // Fiche Google Business Profile propre à CE site (aucune pour l'instant).
    // ⚠️ Ne jamais y mettre une fiche ou un site tiers : ce site doit rester
    // totalement indépendant de toute autre présence en ligne.
    googleBusiness: {
      url: '',
    },

    // Note Google : uniquement celle d'une fiche rattachée à CE site.
    // Affichée en texte avec lien ; jamais dans le JSON-LD.
    googleReviews: {
      enabled: false,
      ratingValue: null as number | null,
      reviewCount: null as number | null,
    },
  },

  seo: {
    title: 'Élagueur à Tours (37) : élagage, abattage, dessouchage',
    description:
      "Élagueur grimpeur à Tours et Joué-lès-Tours : élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place, chantier nettoyé. Appelez Rudy au 06 31 46 43 50.",
    ogImage: '/images/og-image.jpg',
  },

  serviceArea: {
    mainCity: 'Tours',
    department: 'Indre-et-Loire (37)',
    radius: 50, // km autour de Joué-lès-Tours
    // Communes citées (celles avec une page dédiée sont dans cityPages.ts)
    cities: [
      'Tours', 'Joué-lès-Tours', 'Saint-Cyr-sur-Loire', 'Saint-Avertin', 'Chambray-lès-Tours',
      'La Riche', 'Saint-Pierre-des-Corps', 'Ballan-Miré', 'Fondettes', 'Montlouis-sur-Loire',
      'Amboise', 'Veigné', 'Montbazon', 'Vouvray', 'Rochecorbon', 'Luynes', 'Monts',
      'Esvres-sur-Indre', 'Larçay', 'Véretz', 'Notre-Dame-d\'Oé', 'Mettray', 'Savonnières', 'Druye',
      'Azay-le-Rideau', 'Langeais', 'Bléré', 'Loches', 'Chinon', 'Sorigny',
    ],
  },

  // Vrais avis clients uniquement (avec accord). Section masquée si vide.
  testimonials: [] as Testimonial[],

  // FAQ générale : réponses autonomes et factuelles (reprises par Google et les IA).
  faq: [
    {
      question: "Combien coûte un élagage ou un abattage ?",
      answer:
        "Nous n'affichons pas de tarif : le prix dépend de la hauteur et de l'essence de l'arbre, de l'accès au jardin, de la proximité de la maison ou des lignes électriques et de l'évacuation des branches. Rudy se déplace gratuitement pour établir un devis écrit, détaillé et sans engagement. Pour aller plus vite, envoyez une photo de l'arbre par SMS au 06 31 46 43 50.",
    },
    {
      question: "Dans quelles communes intervenez-vous ?",
      answer:
        "Nous sommes basés à Joué-lès-Tours et intervenons dans un rayon d'environ 50 km : Tours et toute la métropole (Saint-Cyr-sur-Loire, Saint-Avertin, Chambray-lès-Tours, La Riche, Fondettes, Ballan-Miré…), ainsi qu'Amboise, Montlouis-sur-Loire, Montbazon, Azay-le-Rideau ou Loches. Un doute pour votre commune ? Appelez, la réponse est immédiate.",
    },
    {
      question: "Intervenez-vous en urgence après une tempête ?",
      answer:
        "Oui. Arbre tombé, branche cassée sur une toiture, arbre penché qui menace la maison : appelez directement le 06 31 46 43 50. Si Rudy est dans un arbre et ne peut pas décrocher, laissez un message ou envoyez une photo par SMS : il rappelle dès qu'il redescend et organise la mise en sécurité au plus vite.",
    },
    {
      question: "Quelle est la meilleure période pour élaguer ?",
      answer:
        "Pour la plupart des arbres, la fin de l'automne et l'hiver (novembre à début mars, hors fortes gelées), quand l'arbre est au repos. Évitez si possible la période de nidification, de mi-mars à fin juillet : détruire un nid occupé est interdit. Les fruitiers à noyau (cerisier, prunier) se taillent plutôt en fin d'été. Un arbre dangereux, lui, se traite toute l'année.",
    },
    {
      question: "Faut-il une autorisation pour abattre un arbre ?",
      answer:
        "Sur un terrain privé, l'abattage est libre dans la majorité des cas. Une déclaration préalable en mairie est obligatoire si l'arbre est en espace boisé classé ou protégé par le PLU, et l'avis de l'Architecte des Bâtiments de France est requis aux abords d'un monument historique — fréquent à Tours et Amboise. Nous vous disons quoi vérifier avant l'intervention.",
    },
    {
      question: "Les branches de mon voisin dépassent chez moi, que faire ?",
      answer:
        "L'article 673 du Code civil permet d'exiger de votre voisin qu'il coupe les branches qui avancent sur votre terrain ; vous ne pouvez pas les couper vous-même sans son accord. Les arbres de plus de 2 m doivent être plantés à au moins 2 m de la limite de propriété (article 671). Nous intervenons à la demande du propriétaire de l'arbre, avec l'accord des deux voisins si besoin.",
    },
    {
      question: "Êtes-vous assuré pour les travaux en hauteur ?",
      answer:
        "Oui, nous sommes couverts par une assurance responsabilité civile professionnelle. L'attestation vous est fournie sur simple demande avant le chantier.",
    },
    {
      question: "L'élagage donne-t-il droit au crédit d'impôt de 50 % ?",
      answer:
        "Non, pas l'élagage en hauteur. L'administration fiscale exclut des « petits travaux de jardinage » l'élagage qui nécessite de grimper dans l'arbre ou d'utiliser cordes et harnais, ainsi que l'abattage et le dessouchage (BOFiP BOI-IR-RICI-150-10, réponse ministérielle du 8 décembre 2022). Seul l'entretien réalisé à hauteur d'homme peut y ouvrir droit, et uniquement via un organisme déclaré de services à la personne. Méfiez-vous des devis qui promettent « -50 % » sur un abattage : le fisc peut refuser la réduction.",
    },
    {
      question: "Que deviennent les branches et le bois ?",
      answer:
        "Le chantier est rendu propre : les branches sont broyées et évacuées. Sur demande, nous laissons le broyat sur place pour pailler vos massifs, et le bois débité en bûches pour votre cheminée.",
    },
  ],
};

export function getPhoneLink() {
  return `tel:${siteConfig.business.phone}`;
}

export function getEmailLink(subject = 'Demande de devis élagage') {
  return `mailto:${siteConfig.business.email}?subject=${encodeURIComponent(subject)}`;
}

// Lien SMS pré-rempli (format compatible iPhone et Android).
export function getSmsLink(body = "Bonjour, je souhaite un devis. Voici une photo de l'arbre. Commune : ") {
  return `sms:${siteConfig.business.phone}?&body=${encodeURIComponent(body)}`;
}

// Libellé des avis Google (« 4,9/5 · plus de 140 avis »), null si désactivé.
// Le nombre est arrondi à la dizaine inférieure pour rester vrai quand il augmente.
export function getReviewsLabel() {
  const gr = siteConfig.business.googleReviews;
  if (!gr.enabled || !gr.ratingValue || !gr.reviewCount) return null;
  const rating = gr.ratingValue.toFixed(1).replace('.', ',');
  const count = gr.reviewCount >= 20 ? `plus de ${Math.floor(gr.reviewCount / 10) * 10}` : String(gr.reviewCount);
  return { rating, count, text: `${rating}/5 · ${count} avis Google`, url: siteConfig.business.googleBusiness.url };
}

// Nombre d'années d'activité, calculé depuis l'immatriculation (null si inconnue).
export function getYearsInBusiness() {
  const y = siteConfig.business.foundedYear;
  return y ? new Date().getFullYear() - y : null;
}
