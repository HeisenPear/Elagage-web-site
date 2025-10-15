/**
 * Configuration centralisée du site
 * À personnaliser avec les vraies informations de l'élagueur
 */

export const siteConfig = {
  // Informations entreprise
  business: {
    name: "Nom Entreprise Élagage", // À PERSONNALISER
    tagline: "Expert en élagage depuis 15 ans",
    description: "Entreprise d'élagage professionnelle spécialisée dans l'entretien d'arbres, l'abattage sécurisé et la taille de haies. Intervention rapide, devis gratuit.",

    // Coordonnées
    phone: "+33 X XX XX XX XX", // À PERSONNALISER
    phoneDisplay: "0X XX XX XX XX",
    email: "contact@domain.com", // À PERSONNALISER
    whatsapp: "+33XXXXXXXXX", // Numéro sans espaces

    // Adresse physique
    address: {
      street: "123 Rue Exemple", // À PERSONNALISER
      city: "Tours", // À PERSONNALISER
      postalCode: "37000", // À PERSONNALISER
      region: "Indre-et-Loire",
      country: "France",
      countryCode: "FR",
    },

    // Coordonnées GPS pour Google Maps
    coordinates: {
      lat: 47.394144, // À PERSONNALISER
      lng: 0.68484,
    },

    // Horaires d'ouverture
    openingHours: {
      weekdays: "08:00-18:00",
      saturday: "08:00-12:00",
      sunday: "Fermé",
    },

    // Certifications et labels
    certifications: [
      "Certifié professionnel",
      "Assurance décennale",
      "15 ans d'expérience",
    ],

    // Réseaux sociaux
    social: {
      facebook: "https://facebook.com/votepage", // À PERSONNALISER ou laisser vide
      instagram: "https://instagram.com/votrecompte",
      linkedin: "",
    },
  },

  // Configuration SEO par défaut
  seo: {
    title: "Élagueur Tours | Expert Élagage & Abattage Indre-et-Loire",
    description: "Élagueur professionnel à Tours. Élagage, abattage, taille de haies. Devis gratuit 24h. Certifié, assuré. Intervention Indre-et-Loire.",
    keywords: [
      "élagueur Tours",
      "élagage Tours",
      "abattage arbre Tours",
      "taille haie Indre-et-Loire",
      "élagueur professionnel",
      "élagage 37",
    ],
    ogImage: "/images/og-image.jpg", // Image 1200x630px
    twitterHandle: "@votrecompte", // Optionnel
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
      shortDescription: "Élagage professionnel pour tous types d'arbres, en hauteur ou nacelle.",
      icon: "tree",
      featured: true,
    },
    {
      id: "abattage",
      slug: "abattage-securise",
      name: "Abattage sécurisé",
      shortDescription: "Abattage d'arbres dangereux avec techniques professionnelles.",
      icon: "axe",
      featured: true,
    },
    {
      id: "dessouchage",
      slug: "dessouchage",
      name: "Dessouchage",
      shortDescription: "Extraction complète des souches avec matériel professionnel.",
      icon: "tool",
      featured: false,
    },
    {
      id: "taille-haies",
      slug: "taille-haies",
      name: "Taille de haies",
      shortDescription: "Taille et entretien de haies, formation artistique.",
      icon: "hedge",
      featured: true,
    },
    {
      id: "elagage-fruitiers",
      slug: "elagage-fruitiers",
      name: "Élagage fruitiers",
      shortDescription: "Taille spécialisée d'arbres fruitiers pour optimiser la production.",
      icon: "apple",
      featured: false,
    },
    {
      id: "entretien",
      slug: "entretien-annuel",
      name: "Entretien annuel",
      shortDescription: "Contrat d'entretien annuel pour vos espaces verts.",
      icon: "calendar",
      featured: false,
    },
  ],

  // Statistiques (pour section chiffres clés)
  stats: {
    treesPerYear: 500,
    yearsExperience: 15,
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
      answer: "Oui, nous disposons d'une assurance décennale et responsabilité civile professionnelle couvrant tous nos chantiers. Tous nos élagueurs sont certifiés et formés aux techniques de grimpe et de sécurité.",
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
