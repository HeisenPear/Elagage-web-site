# Image Open Graph - Spécifications

## 📋 Requis pour l'image OG

L'image Open Graph est cruciale pour le SEO et l'apparence du site lorsqu'il est partagé sur les réseaux sociaux (Facebook, LinkedIn, WhatsApp, etc.).

### Dimensions et format
- **Taille exacte** : 1200x630 pixels (ratio 1.91:1)
- **Format** : JPG ou PNG (JPG recommandé pour le poids)
- **Poids maximum** : < 1 MB (idéalement < 300 KB)
- **Nom du fichier** : `og-image.jpg`
- **Emplacement** : `/public/images/og-image.jpg`

### Contenu recommandé

L'image doit contenir :

1. **Logo** de l'entreprise (Élagage Abattage 37)
2. **Titre principal** : "Élagueur Professionnel à Tours"
3. **Sous-titre** : "Élagage • Abattage • Taille de haies"
4. **USP** : "Crédit d'impôt -50% | Assuré 8M€"
5. **Téléphone** : "02 52 56 68 56"
6. **Image de fond** : Photo d'élagueur en action ou camion d'élagage

### Couleurs à utiliser

- **Vert foncé WhatsApp** : #128C7E (couleur principale)
- **Vert vif WhatsApp** : #25D366 (accents et CTA)
- **Orange** : #FFA500 (éléments secondaires)
- **Blanc** : Pour le texte et les highlights

### Design recommandé

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  [Logo]   ÉLAGUEUR PROFESSIONNEL À TOURS              │
│           Élagage Abattage 37                         │
│                                                        │
│           ✓ Crédit d'impôt -50%                       │
│           ✓ Assuré RC Pro 8M€                         │
│           ✓ Intervention rapide 48h                   │
│                                                        │
│           ☎ 02 52 56 68 56                            │
│                                                        │
│  [Image de fond : élagueur en action / camion]        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Zone de sécurité

Attention aux zones "safe" :
- **Facebook** : Éviter le texte dans les 250px du bas (aperçu mobile)
- **LinkedIn** : Centrer l'info importante au milieu
- **Twitter/X** : Ratio 2:1, donc prévoir recadrage

### Outils pour créer l'image

1. **Canva** (gratuit) : https://www.canva.com/
   - Template : "Facebook Post" (1200x630)
   - Facile d'utilisation, bibliothèque d'images

2. **Figma** (gratuit) : https://www.figma.com/
   - Plus professionnel, contrôle total

3. **Photopea** (gratuit, en ligne) : https://www.photopea.com/
   - Alternative gratuite à Photoshop

4. **Adobe Express** (gratuit) : https://www.adobe.com/express/

### Validation

Après création, tester l'image avec :
- **Facebook Debugger** : https://developers.facebook.com/tools/debug/
- **LinkedIn Inspector** : https://www.linkedin.com/post-inspector/
- **Twitter Card Validator** : https://cards-dev.twitter.com/validator

### Exemple de texte pour l'image

```
ÉLAGUEUR PROFESSIONNEL À TOURS
Élagage Abattage 37

✓ Crédit d'impôt jusqu'à 2 500€
✓ Assuré RC Pro 8 000 000€
✓ Intervention rapide sous 48h

☎ 02 52 56 68 56
elagage-abattage-37.fr
```

## 📝 Notes techniques

Une fois l'image créée et placée dans `/public/images/og-image.jpg`, elle sera automatiquement utilisée dans :
- Les balises Open Graph (`og:image`)
- Les balises Twitter Card (`twitter:image`)
- Le Schema.org LocalBusiness

Le fichier `src/data/siteConfig.ts` référence déjà cette image :
```typescript
ogImage: "/images/og-image.jpg"
```

## ✅ Checklist

- [ ] Image créée aux bonnes dimensions (1200x630)
- [ ] Poids < 300 KB
- [ ] Logo visible et lisible
- [ ] Téléphone bien visible
- [ ] USP (crédit d'impôt, assurance) mis en avant
- [ ] Couleurs de la charte respectées
- [ ] Testée sur Facebook Debugger
- [ ] Testée sur LinkedIn Inspector
- [ ] Fichier placé dans `/public/images/og-image.jpg`
