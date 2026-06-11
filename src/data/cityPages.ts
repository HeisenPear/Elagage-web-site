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
    // SEO: H1 format normalisé "Élagueur [Ville] (37) — Élagage & Abattage"
    h1: "Élagueur Tours (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Tours (37) | Élagage & Abattage d'arbres – Devis Gratuit 24h",
    description: "Élagueur professionnel à Tours (37). Élagage, abattage, dessouchage, taille de haies. Certifié, assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit sous 24h. ☎ 06 31 46 43 50",
    population: "136 000 habitants",
    area: "Agglomération Tours Val-de-Loire",
    neighborhoods: ["Tours Centre", "Tours Nord", "Tours Sud", "Saint-Symphorien", "La Rotisserie", "Velpeau", "Les Prébendes", "La Riche", "Saint-Avertin", "Chambray-lès-Tours", "Grammont"],
    landmarks: ["bords de Loire", "vieille ville de Tours", "quartier des halles", "parc de Grandmont"],
    intro: "Tours, préfecture d'Indre-et-Loire et capitale de la Touraine, est une ville verte avec de nombreux parcs, jardins et propriétés arborées. Avec ses quartiers résidentiels boisés comme Saint-Symphorien, ses propriétés à colombages entourées d'arbres anciens et ses allées plantées de tilleuls centenaires, la demande en services d'élagage et d'abattage professionnels est importante. La ville compte plusieurs dizaines de milliers d'arbres d'alignement sur ses boulevards et avenues, auxquels s'ajoutent les arbres privés dans les jardins pavillonnaires des quartiers résidentiels.",
    specificContent: "En tant qu'<strong>élagueur à Tours</strong>, nous connaissons parfaitement les enjeux locaux : respect du PLU de Tours Métropole, protection des arbres remarquables, coordination avec ENEDIS pour les branches proches des réseaux aériens dans les quartiers denses. Nous intervenons dans tous les secteurs de Tours sans surcoût de déplacement : <strong>Tours Centre</strong> (rue Nationale, place Jean-Jaurès), <strong>Tours Nord</strong> (avenue Grammont, boulevard Preuilly), <strong>Tours Sud</strong> (Joué-lès-Tours, Saint-Avertin), les <strong>Prébendes</strong>, <strong>Velpeau</strong>, <strong>Saint-Symphorien</strong>, <strong>La Rotisserie</strong>, <strong>La Riche</strong> et <strong>Chambray-lès-Tours</strong>. Basés au 2 rue du Manoir à Joué-lès-Tours, à moins de 5 km du centre-ville de Tours, nous garantissons une intervention sous 24h pour les urgences et sous 72h pour les chantiers planifiés. Notre connaissance du tissu urbain tourangeau, des espèces arborées locales — platanes, tilleuls, chênes, marronniers — et des contraintes réglementaires du PLU de Tours Métropole nous permet d'accompagner chaque client avec expertise.",
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
    // SEO: H1 format normalisé
    h1: "Élagueur Amboise (37) — Élagage & Abattage d'arbres",
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
    // SEO: H1 format normalisé
    h1: "Élagueur Joué-lès-Tours (37) — Élagage & Abattage d'arbres",
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
    // SEO: H1 format normalisé
    h1: "Élagueur Saint-Cyr-sur-Loire (37) — Élagage & Abattage d'arbres",
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
    // SEO: H1 format normalisé
    h1: "Élagueur Montlouis-sur-Loire (37) — Élagage & Abattage d'arbres",
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
  {
    slug: "elagueur-chambray-les-tours",
    name: "Chambray-lès-Tours",
    postalCode: "37170",
    h1: "Élagueur Chambray-lès-Tours (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Chambray-lès-Tours (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur professionnel à Chambray-lès-Tours (37). Élagage, abattage, dessouchage, taille de haies. Certifié, assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "11 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-bourg", "Les Perrières", "La Branchoire", "Le Petit Cher", "La Vrillonnerie"],
    landmarks: ["CHRU Trousseau", "vallée du Petit Cher", "zone commerciale de la Vrillonnerie", "parc de la Boisnière"],
    intro: "Chambray-lès-Tours, commune dynamique au sud de l'agglomération tourangelle, mêle quartiers pavillonnaires verdoyants, grand pôle hospitalier (CHRU Trousseau) et vastes zones d'activités. Ses lotissements résidentiels du Petit Cher et des Perrières comptent de nombreux jardins arborés et haies qui demandent un entretien régulier.",
    specificContent: "À <strong>Chambray-lès-Tours</strong>, nous intervenons aussi bien dans les <strong>quartiers pavillonnaires</strong> (Les Perrières, La Branchoire) que sur les copropriétés et les abords de la <strong>vallée du Petit Cher</strong>. Nous prenons en charge l'<strong>élagage d'arbres d'ornement</strong>, l'<strong>abattage sécurisé</strong> à proximité des habitations et la <strong>taille de haies</strong> de séparation, très présentes dans les lotissements chambraisiens. Situés à Joué-lès-Tours, commune limitrophe, nous garantissons une intervention rapide sans frais de déplacement.",
    treeTypes: ["Chênes et frênes des coteaux", "Conifères et thuyas de jardins", "Bouleaux et érables d'ornement", "Pommiers et poiriers", "Haies de lauriers et troènes"],
    faq: [
      {
        question: "Intervenez-vous près du CHRU Trousseau et des zones résidentielles ?",
        answer: "Oui, nous intervenons dans tout Chambray-lès-Tours, y compris les quartiers résidentiels proches du CHRU Trousseau et de la zone de la Vrillonnerie. Nous adaptons nos techniques (démontage section par section) lorsque les arbres sont proches des habitations ou des réseaux.",
      },
      {
        question: "Proposez-vous des contrats d'entretien à Chambray-lès-Tours ?",
        answer: "Oui, nous proposons des contrats d'entretien annuel pour les particuliers, copropriétés et professionnels de Chambray-lès-Tours : taille de haies, élagage d'entretien, débroussaillage. Devis gratuit sur place sous 24h.",
      },
    ],
  },
  {
    slug: "elagueur-saint-avertin",
    name: "Saint-Avertin",
    postalCode: "37550",
    h1: "Élagueur Saint-Avertin (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Saint-Avertin (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur à Saint-Avertin (37). Commune résidentielle sur le Cher. Élagage, abattage, dessouchage, taille de haies. Assuré 8M€. Crédit d'impôt -50%. Devis gratuit. ☎ 06 31 46 43 50",
    population: "15 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "Cangé", "Vallée Violette", "Les Grands Champs", "Les Hauts de Saint-Avertin"],
    landmarks: ["château de Cangé", "lac des Peupleraies", "bords du Cher", "parc de Cangé"],
    intro: "Saint-Avertin, commune résidentielle prisée bordant le Cher au sud-est de Tours, est réputée pour ses quartiers pavillonnaires cossus, ses propriétés arborées et ses espaces verts comme le parc de Cangé et le lac des Peupleraies. Les grands jardins des Hauts de Saint-Avertin et de la Vallée Violette abritent des sujets remarquables nécessitant un savoir-faire d'élagueur grimpeur.",
    specificContent: "Nous intervenons régulièrement à <strong>Saint-Avertin</strong> pour l'<strong>élagage de grands arbres d'ornement</strong> (cèdres, chênes, érables) dans les propriétés résidentielles, l'<strong>entretien des arbres en bord du Cher</strong> et la <strong>taille de haies</strong>. Habitués aux <strong>terrains en pente</strong> des hauts de la commune et aux jardins avec piscine, nous descendons les branches de façon contrôlée pour protéger vos aménagements.",
    treeTypes: ["Peupliers des bords du Cher", "Cèdres et conifères de parcs", "Chênes et érables", "Arbres fruitiers de jardins", "Haies de charmilles et lauriers"],
    faq: [
      {
        question: "Intervenez-vous sur les propriétés en pente des Hauts de Saint-Avertin ?",
        answer: "Oui, nos élagueurs grimpeurs maîtrisent les interventions sur terrain en pente, fréquentes à Saint-Avertin. Les techniques de grimpe et de rétention permettent de travailler en sécurité, même sur les parcelles difficiles d'accès.",
      },
      {
        question: "Pouvez-vous élaguer les arbres proches du Cher ?",
        answer: "Oui, nous intervenons sur les arbres des berges et propriétés bordant le Cher. Nous respectons la réglementation applicable aux cours d'eau et adaptons nos interventions selon les essences (peupliers, saules, aulnes).",
      },
    ],
  },
  {
    slug: "elagueur-ballan-mire",
    name: "Ballan-Miré",
    postalCode: "37510",
    h1: "Élagueur Ballan-Miré (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Ballan-Miré (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur à Ballan-Miré (37). Commune boisée du sud-ouest tourangeau. Élagage, abattage, dessouchage. Assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "8 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-bourg", "La Pasqueraie", "Le Vau", "Les Bretonnières", "La Châtaigneraie"],
    landmarks: ["château de la Carte", "golf de Touraine", "lac des Bretonnières", "forêt de Ballan"],
    intro: "Ballan-Miré, commune verdoyante du sud-ouest de l'agglomération, est entourée de bois, de la forêt de Ballan et d'espaces naturels comme le lac des Bretonnières. Ses quartiers résidentiels nichés dans la végétation et ses grandes propriétés boisées génèrent une forte demande en élagage et abattage.",
    specificContent: "À <strong>Ballan-Miré</strong>, nous traitons aussi bien les <strong>arbres de forêt</strong> (chênes, châtaigniers) en lisière des propriétés que les <strong>conifères et arbres d'ornement</strong> des lotissements de La Pasqueraie et des Bretonnières. Nous réalisons l'<strong>abattage d'arbres dangereux</strong>, le <strong>dessouchage à la rogneuse</strong> et la <strong>taille de haies champêtres</strong>. Notre proximité avec la commune garantit une réactivité optimale.",
    treeTypes: ["Chênes et châtaigniers de forêt", "Pins et conifères", "Bouleaux et robiniers", "Arbres fruitiers", "Haies champêtres et bocagères"],
    faq: [
      {
        question: "Intervenez-vous en lisière de la forêt de Ballan-Miré ?",
        answer: "Oui, nous intervenons sur les arbres de grande hauteur en limite de forêt et de propriété, fréquents à Ballan-Miré. Nous gérons l'abattage et le démontage des chênes et châtaigniers, ainsi que la sécurisation des sujets penchés ou dépérissants.",
      },
      {
        question: "Faut-il une autorisation pour abattre un arbre à Ballan-Miré ?",
        answer: "Selon la localisation (espace boisé classé, zone protégée du PLU de Tours Métropole), une déclaration préalable peut être nécessaire. Nous vérifions la réglementation applicable à votre parcelle et vous accompagnons dans les démarches si besoin.",
      },
    ],
  },
  {
    slug: "elagueur-fondettes",
    name: "Fondettes",
    postalCode: "37230",
    h1: "Élagueur Fondettes (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Fondettes (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur à Fondettes (37). Coteaux de la Loire rive droite. Élagage, abattage, dessouchage, taille de haies. Assuré 8M€. Crédit d'impôt -50%. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "11 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-bourg", "Vallières", "La Guignière", "Le Moulin à Vent", "Les Hautes Mougonnières"],
    landmarks: ["port de Vallières", "coteaux de la Loire", "prieuré de Fondettes", "bords de Loire"],
    intro: "Fondettes, commune résidentielle de la rive droite de la Loire au nord-ouest de Tours, étage ses quartiers sur les coteaux ligériens. Entre propriétés de caractère, jardins en terrasse et vergers, le patrimoine arboré de Fondettes — du port de Vallières aux hauteurs des Mougonnières — réclame un entretien régulier et adapté aux terrains en pente.",
    specificContent: "À <strong>Fondettes</strong>, nous maîtrisons les contraintes des <strong>coteaux de la Loire</strong> : jardins en terrasse, terrains en dévers, arbres surplombant les habitations basses. Nous réalisons l'<strong>élagage d'arbres de coteau</strong>, l'<strong>entretien des arbres ligériens</strong> (peupliers, frênes) du secteur de Vallières et la <strong>taille de haies</strong>. Notre matériel et nos techniques de grimpe sont adaptés aux accès difficiles caractéristiques de la commune.",
    treeTypes: ["Arbres des coteaux (chênes, frênes)", "Peupliers et saules ligériens", "Conifères et cèdres de propriétés", "Arbres fruitiers et vergers", "Haies de séparation"],
    faq: [
      {
        question: "Êtes-vous équipés pour intervenir sur les coteaux de Fondettes ?",
        answer: "Oui, nous sommes habitués aux terrains en pente et aux jardins en terrasse des coteaux de Fondettes. Nos élagueurs grimpeurs interviennent en sécurité là où la nacelle ne passe pas, avec descente contrôlée des branches.",
      },
      {
        question: "Intervenez-vous dans le secteur de Vallières et de la Guignière ?",
        answer: "Oui, nous intervenons dans tous les quartiers de Fondettes : centre-bourg, Vallières, La Guignière, Le Moulin à Vent, les Mougonnières. Devis gratuit sur place sous 24h, sans frais de déplacement.",
      },
    ],
  },
  {
    slug: "elagueur-la-riche",
    name: "La Riche",
    postalCode: "37520",
    h1: "Élagueur La Riche (37) — Élagage & Abattage d'arbres",
    title: "Élagueur La Riche (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur à La Riche (37), aux portes de Tours. Élagage, abattage, dessouchage, taille de haies. Certifié, assuré 8M€. Crédit d'impôt -50%. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "10 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Pléiade", "Plessis-Botanique", "La Gloriette", "Le Prieuré"],
    landmarks: ["prieuré Saint-Cosme (demeure de Ronsard)", "plaine de la Gloriette", "bords du Cher", "jardin botanique"],
    intro: "La Riche, commune contiguë à Tours entre Loire et Cher, allie tissu urbain dense, quartiers pavillonnaires et grands espaces verts comme la plaine de la Gloriette et le prieuré Saint-Cosme, demeure de Ronsard. Ses jardins de ville et ses arbres d'alignement nécessitent un entretien arboricole soigné en milieu contraint.",
    specificContent: "À <strong>La Riche</strong>, nous intervenons en <strong>milieu urbain dense</strong> : jardins de ville, arbres d'alignement, sujets proches des façades et des réseaux. Nous maîtrisons l'<strong>élagage en zone contrainte</strong>, le <strong>démontage d'arbres</strong> sans dommage pour le voisinage et la <strong>taille de haies</strong> mitoyennes. Aux portes de Tours, à quelques minutes de notre base, nous garantissons une intervention rapide.",
    treeTypes: ["Platanes et tilleuls d'alignement", "Frênes et érables urbains", "Arbres fruitiers de jardins de ville", "Conifères d'ornement", "Haies mitoyennes"],
    faq: [
      {
        question: "Gérez-vous l'élagage en milieu urbain à La Riche ?",
        answer: "Oui, l'élagage en ville est notre spécialité à La Riche : arbres proches des façades, des lignes électriques ou en limite de propriété. Nous travaillons par démontage section par section avec rétention, sans risque pour les biens environnants.",
      },
      {
        question: "Pouvez-vous intervenir sur de petits jardins de ville ?",
        answer: "Absolument. Que vous ayez un seul arbre dans une cour ou un jardin de ville, nous intervenons à La Riche pour l'élagage, l'abattage ou la taille. Le crédit d'impôt de 50% s'applique sur votre résidence principale.",
      },
    ],
  },
  {
    slug: "elagueur-saint-pierre-des-corps",
    name: "Saint-Pierre-des-Corps",
    postalCode: "37700",
    h1: "Élagueur Saint-Pierre-des-Corps (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Saint-Pierre-des-Corps (37) | Élagage & Abattage – Devis Gratuit 24h",
    description: "Élagueur à Saint-Pierre-des-Corps (37). Élagage, abattage, dessouchage, taille de haies. Certifié, assuré RC Pro 8M€. Crédit d'impôt -50%. Devis gratuit 24h. ☎ 06 31 46 43 50",
    population: "16 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Rabaterie", "Les Aubuis", "La Morinerie", "Les Grands Mortiers"],
    landmarks: ["gare TGV de Saint-Pierre-des-Corps", "bords de Loire", "îles de la Loire", "parc de la Morinerie"],
    intro: "Saint-Pierre-des-Corps, ville de l'est de l'agglomération tourangelle traversée par la Loire et marquée par sa grande gare TGV, associe quartiers résidentiels, zones d'activités et espaces naturels ligériens. Des jardins pavillonnaires de La Rabaterie aux arbres des bords de Loire, la commune offre un patrimoine arboré varié à entretenir.",
    specificContent: "À <strong>Saint-Pierre-des-Corps</strong>, nous intervenons dans les <strong>quartiers résidentiels</strong> (La Rabaterie, Les Aubuis, La Morinerie) pour l'<strong>élagage et l'abattage</strong> d'arbres de jardins, ainsi que sur les <strong>peupliers et saules</strong> des bords de Loire et des îles. Nous gérons aussi l'<strong>entretien des espaces verts</strong> pour les copropriétés et professionnels de la commune. Basés à proximité immédiate, nous intervenons rapidement et sans frais de déplacement.",
    treeTypes: ["Peupliers et saules des bords de Loire", "Frênes et érables de jardins", "Conifères et thuyas", "Arbres fruitiers", "Haies de lauriers et troènes"],
    faq: [
      {
        question: "Intervenez-vous sur les arbres des bords de Loire à Saint-Pierre-des-Corps ?",
        answer: "Oui, nous intervenons sur les peupliers, saules et frênes des bords de Loire et des îles. Ces essences à croissance rapide nécessitent un suivi régulier ; nous gérons l'élagage, l'étêtage raisonné et l'abattage des sujets dangereux.",
      },
      {
        question: "Proposez-vous des interventions pour les copropriétés et entreprises ?",
        answer: "Oui, nous travaillons avec les copropriétés, bailleurs et entreprises de Saint-Pierre-des-Corps pour l'entretien de leurs espaces verts : élagage, taille de haies, débroussaillage, abattage. Devis détaillé gratuit sous 24h.",
      },
    ],
  },
];
