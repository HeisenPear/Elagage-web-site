/**
 * Contenu des pages services (/services/[slug]/).
 * Aucun prix : chaque intervention fait l'objet d'un devis gratuit sur place.
 */

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServicePage {
  slug: string;
  name: string;
  shortName: string;
  icon: 'tree' | 'bolt' | 'stump' | 'hedge' | 'leaf' | 'apple';
  title: string;
  description: string;
  h1: string;
  lead: string;
  image?: { src: string; alt: string; width: number; height: number };
  signs: string[];
  techniques: { title: string; text: string }[];
  includes: string[];
  sections: ServiceSection[];
  faq: { question: string; answer: string }[];
  relatedPosts: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'elagage-arbres',
    name: "Élagage d'arbres",
    shortName: 'Élagage',
    icon: 'tree',
    title: "Élagage d'arbres à Tours (37) – Élagueur grimpeur | Devis gratuit",
    description:
      "Élagage d'arbres à Tours et en Indre-et-Loire par un élagueur grimpeur : taille douce, allègement, branches mortes, arbres près des toitures. Devis gratuit sur place. ☎ 06 31 46 43 50",
    h1: "Élagage d'arbres à Tours et en Indre-et-Loire",
    lead:
      "Un arbre trop grand, qui fait de l'ombre, touche la toiture ou perd des branches ? Rudy intervient en grimpe, avec cordes et harnais, pour tailler proprement sans abîmer l'arbre — même dans les jardins étroits où aucune nacelle ne passe.",
    image: {
      src: '/images/chantiers/elagueur-grimpeur-demontage-conifere.webp',
      alt: "Élagueur grimpeur encordé en intervention dans un grand conifère, tronçonneuse en main",
      width: 1200,
      height: 742,
    },
    signs: [
      'Des branches frottent la toiture, la façade ou les gouttières',
      "L'arbre fait trop d'ombre sur la maison, la terrasse ou le potager",
      'Des branches mortes ou cassées pendent au-dessus du passage',
      'Des branches dépassent chez le voisin ou sur la voie publique',
      "Des branches s'approchent des câbles électriques ou téléphoniques",
      "L'arbre a pris beaucoup de volume et inquiète par grand vent",
    ],
    techniques: [
      {
        title: 'Taille douce (taille raisonnée)',
        text: "On retire les branches mal placées, mortes ou gênantes en coupant au bon endroit, au ras d'une branche de relais. L'arbre garde sa forme naturelle et cicatrise correctement.",
      },
      {
        title: 'Allègement et éclaircie',
        text: "On réduit la densité du houppier pour laisser passer la lumière et diminuer la prise au vent, sans changer la silhouette de l'arbre.",
      },
      {
        title: 'Réduction de couronne',
        text: "Quand l'arbre est devenu trop grand pour son emplacement, on raccourcit progressivement les charpentières sur des tire-sève, plutôt que de le « raser ».",
      },
      {
        title: 'Taille de sécurité',
        text: "Suppression du bois mort, des branches fendues ou mal ancrées au-dessus d'une maison, d'une allée ou d'une voiture. Les branches lourdes sont descendues à la corde.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits',
      'Intervention en grimpe (cordes, harnais), nacelle non nécessaire',
      'Rétention des branches au-dessus des toitures, clôtures et massifs',
      'Broyage et évacuation des branches, chantier nettoyé',
      'Bois débité laissé sur place si vous le souhaitez',
    ],
    sections: [
      {
        heading: "Pourquoi l'élagage doit rester raisonné",
        paragraphs: [
          "Un arbre ne se taille pas comme une haie. Les coupes trop grosses ou mal placées ouvrent des portes aux champignons et provoquent des repousses nombreuses et fragiles. C'est pourquoi nous ne pratiquons pas l'étêtage (couper toutes les branches à la même hauteur) : il affaiblit l'arbre, le rend plus dangereux quelques années plus tard et oblige à recommencer souvent.",
          "Notre approche : couper moins, mais au bon endroit, et programmer si besoin la réduction sur deux ou trois saisons pour respecter la santé de l'arbre. Chênes, platanes, tilleuls, érables, bouleaux, cèdres, noyers, saules… chaque essence réagit différemment et Rudy adapte la taille en conséquence.",
        ],
      },
      {
        heading: 'Élagage en ville : jardins étroits, maisons mitoyennes, lignes',
        paragraphs: [
          "À Tours, Saint-Cyr-sur-Loire ou La Riche, beaucoup de jardins sont accessibles uniquement par un couloir ou un portillon. La grimpe permet d'intervenir partout : pas besoin de faire entrer un engin, et votre pelouse n'est pas marquée.",
          "Pour les branches situées près des lignes électriques, les distances de sécurité imposent des précautions particulières ; selon le cas, une mise hors tension par Enedis peut être nécessaire. Nous vous indiquons la démarche lors de la visite.",
        ],
      },
      {
        heading: 'À quelle période élaguer ?',
        paragraphs: [
          "La période idéale va de la fin de l'automne à la fin de l'hiver, hors fortes gelées : l'arbre est au repos et la taille le perturbe peu. Il est recommandé d'éviter la période de nidification, de mi-mars à fin juillet ; détruire un nid occupé est interdit par le Code de l'environnement. Une taille de sécurité sur un arbre dangereux se fait, elle, à n'importe quel moment de l'année.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte l'élagage d'un arbre ?",
        answer:
          "Le prix dépend de la hauteur et de l'essence, de l'accès au jardin, de la proximité d'une toiture ou d'une ligne et du volume de branches à évacuer. Nous n'affichons donc pas de tarif : Rudy se déplace gratuitement et vous remet un devis écrit et détaillé. Une photo envoyée par SMS permet souvent de donner une première idée.",
      },
      {
        question: 'Faut-il une nacelle pour élaguer un grand arbre ?',
        answer:
          "Non. Nous travaillons en grimpe, encordés dans l'arbre, ce qui permet d'intervenir dans les jardins inaccessibles aux engins et d'aller chercher les branches au-dessus des toitures en les retenant à la corde.",
      },
      {
        question: 'Mon voisin peut-il m\'obliger à élaguer ?',
        answer:
          "Oui : selon l'article 673 du Code civil, le voisin peut exiger que les branches qui avancent sur son terrain soient coupées, et ce droit ne se prescrit pas. Il ne peut en revanche pas les couper lui-même sans votre accord.",
      },
      {
        question: 'Que faites-vous des branches coupées ?',
        answer:
          "Elles sont broyées et évacuées, le chantier est rendu propre. Si vous le souhaitez, nous laissons le broyat pour pailler vos massifs et le bois débité en bûches.",
      },
    ],
    relatedPosts: ['quand-elaguer-un-arbre-guide-periodes', 'arbre-voisin-droit-elagage', '7-signes-arbre-elaguer-urgence'],
  },
  {
    slug: 'abattage-arbres',
    name: "Abattage d'arbres",
    shortName: 'Abattage',
    icon: 'bolt',
    title: "Abattage d'arbre à Tours (37) – Démontage sécurisé | Devis gratuit",
    description:
      "Abattage et démontage d'arbres dangereux ou gênants à Tours et en Indre-et-Loire, même près des maisons. Démontage par rétention, évacuation du bois, dessouchage. ☎ 06 31 46 43 50",
    h1: "Abattage et démontage d'arbres à Tours et en Indre-et-Loire",
    lead:
      "Arbre mort, malade, penché vers la maison ou simplement trop grand pour le jardin : quand il n'y a pas la place de le faire tomber d'un bloc, Rudy le démonte morceau par morceau depuis l'arbre, en retenant chaque tronçon à la corde.",
    image: {
      src: '/images/chantiers/broyage-branches-chantier-tours.webp',
      alt: "Chantier d'abattage en ville : broyage des branches au broyeur dans un jardin, immeubles en arrière-plan",
      width: 900,
      height: 1200,
    },
    signs: [
      "L'arbre est mort, creux ou attaqué par des champignons au pied",
      "Il penche de plus en plus ou le sol se soulève côté opposé",
      'Ses racines abîment une fondation, une terrasse ou des canalisations',
      'Il est trop grand pour son emplacement et menace la maison par vent fort',
      'Un arbre est tombé ou s\'est cassé après une tempête',
      'Vous voulez libérer la place pour un projet (extension, piscine, garage)',
    ],
    techniques: [
      {
        title: 'Démontage par rétention',
        text: "Le grimpeur coupe l'arbre par tronçons depuis le haut ; chaque morceau est freiné et descendu à la corde. C'est la technique des jardins étroits, entre maison, clôture et voisin.",
      },
      {
        title: 'Abattage directionnel',
        text: "Quand l'espace le permet, l'arbre est abattu d'un seul tenant dans une direction maîtrisée grâce à une entaille et une charnière calibrées. Plus rapide, donc moins coûteux.",
      },
      {
        title: 'Mise en sécurité après tempête',
        text: "Arbre couché sur une clôture ou une toiture, branche suspendue (« chandelle ») : on sécurise d'abord, on débite ensuite, sans créer de nouveau risque.",
      },
      {
        title: 'Dessouchage dans la foulée',
        text: "La souche peut être rognée juste après l'abattage à la rogneuse, pour replanter ou engazonner rapidement.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits, repérage des risques (lignes, toiture, voisins)',
      'Balisage de la zone et protection des abords',
      'Démontage ou abattage selon la place disponible',
      'Débitage du bois en bûches (laissé sur place si vous le souhaitez)',
      'Broyage et évacuation des branches, chantier nettoyé',
      'Dessouchage en option',
    ],
    sections: [
      {
        heading: 'Abattre ou élaguer ? Un avis honnête avant tout',
        paragraphs: [
          "Un arbre qui gêne n'est pas forcément à abattre : une réduction bien menée suffit parfois. À l'inverse, un arbre au pied creux ou attaqué par un champignon (amadouvier, armillaire…) peut rester debout des années avant de tomber sans prévenir. Lors de la visite, Rudy regarde le collet, l'ancrage, les fissures et le bois mort, et vous dit franchement ce qu'il ferait chez lui.",
        ],
      },
      {
        heading: 'Les démarches à vérifier avant un abattage',
        paragraphs: [
          "Sur un terrain privé, l'abattage est libre dans la plupart des cas. Une déclaration préalable en mairie est cependant obligatoire si l'arbre est situé en espace boisé classé ou identifié comme élément de paysage à protéger dans le PLU. Aux abords d'un monument historique — nombreux à Tours, Amboise ou Chinon — l'avis de l'Architecte des Bâtiments de France peut être requis. Si l'arbre surplombe la voie publique, une autorisation d'occupation du domaine public peut être nécessaire pendant le chantier.",
          "Nous vous indiquons ce qu'il faut vérifier et auprès de qui, avant de fixer la date.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte l'abattage d'un arbre ?",
        answer:
          "Tout dépend de la hauteur et du diamètre, de la place autour de l'arbre (abattage direct ou démontage par tronçons), des obstacles (maison, lignes, voisins) et de ce que vous souhaitez faire du bois et de la souche. Nous n'affichons pas de tarif : le devis est gratuit, écrit et établi sur place.",
      },
      {
        question: "Peut-on abattre un arbre collé à la maison ?",
        answer:
          "Oui, c'est justement le rôle du démontage par rétention : l'arbre est découpé depuis le haut et chaque tronçon est descendu à la corde, sans rien laisser tomber sur la toiture ou la clôture.",
      },
      {
        question: 'Que devient le bois après l\'abattage ?',
        answer:
          "Le tronc peut être débité en bûches et laissé sur place pour votre chauffage. Les branches sont broyées et évacuées, ou le broyat est laissé en paillage si vous le souhaitez.",
      },
      {
        question: 'Faut-il enlever la souche ?',
        answer:
          "Ce n'est pas obligatoire, mais une souche peut rejeter, attirer des champignons et empêche de replanter au même endroit. Le dessouchage à la rogneuse se fait le jour même ou lors d'un second passage.",
      },
    ],
    relatedPosts: ['que-faire-arbre-dangereux', 'elagage-vs-abattage-differences', 'reglementation-elagage-tours-37'],
  },
  {
    slug: 'dessouchage-arbres',
    name: 'Dessouchage',
    shortName: 'Dessouchage',
    icon: 'stump',
    title: 'Dessouchage à Tours (37) – Rognage de souches | Devis gratuit',
    description:
      "Dessouchage et rognage de souches à la rogneuse à Tours et en Indre-et-Loire. Rogneuse compacte sur chenilles, terrain remis à niveau. ☎ 06 31 46 43 50",
    h1: 'Dessouchage et rognage de souches à Tours et en Indre-et-Loire',
    lead:
      "Une vieille souche qui gêne la tonte, rejette ou empêche de replanter ? Nous la rognons à la rogneuse sous le niveau du sol, sans pelleteuse et sans retourner tout le jardin.",
    image: {
      src: '/images/chantiers/dessouchage-rogneuse-jardin.webp',
      alt: 'Rogneuse de souches sur chenilles utilisée pour un dessouchage dans un jardin de particulier',
      width: 900,
      height: 1200,
    },
    signs: [
      'Une souche gêne la tonte ou le passage',
      'Des rejets repoussent autour de la souche',
      'Vous voulez replanter, engazonner ou construire à cet endroit',
      'La souche pourrit et attire champignons ou insectes',
      "Plusieurs souches de haie (thuyas, lauriers) à enlever d'un coup",
    ],
    techniques: [
      {
        title: 'Rognage à la rogneuse',
        text: "Un disque à dents broie la souche en copeaux jusque sous le niveau du sol. C'est la méthode la plus propre : pas de trou béant, pas d'engin lourd sur votre pelouse.",
      },
      {
        title: 'Machine compacte sur chenilles',
        text: "Notre rogneuse est compacte et montée sur chenilles : elle accède à la plupart des jardins, même en ville, sans marquer le terrain.",
      },
      {
        title: 'Souches de haies',
        text: "Après l'arrachage d'une haie de thuyas ou de lauriers, les souches sont rognées une à une pour libérer toute la ligne de plantation.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits',
      'Vérification de la présence de réseaux enterrés à proximité',
      'Rognage de la souche sous le niveau du sol',
      'Copeaux laissés en paillage ou évacués, au choix',
      'Remise à niveau avec de la terre sur demande',
    ],
    sections: [
      {
        heading: "Rogner plutôt qu'arracher",
        paragraphs: [
          "Arracher une souche à la pelle mécanique laisse un grand trou, abîme la pelouse et nécessite un engin qui ne passe pas partout. Le rognage broie uniquement la souche et le départ des grosses racines, jusqu'à une profondeur suffisante pour engazonner ou replanter à côté. Les racines fines restantes se décomposent naturellement.",
          "Les copeaux obtenus font un excellent paillage pour vos massifs ; nous pouvons aussi les évacuer et reboucher avec de la terre végétale.",
        ],
      },
      {
        heading: 'Précautions avant le dessouchage',
        paragraphs: [
          "Une souche proche d'une canalisation, d'un câble enterré ou d'une fondation demande des précautions : nous repérons les réseaux avant de commencer et adaptons la profondeur de rognage. Signalez-nous toute installation enterrée (arrosage automatique, fourreau électrique, fosse) lors de la visite.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte le dessouchage ?',
        answer:
          "Le prix dépend surtout du diamètre de la souche, de l'essence, de l'accès et du nombre de souches. Nous n'affichons pas de tarif : envoyez une photo par SMS avec un objet pour l'échelle, ou demandez un devis gratuit sur place.",
      },
      {
        question: 'La rogneuse peut-elle accéder à mon jardin ?',
        answer:
          "Dans la grande majorité des cas, oui : la machine est compacte et montée sur chenilles. Indiquez-nous la largeur du passage le plus étroit (portillon, allée) lors de votre demande.",
      },
      {
        question: 'Peut-on replanter juste après ?',
        answer:
          "Oui. Une fois la souche rognée et les copeaux retirés, vous pouvez engazonner ou replanter à proximité. Pour replanter exactement au même endroit, il est conseillé d'apporter de la terre végétale.",
      },
    ],
    relatedPosts: ['prix-abattage-arbre', 'elagage-vs-abattage-differences'],
  },
  {
    slug: 'taille-haies',
    name: 'Taille de haies',
    shortName: 'Taille de haies',
    icon: 'hedge',
    title: 'Taille de haies à Tours (37) – Thuyas, lauriers, grandes haies',
    description:
      "Taille de haies à Tours et en Indre-et-Loire : thuyas, lauriers, charmilles, troènes, haies hautes ou très larges. Déchets évacués, chantier propre. Devis gratuit. ☎ 06 31 46 43 50",
    h1: 'Taille de haies à Tours et en Indre-et-Loire',
    lead:
      "Haie devenue trop haute, trop large ou dégarnie à la base ? Nous taillons toutes les haies — y compris les grandes haies de thuyas ou de lauriers que l'on n'ose plus attaquer soi-même — et repartons avec les déchets.",
    signs: [
      'La haie dépasse la hauteur voulue ou déborde sur le trottoir',
      'Elle mange la moitié du jardin en largeur',
      'Le voisin se plaint de la hauteur ou des débordements',
      'La haie se dégarnit à la base ou brunit par endroits',
      "Vous n'avez ni le temps, ni le matériel, ni l'envie de monter sur une échelle",
    ],
    techniques: [
      {
        title: "Taille d'entretien",
        text: "Une à deux tailles par an pour garder une haie dense, nette et à la bonne hauteur.",
      },
      {
        title: 'Rabattage et réduction',
        text: "Réduction importante de la hauteur ou de la largeur d'une haie qui a été négligée, en tenant compte de l'essence : un thuya ne repousse pas dans le vieux bois, un laurier ou une charmille oui.",
      },
      {
        title: 'Grandes haies',
        text: "Haies de plusieurs mètres de haut : taille depuis des plateformes ou en grimpe, sans abîmer les massifs au pied.",
      },
      {
        title: 'Arrachage et remplacement',
        text: "Quand une haie de thuyas est morte ou trop vieille, nous l'arrachons et rognons les souches pour laisser la place à une nouvelle plantation.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits',
      'Taille des faces et du dessus, à la hauteur convenue',
      'Ramassage, broyage et évacuation des déchets verts',
      'Nettoyage des allées, pelouses et trottoirs',
      "Contrat d'entretien annuel possible",
    ],
    sections: [
      {
        heading: 'Hauteur des haies : ce que dit la loi',
        paragraphs: [
          "L'article 671 du Code civil impose, sauf règlement local ou usage contraire, une distance de 2 mètres de la limite de propriété pour les plantations de plus de 2 mètres de haut, et de 50 centimètres pour les plus basses. Une haie plantée trop près peut donc devoir être maintenue sous 2 mètres. Le règlement de votre lotissement ou le PLU peuvent aussi fixer une hauteur maximale en bordure de rue.",
        ],
      },
      {
        heading: 'Quand tailler sa haie ?',
        paragraphs: [
          "Les tailles principales se font au printemps, avant la montée de sève, et à la fin de l'été. L'Office français de la biodiversité recommande d'éviter la taille entre mi-mars et fin juillet pour ne pas déranger les oiseaux nicheurs. Pour une réduction sévère, la fin de l'hiver reste la meilleure période.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte la taille d\'une haie ?',
        answer:
          "Le prix dépend de la longueur, de la hauteur et de l'épaisseur de la haie, de l'essence, de l'accès des deux côtés et du volume de déchets. Nous n'affichons pas de tarif ; le devis est gratuit et établi sur place ou sur photo.",
      },
      {
        question: 'Peut-on réduire fortement une haie de thuyas ?',
        answer:
          "En hauteur, oui. En largeur, il faut rester dans la partie verte : le thuya ne repart pas du bois nu. Si la haie est trop large, il vaut parfois mieux la remplacer ; nous vous conseillons lors de la visite.",
      },
      {
        question: 'Proposez-vous des contrats annuels ?',
        answer:
          "Oui, pour les particuliers comme pour les copropriétés et les entreprises : une ou deux tailles par an programmées à l'avance, sans avoir à y penser.",
      },
    ],
    relatedPosts: ['arbre-voisin-droit-elagage', 'elagage-printemps-mars-avril-tours'],
  },
  {
    slug: 'entretien-espaces-verts',
    name: "Entretien d'espaces verts",
    shortName: 'Entretien jardin',
    icon: 'leaf',
    title: "Entretien d'espaces verts à Tours (37) – Débroussaillage, jardins",
    description:
      "Entretien de jardins et d'espaces verts à Tours et en Indre-et-Loire : débroussaillage, remise en état de terrain, taille d'arbustes, broyage. Particuliers, copropriétés, entreprises. ☎ 06 31 46 43 50",
    h1: "Entretien d'espaces verts et débroussaillage à Tours",
    lead:
      "Terrain envahi par les ronces, jardin laissé à l'abandon, maison à vendre ou succession à remettre en état : nous débroussaillons, taillons, broyons et évacuons, pour les particuliers comme pour les professionnels.",
    image: {
      src: '/images/chantiers/materiel-elagage-stihl.webp',
      alt: "Matériel professionnel d'élagage et d'entretien : tronçonneuses, élagueuse et souffleur",
      width: 540,
      height: 1199,
    },
    signs: [
      'Terrain envahi par les ronces, les broussailles ou les repousses',
      'Maison à vendre, à louer ou succession à remettre en état',
      "Jardin trop grand ou trop pentu pour l'entretenir soi-même",
      'Copropriété ou entreprise à la recherche d\'un prestataire régulier',
      'Arbustes et massifs qui ont pris le dessus',
    ],
    techniques: [
      {
        title: 'Débroussaillage',
        text: 'Débroussailleuse et outils adaptés pour dégager ronces, fougères et jeunes repousses, y compris sur les talus.',
      },
      {
        title: 'Remise en état de terrain',
        text: "Nettoyage complet d'un jardin abandonné : débroussaillage, abattage des arbustes morts, taille, broyage et évacuation.",
      },
      {
        title: "Taille d'arbustes et de massifs",
        text: 'Taille de formation et d\'entretien des arbustes d\'ornement, rosiers grimpants, massifs.',
      },
      {
        title: 'Broyage des végétaux',
        text: "Les déchets verts sont broyés sur place : moins de volume à évacuer, et un paillage gratuit si vous le souhaitez.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits',
      'Matériel professionnel, aucun besoin de votre côté',
      'Évacuation des déchets verts',
      'Interventions ponctuelles ou contrat annuel',
      'Particuliers, copropriétés, entreprises et collectivités',
    ],
    sections: [
      {
        heading: 'Ponctuel ou à l\'année',
        paragraphs: [
          "Une remise en état ponctuelle permet de repartir sur une base saine ; un contrat d'entretien évite ensuite que le terrain ne se referme. Nous organisons les passages selon la saison : taille des haies, élagage d'hiver, débroussaillage de printemps.",
          "Pour les copropriétés et les entreprises, un seul interlocuteur gère les arbres, les haies et les espaces verts.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte l'entretien d'un jardin ?",
        answer:
          "Cela dépend de la surface, de l'état du terrain, de la fréquence des passages et du volume de déchets. Nous n'affichons pas de tarif : chaque devis est gratuit et établi après visite.",
      },
      {
        question: 'Intervenez-vous pour les copropriétés et les entreprises ?',
        answer:
          "Oui, pour des interventions ponctuelles ou des contrats d'entretien annuels, avec devis et facturation professionnels.",
      },
    ],
    relatedPosts: ['elagage-printemps-mars-avril-tours', 'quand-elaguer-un-arbre-guide-periodes'],
  },
  {
    slug: 'elagage-fruitiers',
    name: "Taille d'arbres fruitiers",
    shortName: 'Arbres fruitiers',
    icon: 'apple',
    title: "Taille d'arbres fruitiers à Tours (37) – Pommiers, cerisiers, noyers",
    description:
      "Taille et élagage d'arbres fruitiers à Tours et en Indre-et-Loire : pommiers, poiriers, cerisiers, pruniers, noyers. Taille de fructification et restauration de vieux arbres. ☎ 06 31 46 43 50",
    h1: "Taille et élagage d'arbres fruitiers en Touraine",
    lead:
      "Vieux pommier qui ne donne plus, cerisier devenu immense, noyer qui envahit le jardin : une taille adaptée relance la production, facilite la cueillette et prolonge la vie de vos fruitiers.",
    image: {
      src: '/images/chantiers/taille-arbre-fruitier-cerisier.webp',
      alt: "Taille d'un arbre fruitier à l'automne dans un verger de particulier",
      width: 540,
      height: 1199,
    },
    signs: [
      'Le fruitier produit peu ou un an sur deux',
      'Il est devenu trop haut pour cueillir les fruits',
      'Branches mortes, chancres ou gomme sur le tronc',
      'Vieux verger à restaurer après des années sans taille',
      "Jeune arbre à former pour qu'il pousse bien",
    ],
    techniques: [
      {
        title: 'Taille de formation',
        text: "Sur les jeunes arbres, on choisit les charpentières pour obtenir une structure solide et aérée.",
      },
      {
        title: 'Taille de fructification',
        text: "On équilibre le bois qui porte les fruits et le bois de renouvellement pour une récolte plus régulière.",
      },
      {
        title: 'Restauration de vieux fruitiers',
        text: "Suppression du bois mort, allègement progressif et abaissement de la couronne sur plusieurs saisons pour ne pas épuiser l'arbre.",
      },
    ],
    includes: [
      'Visite et devis écrit gratuits',
      'Conseils sur la période de taille propre à chaque espèce',
      'Évacuation ou broyage des branches',
      'Suivi possible chaque année',
    ],
    sections: [
      {
        heading: 'Chaque fruitier a sa période',
        paragraphs: [
          "Les fruitiers à pépins (pommiers, poiriers) se taillent en hiver, hors gel. Les fruitiers à noyau (cerisiers, pruniers, abricotiers) se taillent de préférence juste après la récolte, en fin d'été, pour limiter les maladies comme la gommose. Les noyers se taillent en fin d'été : taillés en hiver, ils perdent beaucoup de sève.",
          "Nous vous indiquons la bonne période pour vos arbres et planifions l'intervention en conséquence.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien coûte la taille d'un arbre fruitier ?",
        answer:
          "Le prix dépend du nombre d'arbres, de leur taille et de leur état (entretien régulier ou restauration). Nous n'affichons pas de tarif : devis gratuit sur place.",
      },
      {
        question: 'Peut-on sauver un vieux pommier ?',
        answer:
          "Souvent, oui. Une restauration progressive sur deux ou trois hivers — bois mort, allègement, abaissement — permet de relancer un vieil arbre sans l'épuiser.",
      },
    ],
    relatedPosts: ['quand-elaguer-un-arbre-guide-periodes', 'elagage-printemps-mars-avril-tours'],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
