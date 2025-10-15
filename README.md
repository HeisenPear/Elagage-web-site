# Site Vitrine Élagueur Ultra-Moderne

Site vitrine professionnel pour artisan élagueur avec **design moderne spectaculaire** (inspiré des studios créatifs) et **SEO local ultra-optimisé**.

## 🎯 Caractéristiques principales

### Design & UX
- ✨ **Animation de particules WebGL** (Three.js) sur la hero section
- 🎨 **Design moderne minimaliste** avec animations fluides (GSAP + Framer Motion)
- 📱 **100% Responsive** (mobile-first)
- ♿ **Accessible WCAG 2.1 AA**
- 🎭 **Smooth scroll** premium (Lenis)
- 🖱️ **Micro-interactions** et hover effects spectaculaires

### SEO & Performance
- 🚀 **Lighthouse Score > 90** (toutes métriques)
- 📊 **Schema.org JSON-LD** complet (LocalBusiness, Service, FAQ, etc.)
- 🗺️ **SEO local ultra-optimisé** (geo tags, meta tags, structured data)
- 📄 **Sitemap auto-généré**
- 🤖 **robots.txt configuré**
- 🖼️ **Images optimisées** (lazy loading, responsive srcset)
- ⚡ **Code splitting** automatique
- 🎯 **Core Web Vitals optimisés** (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Fonctionnalités
- 📞 **Click-to-call** mobile
- 💬 **WhatsApp direct**
- 📧 **Formulaire de contact** avec validation
- 📊 **Animations counter** sur les statistiques
- 🎠 **Menu burger** moderne avec overlay fullscreen
- 🌐 **Navigation sticky** avec effet transparent
- 📱 **PWA-ready** (manifest, icons)

## 📁 Structure du projet

```
/
├── public/
│   ├── images/          # Images du site (à ajouter)
│   ├── fonts/           # Fonts custom (optionnel)
│   └── robots.txt       # Configuration robots
├── src/
│   ├── components/
│   │   ├── react/       # Composants React interactifs
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── ParticlesBackground.tsx
│   │   │   └── StatsCounter.tsx
│   │   ├── sections/    # Sections de page
│   │   │   ├── HeroSection.astro
│   │   │   └── ServicesSection.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── SEOHead.astro
│   ├── data/
│   │   └── siteConfig.ts    # Configuration centralisée du site
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout de base
│   ├── pages/
│   │   ├── index.astro      # Page d'accueil
│   │   ├── contact.astro
│   │   ├── galerie.astro
│   │   └── zones.astro
│   ├── styles/
│   │   └── global.css       # Styles globaux + Tailwind
│   └── utils/
│       └── schemas.ts       # Générateurs Schema.org
├── astro.config.mjs    # Configuration Astro
├── tailwind.config.mjs # Configuration Tailwind
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances
```

## 🚀 Installation

### Prérequis
- Node.js 18+ (recommandé : 20+)
- npm ou pnpm

### Installation des dépendances

```bash
npm install
```

## 🛠️ Configuration

### 1. Personnaliser les informations du site

**Fichier principal : `src/data/siteConfig.ts`**

Modifier toutes les valeurs marquées `// À PERSONNALISER` :

```typescript
export const siteConfig = {
  business: {
    name: "Votre Entreprise",  // ← À changer
    phone: "+33 X XX XX XX XX", // ← Votre numéro
    email: "contact@votredomaine.com", // ← Votre email
    // ... etc.
  },
  // ...
};
```

### 2. Configurer le domaine

**Fichier : `astro.config.mjs`**

```javascript
export default defineConfig({
  site: 'https://votre-domaine.com', // ← Votre domaine
  // ...
});
```

**Fichier : `public/robots.txt`**

```
Sitemap: https://votre-domaine.com/sitemap-index.xml  # ← Votre domaine
```

### 3. Ajouter les images

Placer vos images dans `/public/images/` :

**Images obligatoires :**
- `hero-bg.jpg` - Background hero section (1920x1080px min)
- `cta-bg.jpg` - Background section CTA (1920x1080px min)
- `og-image.jpg` - Open Graph image (1200x630px)
- `logo.jpg` - Logo entreprise (500x500px)
- `favicon.svg` - Favicon (ou générer avec https://realfavicongenerator.net/)

**Formats recommandés :**
- JPEG/WebP pour photos (qualité 85%)
- SVG pour logos et icônes
- AVIF pour performance maximale (optionnel)

### 4. Configurer les fonts (optionnel)

Par défaut, les fonts Google (Inter + Space Grotesk) sont chargées depuis le CDN.

Pour des fonts custom locales :
1. Placer les fonts dans `/public/fonts/`
2. Modifier `src/styles/global.css` :

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
}
```

## 📝 Commandes disponibles

### Développement

```bash
npm run dev
# Démarre le serveur local sur http://localhost:4321
```

### Build production

```bash
npm run build
# Génère le site statique dans /dist
```

### Prévisualiser le build

```bash
npm run preview
# Prévisualise le build en local
```

### Vérifier TypeScript

```bash
npx astro check
```

## 🎨 Personnalisation du design

### Couleurs

**Fichier : `tailwind.config.mjs`**

```javascript
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: '#0A2E1C', ... },
      accent: { DEFAULT: '#7CB342', ... },
      // Modifier ici pour changer les couleurs
    },
  },
}
```

### Typographie

**Fichier : `tailwind.config.mjs`**

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Space Grotesk', 'Inter', 'sans-serif'],
  // Changer les fonts ici
},
```

### Animations

Les animations sont gérées par :
- **GSAP + ScrollTrigger** : animations au scroll
- **Framer Motion** : animations React
- **Tailwind** : animations CSS simples

Pour désactiver les animations sur mobile :
→ Respecte automatiquement `prefers-reduced-motion`

## 🔌 Ajouter des pages

### Créer une nouvelle page

1. Créer le fichier dans `/src/pages/` :

```astro
---
// src/pages/nouvelle-page.astro
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="Nouvelle Page" description="Description">
  <div class="pt-32 pb-20 bg-neutral-cream">
    <div class="container-custom">
      <h1>Nouvelle Page</h1>
      <!-- Contenu -->
    </div>
  </div>
</BaseLayout>
```

2. Ajouter au menu (si besoin) :

**Fichier : `src/components/Header.astro`**

```javascript
const navLinks = [
  // ...
  { name: 'Nouvelle Page', href: '/nouvelle-page' },
];
```

## 📧 Configurer le formulaire de contact

Le formulaire de contact (`/contact`) utilise une action `/api/contact` qui doit être configurée.

### Option A : Netlify Forms (recommandé pour Netlify)

1. Ajouter l'attribut `netlify` au formulaire :

```html
<form name="contact" method="POST" netlify>
```

2. Les soumissions apparaissent dans le dashboard Netlify.

### Option B : Formspree

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Modifier l'action du formulaire :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option C : API custom

Créer un endpoint Astro personnalisé dans `/src/pages/api/contact.ts`.

## 🚀 Déploiement

### Netlify (recommandé)

1. Connecter le repo GitHub à Netlify
2. Configuration build :
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. Variables d'environnement (si besoin) :
   ```
   PUBLIC_SITE_URL=https://votre-domaine.com
   ```

### Vercel

1. Connecter le repo GitHub à Vercel
2. Framework preset : **Astro**
3. Build automatique

### Autres hébergeurs

Tout hébergeur supportant du contenu statique :
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- etc.

## 🔍 SEO : Checklist post-déploiement

### 1. Google Search Console

- [ ] Ajouter le site dans GSC
- [ ] Soumettre le sitemap (`https://votre-domaine.com/sitemap-index.xml`)
- [ ] Vérifier l'indexation

### 2. Google My Business

- [ ] Créer/optimiser la fiche GMB
- [ ] Ajouter photos (min 10)
- [ ] Collecter des avis clients
- [ ] Lier le site web

### 3. Analytics

- [ ] Activer Google Analytics 4 (décommenter dans `BaseLayout.astro`)
- [ ] Configurer les objectifs (formulaire, appels)
- [ ] Alternative : [Plausible](https://plausible.io) (RGPD-friendly)

### 4. Meta tags

- [ ] Vérifier Open Graph : [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Vérifier Twitter Card
- [ ] Tester rich snippets : [Rich Results Test](https://search.google.com/test/rich-results)

### 5. Performance

- [ ] Tester Lighthouse (score > 90)
- [ ] Tester PageSpeed Insights
- [ ] Vérifier Core Web Vitals

## 🎯 Optimisations SEO local avancées

### Citations locales (NAP - Name, Address, Phone)

Créer des citations sur :
- PagesJaunes
- Yelp
- Facebook
- Annuaires professionnels du BTP

**Important :** Utiliser toujours les **mêmes informations** (nom, adresse, téléphone) partout.

### Avis clients

- Encourager les avis Google
- Répondre à tous les avis (positifs comme négatifs)
- Intégrer les avis sur le site (schema Review)

### Contenu local

- Créer un blog avec articles locaux
- "Élagage à [Ville] : guide complet"
- "Les 5 meilleurs arbres pour [Région]"
- etc.

## 🐛 Résolution de problèmes courants

### Les particules WebGL ne s'affichent pas

- Vérifier le support WebGL du navigateur
- Fallback automatique : gradient CSS affiché à la place

### Les animations ne se déclenchent pas

- Vérifier que GSAP est bien chargé (console browser)
- Ajouter la classe `.animate-on-scroll` aux éléments

### Images cassées

- Vérifier que les images existent dans `/public/images/`
- Chemins relatifs : `/images/nom.jpg` (pas de `public/`)

### Erreurs de build

```bash
# Nettoyer le cache
rm -rf node_modules dist .astro
npm install
npm run build
```

## 📚 Documentation

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Three.js Docs](https://threejs.org/docs/)
- [Schema.org](https://schema.org/LocalBusiness)

## 🆘 Support

Pour toute question ou problème :
1. Consulter la documentation Astro
2. Vérifier les issues GitHub du projet
3. Tester dans un navigateur récent

## 📄 License

Ce projet est fourni tel quel pour usage personnel ou commercial.

---

**Bon lancement ! 🚀🌳**
