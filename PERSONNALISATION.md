# 🎯 CHECKLIST DE PERSONNALISATION

## ⚠️ FICHIERS À PERSONNALISER OBLIGATOIREMENT

### 1. Configuration du site : `src/data/siteConfig.ts`

```typescript
// TOUT CE FICHIER DOIT ÊTRE PERSONNALISÉ !

business: {
  name: "Nom Entreprise Élagage",          // ← CHANGER
  phone: "+33 X XX XX XX XX",              // ← CHANGER
  phoneDisplay: "0X XX XX XX XX",          // ← CHANGER
  email: "contact@domain.com",             // ← CHANGER
  whatsapp: "+33XXXXXXXXX",                // ← CHANGER (sans espaces)

  address: {
    street: "123 Rue Exemple",             // ← CHANGER
    city: "Tours",                         // ← CHANGER
    postalCode: "37000",                   // ← CHANGER
    region: "Indre-et-Loire",              // ← CHANGER
    // ...
  },

  coordinates: {
    lat: 47.394144,  // ← CHANGER (coordonnées GPS réelles)
    lng: 0.68484,    // ← CHANGER
  },

  // Réseaux sociaux (mettre vos vraies URLs ou laisser vide "")
  social: {
    facebook: "https://facebook.com/votepage",     // ← CHANGER ou ""
    instagram: "https://instagram.com/votrecompte", // ← CHANGER ou ""
  },
},

// Zone d'intervention
serviceArea: {
  mainCity: "Tours",              // ← CHANGER
  department: "Indre-et-Loire (37)", // ← CHANGER
  radius: 50,                     // km
  cities: [                       // ← ADAPTER à votre région
    "Tours",
    "Amboise",
    // ... ajouter vos villes
  ],
},

// Témoignages (optionnel, à remplir avec vrais avis)
testimonials: [
  {
    name: "Jean Dupont",          // ← CHANGER
    city: "Tours",                // ← CHANGER
    text: "...",                  // ← CHANGER
    // ...
  },
],

// FAQ (adapter à votre activité)
faq: [
  {
    question: "...",              // ← ADAPTER
    answer: "...",                // ← ADAPTER
  },
],
```

### 2. Domaine du site : `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://votre-domaine.com', // ← CHANGER par votre vrai domaine
});
```

### 3. Sitemap : `public/robots.txt`

```
Sitemap: https://votre-domaine.com/sitemap-index.xml  # ← CHANGER
```

### 4. Schémas JSON-LD : `src/utils/schemas.ts`

Vérifier que `import.meta.env.SITE` pointe bien vers votre domaine.
Si besoin, ajuster les schemas pour correspondre exactement à votre activité.

## 📸 IMAGES À AJOUTER

### Images obligatoires (dans `/public/images/`)

1. **`hero-bg.jpg`** - Background section hero
   - Dimension : 1920x1080px minimum
   - Format : JPEG qualité 85% ou WebP
   - Exemple : Photo drone de chantier, élagueur en action

2. **`cta-bg.jpg`** - Background section CTA finale
   - Dimension : 1920x1080px minimum
   - Format : JPEG qualité 85% ou WebP
   - Exemple : Paysage avec arbres

3. **`og-image.jpg`** - Image Open Graph (partage Facebook/Twitter)
   - Dimension : **1200x630px exactement**
   - Format : JPEG ou PNG
   - Contenu : Logo + texte + visuel

4. **`logo.jpg`** - Logo entreprise
   - Dimension : 500x500px minimum
   - Format : PNG ou SVG (préféré)
   - Fond transparent si possible

5. **Favicon** - Icône du site
   - Générer avec [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Placer tous les fichiers générés dans `/public/`

### Images optionnelles

6. **Photos galerie** - Pour la page `/galerie`
   - Format : JPEG optimisé (qualité 85%)
   - Dimension : 1200x900px recommandé
   - Placer dans `/public/images/galerie/`

7. **Photos équipe** - Pour section "Pourquoi nous choisir"
   - Format : JPEG
   - Dimension : 800x600px

## 🎨 PERSONNALISATION DU DESIGN (optionnel)

### Couleurs : `tailwind.config.mjs`

```javascript
colors: {
  primary: {
    DEFAULT: '#0A2E1C',  // ← Couleur principale (vert foncé)
    // ...
  },
  accent: {
    DEFAULT: '#7CB342',  // ← Couleur accent (vert vif)
    // ...
  },
}
```

**Astuce :** Utiliser [Coolors](https://coolors.co/) pour générer une palette.

### Typographie : `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['Inter', ...],        // ← Police corps de texte
  display: ['Space Grotesk', ...], // ← Police titres
}
```

**Fonts Google alternatives :**
- Titres : Montserrat, Poppins, Raleway, Outfit
- Corps : Open Sans, Lato, Work Sans, DM Sans

## 📧 CONFIGURATION FORMULAIRE CONTACT

### Option A : Netlify Forms (si déployé sur Netlify)

1. Modifier `/src/pages/contact.astro` :

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- ... -->
</form>
```

2. Les soumissions apparaissent dans Netlify dashboard.

### Option B : Formspree (gratuit jusqu'à 50 soumissions/mois)

1. Créer compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau form
3. Copier l'URL du form
4. Modifier `/src/pages/contact.astro` :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option C : Email direct (basique, pas recommandé)

```html
<form action={`mailto:${siteConfig.business.email}`} method="POST" enctype="text/plain">
```

## 🔌 ANALYTICS (optionnel mais recommandé)

### Google Analytics 4

1. Créer une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Copier l'ID (format : `G-XXXXXXXXXX`)
3. Décommenter le code dans `/src/layouts/BaseLayout.astro` :

```html
<!-- Ligne ~95 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // ← Mettre votre ID ici
</script>
```

### Alternative : Plausible Analytics (RGPD-friendly)

Plus simple, pas de cookie banner nécessaire.

1. Créer compte sur [plausible.io](https://plausible.io)
2. Ajouter dans `<head>` :

```html
<script defer data-domain="votre-domaine.com" src="https://plausible.io/js/script.js"></script>
```

## 🚀 DÉPLOIEMENT

### 1. Tester en local

```bash
npm run dev
# Ouvrir http://localhost:4321
# Vérifier toutes les pages
```

### 2. Build de production

```bash
npm run build
npm run preview
# Vérifier le build sur http://localhost:4321
```

### 3. Déployer sur Netlify

#### Via interface

1. Créer compte sur [netlify.com](https://netlify.com)
2. "New site from Git"
3. Connecter GitHub/GitLab
4. Build settings :
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

#### Via CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## ✅ CHECKLIST POST-DÉPLOIEMENT

### SEO

- [ ] Soumettre sitemap à [Google Search Console](https://search.google.com/search-console)
- [ ] Soumettre à [Bing Webmaster](https://www.bing.com/webmasters)
- [ ] Créer/optimiser fiche [Google My Business](https://business.google.com)
- [ ] Tester rich snippets : [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Vérifier Open Graph : [OpenGraph.xyz](https://www.opengraph.xyz/)

### Performance

- [ ] Tester Lighthouse (score > 90)
- [ ] Tester [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Vérifier [Core Web Vitals](https://web.dev/vitals/)

### Accessibilité

- [ ] Tester avec [WAVE](https://wave.webaim.org/)
- [ ] Tester navigation clavier (Tab)
- [ ] Tester avec lecteur d'écran

### Légal

- [ ] Créer page Mentions légales
- [ ] Créer page Politique de confidentialité
- [ ] Ajouter CGV si vente en ligne

## 🆘 AIDE & SUPPORT

### Problèmes courants

**Le site ne se charge pas en local**
```bash
rm -rf node_modules .astro dist
npm install
npm run dev
```

**Les images ne s'affichent pas**
- Vérifier qu'elles sont dans `/public/images/`
- Utiliser des chemins absolus : `/images/nom.jpg`

**Erreurs TypeScript**
```bash
npx astro check
```

### Ressources

- [Documentation Astro](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)

---

**Bon courage pour la personnalisation ! 🚀**
