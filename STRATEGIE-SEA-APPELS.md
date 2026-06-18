# 📞 Stratégie Google Ads « Appels » — Élagage Abattage 37

Stratégie SEA de niveau expert, **orientée conversion en appels téléphoniques**, pour
dominer un marché local très concurrentiel (élagage / abattage en Indre-et-Loire).

> Objectif : faire sonner le 06 31 46 43 50 le plus souvent possible, au coût par
> appel le plus bas, en captant l'intention au moment exact où le prospect cherche
> un élagueur.

---

## 0. Le principe directeur

Dans l'élagage, **80 % des conversions se font par téléphone**, pas par formulaire.
Le client a un arbre dangereux, une urgence, ou veut un devis : il **appelle**.
Toute la stratégie est donc construite pour **maximiser les appels**, pas les clics.

Cela change 4 choses par rapport à une campagne « classique » :
1. La **conversion principale = l'appel** (depuis l'annonce ET depuis le site).
2. Les **enchères s'optimisent sur les appels** (pas sur les visites).
3. Le **mobile est prioritaire** (90 % des appels viennent du mobile).
4. Les **formats d'annonces qui poussent à appeler** sont privilégiés.

---

## 1. Les 3 canaux à activer (par ordre de ROI)

### 🥇 Canal 1 — Local Services Ads (LSA) « Garanti par Google » ⭐ PRIORITÉ ABSOLUE
Pour les métiers de l'arbre, c'est **LE** canal qui rapporte le plus d'appels.
- S'affiche **tout en haut**, AU-DESSUS des annonces Search classiques et de Maps.
- Tu paies **au prospect** (à l'appel), pas au clic → ROI souvent supérieur.
- Badge **« Garanti par Google »** = réassurance énorme sur un marché de confiance.
- Nécessite une **vérification** (licence, assurance, background check) — tu as déjà
  l'assurance RC Pro 8M€ et le SIRET, donc dossier solide.
- Classement basé sur : avis Google, réactivité aux appels, proximité, taux de réponse.

> 👉 **Action** : candidater aux Local Services Ads en parallèle de la campagne Search.
> C'est le plus gros levier d'appels du secteur. À lancer en même temps.

### 🥈 Canal 2 — Campagnes Search orientées appels (le cœur, automatisé par notre programme)
- Annonces RSA + **asset d'appel** + **conversion sur appel**.
- Stratégie d'enchères qui optimise les appels (voir §3).
- C'est ce que crée déjà `ads-automation/setup_campaign.py`.

### 🥉 Canal 3 — Google Business Profile (gratuit, appels depuis Maps)
- Fiche optimisée = appels gratuits depuis Google Maps + « pack local ».
- Synergie avec le SEO local (voir `GOOGLE-MY-BUSINESS-GUIDE.md`).
- **Le bouton « Appeler » de la fiche est une source d'appels majeure et gratuite.**

---

## 2. Architecture de campagne (appels)

```
COMPTE
├── [LSA] Local Services Ads — Élagage / Abattage          ← canal séparé
│
├── [Search] Élagage 37 — APPELS                            ← notre programme
│   ├── Élagage (générique)
│   ├── Abattage
│   ├── Urgence            ← priorité d'enchère max (intention d'appel la + forte)
│   ├── Dessouchage
│   ├── Taille de haies / Entretien
│   └── Géo prioritaires
│
└── [Search] Marque & Défense                               ← à ajouter
    └── "élagage abattage 37", nom de l'entreprise
        → protège ta marque, CPC dérisoire, capte ceux qui te cherchent
```

> **Campagne « Urgence » = la mine d'or des appels.** Quelqu'un qui tape « arbre
> tombé sur maison » ou « élagage urgence » **appelle immédiatement**. On lui met
> l'enchère la plus agressive et une annonce 100 % « Appelez maintenant 24h/24 ».

---

## 3. Enchères & mesure (le nerf de la guerre)

### Conversion principale = appels
On compte **3 sources d'appels** comme conversions :
1. **Appel depuis l'annonce** (asset d'appel + transfert Google) → suivi natif.
2. **Appel depuis le site** (clic sur le numéro) → déjà tracké (`PUBLIC_GADS_CONV_CALL`).
3. **Appel depuis un numéro affiché sur le site** (numéro Google de redirection) →
   activable via le tag d'appel Google sur le site.

### Stratégie d'enchères — feuille de route
| Phase | Quand | Stratégie | Pourquoi |
|---|---|---|---|
| **1. Amorçage** | S0 → ~15 appels | **Maximiser les clics**, plafond CPC 2 € | Pas d'historique : on récolte des appels sans laisser l'algo déraper. |
| **2. Bascule appels** | ~15-30 appels | **Maximiser les conversions** | L'algo optimise enfin sur les appels réels. |
| **3. Rentabilité** | données stables | **CPA cible** (ex. 15-25 €/appel) | On pilote le coût par appel. |

### Ajustements d'enchères (dès le départ)
- **Mobile : +20 à +30 %** (c'est de là que viennent les appels).
- **Horaires** : si tu réponds 24h/24, garde 24h/24. Sinon, concentre le budget sur
  les heures où tu décroches (un appel manqué = budget gâché).
- **Zones** : +enchère sur Tours / Joué / communes riches en pavillons ; surveiller
  le rapport « zones géographiques » et ajuster.

---

## 4. Annonces qui font appeler

### Leviers psychologiques (intention d'appel)
- **Verbe d'action** : « Appelez », « Devis immédiat par téléphone ».
- **Urgence / disponibilité** : « 24h/24 », « Intervention le jour même ».
- **Réassurance** (marché de confiance) : « Assuré 8M€ », « Certifié », « +10 ans ».
- **Incitation fiscale** : « Crédit d'impôt -50 % ».
- **Numéro dans un titre** : « ☎ 06 31 46 43 50 ».

### Assets indispensables orientés appels
- ✅ **Asset d'appel** (extension d'appel) + **suivi des appels Google** activé.
- ✅ **Sitelinks** vers les pages service (déjà dans le programme).
- ✅ **Accroches** : « Devis gratuit 24h », « Assuré 8M€ »… (déjà dans le programme).
- ✅ **Extrait structuré** Services (déjà dans le programme).
- ⭐ **Asset de promotion** : « Crédit d'impôt -50 % sur l'entretien de jardin ».

> Les annonces (titres + descriptions des 6 groupes) sont **déjà rédigées** dans
> `ads-automation/campaign_config.yaml`. La campagne « Urgence » est volontairement
> 100 % tournée vers l'appel immédiat.

---

## 5. Mots-clés à forte intention d'appel

Au-delà des mots-clés déjà configurés, **surpondérer** ceux à intention immédiate
(ce sont eux qui génèrent les appels) :
- `élagueur urgence`, `abattage arbre urgent`, `arbre dangereux`, `arbre tombé`
- `élagueur [ville]` (intention locale forte = appel)
- `devis élagage`, `prix élagage` (le prospect veut un chiffre → il appelle)
- `élagueur près de chez moi`

**Mots-clés négatifs** (ne pas payer pour des non-appelants) : déjà 31 négatifs
configurés (gratuit, emploi, formation, location, tuto, DIY…). À enrichir chaque
semaine via le rapport « Termes de recherche ».

---

## 6. Page de destination = machine à appels

Le site est déjà très orienté conversion (numéro sticky partout, bouton flottant).
Pour pousser encore les appels depuis les annonces :
- **Numéro de téléphone visible immédiatement** (above the fold) sur mobile ✅ (déjà le cas).
- **Bouton « Appeler » collant** en bas d'écran mobile ✅ (FloatingContactButton).
- Diriger chaque annonce vers la **page la plus spécifique** (service ou ville) ✅
  (configuré : chaque groupe pointe vers sa page).
- **Cohérence message annonce ↔ page** = meilleur Quality Score = CPC plus bas.

> 💡 Le tracking d'appel sur le site est **déjà en place** (clic sur le numéro =
> conversion `PUBLIC_GADS_CONV_CALL`). Aucune action supplémentaire côté code.

---

## 7. Audiences (accélérateurs)

- **Remarketing** : recibler les visiteurs qui n'ont pas appelé (léger surcoût
  d'enchère ou campagne dédiée). Nécessite le tag (déjà présent).
- **In-market « Services pour la maison / jardin »** : en observation puis enchère+.
- **Liste d'appelants** : exclure ceux qui ont déjà appelé récemment (option).

---

## 8. Tactiques concurrentielles (sortir du lot)

Marché concurrentiel = il faut être **partout et plus malin** :
1. **Local Services Ads** : être au-dessus de tout le monde (voir §1). 🔑
2. **Marque + défense** : campagne sur ton propre nom (CPC ridicule) pour que
   personne ne te « vole » tes prospects de marque.
3. **Conquête (optionnel, prudent)** : enchérir sur les requêtes génériques que les
   concurrents dominent, avec une meilleure annonce (réassurance + appel).
4. **Avis Google** : le facteur n°1 de choix sur ce marché. Plus d'avis = meilleur
   classement LSA + meilleur taux de clic. **Demander systématiquement un avis après
   chaque chantier.** (voir le risque §10).
5. **Part d'impression** : viser >70 % d'« impression share » sur les requêtes
   locales clés (« élagueur Tours », « élagueur Joué »).

---

## 9. SEO & géo : ce que j'ai déjà amélioré sur le site

Pour que tu **ressortes partout** (organique + Ads se renforcent mutuellement) :

| Modif | Détail | Impact |
|---|---|---|
| **+6 pages communes** | Chambray-lès-Tours, Saint-Avertin, Ballan-Miré, Fondettes, La Riche, Saint-Pierre-des-Corps (contenu unique : quartiers, monuments, essences) | Capte « élagueur [ville] » sur 6 communes de plus → +6 portes d'entrée locales |
| **Schema `areaServed`** | Les 20 communes desservies listées explicitement dans le LocalBusiness | Signal géo fort pour Google sur tout le 37 |
| **Schema `ContactPoint` + `hasMap`** | Téléphone structuré + lien Maps | Renforce l'intention d'appel et le SEO local |
| **Schema `knowsAbout`** | Domaines d'expertise (élagage, abattage…) | Signal sémantique de pertinence |
| **Correctif schema villes** | `@id` Wikidata fiabilisé (était cassé hors Tours/Amboise/Joué) | Évite des données structurées invalides |
| **robots.txt** | `/_astro/` débloqué (JS/CSS crawlables) | Meilleur rendu Google + Core Web Vitals |

> Résultat : **12 pages villes** au lieu de 6, toutes maillées entre elles et depuis
> la page `/zones`. Plus tu couvres de communes avec du contenu unique, plus tu
> apparais sur les recherches « élagueur + ville » de tout le département.

**Prochaine étape SEO recommandée** (à valider) : ajouter progressivement les
communes restantes (Vouvray, Rochecorbon, Véretz, Azay-le-Rideau, Langeais, Chinon,
Loches, Montbazon, Bléré) — 1 par semaine, contenu unique, pour ne pas déclencher
les filtres « doorway pages » de Google.

---

## 10. ⚠️ RISQUE À TRAITER EN PRIORITÉ — Avis fictifs dans le code

Le site déclare actuellement dans ses **données structurées** une note de
**4,9/5 sur 127 avis**, avec des témoignages « Jean Dupont », « Marie Martin »…
qui sont des **placeholders**.

**C'est un risque réel** :
- Les `aggregateRating` inventés violent les règles de Google → risque de **pénalité
  manuelle** et de **perte des étoiles** dans les résultats.
- Sur un marché de confiance, c'est aussi un risque de réputation.

**Recommandation d'expert** :
1. Connecter les **vrais avis Google** (via la fiche Google Business Profile).
2. En attendant, **ne pas afficher de note agrégée non vérifiable** dans le schema.

> Je n'ai pas modifié ces avis moi-même car cela change ce qui s'affiche déjà dans
> les résultats Google. **Dis-moi si tu veux que je les remplace par un branchement
> aux vrais avis Google (ou que je retire l'`aggregateRating` fictif).**

---

## 11. Plan d'action — ordre de priorité

1. **[Toi]** Remettre la CB sur le compte Google Ads.
2. **[Toi/Claude local]** Lancer `setup_campaign.py` → campagne Search « appels » live.
3. **[Toi]** Candidater aux **Local Services Ads** (le plus gros levier d'appels). 🔑
4. **[Toi]** Optimiser la **fiche Google Business Profile** + **demander des avis**.
5. **[Toi]** Traiter le **risque avis fictifs** (§10).
6. **[Suivi]** Semaine 1-3 : rapport termes de recherche tous les 2-3 jours, ajout de
   négatifs, surveillance du **coût par appel**.
7. **[Suivi]** Bascule enchères Max conversions puis CPA cible (§3).
8. **[SEO]** Ajouter 1 commune/semaine (§9).

---

## 12. KPI à suivre (orientés appels)

- **Nombre d'appels / semaine** (la métrique reine)
- **Coût par appel** (cible : 15-25 €, à affiner)
- **Taux de conversion en appel** par groupe d'annonces
- **Durée des appels** (LSA/suivi d'appel : un appel > 60 s = prospect qualifié)
- **Part d'impression** sur les requêtes locales clés
- **Classement & nombre d'appels LSA**
- **Quality Score** moyen (≥ 7)
