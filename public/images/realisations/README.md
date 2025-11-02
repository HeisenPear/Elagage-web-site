# 📸 Guide des Images - Élagage Abattage 37

## 📁 Structure des Dossiers

```
/public/images/realisations/
├── elagage/          # Photos élagage d'arbres
├── abattage/         # Photos abattage d'arbres
├── dessouchage/      # Photos dessouchage et rogneuse
├── taille-haies/     # Photos haies taillées
├── avant-apres/      # Comparaisons avant/après
├── equipe/           # Photos équipe, camion, matériel
└── chantiers/        # Photos générales chantiers
```

---

## 🎯 Spécifications Techniques

### Format & Compression
- **Format recommandé** : WebP (avec fallback JPG)
- **Dimensions optimales** :
  - Photos galerie : 1200x800px (ratio 3:2)
  - Photos cards : 800x600px (ratio 4:3)
  - Photos équipe : 600x600px (carré)
- **Qualité** : 85% (bon compromis qualité/poids)
- **Poids max** : 200 KB par image

### Conversion WebP
```bash
# Convertir avec sharp (Node.js)
npx sharp -i photo.jpg -o photo.webp -q 85

# Ou avec cwebp (Google)
cwebp -q 85 photo.jpg -o photo.webp
```

---

## 📋 Liste des Photos Nécessaires

### 1. **Cards Prestations** (Face avant avec photos)

| Service | Fichier | Description | Alt Text SEO |
|---------|---------|-------------|--------------|
| Élagage | `elagage/card-elagage.webp` | Élagueur en action dans arbre | "Élagueur professionnel en action élagage arbre Tours" |
| Abattage | `abattage/card-abattage.webp` | Arbre en cours d'abattage | "Abattage sécurisé arbre dangereux Tours 37" |
| Dessouchage | `dessouchage/card-dessouchage.webp` | Rogneuse ou souche | "Dessouchage professionnel rogneuse Tours" |
| Taille haies | `taille-haies/card-haies.webp` | Haie bien taillée | "Taille haie professionnelle élagueur Tours" |
| Entretien | `chantiers/card-entretien.webp` | Jardin entretenu | "Entretien jardin espaces verts Tours" |
| Débroussaillage | `chantiers/card-debroussaillage.webp` | Terrain nettoyé | "Débroussaillage terrain Tours Indre-et-Loire" |

---

### 2. **Galerie de Réalisations** (9-12 photos minimum)

#### Élagage (4 photos)
- `elagage/elagage-chene-tours.webp` - "Élagage grand chêne centenaire Tours élagueur certifié"
- `elagage/elagage-pin-hauteur.webp` - "Élagage pin en hauteur nacelle Tours 37"
- `elagage/elagage-fruitier.webp` - "Taille arbre fruitier pommier élagueur Tours"
- `elagage/elagage-ornement.webp` - "Élagage arbre ornement jardin Tours"

#### Abattage (3 photos)
- `abattage/abattage-securise-maison.webp` - "Abattage sécurisé arbre près maison Tours"
- `abattage/abattage-demontage.webp` - "Démontage arbre dangereux techniques professionnelles Tours"
- `abattage/abattage-evacuation.webp` - "Évacuation bois après abattage Tours 37"

#### Dessouchage (2 photos)
- `dessouchage/dessouchage-rogneuse.webp` - "Dessouchage souche rogneuse professionnelle Tours"
- `dessouchage/dessouchage-avant-apres.webp` - "Terrain après dessouchage souche Tours"

#### Chantiers (2 photos)
- `chantiers/chantier-complet-1.webp` - "Chantier élagage abattage complet Tours"
- `chantiers/chantier-jardin-apres.webp` - "Jardin après intervention élagueur Tours"

---

### 3. **Avant / Après** (4-6 comparaisons)

| Avant | Après | Description |
|-------|-------|-------------|
| `avant-apres/avant-jardin-1.jpg` | `avant-apres/apres-jardin-1.jpg` | "Jardin encombré avant élagage Tours" / "Jardin dégagé après élagage Tours" |
| `avant-apres/avant-arbre-2.jpg` | `avant-apres/apres-arbre-2.jpg` | "Arbre non taillé avant intervention" / "Arbre élagué proprement après" |
| `avant-apres/avant-haie-3.jpg` | `avant-apres/apres-haie-3.jpg` | "Haie envahie avant taille" / "Haie taillée nette après" |
| `avant-apres/avant-souche-4.jpg` | `avant-apres/apres-souche-4.jpg` | "Souche gênante avant dessouchage" / "Terrain propre après dessouchage" |

---

### 4. **Équipe & Matériel** (4 photos)

| Fichier | Description | Alt Text |
|---------|-------------|----------|
| `equipe/elagueur-action.webp` | Élagueur en action avec EPI | "Élagueur professionnel certifié équipement sécurité Tours" |
| `equipe/camion-nacelle.webp` | Camion avec nacelle élévatrice | "Camion nacelle élévateur élagage hauteur Tours" |
| `equipe/materiel-securite.webp` | Équipement de sécurité | "Équipement sécurité professionnel EPI élagage Tours" |
| `equipe/rogneuse-dessouchage.webp` | Rogneuse de souches | "Rogneuse professionnelle dessouchage souches Tours" |

---

## 🔍 Checklist SEO Images

### ✅ Nommage Fichiers
- ❌ Mauvais : `IMG_1234.jpg`, `photo1.jpg`, `DSC_0056.jpg`
- ✅ Bon : `elagage-chene-tours-37.webp`, `abattage-arbre-dangereux-tours.webp`

### ✅ Alt Text Optimisé
**Formule** : [Action] + [Détail] + [Lieu] + [Mots-clés]

**Exemples** :
```html
<img src="elagage-1.webp" alt="Élagage professionnel grand chêne Tours élagueur certifié" />
<img src="abattage-1.webp" alt="Abattage sécurisé arbre dangereux près maison Tours 37" />
<img src="dessouchage-1.webp" alt="Dessouchage souche rogneuse professionnelle Tours Indre-et-Loire" />
```

### ✅ Attributs Width/Height
```html
<img
  src="photo.webp"
  alt="..."
  width="1200"
  height="800"
  loading="lazy"
/>
```

---

## 📊 Impact SEO Attendu

### Mots-clés ciblés par images :
- ✅ "élagueur tours"
- ✅ "élagage tours 37"
- ✅ "abattage arbre tours"
- ✅ "dessouchage tours"
- ✅ "élagueur professionnel indre et loire"
- ✅ "taille haie tours"

### Rich Snippets :
- Google Images : Featured image dans résultats
- Recherche locale : Photos dans Google Maps
- Schema.org ImageGallery : Galerie reconnue par Google

---

## 🚀 Pour Ajouter des Photos

1. **Optimiser** : Convertir en WebP + compresser
2. **Renommer** : `action-detail-lieu-mots-cles.webp`
3. **Placer** : Dans le bon dossier
4. **Vérifier** : Alt text SEO + dimensions
5. **Tester** : Build + performance

---

## 📝 Notes Importantes

- Toutes les photos doivent montrer un **travail professionnel de qualité**
- Éviter photos floues, mal cadrées ou amateurs
- Privilégier **action en cours** plutôt que résultats finis seuls
- Inclure **visages équipe** si possible (authenticité)
- Montrer **matériel professionnel** (nacelle, rogneuse, EPI)
- Varier **angles et perspectives** pour dynamisme

---

**Date de création** : 2025-01-28
**Dernière mise à jour** : 2025-01-28
