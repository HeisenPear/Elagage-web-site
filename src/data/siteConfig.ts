/**
 * Configuration centralisée du site
 * À personnaliser avec les vraies informations de l'élagueur
 */

export const siteConfig = {
  // Informations entreprise
  business: {
    name: "PAYSAGISTE TOURAINE 37",
    tagline: "Expert en élagage et paysagisme depuis plus de 10 ans",
    description: "Entreprise familiale spécialisée dans l'élagage, l'abattage d'arbres, le dessouchage et l'entretien paysager. Plus de 10 ans d'expérience avec des centaines de clients particuliers et professionnels satisfaits dans la région de Tours.",

    // Coordonnées
    phone: "+33668823113",
    phoneDisplay: "06 68 82 31 13",
    phoneSecondary: "+33770368400",
    phoneSecondaryDisplay: "07 70 36 84 00",
    email: "paysagistetouraine@gmail.com",
    whatsapp: "+33668823113", // Numéro sans espaces

    // Adresse physique
    address: {
      street: "9, bis Avenue des Couzières",
      city: "Veigné",
      postalCode: "37250",
      region: "Indre-et-Loire",
      country: "France",
      countryCode: "FR",
    },

    // Coordonnées GPS pour Google Maps (Veigné, 37250)
    coordinates: {
      lat: 47.2867,
      lng: 0.7389,
    },

    // Horaires d'ouverture
    openingHours: {
      weekdays: "08:00-18:00",
      saturday: "08:00-18:00",
      sunday: "Fermé",
    },

    // Certifications et labels
    certifications: [
      "Élagueur grimpeur certifié",
      "Plus de 10 ans d'expérience",
      "Centaines de clients satisfaits",
    ],

    // Informations légales
    siret: "900 358 409 00010",

    // Réseaux sociaux
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
    },
  },

  // Configuration SEO par défaut
  seo: {
    title: "PAYSAGISTE TOURAINE 37 | Élagage & Paysagisme Veigné, Tours",
    description: "Paysagiste et élagueur professionnel à Veigné (37). Entretien gazons, élagage, abattage, dessouchage, taille de haies. Plus de 10 ans d'expérience. Devis gratuit.",
    keywords: [
      "paysagiste Touraine",
      "élagueur Veigné",
      "élagage Tours",
      "abattage arbre 37",
      "entretien gazon Indre-et-Loire",
      "taille haie Tours",
      "dessouchage 37",
      "paysagiste Tours",
      "élagueur professionnel Indre-et-Loire",
      "entretien jardin Touraine",
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
      id: "entretien-gazons",
      slug: "entretien-gazons",
      name: "Entretien des gazons",
      shortDescription: "Votre jardin sera plus vert que jamais grâce à notre programme d'entretien sur 12 mois.",
      icon: "hedge",
      featured: true,
    },
    {
      id: "taille-haies",
      slug: "taille-haies",
      name: "Taille des haies",
      shortDescription: "Entretien de pelouse avec tonte, débroussaillage, plantations et coupe de plantes grimpantes ou mauvaises herbes.",
      icon: "hedge",
      featured: true,
    },
    {
      id: "elagage",
      slug: "elagage-arbres",
      name: "Élagage",
      shortDescription: "Nous vous recommanderons les arbres d'ombrage, les arbres fruitiers et les arbres ornementaux les plus adaptés à votre espace.",
      icon: "tree",
      featured: true,
    },
    {
      id: "abattage",
      slug: "abattage-arbres",
      name: "Abattage d'arbres",
      shortDescription: "Opération réalisée par élagueur grimpeur compétent depuis 13 années. Prestations de grande précision pour raisons sanitaires ou de sécurité.",
      icon: "axe",
      featured: true,
    },
    {
      id: "dessouchage",
      slug: "dessouchage-arbres",
      name: "Dessouchage d'arbres",
      shortDescription: "Extraction de souches par creusement de tranchées et coupe des racines. Intervention dans toute la France avec tire-fort.",
      icon: "tool",
      featured: true,
    },
    {
      id: "etetage",
      slug: "etetage-arbre",
      name: "Étêtage d'arbre",
      shortDescription: "Coupe de la cime et des branches principales pour réduire la hauteur. Idéal pour espaces limités ou arbres trop imposants.",
      icon: "tree",
      featured: true,
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
