/**
 * Configuration centralisée du site
 * À personnaliser avec les vraies informations de l'élagueur
 */

export const siteConfig = {
  // Informations entreprise
  business: {
    name: "Élagage Abattage 37",
    tagline: "Votre élagueur professionnel à Tours et en Indre-et-Loire",
    description: "Entreprise d'élagage et d'abattage d'arbres professionnelle à Tours (37). Plus de 10 ans d'expérience. Réduction fiscale jusqu'à 2 500€. Assuré RC Pro 8M€. Paiement en plusieurs fois possible.",

    // Coordonnées
    phone: "+33252566856",
    phoneDisplay: "02 52 56 68 56",
    phoneTracking: "+33XXXXXXXXX", // Numéro de tracking dédié au site (à définir)
    phoneTrackingDisplay: "02 XX XX XX XX",
    email: "contact@elagage-abattage-37.fr",
    whatsapp: "+33252566856", // Même numéro que le principal pour l'instant

    // Adresse physique
    address: {
      street: "Tours",
      city: "Tours",
      postalCode: "37000",
      region: "Indre-et-Loire",
      country: "France",
      countryCode: "FR",
    },

    // Coordonnées GPS pour Google Maps (Tours centre)
    coordinates: {
      lat: 47.394144,
      lng: 0.68484,
    },

    // Horaires d'ouverture
    openingHours: {
      weekdays: "08:00-18:00",
      saturday: "09:00-17:00",
      sunday: "Fermé",
    },

    // Badges de réassurance (nouveauté)
    reassuranceBadges: [
      {
        icon: "target",
        text: "Réduction fiscale jusqu'à 2 500€",
        highlight: true,
      },
      {
        icon: "credit-card",
        text: "Paiement en plusieurs fois",
        highlight: false,
      },
      {
        icon: "shield-check",
        text: "Assuré RC Pro 8M€",
        highlight: false,
      },
    ],

    // Certifications et labels
    certifications: [
      "Élagueur professionnel certifié",
      "Plus de 10 ans d'expérience",
      "Assurance RC Pro 8 000 000€",
      "Réduction fiscale jusqu'à 2 500€",
      "Paiement facilité en plusieurs fois",
    ],

    // Informations légales (placeholder)
    siret: "XXX XXX XXX 00000",

    // Réseaux sociaux
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  // Configuration SEO par défaut
  seo: {
    title: "Élagage Abattage 37 | Élagueur Tours & Indre-et-Loire | Devis Gratuit",
    description: "Élagueur professionnel à Tours (37). Élagage, abattage, taille de haies. Réduction fiscale 2500€. Assuré 8M€. Devis gratuit 02 52 56 68 56",
    keywords: [
      "élagage Tours",
      "abattage arbre Tours",
      "élagueur Tours",
      "élagueur 37",
      "élagage Indre-et-Loire",
      "abattage Tours",
      "taille haie Tours",
      "dessouchage Tours",
      "élagueur professionnel Tours",
      "élagage Tours 37",
      "réduction fiscale élagage",
    ],
    ogImage: "/images/og-image.jpg", // Image 1200x630px
    twitterHandle: "", // Optionnel
  },

  // Zone d'intervention (pour SEO local)
  serviceArea: {
    mainCity: "Tours",
    department: "Indre-et-Loire (37)",
    radius: 50, // km
    cities: [
      "Tours",
      "Amboise",
      "Joué-lès-Tours",
      "Saint-Cyr-sur-Loire",
      "Chambray-lès-Tours",
      "Saint-Pierre-des-Corps",
      "Ballan-Miré",
      "La Riche",
      "Saint-Avertin",
      "Fondettes",
      "Montlouis-sur-Loire",
      "Véretz",
      "Rochecorbon",
      "Vouvray",
      "Azay-le-Rideau",
      "Langeais",
      "Chinon",
      "Loches",
      "Montbazon",
      "Bléré",
    ],
  },

  // Services proposés
  services: [
    {
      id: "elagage",
      slug: "elagage-arbres",
      name: "Élagage d'arbres",
      shortDescription: "Élagage professionnel de tous types d'arbres (ombrage, fruitiers, ornementaux). Travail soigné et sécurisé en hauteur.",
      icon: "tree",
      featured: true,
    },
    {
      id: "abattage",
      slug: "abattage-arbres",
      name: "Abattage d'arbres",
      shortDescription: "Abattage sécurisé d'arbres dangereux ou gênants. Techniques professionnelles avec matériel adapté.",
      icon: "axe",
      featured: true,
    },
    {
      id: "taille-haies",
      slug: "taille-haies",
      name: "Taille de haies",
      shortDescription: "Taille et entretien de haies. Formation, restructuration et taille d'entretien régulière.",
      icon: "hedge",
      featured: true,
    },
    {
      id: "dessouchage",
      slug: "dessouchage-arbres",
      name: "Dessouchage",
      shortDescription: "Extraction complète des souches avec rogneuse professionnelle. Terrain prêt pour nouvel aménagement.",
      icon: "tool",
      featured: true,
    },
    {
      id: "entretien-espaces-verts",
      slug: "entretien-espaces-verts",
      name: "Entretien espaces verts",
      shortDescription: "Entretien complet de vos espaces verts : tonte, débroussaillage, taille, nettoyage.",
      icon: "hedge",
      featured: true,
    },
    {
      id: "elagage-fruitiers",
      slug: "elagage-fruitiers",
      name: "Élagage fruitiers",
      shortDescription: "Taille spécialisée d'arbres fruitiers pour optimiser la production et la santé de vos arbres.",
      icon: "apple",
      featured: false,
    },
  ],

  // Statistiques (pour section chiffres clés)
  stats: {
    treesPerYear: 500,
    yearsExperience: 10,
    satisfactionRate: 98,
    responseTime: "48h",
  },

  // Avis clients (quelques exemples, idéalement connecter à Google Reviews)
  testimonials: [
    {
      id: 1,
      name: "Jean Dupont",
      city: "Tours",
      rating: 5,
      text: "Excellent travail sur l'élagage de nos chênes centenaires. Équipe professionnelle, ponctuelle et soigneuse. Je recommande vivement !",
      date: "2024-12",
      source: "Google",
    },
    {
      id: 2,
      name: "Marie Martin",
      city: "Amboise",
      rating: 5,
      text: "Intervention rapide après une tempête. Abattage sécurisé d'un arbre dangereux. Prix honnête et chantier propre. Merci !",
      date: "2024-11",
      source: "Google",
    },
    {
      id: 3,
      name: "Pierre Leroy",
      city: "Joué-lès-Tours",
      rating: 5,
      text: "15 ans que je fais appel à eux pour l'entretien annuel de mon jardin. Toujours impeccable, professionnels et de bon conseil.",
      date: "2024-10",
      source: "Google",
    },
  ],

  // FAQ (pour section FAQ et schema.org FAQPage)
  faq: [
    {
      question: "Combien coûte un élagage d'arbre ?",
      answer: "Le prix d'un élagage varie selon la hauteur de l'arbre, sa complexité et son accessibilité. Comptez entre 150€ et 800€ en moyenne. Nous proposons un devis gratuit personnalisé sous 24h pour évaluer précisément vos besoins.",
    },
    {
      question: "Quelle est la meilleure période pour élaguer ?",
      answer: "La période idéale pour l'élagage se situe généralement en hiver (novembre à mars) lorsque l'arbre est en repos végétatif. Cependant, certaines essences se taillent différemment. Nous adaptons nos interventions selon les espèces.",
    },
    {
      question: "Faut-il une autorisation pour abattre un arbre ?",
      answer: "Cela dépend de votre commune et du PLU (Plan Local d'Urbanisme). Dans certaines zones protégées, une déclaration préalable est obligatoire. Nous vous accompagnons dans ces démarches administratives si nécessaire.",
    },
    {
      question: "Êtes-vous assurés pour les travaux en hauteur ?",
      answer: "Oui, nous disposons d'une assurance Responsabilité Civile Professionnelle de 8 000 000€ couvrant tous nos chantiers. Tous nos élagueurs sont certifiés et formés aux techniques de grimpe et de sécurité.",
    },
    {
      question: "Puis-je bénéficier d'une réduction fiscale ?",
      answer: "Oui ! Les travaux d'entretien de jardin, incluant l'élagage et la taille de haies, donnent droit à un crédit d'impôt de 50% dans la limite de 2 500€ par an (soit 5 000€ de dépenses). Nous vous fournissons tous les documents nécessaires.",
    },
    {
      question: "Proposez-vous un paiement en plusieurs fois ?",
      answer: "Oui, nous proposons des facilités de paiement en plusieurs fois pour les chantiers importants. Contactez-nous pour étudier ensemble la solution de paiement la plus adaptée à votre situation.",
    },
    {
      question: "Que faites-vous des déchets verts après l'élagage ?",
      answer: "Nous évacuons systématiquement tous les déchets verts (branches, feuilles, souches) et laissons le chantier propre. Sur demande, nous pouvons également broyer les branches sur place pour votre compost ou paillage.",
    },
  ],
};

// Helper pour générer l'URL WhatsApp
export function getWhatsAppLink(message = "Bonjour, je souhaite un devis pour...") {
  return `https://wa.me/${siteConfig.business.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Helper pour générer le lien téléphone
export function getPhoneLink() {
  return `tel:${siteConfig.business.phone}`;
}

// Helper pour générer le lien email
export function getEmailLink(subject = "Demande de devis") {
  return `mailto:${siteConfig.business.email}?subject=${encodeURIComponent(subject)}`;
}
