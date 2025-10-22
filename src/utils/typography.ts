/**
 * Utilitaires pour la typographie et la gestion des espaces insécables
 * Protège les mots-clés importants de la césure
 */

/**
 * Ajoute des espaces insécables autour des termes géographiques
 * et des chiffres avec unités pour éviter les coupures inappropriées
 *
 * @param text - Le texte à protéger
 * @returns Le texte avec espaces insécables (\u00A0)
 */
export function protectTypography(text: string): string {
  return text
    // Protège les villes d'Indre-et-Loire (CRITIQUE pour SEO)
    .replace(/(à|de|en|sur|vers|dans)\s+(Tours|Indre-et-Loire|Joué-lès-Tours|Saint-Pierre-des-Corps|Saint-Avertin|Chambray-lès-Tours|La Riche|Fondettes|Ballan-Miré|Saint-Cyr-sur-Loire|Amboise|Vouvray|Loches|Chinon|Langeais|Azay-le-Rideau|Montlouis-sur-Loire|Rochecorbon|Véretz|Montbazon|Bléré)/gi,
             '$1\u00A0$2')

    // Protège le département (37)
    .replace(/(\d{2})\s*\)/g, '$1\u00A0)')
    .replace(/\(\s*(\d{2})/g, '(\u00A0$1')

    // Protège les chiffres + unités
    .replace(/(\d+)\s+(M€|millions d'euros|€|%|h|km|m|ans?|heures?)/gi, '$1\u00A0$2')

    // Protège les espaces dans les grands chiffres (2 500 → 2 500)
    .replace(/(\d{1,3})\s+(\d{3})/g, '$1\u00A0$2')

    // Protège certaines expressions clés (SEO)
    .replace(/devis\s+gratuit/gi, 'devis\u00A0gratuit')
    .replace(/RC\s+Pro/gi, 'RC\u00A0Pro')
    .replace(/Élagage\s+Abattage/gi, 'Élagage\u00A0Abattage')
    .replace(/crédit\s+d'impôt/gi, 'crédit\u00A0d\'impôt')
    .replace(/service\s+à\s+la\s+personne/gi, 'service\u00A0à\u00A0la\u00A0personne')

    // Protège les numéros de téléphone
    .replace(/(\d{2})\s+(\d{2})\s+(\d{2})\s+(\d{2})\s+(\d{2})/g, '$1\u00A0$2\u00A0$3\u00A0$4\u00A0$5');
}

/**
 * Ajoute un espace insécable avant un mot spécifique
 *
 * @param word - Le mot à protéger
 * @param text - Le texte complet
 * @returns Le texte avec espace insécable avant le mot
 */
export function nbspBefore(word: string, text: string): string {
  return text.replace(new RegExp(`\\s+(${word})`, 'gi'), `\u00A0$1`);
}

/**
 * Ajoute un espace insécable après un mot spécifique
 *
 * @param word - Le mot à protéger
 * @param text - Le texte complet
 * @returns Le texte avec espace insécable après le mot
 */
export function nbspAfter(word: string, text: string): string {
  return text.replace(new RegExp(`(${word})\\s+`, 'gi'), `$1\u00A0`);
}

/**
 * Protège une liste de mots en les enveloppant dans une balise <span> non-breakable
 *
 * @param words - Liste des mots à protéger
 * @param text - Le texte complet
 * @returns Le texte avec balises span
 */
export function wrapNonBreakable(words: string[], text: string): string {
  let result = text;
  words.forEach(word => {
    result = result.replace(
      new RegExp(`(${word})`, 'gi'),
      '<span style="white-space: nowrap;">$1</span>'
    );
  });
  return result;
}

/**
 * Liste des villes d'Indre-et-Loire à protéger
 */
export const CITIES_37 = [
  'Tours',
  'Indre-et-Loire',
  'Joué-lès-Tours',
  'Saint-Pierre-des-Corps',
  'Saint-Avertin',
  'Chambray-lès-Tours',
  'La Riche',
  'Fondettes',
  'Ballan-Miré',
  'Saint-Cyr-sur-Loire',
  'Amboise',
  'Vouvray',
  'Loches',
  'Chinon',
  'Langeais',
  'Azay-le-Rideau',
  'Montlouis-sur-Loire',
  'Rochecorbon',
  'Véretz',
  'Montbazon',
  'Bléré',
];

/**
 * Liste des expressions clés à protéger (SEO)
 */
export const KEY_EXPRESSIONS = [
  'devis gratuit',
  'RC Pro',
  'Élagage Abattage',
  'crédit d\'impôt',
  'service à la personne',
  'élagueur professionnel',
  'intervention rapide',
];
