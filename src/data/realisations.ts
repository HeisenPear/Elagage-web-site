/**
 * Photos de chantiers réels (téléphone de Rudy). Ajouter ici les nouvelles
 * photos : une vraie photo de chantier rassure plus que n'importe quel texte.
 */
export interface Realisation {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const realisations: Realisation[] = [
  {
    src: '/images/chantiers/elagueur-grimpeur-demontage-conifere-800.webp',
    alt: 'Élagueur grimpeur encordé démontant un grand conifère branche par branche',
    caption: 'Démontage d\'un conifère en grimpe',
    width: 800,
    height: 495,
  },
  {
    src: '/images/chantiers/dessouchage-rogneuse-jardin.webp',
    alt: 'Rogneuse de souches sur chenilles en action dans un jardin',
    caption: 'Dessouchage à la rogneuse',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/chantiers/broyage-branches-chantier-tours.webp',
    alt: 'Broyage des branches sur un chantier en ville, immeubles en arrière-plan',
    caption: 'Broyage et évacuation des branches',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/chantiers/taille-arbre-fruitier-cerisier.webp',
    alt: 'Taille d\'un arbre fruitier à l\'automne',
    caption: 'Taille d\'un fruitier',
    width: 540,
    height: 1199,
  },
];
