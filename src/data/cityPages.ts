/**
 * Données des pages villes pour le SEO local
 * Utilisées par /zones/[city].astro
 */

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityPageData {
  slug: string;
  name: string;
  postalCode: string;
  h1: string;
  title: string;
  description: string;
  population: string;
  area: string;
  neighborhoods: string[];
  landmarks: string[];
  intro: string;
  specificContent: string;
  treeTypes: string[];
  faq: CityFaq[];
}

export const cityPages: CityPageData[] = [
  {
    slug: "elagueur-tours",
    name: "Tours",
    postalCode: "37000",
    h1: "Élagueur à Tours – Élagage et abattage d'arbres professionnels",
    title: "Élagueur Tours (37) | Élagage & Abattage d'arbres – Devis Gratuit 24h",
    description: "Élagueur professionnel à Tours (37). Élagage, abattage, dessouchage, taille de haies. Certifié, assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit sous 24h. ☎ 06 31 46 43 50",
    population: "136 000 habitants",
    area: "Agglomération Tours Val-de-Loire",
    neighborhoods: ["Tours Centre", "Tours Nord", "Tours Sud", "Saint-Symphorien", "La Rotisserie", "Velpeau", "Les Prébendes"],
    landmarks: ["bords de Loire", "vieille ville de Tours", "quartier des halles", "parc de Grandmont"],
    intro: "Tours, préfecture d'Indre-et-Loire et capitale de la Touraine, est une ville verte avec de nombreux parcs, jardins et propriétés arborées. Avec ses quartiers résidentiels boisés comme Saint-Symphorien, ses propriétés à colombages entourées d'arbres anciens et ses jardins des bords de Loire, la demande en services d'élagage et d'abattage est importante.",
    specificContent: "En tant qu'<strong>élagueur à Tours</strong>, nous connaissons parfaitement les enjeux locaux : respect du PLU de Tours Métropole, protection des arbres remarquables, proximité des réseaux aériens ENEDIS dans les quartiers denses. Nous intervenons régulièrement dans tous les quartiers tourangeaux, de <strong>Tours Centre</strong> aux communes périphériques.",
    treeTypes: ["Platanes des bords de Loire", "Chênes dans les propriétés", "Tilleuls des avenues", "Thuyas et conifères", "Pommiers et poiriers"],
    faq: [
      {
        question: "Quel est le délai d'intervention pour un élagage à Tours ?",
        answer: "Nous intervenons généralement sous 3 à 7 jours pour un élagage planifié à Tours. Pour les urgences (arbre dangereux, branches sur toiture), nous pouvons intervenir le jour même ou le lendemain. Appelez-nous au 06 31 46 43 50 pour une intervention rapide.",
      },
      {
        question: "Faut-il une autorisation pour élaguer ou abattre un arbre à Tours ?",
        answer: "À Tours, le PLU de Tours Métropole protège certains arbres dans les zones vertes et les espaces boisés classés. Avant toute intervention, nous vérifions la réglementation applicable à votre parcelle. En cas d'autorisation requise, nous vous accompagnons dans vos démarches auprès de la mairie.",
      },
      {
        question: "Intervenez-vous dans tous les quartiers de Tours ?",
        answer: "Oui, nous intervenons dans tous les quartiers de Tours : Centre-ville, Saint-Symphorien, La Rotisserie, Velpeau, Les Prébendes, Tours Nord, Tours Sud, Grammont. Pas de surcoût de déplacement.",
      },
    ],
  },
  {
    slug: "elagueur-amboise",
    name: "Amboise",
    postalCode: "37400",
    h1: "Élagueur à Amboise – Élagage et abattage d'arbres en Val de Loire",
    title: "Élagueur Amboise (37) | Élagage & Abattage professionnels – Devis Gratuit",
    description: "Élagueur à Amboise (37). Élagage, abattage, dessouchage. Certifié, assuré RC Pro 8M€. Intervention rapide en Val de Loire. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "13 000 habitants",
    area: "Communauté de communes Amboise",
    neighborhoods: ["Amboise Centre", "Saint-Denis-Hors", "Saint-Florentin", "la Boitardière"],
    landmarks: ["Château royal d'Amboise", "Clos Lucé", "bords de Loire", "forêt d'Amboise"],
    intro: "Amboise, cité royale sur les bords de Loire classée au patrimoine mondial de l'UNESCO, est entourée d'un patrimoine naturel exceptionnel : forêt royale, vignobles, jardins et parcs arborés. Les propriétés amboisiennes, souvent dotées de grands arbres, nécessitent des interventions d'élagage régulières.",
    specificContent: "Dans le secteur d'<strong>Amboise</strong> et sa région, nous intervenons sur des propriétés viticoles, des jardins de caractère et des sites inscrits. Nous maîtrisons les contraintes spécifiques du <strong>Val de Loire</strong> classé UNESCO : préservation du paysage, respect des essences locales (chênes, châtaigniers, noyers) et coordination avec les acteurs patrimoniaux.",
    treeTypes: ["Chênes et châtaigniers", "Noyers et frênes", "Arbres des vignobles", "Arbres de jardins historiques", "Peupliers des bords de Loire"],
    faq: [
      {
        question: "Intervenez-vous à Amboise et ses environs ?",
        answer: "Oui, nous intervenons à Amboise et dans toutes les communes environnantes : Nazelles-Négron, Pocé-sur-Cisse, Chargé, Mosnes, Limeray, Saint-Ouen-les-Vignes. Pas de surcoût de déplacement dans un rayon de 30km autour de Tours.",
      },
      {
        question: "Peut-on élaguer des arbres près du Château d'Amboise ?",
        answer: "Les abords du château sont soumis à des règles de protection du patrimoine. Nous prenons en compte ces contraintes et, si nécessaire, coordonnons les travaux avec l'Architecte des Bâtiments de France. Notre expérience dans les zones patrimoniales du Val de Loire est un atout.",
      },
    ],
  },
  {
    slug: "elagueur-joue-les-tours",
    name: "Joué-lès-Tours",
    postalCode: "37300",
    h1: "Élagueur à Joué-lès-Tours – Élagage et abattage d'arbres professionnels",
    title: "Élagueur Joué-lès-Tours (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur professionnel à Joué-lès-Tours (37). Entreprise locale. Élagage, abattage, dessouchage. Assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit. ☎ 06 31 46 43 50",
    population: "37 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Rabière", "Les Grands Mortiers", "Bois Charrier", "La Bedonnière"],
    landmarks: ["parc de Pinçonnière", "étang de Fontenay", "forêt de Joué"],
    intro: "Joué-lès-Tours, deuxième ville de l'agglomération tourangelle avec ses 37 000 habitants, est notre commune d'implantation. Ville résidentielle avec de nombreux pavillons et jardins, Joué-lès-Tours est l'une de nos zones d'intervention prioritaires. Délai de réponse garanti sous 24h.",
    specificContent: "Installés à <strong>Joué-lès-Tours</strong>, nous connaissons parfaitement chaque quartier de la ville : les jardins pavillonnaires de <strong>La Rabière</strong>, les propriétés boisées du <strong>Bois Charrier</strong>, les espaces verts autour de l'<strong>étang de Fontenay</strong>. Notre proximité géographique garantit des interventions rapides et des tarifs compétitifs (pas de frais de déplacement).",
    treeTypes: ["Conifères et thuyas", "Chênes et frênes", "Arbres fruitiers des jardins", "Haies de lauriers", "Acacias et robiniers"],
    faq: [
      {
        question: "Êtes-vous vraiment basés à Joué-lès-Tours ?",
        answer: "Oui, notre entreprise est implantée au 2 rue du Manoir à Joué-lès-Tours (37300). Cette proximité nous permet d'intervenir rapidement dans toute la commune et l'agglomération tourangelle, sans frais de déplacement supplémentaires.",
      },
      {
        question: "Intervenez-vous aussi dans les secteurs de La Rabière et Bois Charrier ?",
        answer: "Absolument, nous intervenons dans tous les quartiers de Joué-lès-Tours : La Rabière, Bois Charrier, Les Grands Mortiers, La Bedonnière, Centre-ville, zones pavillonnaires. Devis gratuit sur place sous 24h.",
      },
    ],
  },
  {
    slug: "elagueur-saint-cyr-sur-loire",
    name: "Saint-Cyr-sur-Loire",
    postalCode: "37540",
    h1: "Élagueur à Saint-Cyr-sur-Loire – Élagage et abattage d'arbres",
    title: "Élagueur Saint-Cyr-sur-Loire (37) | Élagage & Abattage – Devis Gratuit",
    description: "Élagueur à Saint-Cyr-sur-Loire (37). Commune résidentielle boisée. Élagage, abattage, dessouchage, taille de haies. Assuré 8M€. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "16 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Le Prieuré", "Les Hauts de Saint-Cyr", "Chouzé", "Bethléem"],
    landmarks: ["domaine de Bois-le-Roi", "berges de Loire", "parc du Prieuré"],
    intro: "Saint-Cyr-sur-Loire, commune résidentielle et verdoyante rive droite de la Loire, est connue pour ses maisons avec jardins, ses villas et ses grands propriétés arborées. Les quartiers des Hauts de Saint-Cyr et du Prieuré comptent de nombreux arbres d'ornement qui nécessitent des soins réguliers.",
    specificContent: "Nous intervenons fréquemment à <strong>Saint-Cyr-sur-Loire</strong> pour des <strong>élaguages d'arbres ornementaux</strong> dans les jardins résidentiels, des <strong>abattages sécurisés</strong> dans les propriétés proches des habitations, et des <strong>tailles de haies</strong> pour les clôtures végétales. Commune attractive et bien arborée, Saint-Cyr-sur-Loire est l'une de nos zones privilégiées.",
    treeTypes: ["Cèdres et séquoias", "Châtaigniers centenaires", "Robiniers et acacias", "Haies de charmilles", "Arbres d'agrément"],
    faq: [
      {
        question: "Intervenez-vous dans les propriétés en pente à Saint-Cyr-sur-Loire ?",
        answer: "Oui, nous maîtrisons les interventions sur terrain en pente, fréquentes dans les hauts de Saint-Cyr. Nos élagueurs grimpeurs utilisent des techniques de grimpe qui permettent de travailler en sécurité sur tous types de terrains.",
      },
      {
        question: "Traitez-vous aussi les arbres dans les jardins avec piscine ?",
        answer: "Oui, nous prenons toutes les précautions pour protéger vos aménagements (piscine, terrasse, mobilier) lors des travaux. Les branches sont descendues de façon contrôlée pour éviter tout dommage.",
      },
    ],
  },
  {
    slug: "elagueur-montlouis-sur-loire",
    name: "Montlouis-sur-Loire",
    postalCode: "37270",
    h1: "Élagueur à Montlouis-sur-Loire – Élagage et abattage d'arbres",
    title: "Élagueur Montlouis-sur-Loire (37) | Élagage & Abattage – Devis Gratuit",
    description: "Élagueur à Montlouis-sur-Loire (37). Vignoble et jardins de Touraine. Élagage, abattage, dessouchage. Assuré 8M€. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "11 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Montlouis-bourg", "Saint-Blaise", "La Ville-aux-Dames", "Husseau"],
    landmarks: ["vignoble Montlouis AOC", "troglodytes", "bords de Loire", "Parc de Montlouis"],
    intro: "Montlouis-sur-Loire, commune viticole réputée sur les coteaux de la Loire, allie vignobles, jardins et propriétés avec de grands arbres. La ville est connue pour ses caves troglodytiques et son vignoble AOC, mais aussi pour ses beaux jardins et pavillons qui nécessitent un entretien arboricole régulier.",
    specificContent: "Dans le secteur de <strong>Montlouis-sur-Loire</strong>, nous intervenons aussi bien pour les particuliers (élagage de jardins résidentiels) que pour les propriétés viticoles et les domaines. Nous sommes habitués à travailler à proximité des caves troglodytiques et des terrains escarpés caractéristiques des coteaux ligériens.",
    treeTypes: ["Peupliers des bords de Loire", "Acacias et robiniers", "Haies champêtres", "Arbres des vignobles", "Chênes et châtaigniers"],
    faq: [
      {
        question: "Pouvez-vous intervenir sur les propriétés avec caves troglodytiques ?",
        answer: "Oui, nous avons l'habitude des contraintes spécifiques liées aux caves troglodytiques : terrain en dévers, instabilité possible des sols, présence de réseaux. Nous adaptons nos techniques en conséquence pour un chantier sécurisé.",
      },
    ],
  },
  {
    slug: "elagueur-indre-et-loire",
    name: "Indre-et-Loire",
    postalCode: "37",
    h1: "Élagueur Indre-et-Loire (37) – Élagage professionnel dans tout le département",
    title: "Élagueur Indre-et-Loire (37) | Élagage & Abattage professionnels | Devis Gratuit",
    description: "Élagueur professionnel en Indre-et-Loire (37). Élagage, abattage, dessouchage dans tout le département. Certifié, assuré 8M€. Crédit d'impôt -50%. Devis gratuit. ☎ 06 31 46 43 50",
    population: "610 000 habitants",
    area: "Département Indre-et-Loire",
    neighborhoods: ["Tours", "Joué-lès-Tours", "Amboise", "Chinon", "Loches", "Langeais", "Azay-le-Rideau"],
    landmarks: ["châteaux de la Loire", "vignoble AOC Touraine", "forêts de Touraine", "Val de Loire UNESCO"],
    intro: "L'Indre-et-Loire, département au cœur du Val de Loire classé au patrimoine mondial de l'UNESCO, possède un patrimoine arboré exceptionnel : forêts domaniales, parcs de châteaux, vignobles et jardins remarquables. En tant qu'entreprise d'élagage implantée dans le 37, nous intervenons dans tout le département.",
    specificContent: "Depuis notre base de <strong>Joué-lès-Tours</strong>, nous couvrons tout l'<strong>Indre-et-Loire</strong> : Nord du département (Langeais, Fondettes, Saint-Patrice), Est (Amboise, Bléré, Véretz), Sud (Montbazon, Azay-le-Rideau, Sainte-Maure-de-Touraine), Ouest (Chinon, Richelieu) et bien sûr l'agglomération tourangelle. <strong>Délai d'intervention sous 48h</strong> pour tout le département.",
    treeTypes: ["Chênes et châtaigniers des forêts", "Platanes des allées", "Arbres des parcs de châteaux", "Peupliers ligériens", "Vignes et arbres des domaines viticoles"],
    faq: [
      {
        question: "Intervenez-vous dans tout le département 37 ou seulement autour de Tours ?",
        answer: "Nous intervenons dans tout l'Indre-et-Loire dans un rayon de 50km autour de Tours, ce qui couvre la quasi-totalité du département. Cela inclut Chinon, Loches, Amboise, Langeais, Azay-le-Rideau, Montbazon, Bléré, et toutes les communes entre. Un déplacement peut s'appliquer au-delà de 30km.",
      },
      {
        question: "Travaillez-vous aussi sur les propriétés de châteaux et domaines viticoles ?",
        answer: "Oui, nous avons l'habitude des interventions sur des propriétés de prestige en Indre-et-Loire : parcs de châteaux, domaines viticoles, propriétés historiques. Nous adaptons notre approche aux exigences spécifiques de ces sites (respect du patrimoine, contraintes paysagères).",
      },
    ],
  },
];
