# 🔍 Audit Performance & Optimisation - Janvier 2025

## 📊 État Actuel

### ✅ Points Positifs
- ✅ Framer Motion déjà installé (v11.11.1)
- ✅ Images au format WebP (optimisation moderne)
- ✅ Astro SSG avec islands architecture (bon pour performance)
- ✅ CSS pur pour certaines animations (Intersection Observer)
- ✅ Lazy loading activé sur certaines images
- ✅ TypeScript configuré

### ⚠️ Problèmes Identifiés

#### 🖼️ Images (PRIORITÉ HAUTE)
- **Poids total**: 7.8 MB (❌ beaucoup trop lourd)
- **Problème principal**: Images WebP non compressées optimalement
  - `loire-hero.webp`: 260 KB (❌ devrait être < 100 KB)
  - `Logo abatteur.webp`: 256 KB (❌ logo trop lourd)
  - `Logo Lagueur Abatteur.webp`: 168 KB (❌ logo trop lourd)
  - `rudy-capello-elagueur.webp`: 208 KB (❌ devrait être < 80 KB)
- **Manque**: srcset responsive (pas d'images adaptatives)
- **Manque**: Formats modernes AVIF en fallback
- **Impact**: LCP (Largest Contentful Paint) probablement > 2.5s sur mobile

#### ⚛️ React Bundle (PRIORITÉ MOYENNE)
- **Problème**: React DOM complet chargé (127 KB minifié)
- **Non utilisé**: Framer Motion installé mais pas utilisé
- **Animations actuelles**: CSS pur + Intersection Observer (bon mais basique)
- **Opportunité**: Utiliser Framer Motion pour animations fluides
- **Bundle sizes**:
  - `client.DrE9CFQR.js`: Gros bundle React (probablement 40-50 KB gzippé)
  - Pas de code splitting visible

#### 📱 Mobile Performance (PRIORITÉ HAUTE)
- **User report**: "scores Lighthouse mobile assez mauvais"
- **Probable**:
  - TBT (Total Blocking Time) élevé
  - CLS (Cumulative Layout Shift) à cause des images non optimisées
  - FID (First Input Delay) à cause du JavaScript lourd
- **Images hero**: Chargées en eager mais trop lourdes (260 KB)

#### 🎨 Animations Actuelles
- **État**: CSS pur avec `.animate-on-scroll` + Intersection Observer
- **Bon**: Performant, pas de JavaScript lourd
- **Limite**: Animations basiques (fade-in, translateY uniquement)
- **Opportunité**: Framer Motion pour animations plus riches et fluides

#### 🔧 SEO (À VÉRIFIER)
- SEOHead.astro présent (✅)
- Sitemap configuré (✅)
- À vérifier:
  - Meta descriptions
  - Structured data Schema.org
  - Open Graph tags
  - Robots.txt

---

## 🚀 Plan d'Action

### Phase 1: Optimisation Images (Impact: ⭐⭐⭐⭐⭐)
**Objectif**: Réduire le poids des images de 7.8 MB → < 2 MB

1. **Compression agressive des images**
   - Loire Hero: 260 KB → 80 KB (quality 75)
   - Logos: 256 KB → 30 KB (quality 80)
   - Rudy Capello: 208 KB → 60 KB (quality 70)

2. **Images responsive avec srcset**
   ```html
   <img
     srcset="
       loire-hero-400.webp 400w,
       loire-hero-800.webp 800w,
       loire-hero-1200.webp 1200w,
       loire-hero-1600.webp 1600w
     "
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
     src="loire-hero-1200.webp"
     alt="..."
   />
   ```

3. **Format AVIF en complément** (20-30% plus léger que WebP)
   ```html
   <picture>
     <source srcset="hero.avif" type="image/avif">
     <source srcset="hero.webp" type="image/webp">
     <img src="hero.jpg" alt="...">
   </picture>
   ```

4. **Lazy loading intelligent**
   - Hero: `loading="eager"` (keep)
   - Logos section: `loading="lazy"`
   - Galerie: `loading="lazy"` + Intersection Observer

**Impact attendu**:
- LCP: -60% (2.5s → 1.0s)
- Total page weight: -70% (7.8 MB → 2 MB)

---

### Phase 2: Framer Motion (Impact: ⭐⭐⭐⭐)
**Objectif**: Animations fluides et modernes

1. **Remplacer `.animate-on-scroll` par Framer Motion**
   - Composant wrapper `<MotionDiv>` avec presets
   - Animations: fadeIn, slideUp, slideInLeft, slideInRight, scale
   - Stagger children automatique

2. **Animations ciblées**:
   - Hero title: Split text avec cascade letters
   - Services cards: Hover effects + flip animations
   - Stats counter: Number increment avec easing
   - CTA buttons: Spring animations
   - Scroll indicator: Bounce avec Motion

3. **Configuration performance**:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, margin: "-100px" }}
     transition={{ duration: 0.6, ease: "easeOut" }}
   >
   ```

4. **Respecter `prefers-reduced-motion`**:
   ```tsx
   const prefersReducedMotion = useReducedMotion()
   const animation = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
   ```

**Impact attendu**:
- UX: +40% (animations plus fluides)
- Bounce rate: -15% (meilleure rétention)
- Bundle size: +15 KB (acceptable pour le gain UX)

---

### Phase 3: Optimisation React (Impact: ⭐⭐⭐)
**Objectif**: Code splitting + lazy loading

1. **Lazy load des composants React**:
   ```tsx
   const ContactForm = lazy(() => import('./ContactForm'))
   const RealisationsGallery = lazy(() => import('./RealisationsGallery'))
   ```

2. **Client directives Astro optimisées**:
   - `client:idle` pour ContactForm (déjà bon ✅)
   - `client:visible` pour RealisationsGallery
   - `client:load` pour FloatingContactButton (priorité)

3. **Optimiser FlipCard**:
   - Remplacer CSS flip par Framer Motion `<motion.div>` avec `rotateY`
   - Ajouter `layoutId` pour transitions fluides
   - Gesture support: drag to flip

4. **Tree shaking**:
   - Vérifier imports Lucide React (n'importer que les icônes utilisées)
   - Supprimer GSAP + Lenis (non utilisés ?)

**Impact attendu**:
- First Load JS: -25% (150 KB → 110 KB)
- TTI: -0.5s
- Bundle splits: +3-4 chunks

---

### Phase 4: Mobile Optimization (Impact: ⭐⭐⭐⭐⭐)
**Objectif**: Lighthouse mobile score > 90

1. **Responsive images** (cf Phase 1)

2. **Touch interactions**:
   - Augmenter tap target size (min 48x48px)
   - Ajouter touch feedback sur tous les boutons
   - Désactiver hover states sur touch devices

3. **Viewport optimization**:
   - Vérifier meta viewport
   - Désactiver zoom only on form inputs

4. **Performance budgets**:
   ```json
   {
     "images": "500 KB",
     "scripts": "150 KB",
     "total": "1000 KB"
   }
   ```

5. **Mobile-first CSS**:
   - Revoir les breakpoints
   - Optimiser les fonts (preload uniquement weight 400 et 700)

**Impact attendu**:
- Lighthouse mobile: 65 → 92
- Mobile bounce rate: -20%

---

### Phase 5: SEO Final (Impact: ⭐⭐⭐)
**Objectif**: SEO score 100/100

1. **Vérifier structured data**:
   - LocalBusiness schema
   - Service schema pour chaque prestation
   - BreadcrumbList
   - FAQPage

2. **Meta tags complets**:
   - Open Graph (Facebook)
   - Twitter Cards
   - Canonical URLs

3. **Sitemap.xml automatique** (déjà configuré ?)

4. **Robots.txt** optimisé

**Impact attendu**:
- SEO score: 95 → 100
- CTR Google: +10%

---

## 📈 Résultats Attendus

### Avant Optimisation (Estimé)
- 🟡 Performance mobile: 65/100
- 🟢 Desktop: 85/100
- 🔴 LCP: 2.8s (mobile)
- 🟡 TBT: 400ms
- 🟢 CLS: 0.05

### Après Optimisation (Objectif)
- 🟢 Performance mobile: 92/100 (+42%)
- 🟢 Desktop: 98/100 (+15%)
- 🟢 LCP: 1.2s (-57%)
- 🟢 TBT: 150ms (-63%)
- 🟢 CLS: 0.02 (-60%)

---

## 🛠️ Prochaines Étapes

1. ✅ Audit terminé
2. ⏳ **Phase 1**: Optimisation images (30 min)
3. ⏳ **Phase 2**: Intégration Framer Motion (45 min)
4. ⏳ **Phase 3**: Code splitting React (20 min)
5. ⏳ **Phase 4**: Tests mobile + corrections (30 min)
6. ⏳ **Phase 5**: SEO final (15 min)

**Temps total estimé**: 2h30

---

## 📚 Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)
- [WebP/AVIF Compression](https://squoosh.app/)
