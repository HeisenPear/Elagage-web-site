# 🎯 Campagne Google Ads — Élagage Abattage 37

Document opérationnel clé en main pour le lancement de la campagne Google Ads.
Tout est prêt à copier-coller dans l'interface Google Ads.

- **Annonceur** : Élagage Abattage 37 (SIRET 510 816 473 00019)
- **Zone** : Tours + Indre-et-Loire (rayon 50 km autour de Joué-lès-Tours)
- **Téléphone** : 06 31 46 43 50
- **Tag Google Ads** : `AW-17858152606` (déjà installé sur le site)
- **Site** : https://www.elagageabattage37.com

---

## ⚠️ ÉTAPE 0 — Prérequis bloquant : créer les actions de conversion

> Sans ça, la campagne dépense à l'aveugle. **À faire AVANT de lancer.**

Dans Google Ads → **Objectifs › Conversions › + Nouvelle action de conversion › Site Web**.
Créer **3 actions** :

| Action | Catégorie | Valeur | Comptage |
|---|---|---|---|
| **Appel téléphonique (clic)** | Contacter > Appels téléphoniques | ex. 40 € | Une (1 par clic) |
| **Formulaire de devis** | Prospect > Envoyer un formulaire | ex. 50 € | Une |
| **Clic email** (secondaire) | Contacter | ex. 20 € | Une |

> Les valeurs sont des estimations de la valeur d'un contact pour toi (marge moyenne × taux de transformation prospect→chantier). Ajuste-les avec tes vrais chiffres ; elles servent à l'optimisation par valeur.

Pour chacune, choisir **« Installer le tag manuellement »** et copier le **send-to label** (format `AW-17858152606/aBcDeFgH123`).

Ensuite, renseigner ces labels dans les variables d'environnement (Vercel → Settings → Environment Variables, ou fichier `.env`) :

```
PUBLIC_GADS_CONV_CALL=AW-17858152606/xxxxxxxxxxxxx
PUBLIC_GADS_CONV_FORM=AW-17858152606/yyyyyyyyyyyyy
PUBLIC_GADS_CONV_EMAIL=AW-17858152606/zzzzzzzzzzzzz
```

Puis **redéployer**. Le code du site déclenche déjà automatiquement ces conversions :
- clic sur le numéro de téléphone (partout) → `CALL`
- envoi réussi du formulaire de contact → `FORM`
- clic sur l'email → `EMAIL`

**Vérification** : installer l'extension Chrome **Google Tag Assistant**, cliquer sur le téléphone et envoyer le formulaire, confirmer que les events `conversion` partent.

> 💡 Pense aussi à activer le **suivi des appels** dans les annonces (extension d'appel + "transfert d'appels Google") pour compter les appels passés directement depuis l'annonce.

---

## 1. Structure du compte

Une campagne **Search** (Réseau de Recherche uniquement, pas Display), segmentée en groupes d'annonces par intention. On démarre simple et rentable.

```
Campagne : [Search] Élagage Tours - Indre-et-Loire
│
├── Groupe 1 : Élagage (générique)
├── Groupe 2 : Abattage
├── Groupe 3 : Dessouchage
├── Groupe 4 : Taille de haies / Entretien
├── Groupe 5 : Urgence (tempête / arbre dangereux)
└── Groupe 6 : Géo prioritaires (Tours / Joué-lès-Tours)
```

> On évite Performance Max au démarrage : trop opaque pour un petit budget local. On veut voir et contrôler les termes de recherche. PMax pourra venir plus tard une fois les conversions accumulées.

### Paramètres de la campagne
- **Type** : Réseau de Recherche
- **Réseaux** : décocher "Partenaires du réseau de recherche" et "Réseau Display" au début
- **Zone géo** : Tours + rayon 50 km **OU** liste de communes (voir §5). Cibler **« Présence : personnes situées dans vos zones ciblées »** (pas "intérêt") pour éviter les clics hors zone.
- **Langue** : Français
- **Stratégie d'enchères** : voir §6
- **Calendrier de diffusion** : 24h/24 (l'entreprise est joignable 24h/24) — à ajuster selon disponibilité réelle
- **Appareils** : tous, avec surveillance mobile (la majorité des appels viennent du mobile)

---

## 2. Mots-clés par groupe d'annonces

Correspondances : `[exact]`, `"expression"`. On évite le **requête large** au début (gaspille le budget).

### Groupe 1 — Élagage (générique)
```
"élagage tours"
[élagage tours]
"élagueur tours"
[élagueur tours]
"entreprise élagage tours"
"élagage arbre tours"
"élagueur professionnel tours"
"élagage indre et loire"
"élagueur 37"
"élagage 37"
"prix élagage tours"
"devis élagage tours"
"élagueur près de chez moi"
"taille arbre tours"
"élagueur grimpeur tours"
```

### Groupe 2 — Abattage
```
"abattage arbre tours"
[abattage arbre tours]
"abattage tours"
"abattre un arbre tours"
"abattage arbre dangereux"
"entreprise abattage arbre 37"
"prix abattage arbre"
"couper arbre tours"
```

### Groupe 3 — Dessouchage
```
"dessouchage tours"
"dessouchage arbre 37"
"enlever souche arbre"
"rognage souche tours"
"enlèvement souche tours"
```

### Groupe 4 — Taille de haies / Entretien
```
"taille de haie tours"
"taille haie tours"
"entreprise taille haie 37"
"entretien jardin tours"
"entretien espaces verts tours"
"débroussaillage tours"
```

### Groupe 5 — Urgence
```
"élagage urgence tours"
"abattage arbre urgent"
"arbre dangereux qui faire"
"élagage après tempête"
"arbre tombé sur maison"
"intervention arbre urgence 37"
```

### Groupe 6 — Géo prioritaires
```
"élagage joué-lès-tours"
"élagueur joué-lès-tours"
"élagage saint-cyr-sur-loire"
"élagage amboise"
"élagueur amboise"
"élagage chambray-lès-tours"
"élagage saint-avertin"
"élagage montlouis-sur-loire"
```

> Recommandation : créer des **groupes très serrés** (5-15 mots-clés thématiquement proches) pour que chaque annonce colle au mot-clé → meilleur Quality Score → CPC plus bas.

---

## 3. Mots-clés négatifs (liste à appliquer à la campagne)

Indispensable pour ne pas payer des clics inutiles.

```
gratuit
gratuitement
emploi
recrutement
offre d'emploi
salaire
formation
devenir élagueur
cap élagueur
diplôme
métier
location
louer
matériel
tronçonneuse
nacelle
occasion
leboncoin
bois de chauffage
acheter bois
prix du bois
tuto
tutoriel
comment élaguer
soi-même
définition
wikipedia
mairie
service public
ONF
permis
```

> À enrichir chaque semaine via le **rapport « Termes de recherche »** (voir §8).

---

## 4. Annonces (RSA — Responsive Search Ads)

Format Google actuel : **Responsive Search Ad** = jusqu'à 15 titres (30 car.) + 4 descriptions (90 car.). Google teste les combinaisons. Une RSA par groupe d'annonces.

### Arguments différenciants (à répartir dans les annonces)
- ✅ Assuré RC Pro **8 millions €**
- ✅ **Crédit d'impôt -50 %** (jusqu'à 2 500 €)
- ✅ **Devis gratuit sous 24h**
- ✅ Plus de **10 ans d'expérience**
- ✅ Paiement **en plusieurs fois**
- ✅ Intervention **rapide / 24h-24**
- ✅ Élagueur **certifié / grimpeur**
- ✅ Local (Joué-lès-Tours)

### RSA — Groupe 1 (Élagage) → page `/services/elagage-arbres`

**Titres (≤30 caractères)** :
```
1.  Élagueur Tours (37)
2.  Élagage Professionnel
3.  Devis Gratuit sous 24h
4.  Élagueur Certifié Tours
5.  Crédit d'Impôt -50%
6.  Assuré RC Pro 8M€
7.  +10 Ans d'Expérience
8.  Élagage Arbre Tours
9.  Paiement en Plusieurs Fois
10. Élagueur Grimpeur 37
11. Travail Soigné & Sécurisé
12. Intervention Rapide 37
13. Élagage Raisonné
14. ☎ 06 31 46 43 50
15. Devis Gratuit en 24h
```

**Descriptions (≤90 caractères)** :
```
1. Élagage professionnel à Tours et en Indre-et-Loire. Devis gratuit sous 24h. Appelez !
2. Élagueur certifié, assuré 8M€. Crédit d'impôt 50%. Travail soigné et sécurisé.
3. +10 ans d'expérience. Tous types d'arbres. Paiement en plusieurs fois possible.
4. Intervention rapide dans tout le 37. Devis gratuit et sans engagement.
```

**Chemin d'affichage** : `/elagage/Tours`

### RSA — Groupe 2 (Abattage) → page `/services/abattage-arbres`

**Titres** :
```
1.  Abattage Arbre Tours (37)
2.  Abattage Sécurisé
3.  Arbre Dangereux ?
4.  Devis Gratuit sous 24h
5.  Assuré RC Pro 8M€
6.  Abattage Professionnel
7.  Élagueur Certifié 37
8.  Intervention Rapide
9.  +10 Ans d'Expérience
10. Crédit d'Impôt -50%
11. Matériel Professionnel
12. ☎ 06 31 46 43 50
13. Abattage Arbre 37
14. Chantier Propre Garanti
15. Paiement Plusieurs Fois
```

**Descriptions** :
```
1. Abattage sécurisé d'arbres dangereux ou gênants à Tours. Devis gratuit 24h.
2. Techniques pro, matériel adapté. Assuré 8M€. Chantier propre garanti.
3. Élagueur certifié +10 ans. Intervention rapide dans tout l'Indre-et-Loire.
4. Évacuation des déchets verts incluse. Devis gratuit et sans engagement.
```

### RSA — Groupe 5 (Urgence) → page `/contact` ou accueil

**Titres** :
```
1.  Élagage Urgence Tours
2.  Arbre Dangereux ? 24h/24
3.  Intervention Rapide 37
4.  Abattage d'Urgence
5.  Après Tempête : on Intervient
6.  ☎ 06 31 46 43 50
7.  Élagueur Urgence 24h/24
8.  Assuré RC Pro 8M€
9.  Devis Immédiat
10. Branche sur Toiture ?
11. Élagueur Certifié Tours
12. Intervention le Jour Même
13. Sécurisation Arbre 37
14. +10 Ans d'Expérience
15. Tours & Indre-et-Loire
```

**Descriptions** :
```
1. Arbre dangereux, branche tombée ? Intervention d'urgence à Tours. Appelez 24h/24.
2. Sécurisation et abattage d'urgence. Élagueur certifié, assuré 8M€.
3. Intervention rapide dans tout le 37, le jour même si nécessaire.
4. Après tempête, on dégage et sécurise. Devis immédiat par téléphone.
```

> Pour les groupes 3, 4, 6 : reprendre la trame ci-dessus en adaptant le service / la ville. Pointer chaque annonce vers la page la plus pertinente (service correspondant ou page ville `/zones/...`).

---

## 5. Extensions (Assets)

À ajouter au niveau campagne — elles augmentent le CTR et la taille de l'annonce (gratuit).

### Liens annexes (Sitelinks)
| Texte | URL |
|---|---|
| Élagage d'arbres | /services/elagage-arbres |
| Abattage d'arbres | /services/abattage-arbres |
| Dessouchage | /services/dessouchage-arbres |
| Taille de haies | /services/taille-haies |
| Devis gratuit | /contact |
| Nos zones d'intervention | /zones |

### Accroches (Callouts)
```
Devis gratuit sous 24h
Assuré RC Pro 8M€
Crédit d'impôt -50%
+10 ans d'expérience
Paiement en plusieurs fois
Chantier propre garanti
Intervention rapide
```

### Extraits de site (Structured Snippets)
- **Type : Services** → Élagage, Abattage, Dessouchage, Taille de haies, Entretien espaces verts, Élagage fruitiers

### Extension d'appel
- Numéro : **06 31 46 43 50** — activer le **suivi des appels** Google pour compter ces appels comme conversions.

### Extension de lieu
- Lier la fiche **Google Business Profile** (Joué-lès-Tours) → affiche l'adresse + Maps. (Voir `GOOGLE-MY-BUSINESS-GUIDE.md`.)

### Formulaire pour prospects (Lead form) — optionnel
- Possibilité d'ajouter un asset "formulaire" directement dans l'annonce.

---

## 6. Budget & stratégie d'enchères

### Budget
- **Démarrage recommandé** : **15 à 25 €/jour** (≈ 450-750 €/mois) le temps d'accumuler des données.
- Concentrer le budget sur les groupes **Élagage**, **Abattage** et **Urgence** (les plus rentables).

### Stratégie d'enchères — par phases
1. **Phase 1 (semaines 1-3, apprentissage)** : **Maximiser les clics** avec un **CPC max plafonné** (ex. 1,50-2,50 €) → on récolte du trafic et des premières conversions sans laisser l'algo s'emballer.
2. **Phase 2 (dès ~15-30 conversions/mois)** : basculer sur **Maximiser les conversions**.
3. **Phase 3 (données stables)** : passer en **CPA cible** (définir un coût par prospect acceptable, ex. 15-30 €) ou **ROAS cible** si les valeurs de conversion sont fiables.

> Repère secteur élagage/paysage en France : CPC souvent **1-3 €**, coût par prospect **10-40 €** selon concurrence locale. À ajuster avec tes données réelles.

---

## 7. Ciblage géographique

**Option recommandée** : rayon de 50 km autour de Joué-lès-Tours (37300), OU liste de communes ciblées :

```
Tours, Joué-lès-Tours, Saint-Cyr-sur-Loire, Chambray-lès-Tours,
Saint-Pierre-des-Corps, Ballan-Miré, La Riche, Saint-Avertin,
Fondettes, Montlouis-sur-Loire, Véretz, Rochecorbon, Vouvray,
Azay-le-Rideau, Langeais, Chinon, Loches, Montbazon, Bléré, Amboise
```

- **Type de présence** : « Personnes se trouvant régulièrement dans la zone ou y étant » → choisir **« Présence »** uniquement.
- Surveiller le rapport « Zones géographiques » pour ajuster les enchères par commune (bid adjustments) selon la rentabilité.

---

## 8. Suivi & optimisation (routine hebdomadaire)

| Fréquence | Action |
|---|---|
| **2-3×/semaine** (1er mois) | Rapport **Termes de recherche** → ajouter les mauvais termes en **négatifs**, et les bons en mots-clés |
| Hebdo | Vérifier conversions (appels + formulaires), CPA, CTR par annonce |
| Hebdo | Mettre en pause les mots-clés qui dépensent sans convertir |
| 2 semaines | Comparer les titres RSA (rapport "Composants") — remplacer ceux notés "Faible" |
| Mensuel | Ajuster enchères par zone / appareil / horaire selon la donnée |
| Mensuel | Vérifier le **Quality Score** des mots-clés principaux (viser ≥ 7) |

### Indicateurs cibles (à affiner)
- CTR Search : **> 5 %**
- Taux de conversion site : **> 5-8 %** (formulaire + appel)
- Quality Score moyen : **≥ 7/10**
- Part d'impressions ("Impr. share") sur mots-clés marque/locaux : **> 70 %**

---

## 9. Checklist de lancement

- [ ] **0.** Les 3 actions de conversion créées dans Google Ads
- [ ] **0b.** Labels collés dans les variables d'env + site redéployé
- [ ] **0c.** Tracking vérifié avec Google Tag Assistant (appel + formulaire OK)
- [ ] 1. Suivi des appels activé (extension d'appel)
- [ ] 2. Campagne Search créée, Display/partenaires décochés
- [ ] 3. Ciblage géo = "Présence" sur la zone 37
- [ ] 4. Groupes d'annonces + mots-clés (correspondances exact/expression)
- [ ] 5. Liste de négatifs appliquée
- [ ] 6. 1 RSA par groupe (≥ 8 titres, 4 descriptions)
- [ ] 7. Extensions : sitelinks, accroches, snippets, appel, lieu
- [ ] 8. Budget 15-25 €/j + stratégie "Maximiser les clics" (CPC plafonné)
- [ ] 9. Page de destination = page service correspondante (pas l'accueil pour tout)
- [ ] 10. Fiche Google Business Profile active et liée

---

## 10. Ce qui est déjà fait côté site (par Claude)

- ✅ Tag Google Ads `AW-17858152606` présent et paramétrable via env
- ✅ Helper global `window.trackConversion()` dans `BaseLayout.astro`
- ✅ Conversion **appel** : auto sur tous les liens `tel:` (délégation d'événement)
- ✅ Conversion **email** : auto sur tous les liens `mailto:`
- ✅ Conversion **formulaire** : émise par `ContactForm.tsx` au succès d'envoi
- ✅ Variables d'env documentées dans `.env.example`

**Il ne reste qu'à créer les 3 actions de conversion dans Google Ads et coller les labels (étape 0).**
