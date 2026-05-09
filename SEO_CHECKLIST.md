# SEO Checklist — Élagage Abattage 37
> Généré le 9 mai 2026 — Site : https://www.elagageabattage37.com

---

## ✅ Corrections techniques appliquées (dans le code)

### Tâche 1 — JSON-LD : Données structurées

| Correction | Fichier | Détail |
|---|---|---|
| ✅ LocalBusiness schema enrichi | `src/utils/schemas.ts` | Ajout de `hasOfferCatalog` avec 6 services liés |
| ✅ Horaires corrigés | `src/utils/schemas.ts` | `07:00-20:00` au lieu de `00:00-23:59` (invalide pour Google) |
| ✅ FAQPage schema | `src/utils/schemas.ts` → homepage | 7 Q&R déjà présentes, schema correct |
| ✅ Service schema sur pages services | `src/pages/services/*.astro` | `getServiceSchema()` + `getBreadcrumbSchema()` sur chaque page |
| ✅ BreadcrumbList sur pages internes | `src/utils/schemas.ts` | Utilisé sur pages services et zones |
| ✅ LocalBusiness city-specific sur zones | `src/utils/schemas.ts` | Nouvelle fonction `getCityLocalBusinessSchema()` — `serviceArea` pointe sur chaque ville |
| ✅ Schema zones appliqué | `src/pages/zones/[city].astro` | `getCityLocalBusinessSchema(city.name, city.postalCode)` |

### Tâche 2 — Sitemap XML

| Correction | Fichier | Détail |
|---|---|---|
| ✅ Priorités services ajustées | `astro.config.mjs` | `elagage-arbres` et `abattage-arbres` → 0.9 |
| ✅ taille-haies et dessouchage | `astro.config.mjs` | → 0.8 |
| ✅ Pages zones | `astro.config.mjs` | → 0.7 (vs 0.4 avant) |
| ✅ Blog articles | `astro.config.mjs` | → 0.6 (vs 0.8 avant, plus réaliste) |
| ✅ Blog index | `astro.config.mjs` | → 0.5 |
| ✅ Contact | `astro.config.mjs` | → 0.6 |

### Tâche 3 — robots.txt

| Statut | Fichier | Détail |
|---|---|---|
| ✅ Déjà correct | `public/robots.txt` | `Allow: /`, pas de blocage de chemins importants |
| ✅ Sitemap référencé | `public/robots.txt` | `Sitemap: https://www.elagageabattage37.com/sitemap-index.xml` |

### Tâche 4 — Maillage interne (liens services)

| Correction | Fichier | Détail |
|---|---|---|
| ✅ URLs directes sur les 6 services | `src/pages/index.astro` | Remplacement de la ternaire complexe par une propriété `url` directe sur chaque service |
| Élagage → `/services/elagage-arbres` | `src/pages/index.astro` | Ligne ~35 |
| Abattage → `/services/abattage-arbres` | `src/pages/index.astro` | Ligne ~43 |
| Taille de haies → `/services/taille-haies` | `src/pages/index.astro` | Ligne ~51 |
| Dessouchage → `/services/dessouchage-arbres` | `src/pages/index.astro` | Ligne ~59 |
| Espaces verts → `/services/entretien-espaces-verts` | `src/pages/index.astro` | Ligne ~67 |
| Fruitiers → `/services/elagage-fruitiers` | `src/pages/index.astro` | Ligne ~75 |

### Tâche 5 — Enrichissement pages zones

| Correction | Fichier | Détail |
|---|---|---|
| ✅ H1 Tours normalisé | `src/data/cityPages.ts` | "Élagueur Tours (37) — Élagage & Abattage d'arbres" |
| ✅ H1 Amboise normalisé | `src/data/cityPages.ts` | "Élagueur Amboise (37) — Élagage & Abattage d'arbres" |
| ✅ H1 Joué-lès-Tours normalisé | `src/data/cityPages.ts` | "Élagueur Joué-lès-Tours (37) — Élagage & Abattage d'arbres" |
| ✅ H1 Saint-Cyr-sur-Loire normalisé | `src/data/cityPages.ts` | "Élagueur Saint-Cyr-sur-Loire (37) — Élagage & Abattage d'arbres" |
| ✅ H1 Montlouis-sur-Loire normalisé | `src/data/cityPages.ts` | "Élagueur Montlouis-sur-Loire (37) — Élagage & Abattage d'arbres" |
| ✅ Contenu Tours enrichi (170+ mots) | `src/data/cityPages.ts` | Ajout quartiers : Prébendes, Velpeau, Saint-Symphorien, La Riche, Grammont, Chambray-lès-Tours |
| ✅ Neighborhoods Tours enrichi | `src/data/cityPages.ts` | 11 secteurs au lieu de 7 |
| ✅ Liens services internes | `src/pages/zones/[city].astro` | 6 cartes services avec liens `/services/[slug]` sur chaque page zone |
| ✅ Lien retour homepage | `src/pages/zones/[city].astro` | Breadcrumb Accueil > Zones > Ville |

### Tâche 6 — Correction compteurs JS

| Correction | Fichier | Détail |
|---|---|---|
| ✅ État initial = valeurs réelles | `src/components/react/StatsCounter.tsx` | `useState(targetValues)` au lieu de `useState(0)` — le HTML statique affiche 500, 10, 98, 127 |
| ✅ Hydratation à la visibilité | `src/pages/index.astro` | `client:visible` au lieu de `client:idle` |
| ✅ Animation sans flash | `src/components/react/StatsCounter.tsx` | `hasAnimatedRef` évite les ré-animations |

### Tâche 7 — Canonical URLs

| Statut | Fichier | Détail |
|---|---|---|
| ✅ Déjà correct | `src/components/SEOHead.astro` | `canonical = Astro.url.href` avec `site: 'https://www.elagageabattage37.com'` dans `astro.config.mjs` |
| ✅ Avec www | `astro.config.mjs` | `site: 'https://www.elagageabattage37.com'` (www inclus) |
| Exemple homepage | — | `<link rel="canonical" href="https://www.elagageabattage37.com/">` |
| Exemple service | — | `<link rel="canonical" href="https://www.elagageabattage37.com/services/elagage-arbres/">` |

---

## 📋 Actions manuelles restantes (hors code)

### Google Search Console (PRIORITÉ MAXIMALE)

- [ ] **Soumettre le sitemap** : Dans GSC > Sitemaps > Ajouter : `https://www.elagageabattage37.com/sitemap-index.xml`
- [ ] **Inspection d'URL** sur les pages clés (puis "Demander l'indexation") :
  - `https://www.elagageabattage37.com/`
  - `https://www.elagageabattage37.com/services/elagage-arbres`
  - `https://www.elagageabattage37.com/services/abattage-arbres`
  - `https://www.elagageabattage37.com/zones/elagueur-tours`
  - `https://www.elagageabattage37.com/zones/elagueur-joue-les-tours`
- [ ] **Vérifier les erreurs de couverture** dans GSC > Pages > Raisons d'exclusion
- [ ] **Rich Results Test** : Tester `https://search.google.com/test/rich-results` sur la homepage pour valider les schemas JSON-LD

### Google Business Profile (Impact SEO local fort)

- [ ] **Créer/revendiquer la fiche GBP** : https://business.google.com
  - Catégorie principale : "Élagueur"
  - Catégorie secondaire : "Entreprise d'élagage d'arbres"
  - Adresse : 2 rue du manoir, 37300 Joué-lès-Tours
  - Zone de service : Tours, Joué-lès-Tours, Amboise, Saint-Cyr-sur-Loire, Indre-et-Loire
  - Téléphone : 06 31 46 43 50
  - Site web : https://www.elagageabattage37.com
- [ ] **Ajouter des photos** de chantiers (avant/après élagage, matériel, équipe)
- [ ] **Répondre aux avis Google** existants (signal de confiance)
- [ ] **Publier des posts GBP** régulièrement (offres, saisonnalité élagage)

### Annuaires professionnels (Backlinks locaux)

- [ ] **PagesJaunes** : https://www.pagesjaunes.fr/pro/inscription → catégorie "Élagage"
- [ ] **Houzz** : https://www.houzz.fr/pro → profil élagueur paysagiste
- [ ] **Travaux.com** : https://www.travaux.com → inscription artisan
- [ ] **Artisan.fr** : https://www.artisan.fr → fiche professionnelle
- [ ] **Tripadvisor Expériences** (si services touristiques en lien avec patrimoine Touraine)
- [ ] **Annuaire-élagage.fr** ou équivalent si disponible

### Stratégie de backlinks (SEO Off-page)

- [ ] **Blogs jardinage / maison en Touraine** : Contacter des blogs locaux pour un article sponsorisé ou un échange de lien
- [ ] **Sites de collectivités** : Joué-lès-Tours, Tours Métropole ont parfois des annuaires de prestataires locaux
- [ ] **Fédération Française d'Arboriculture** : https://www.arboriculture.fr — inscription si éligible
- [ ] **Partenariats locaux** : Pépinières, jardineries, architectes paysagistes de Touraine

### Optimisation continue

- [ ] **Core Web Vitals** : Vérifier dans GSC > Expérience > Signaux Web essentiels
- [ ] **Créer du contenu régulier** : 1 article de blog par mois (saisonnalité = "élagage hiver", "taille haies printemps", etc.)
- [ ] **Demander des avis Google** à chaque client satisfait (augmenter les 127 avis)
- [ ] **Photos réelles** à ajouter sur le site (actuellement images stock ou manquantes)

---

## 📊 Récapitulatif des fichiers modifiés

| Fichier | Modifications |
|---|---|
| `src/utils/schemas.ts` | +`hasOfferCatalog`, +`getCityLocalBusinessSchema()`, horaires 07-20h |
| `astro.config.mjs` | Priorités sitemap affinées par type de page |
| `src/pages/index.astro` | Propriété `url` directe sur services, `client:visible` pour StatsCounter |
| `src/data/cityPages.ts` | H1s normalisés × 5 villes, contenu Tours enrichi (170+ mots), +4 neighborhoods |
| `src/components/react/StatsCounter.tsx` | État initial = valeurs réelles, `hasAnimatedRef` |
| `src/pages/zones/[city].astro` | Import + usage `getCityLocalBusinessSchema()` |
