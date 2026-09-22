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
    title: "Élagueur Tours (37) | Élagage & Abattage d'arbres – Devis gratuit",
    description: "Élagueur professionnel à Tours (37). Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "136 000 habitants",
    area: "Agglomération Tours Val-de-Loire",
    neighborhoods: ["Tours Centre", "Tours Nord", "Tours Sud", "Saint-Symphorien", "La Rotisserie", "Velpeau", "Les Prébendes", "La Riche", "Saint-Avertin", "Chambray-lès-Tours", "Grammont"],
    landmarks: ["bords de Loire", "vieille ville de Tours", "quartier des halles", "parc de Grandmont"],
    intro: "Tours, préfecture d'Indre-et-Loire et capitale de la Touraine, est une ville verte avec de nombreux parcs, jardins et propriétés arborées. Avec ses quartiers résidentiels boisés comme Saint-Symphorien, ses propriétés à colombages entourées d'arbres anciens et ses allées plantées de tilleuls centenaires, la demande en services d'élagage et d'abattage professionnels est importante. La ville compte plusieurs dizaines de milliers d'arbres d'alignement sur ses boulevards et avenues, auxquels s'ajoutent les arbres privés dans les jardins pavillonnaires des quartiers résidentiels.",
    specificContent: "En tant qu'<strong>élagueur à Tours</strong>, nous connaissons parfaitement les enjeux locaux : respect du PLU de Tours Métropole, protection des arbres remarquables, coordination avec ENEDIS pour les branches proches des réseaux aériens dans les quartiers denses. Nous intervenons dans tous les secteurs de Tours : <strong>Tours Centre</strong> (rue Nationale, place Jean-Jaurès), <strong>Tours Nord</strong> (avenue Grammont, boulevard Preuilly), <strong>Tours Sud</strong> (Joué-lès-Tours, Saint-Avertin), les <strong>Prébendes</strong>, <strong>Velpeau</strong>, <strong>Saint-Symphorien</strong>, <strong>La Rotisserie</strong>, <strong>La Riche</strong> et <strong>Chambray-lès-Tours</strong>. Basés à Joué-lès-Tours, à quelques kilomètres du centre-ville, nous pouvons passer voir votre arbre rapidement et intervenir en priorité en cas d'urgence. Notre connaissance du tissu urbain tourangeau, des espèces arborées locales — platanes, tilleuls, chênes, marronniers — et des contraintes réglementaires du PLU de Tours Métropole nous permet d'accompagner chaque client avec expertise.",
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
        answer: "Oui, nous intervenons dans tous les quartiers de Tours : Centre-ville, Saint-Symphorien, La Rotisserie, Velpeau, Les Prébendes, Tours Nord, Tours Sud, Grammont.",
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
    description: "Élagueur à Amboise (37). Élagage, abattage, dessouchage. Intervention rapide en Val de Loire. Devis gratuit sur place. ☎ 06 31 46 43 50",
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
        answer: "Oui, nous intervenons à Amboise et dans toutes les communes environnantes : Nazelles-Négron, Pocé-sur-Cisse, Chargé, Mosnes, Limeray, Saint-Ouen-les-Vignes.",
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
    title: "Élagueur Joué-lès-Tours (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur professionnel à Joué-lès-Tours (37). Entreprise locale. Élagage, abattage, dessouchage. Devis gratuit. ☎ 06 31 46 43 50",
    population: "37 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Rabière", "Les Grands Mortiers", "Bois Charrier", "La Bedonnière"],
    landmarks: ["parc de Pinçonnière", "étang de Fontenay", "forêt de Joué"],
    intro: "Joué-lès-Tours, deuxième ville de l'agglomération tourangelle avec ses 37 000 habitants, est notre commune d'implantation. Ville résidentielle avec de nombreux pavillons et jardins, Joué-lès-Tours est l'une de nos zones d'intervention prioritaires. Nous y passons très régulièrement.",
    specificContent: "Installés à <strong>Joué-lès-Tours</strong>, nous connaissons parfaitement chaque quartier de la ville : les jardins pavillonnaires de <strong>La Rabière</strong>, les propriétés boisées du <strong>Bois Charrier</strong>, les espaces verts autour de l'<strong>étang de Fontenay</strong>. Être sur place nous permet de passer voir votre arbre rapidement.",
    treeTypes: ["Conifères et thuyas", "Chênes et frênes", "Arbres fruitiers des jardins", "Haies de lauriers", "Acacias et robiniers"],
    faq: [
      {
        question: "Êtes-vous vraiment basés à Joué-lès-Tours ?",
        answer: "Oui, notre entreprise est implantée au 2 rue du Manoir à Joué-lès-Tours (37300). Cette proximité nous permet de passer voir votre arbre rapidement, dans toute la commune et l'agglomération tourangelle.",
      },
      {
        question: "Intervenez-vous aussi dans les secteurs de La Rabière et Bois Charrier ?",
        answer: "Absolument, nous intervenons dans tous les quartiers de Joué-lès-Tours : La Rabière, Bois Charrier, Les Grands Mortiers, La Bedonnière, Centre-ville, zones pavillonnaires. Devis gratuit sur place.",
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
    description: "Élagueur à Saint-Cyr-sur-Loire (37). Commune résidentielle boisée. Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
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
        answer: "Oui, nous maîtrisons les interventions sur terrain en pente, fréquentes dans les hauts de Saint-Cyr. Les techniques de grimpe qui permettent de travailler en sécurité sur tous types de terrains.",
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
    description: "Élagueur à Montlouis-sur-Loire (37). Vignoble et jardins de Touraine. Élagage, abattage, dessouchage. Devis gratuit sur place. ☎ 06 31 46 43 50",
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
    description: "Élagueur professionnel en Indre-et-Loire (37). Élagage, abattage, dessouchage dans tout le département. Devis gratuit. ☎ 06 31 46 43 50",
    population: "610 000 habitants",
    area: "Département Indre-et-Loire",
    neighborhoods: ["Tours", "Joué-lès-Tours", "Amboise", "Chinon", "Loches", "Langeais", "Azay-le-Rideau"],
    landmarks: ["châteaux de la Loire", "vignoble AOC Touraine", "forêts de Touraine", "Val de Loire UNESCO"],
    intro: "L'Indre-et-Loire, département au cœur du Val de Loire classé au patrimoine mondial de l'UNESCO, possède un patrimoine arboré exceptionnel : forêts domaniales, parcs de châteaux, vignobles et jardins remarquables. En tant qu'entreprise d'élagage implantée dans le 37, nous intervenons dans tout le département.",
    specificContent: "Depuis notre base de <strong>Joué-lès-Tours</strong>, nous couvrons tout l'<strong>Indre-et-Loire</strong> : Nord du département (Langeais, Fondettes, Saint-Patrice), Est (Amboise, Bléré, Véretz), Sud (Montbazon, Azay-le-Rideau, Sainte-Maure-de-Touraine), Ouest (Chinon, Savonnières) et bien sûr l'agglomération tourangelle.",
    treeTypes: ["Chênes et châtaigniers des forêts", "Platanes des allées", "Arbres des parcs de châteaux", "Peupliers ligériens", "Vignes et arbres des domaines viticoles"],
    faq: [
      {
        question: "Intervenez-vous dans tout le département 37 ou seulement autour de Tours ?",
        answer: "Nous intervenons dans tout l'Indre-et-Loire dans un rayon d'environ 50 km autour de notre base, ce qui couvre la quasi-totalité du département. Cela inclut Chinon, Loches, Amboise, Langeais, Azay-le-Rideau, Montbazon, Bléré, et toutes les communes entre.",
      },
      {
        question: "Travaillez-vous aussi sur les propriétés de châteaux et domaines viticoles ?",
        answer: "Oui, nous intervenons aussi sur les grandes propriétés d'Indre-et-Loire : parcs, domaines viticoles, propriétés anciennes. Nous adaptons notre approche aux exigences spécifiques de ces sites (respect du patrimoine, contraintes paysagères).",
      },
    ],
  },
  {
    slug: "elagueur-chambray-les-tours",
    name: "Chambray-lès-Tours",
    postalCode: "37170",
    h1: "Élagueur Chambray-lès-Tours (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Chambray-lès-Tours (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur professionnel à Chambray-lès-Tours (37). Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "11 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-bourg", "Les Perrières", "La Branchoire", "Le Petit Cher", "La Vrillonnerie"],
    landmarks: ["CHRU Trousseau", "vallée du Petit Cher", "zone commerciale de la Vrillonnerie", "parc de la Boisnière"],
    intro: "Chambray-lès-Tours, commune dynamique au sud de l'agglomération tourangelle, mêle quartiers pavillonnaires verdoyants, grand pôle hospitalier (CHRU Trousseau) et vastes zones d'activités. Ses lotissements résidentiels du Petit Cher et des Perrières comptent de nombreux jardins arborés et haies qui demandent un entretien régulier.",
    specificContent: "À <strong>Chambray-lès-Tours</strong>, nous intervenons aussi bien dans les <strong>quartiers pavillonnaires</strong> (Les Perrières, La Branchoire) que sur les copropriétés et les abords de la <strong>vallée du Petit Cher</strong>. Nous prenons en charge l'<strong>élagage d'arbres d'ornement</strong>, l'<strong>abattage sécurisé</strong> à proximité des habitations et la <strong>taille de haies</strong> de séparation, très présentes dans les lotissements chambraisiens. Situés à Joué-lès-Tours, commune limitrophe, nous pouvons passer rapidement.",
    treeTypes: ["Chênes et frênes des coteaux", "Conifères et thuyas de jardins", "Bouleaux et érables d'ornement", "Pommiers et poiriers", "Haies de lauriers et troènes"],
    faq: [
      {
        question: "Intervenez-vous près du CHRU Trousseau et des zones résidentielles ?",
        answer: "Oui, nous intervenons dans tout Chambray-lès-Tours, y compris les quartiers résidentiels proches du CHRU Trousseau et de la zone de la Vrillonnerie. Nous adaptons nos techniques (démontage section par section) lorsque les arbres sont proches des habitations ou des réseaux.",
      },
      {
        question: "Proposez-vous des contrats d'entretien à Chambray-lès-Tours ?",
        answer: "Oui, nous proposons des contrats d'entretien annuel pour les particuliers, copropriétés et professionnels de Chambray-lès-Tours : taille de haies, élagage d'entretien, débroussaillage. Devis gratuit sur place.",
      },
    ],
  },
  {
    slug: "elagueur-saint-avertin",
    name: "Saint-Avertin",
    postalCode: "37550",
    h1: "Élagueur Saint-Avertin (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Saint-Avertin (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur à Saint-Avertin (37). Commune résidentielle sur le Cher. Élagage, abattage, dessouchage, taille de haies. Devis gratuit. ☎ 06 31 46 43 50",
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
        answer: "Oui, nous maîtrisons les interventions sur terrain en pente, fréquentes à Saint-Avertin. Les techniques de grimpe et de rétention permettent de travailler en sécurité, même sur les parcelles difficiles d'accès.",
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
    title: "Élagueur Ballan-Miré (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur à Ballan-Miré (37). Commune boisée du sud-ouest tourangeau. Élagage, abattage, dessouchage. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "8 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-bourg", "La Pasqueraie", "Le Vau", "Les Bretonnières", "La Châtaigneraie"],
    landmarks: ["château de la Carte", "golf de Touraine", "lac des Bretonnières", "forêt de Ballan"],
    intro: "Ballan-Miré, commune verdoyante du sud-ouest de l'agglomération, est entourée de bois, de la forêt de Ballan et d'espaces naturels comme le lac des Bretonnières. Ses quartiers résidentiels nichés dans la végétation et ses grandes propriétés boisées génèrent une forte demande en élagage et abattage.",
    specificContent: "À <strong>Ballan-Miré</strong>, nous traitons aussi bien les <strong>arbres de forêt</strong> (chênes, châtaigniers) en lisière des propriétés que les <strong>conifères et arbres d'ornement</strong> des lotissements de La Pasqueraie et des Bretonnières. Nous réalisons l'<strong>abattage d'arbres dangereux</strong>, le <strong>dessouchage à la rogneuse</strong> et la <strong>taille de haies champêtres</strong>. Ballan-Miré est à quelques minutes de notre base.",
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
    title: "Élagueur Fondettes (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur à Fondettes (37). Coteaux de la Loire rive droite. Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
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
        answer: "Oui, nous sommes habitués aux terrains en pente et aux jardins en terrasse des coteaux de Fondettes. Nous intervenons en grimpe, en sécurité là où la nacelle ne passe pas, avec descente contrôlée des branches.",
      },
      {
        question: "Intervenez-vous dans le secteur de Vallières et de la Guignière ?",
        answer: "Oui, nous intervenons dans tous les quartiers de Fondettes : centre-bourg, Vallières, La Guignière, Le Moulin à Vent, les Mougonnières. Devis gratuit sur place.",
      },
    ],
  },
  {
    slug: "elagueur-la-riche",
    name: "La Riche",
    postalCode: "37520",
    h1: "Élagueur La Riche (37) — Élagage & Abattage d'arbres",
    title: "Élagueur La Riche (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur à La Riche (37), aux portes de Tours. Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "10 500 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Pléiade", "Plessis-Botanique", "La Gloriette", "Le Prieuré"],
    landmarks: ["prieuré Saint-Cosme (demeure de Ronsard)", "plaine de la Gloriette", "bords du Cher", "jardin botanique"],
    intro: "La Riche, commune contiguë à Tours entre Loire et Cher, allie tissu urbain dense, quartiers pavillonnaires et grands espaces verts comme la plaine de la Gloriette et le prieuré Saint-Cosme, demeure de Ronsard. Ses jardins de ville et ses arbres d'alignement nécessitent un entretien arboricole soigné en milieu contraint.",
    specificContent: "À <strong>La Riche</strong>, nous intervenons en <strong>milieu urbain dense</strong> : jardins de ville, arbres d'alignement, sujets proches des façades et des réseaux. Nous maîtrisons l'<strong>élagage en zone contrainte</strong>, le <strong>démontage d'arbres</strong> sans dommage pour le voisinage et la <strong>taille de haies</strong> mitoyennes. Aux portes de Tours, La Riche est à quelques minutes de notre base.",
    treeTypes: ["Platanes et tilleuls d'alignement", "Frênes et érables urbains", "Arbres fruitiers de jardins de ville", "Conifères d'ornement", "Haies mitoyennes"],
    faq: [
      {
        question: "Gérez-vous l'élagage en milieu urbain à La Riche ?",
        answer: "Oui, l'élagage en ville est notre spécialité à La Riche : arbres proches des façades, des lignes électriques ou en limite de propriété. Nous travaillons par démontage section par section avec rétention, sans risque pour les biens environnants.",
      },
      {
        question: "Pouvez-vous intervenir sur de petits jardins de ville ?",
        answer: "Absolument. Que vous ayez un seul arbre dans une cour ou un jardin de ville, nous intervenons à La Riche pour l'élagage, l'abattage ou la taille. Le devis est gratuit, même pour un seul arbre.",
      },
    ],
  },
  {
    slug: "elagueur-saint-pierre-des-corps",
    name: "Saint-Pierre-des-Corps",
    postalCode: "37700",
    h1: "Élagueur Saint-Pierre-des-Corps (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Saint-Pierre-des-Corps (37) | Élagage & Abattage – Devis gratuit",
    description: "Élagueur à Saint-Pierre-des-Corps (37). Élagage, abattage, dessouchage, taille de haies. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "16 000 habitants",
    area: "Tours Métropole Val de Loire",
    neighborhoods: ["Centre-ville", "La Rabaterie", "Les Aubuis", "La Morinerie", "Les Grands Mortiers"],
    landmarks: ["gare TGV de Saint-Pierre-des-Corps", "bords de Loire", "îles de la Loire", "parc de la Morinerie"],
    intro: "Saint-Pierre-des-Corps, ville de l'est de l'agglomération tourangelle traversée par la Loire et marquée par sa grande gare TGV, associe quartiers résidentiels, zones d'activités et espaces naturels ligériens. Des jardins pavillonnaires de La Rabaterie aux arbres des bords de Loire, la commune offre un patrimoine arboré varié à entretenir.",
    specificContent: "À <strong>Saint-Pierre-des-Corps</strong>, nous intervenons dans les <strong>quartiers résidentiels</strong> (La Rabaterie, Les Aubuis, La Morinerie) pour l'<strong>élagage et l'abattage</strong> d'arbres de jardins, ainsi que sur les <strong>peupliers et saules</strong> des bords de Loire et des îles. Nous gérons aussi l'<strong>entretien des espaces verts</strong> pour les copropriétés et professionnels de la commune. Basés à proximité, nous pouvons passer rapidement.",
    treeTypes: ["Peupliers et saules des bords de Loire", "Frênes et érables de jardins", "Conifères et thuyas", "Arbres fruitiers", "Haies de lauriers et troènes"],
    faq: [
      {
        question: "Intervenez-vous sur les arbres des bords de Loire à Saint-Pierre-des-Corps ?",
        answer: "Oui, nous intervenons sur les peupliers, saules et frênes des bords de Loire et des îles. Ces essences à croissance rapide nécessitent un suivi régulier ; nous gérons l'élagage, la réduction de couronne et l'abattage des sujets dangereux.",
      },
      {
        question: "Proposez-vous des interventions pour les copropriétés et entreprises ?",
        answer: "Oui, nous travaillons avec les copropriétés, bailleurs et entreprises de Saint-Pierre-des-Corps pour l'entretien de leurs espaces verts : élagage, taille de haies, débroussaillage, abattage. Devis détaillé gratuit.",
      },
    ],
  },
  {
    slug: "elagueur-veigne",
    name: "Veigné",
    postalCode: "37250",
    h1: "Élagueur Veigné (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Veigné (37250) | Élagage, abattage, dessouchage – Devis gratuit",
    description: "Élagueur à Veigné (37250), dans la vallée de l'Indre : élagage, abattage, dessouchage, taille de haies. Entreprise dont le siège est à Veigné. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 6 000 habitants",
    area: "Vallée de l'Indre, sud de Tours",
    neighborhoods: ["Centre-bourg", "Bords de l'Indre", "Lotissements résidentiels", "Hameaux et écarts", "Limite de Montbazon"],
    landmarks: ["vallée de l'Indre", "moulins de l'Indre", "coteaux boisés"],
    intro: "Veigné, commune verdoyante traversée par l'Indre au sud de l'agglomération tourangelle, mêle bourg ancien, lotissements récents et propriétés en bordure de coteaux boisés. Les grands jardins et les arbres des berges y demandent un entretien régulier.",
    specificContent: "Le siège de l'entreprise est à <strong>Veigné</strong> : c'est ici que nous sommes le plus rapidement sur place. Nous intervenons pour l'<strong>élagage des grands arbres</strong> des propriétés (chênes, noyers, cèdres), l'<strong>abattage d'arbres</strong> fragilisés près des maisons, l'entretien des <strong>peupliers, saules et frênes des bords de l'Indre</strong> et la <strong>taille des haies</strong> des lotissements. Les arbres situés en zone inondable ou en bord de rivière demandent des précautions particulières que nous connaissons bien.",
    treeTypes: ["Peupliers, saules et frênes des bords de l'Indre", "Chênes et noyers des propriétés", "Cèdres et conifères", "Arbres fruitiers", "Haies de thuyas et de lauriers"],
    faq: [
      {
        question: "Êtes-vous vraiment basés à Veigné ?",
        answer: "Oui, le siège de l'entreprise est déclaré à Veigné. C'est l'une des communes où nous pouvons passer voir votre arbre le plus rapidement.",
      },
      {
        question: "Intervenez-vous sur les arbres des bords de l'Indre ?",
        answer: "Oui : peupliers, saules, frênes et aulnes des berges. Nous adaptons l'intervention aux contraintes du bord de rivière (sol meuble, accès, évacuation du bois) et à la réglementation applicable aux cours d'eau.",
      },
    ],
  },
  {
    slug: "elagueur-montbazon",
    name: "Montbazon",
    postalCode: "37250",
    h1: "Élagueur Montbazon (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Montbazon (37250) | Élagage, abattage – Devis gratuit",
    description: "Élagueur à Montbazon (37250) : élagage, abattage et démontage d'arbres, dessouchage, taille de haies dans la vallée de l'Indre. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 4 000 habitants",
    area: "Vallée de l'Indre, sud de Tours",
    neighborhoods: ["Centre historique", "Bords de l'Indre", "Coteaux", "Quartiers pavillonnaires", "Limite de Veigné et Sorigny"],
    landmarks: ["forteresse de Montbazon", "vallée de l'Indre", "coteaux boisés"],
    intro: "Montbazon, petite ville dominée par sa forteresse médiévale, s'étire le long de l'Indre au sud de Tours. Entre centre ancien, coteaux boisés et quartiers pavillonnaires, les jardins y sont souvent en pente et bordés de grands arbres.",
    specificContent: "À <strong>Montbazon</strong>, nous intervenons régulièrement sur des <strong>jardins en pente</strong> et des terrains à l'accès étroit, où la <strong>grimpe</strong> est la seule solution : pas d'engin, les branches sont descendues à la corde. Nous réalisons l'<strong>élagage</strong> et le <strong>démontage d'arbres</strong> près des maisons, l'entretien des arbres des <strong>bords de l'Indre</strong> et le <strong>dessouchage</strong> à la rogneuse. Aux abords de la forteresse, certaines interventions peuvent nécessiter l'avis de l'Architecte des Bâtiments de France : nous vous indiquons la démarche.",
    treeTypes: ["Chênes et charmes des coteaux", "Peupliers et saules des berges", "Tilleuls et marronniers", "Conifères de jardins", "Arbres fruitiers"],
    faq: [
      {
        question: "Faut-il une autorisation pour abattre un arbre près de la forteresse de Montbazon ?",
        answer: "Aux abords d'un monument historique, les travaux modifiant l'aspect des lieux peuvent être soumis à l'avis de l'Architecte des Bâtiments de France. Renseignez-vous en mairie avant l'abattage ; nous vous aidons à préparer la demande si besoin.",
      },
      {
        question: "Pouvez-vous intervenir dans un jardin en pente ?",
        answer: "Oui. Le travail en grimpe permet d'intervenir sans engin, même sur les terrains en pente ou en terrasses fréquents à Montbazon.",
      },
    ],
  },
  {
    slug: "elagueur-monts",
    name: "Monts",
    postalCode: "37260",
    h1: "Élagueur Monts (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Monts (37260) | Élagage, abattage, dessouchage – Devis gratuit",
    description: "Élagueur à Monts (37260) : élagage, abattage, dessouchage et taille de haies dans la vallée de l'Indre, entre Joué-lès-Tours et Sorigny. Devis gratuit. ☎ 06 31 46 43 50",
    population: "environ 7 500 habitants",
    area: "Vallée de l'Indre, sud-ouest de Tours",
    neighborhoods: ["Centre-bourg", "Bords de l'Indre", "Lotissements", "Hameaux", "Secteur de Candé"],
    landmarks: ["vallée de l'Indre", "domaine de Candé", "bois et forêts du sud tourangeau"],
    intro: "Monts, commune résidentielle au sud-ouest de Joué-lès-Tours, s'étend de la vallée de l'Indre aux plateaux boisés. Ses lotissements et ses propriétés en lisière de bois comptent de nombreux arbres de haut jet et de longues haies.",
    specificContent: "À <strong>Monts</strong>, nous intervenons pour l'<strong>élagage et l'abattage</strong> d'arbres de lisière (chênes, châtaigniers, pins) qui surplombent les maisons, la <strong>taille des haies</strong> des lotissements et le <strong>dessouchage</strong> après abattage. Pour les propriétés en bordure de bois, nous vérifions l'état sanitaire des arbres proches des habitations, particulièrement exposés aux coups de vent.",
    treeTypes: ["Chênes et châtaigniers de lisière", "Pins et conifères", "Peupliers des bords de l'Indre", "Bouleaux et érables d'ornement", "Haies de thuyas et charmilles"],
    faq: [
      {
        question: "Un arbre de lisière penche vers ma maison, que faire ?",
        answer: "Appelez-nous pour un diagnostic : selon l'ancrage et l'état du bois, une réduction de couronne peut suffire, ou un démontage sécurisé par tronçons sera nécessaire. Si l'arbre appartient au voisin, c'est à son propriétaire de le faire sécuriser.",
      },
      {
        question: "Intervenez-vous rapidement à Monts ?",
        answer: "Oui, Monts est à quelques minutes de Joué-lès-Tours et de Veigné. Nous pouvons passer voir votre arbre rapidement pour un devis gratuit.",
      },
    ],
  },
  {
    slug: "elagueur-esvres",
    name: "Esvres-sur-Indre",
    postalCode: "37320",
    h1: "Élagueur Esvres-sur-Indre (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Esvres-sur-Indre (37320) | Élagage, abattage – Devis gratuit",
    description: "Élagueur à Esvres-sur-Indre (37320) : élagage, abattage, dessouchage, taille de haies. Grands jardins et bords de l'Indre. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 5 700 habitants",
    area: "Vallée de l'Indre, sud-est de Tours",
    neighborhoods: ["Centre-bourg", "Bords de l'Indre", "Hameaux", "Lotissements", "Plateau agricole"],
    landmarks: ["vallée de l'Indre", "plateaux agricoles", "bois du sud-est tourangeau"],
    intro: "Esvres-sur-Indre, commune au caractère rural à quelques kilomètres de Veigné et Montbazon, compte de grands terrains, des hameaux et des propriétés en bord d'Indre. Les arbres y sont souvent de grande taille et les haies champêtres nombreuses.",
    specificContent: "À <strong>Esvres</strong>, nous intervenons sur de <strong>grands terrains</strong> : élagage de chênes et de noyers, <strong>abattage</strong> d'arbres morts ou dangereux, entretien des <strong>haies champêtres</strong> et des arbres des berges de l'Indre, <strong>dessouchage</strong> et broyage des branches sur place. Le bois peut être débité en bûches et laissé sur place pour votre chauffage.",
    treeTypes: ["Chênes et noyers", "Peupliers et frênes des berges", "Haies champêtres", "Arbres fruitiers anciens", "Conifères"],
    faq: [
      {
        question: "Pouvez-vous laisser le bois sur place après un abattage ?",
        answer: "Oui, le tronc et les grosses branches peuvent être débités en bûches et rangés sur place. Les petites branches sont broyées ; le broyat peut servir de paillage.",
      },
      {
        question: "Entretenez-vous les haies champêtres ?",
        answer: "Oui, nous taillons et rabattons les haies champêtres. Il est recommandé d'éviter la taille entre mi-mars et fin juillet pour respecter la nidification des oiseaux.",
      },
    ],
  },
  {
    slug: "elagueur-vouvray",
    name: "Vouvray",
    postalCode: "37210",
    h1: "Élagueur Vouvray (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Vouvray (37210) | Élagage, abattage sur coteaux – Devis gratuit",
    description: "Élagueur à Vouvray (37210) : élagage, abattage et démontage d'arbres sur les coteaux, propriétés viticoles et bords de Loire. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 3 000 habitants",
    area: "Coteaux de la Loire, rive droite",
    neighborhoods: ["Bourg", "Coteaux et caves", "Vallée Coquette", "Bords de Loire", "Domaines viticoles"],
    landmarks: ["vignoble AOC Vouvray", "coteaux calcaires et caves troglodytiques", "bords de Loire"],
    intro: "Vouvray, célèbre pour son vignoble, s'étage sur les coteaux calcaires de la rive droite de la Loire. Maisons troglodytiques, propriétés viticoles et jardins en terrasses y cohabitent avec de grands arbres, souvent difficiles d'accès.",
    specificContent: "À <strong>Vouvray</strong>, les arbres poussent souvent <strong>au-dessus des caves</strong> ou en bord de coteau : un abattage mal maîtrisé peut abîmer une toiture ou un mur de tuffeau. Nous travaillons en <strong>grimpe</strong> et descendons les branches à la corde, sans engin sur les terrasses. Nous intervenons aussi pour les <strong>domaines viticoles</strong> (arbres d'alignement, haies, abords des chais) et sur les arbres des <strong>bords de Loire</strong>.",
    treeTypes: ["Chênes et robiniers des coteaux", "Noyers", "Cèdres et pins des propriétés", "Peupliers des bords de Loire", "Arbres fruitiers"],
    faq: [
      {
        question: "Pouvez-vous abattre un arbre situé au-dessus d'une cave troglodytique ?",
        answer: "Oui, par démontage : l'arbre est découpé depuis le haut et chaque tronçon est retenu à la corde, pour ne rien laisser tomber sur le coteau ou les toitures. La souche peut être laissée pour ne pas fragiliser le terrain.",
      },
      {
        question: "Intervenez-vous pour les domaines viticoles ?",
        answer: "Oui : élagage et abattage des arbres de la propriété, taille des haies, entretien des abords. Nous nous adaptons au calendrier des vendanges.",
      },
    ],
  },
  {
    slug: "elagueur-rochecorbon",
    name: "Rochecorbon",
    postalCode: "37210",
    h1: "Élagueur Rochecorbon (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Rochecorbon (37210) | Élagage, abattage – Devis gratuit",
    description: "Élagueur à Rochecorbon (37210) : élagage, abattage, dessouchage sur les coteaux et jardins en terrasses, aux portes de Tours. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 3 200 habitants",
    area: "Coteaux de la Loire, rive droite",
    neighborhoods: ["Bourg", "Coteaux", "Bords de Loire", "Vallons", "Plateau"],
    landmarks: ["Lanterne de Rochecorbon", "coteaux calcaires", "bords de Loire"],
    intro: "Rochecorbon, dominée par sa Lanterne, s'accroche aux coteaux de la rive droite de la Loire, juste à l'est de Tours. Ses propriétés en terrasses et ses vallons boisés abritent de grands arbres souvent difficiles d'accès.",
    specificContent: "À <strong>Rochecorbon</strong>, beaucoup de jardins ne sont accessibles qu'à pied, par des escaliers ou des allées étroites. Le travail en <strong>grimpe</strong> permet d'<strong>élaguer</strong> ou de <strong>démonter</strong> les arbres sans engin, en retenant les branches à la corde au-dessus des toitures et des murs en tuffeau. Nous intervenons aussi sur les arbres des <strong>bords de Loire</strong> et assurons la <strong>taille des haies</strong> et le <strong>dessouchage</strong>.",
    treeTypes: ["Chênes et robiniers des coteaux", "Cèdres et pins", "Noyers", "Peupliers et saules des bords de Loire", "Haies de lauriers"],
    faq: [
      {
        question: "Mon jardin n'est accessible que par un escalier, pouvez-vous intervenir ?",
        answer: "Oui. En grimpe, nous n'avons besoin d'aucun engin : le matériel se porte à la main et les branches sont évacuées au fur et à mesure.",
      },
      {
        question: "Rochecorbon est-elle dans votre zone ?",
        answer: "Oui, Rochecorbon est à une vingtaine de minutes de notre base. Devis gratuit sur place.",
      },
    ],
  },
  {
    slug: "elagueur-luynes",
    name: "Luynes",
    postalCode: "37230",
    h1: "Élagueur Luynes (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Luynes (37230) | Élagage, abattage, dessouchage – Devis gratuit",
    description: "Élagueur à Luynes (37230) : élagage, abattage, dessouchage et taille de haies, des coteaux de la Loire aux lotissements. Devis gratuit sur place. ☎ 06 31 46 43 50",
    population: "environ 5 000 habitants",
    area: "Coteaux de la Loire, ouest de Tours",
    neighborhoods: ["Bourg ancien", "Coteaux", "Lotissements", "Bords de Loire", "Plateau boisé"],
    landmarks: ["château de Luynes", "aqueduc gallo-romain", "coteaux de la Loire"],
    intro: "Luynes, entre Fondettes et Langeais sur la rive droite de la Loire, est connue pour son château et son aqueduc gallo-romain. La commune associe bourg ancien sur le coteau, lotissements et propriétés en lisière de bois.",
    specificContent: "À <strong>Luynes</strong>, nous intervenons sur les <strong>arbres de coteau</strong> et de lisière qui surplombent les maisons, l'<strong>élagage</strong> et l'<strong>abattage</strong> dans les jardins des lotissements, la <strong>taille des haies</strong> et le <strong>dessouchage</strong>. Dans le bourg ancien et aux abords des monuments protégés, certaines interventions peuvent nécessiter une démarche en mairie : nous vous indiquons quoi vérifier.",
    treeTypes: ["Chênes et châtaigniers", "Cèdres et pins", "Tilleuls et marronniers", "Peupliers des bords de Loire", "Arbres fruitiers"],
    faq: [
      {
        question: "Faut-il une autorisation pour abattre un arbre dans le bourg de Luynes ?",
        answer: "Aux abords d'un monument historique, l'avis de l'Architecte des Bâtiments de France peut être requis. Renseignez-vous en mairie ; nous vous aidons à préparer la démarche.",
      },
      {
        question: "Proposez-vous le dessouchage après l'abattage ?",
        answer: "Oui, la souche peut être rognée à la rogneuse dans la foulée, pour engazonner ou replanter rapidement.",
      },
    ],
  },
  {
    slug: "elagueur-azay-le-rideau",
    name: "Azay-le-Rideau",
    postalCode: "37190",
    h1: "Élagueur Azay-le-Rideau (37) — Élagage & Abattage d'arbres",
    title: "Élagueur Azay-le-Rideau (37190) | Élagage, abattage – Devis gratuit",
    description: "Élagueur à Azay-le-Rideau (37190) et environs : élagage, abattage, dessouchage, taille de haies, grands jardins et bords de l'Indre. Devis gratuit. ☎ 06 31 46 43 50",
    population: "environ 3 500 habitants",
    area: "Vallée de l'Indre, ouest du département",
    neighborhoods: ["Centre historique", "Bords de l'Indre", "Hameaux", "Lotissements", "Communes voisines (Cheillé, Saché, Lignières-de-Touraine)"],
    landmarks: ["château d'Azay-le-Rideau", "vallée de l'Indre", "forêt de Chinon toute proche"],
    intro: "Azay-le-Rideau, célèbre pour son château posé sur l'Indre, est entourée de hameaux, de grandes propriétés et de bois. Les jardins y sont souvent vastes, avec de grands arbres et de longues haies.",
    specificContent: "À <strong>Azay-le-Rideau</strong> et dans les communes voisines (Cheillé, Saché, Lignières-de-Touraine), nous intervenons pour l'<strong>élagage de grands arbres</strong>, l'<strong>abattage</strong> et le <strong>démontage</strong> près des habitations, l'entretien des arbres des <strong>bords de l'Indre</strong>, la <strong>taille des haies</strong> et le <strong>dessouchage</strong>. Le centre historique est situé aux abords d'un monument historique : un abattage visible depuis l'espace public peut nécessiter une démarche préalable.",
    treeTypes: ["Chênes et châtaigniers", "Peupliers et saules des bords de l'Indre", "Cèdres et séquoias de parcs", "Noyers", "Haies champêtres"],
    faq: [
      {
        question: "Intervenez-vous jusqu'à Azay-le-Rideau ?",
        answer: "Oui, Azay-le-Rideau et ses environs font partie de notre zone d'intervention, à une trentaine de minutes de notre base.",
      },
      {
        question: "Pouvez-vous élaguer un très grand arbre de parc ?",
        answer: "Oui. En grimpe, nous intervenons sur les grands sujets (cèdres, chênes, séquoias) en taillant de manière raisonnée pour préserver l'arbre.",
      },
    ],
  },
];
