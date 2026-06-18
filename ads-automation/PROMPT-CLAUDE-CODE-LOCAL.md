# 🤖 Prompt complet pour Claude Code (en local sur le Mac)

Lance **Claude Code en local** dans le dossier du projet, puis copie-colle **tout le
bloc ci-dessous** (entre les ```). Il contient l'intégralité du contexte et des
instructions pour configurer et lancer la campagne Google Ads correctement.

> ⚠️ À faire dans un terminal **LOCAL** (pas la version web) : la génération du
> refresh token ouvre un navigateur et l'API Google Ads doit être joignable.

---

```
RÔLE
Tu es mon expert Google Ads + DevOps. Tu vas configurer l'accès à l'API Google Ads,
lancer la campagne via le programme déjà présent dans ce repo, connecter le tracking
de conversion, puis me guider pour les réglages manuels qui maximisent les APPELS.
Avance étape par étape, attends ma confirmation à chaque étape, et explique-moi
simplement ce que je dois cliquer de mon côté.

CONTEXTE DU PROJET (lis ces fichiers AVANT de commencer, dans cet ordre)
1. ads-automation/README.md          → procédure technique complète
2. ads-automation/campaign_config.yaml → TOUTE la campagne (budget, mots-clés, annonces)
3. STRATEGIE-SEA-APPELS.md            → la stratégie orientée appels (à respecter)
4. GOOGLE-ADS-CAMPAGNE.md             → détail des mots-clés / annonces / négatifs

Ce qui est DÉJÀ fait (ne pas refaire) :
- Le tag Google Ads AW-17858152606 est posé sur le site (Astro).
- Le tracking de conversion est codé : clic téléphone (tel:), envoi du formulaire,
  clic email déclenchent déjà des conversions une fois les labels renseignés.
- Le programme ads-automation/setup_campaign.py crée toute la campagne via l'API :
  budget, campagne Search (Google seul), ciblage géo proximité 50 km autour de
  Joué-lès-Tours, langue FR, 6 groupes d'annonces, 46 mots-clés, 31 négatifs,
  annonces RSA rédigées, extensions, ET les 3 actions de conversion.

GARDE-FOUS DE DÉPENSE (NE PAS LES AFFAIBLIR sans me demander)
- Budget quotidien : 15 €/j (~456 €/mois max garanti).
- Plafond CPC : 2 €.
- Stratégie au lancement : Maximiser les clics (pas de smart bidding sans historique).
- Réseau : Google Search uniquement.
Si tu penses qu'un réglage devrait changer, propose-le-moi, ne le change pas seul.

══════════════════════════════════════════════════════════════════════
ÉTAPE 1 — ENVIRONNEMENT PYTHON
- Vérifie python3 (>=3.9). Crée un venv dans ads-automation/ et installe
  ads-automation/requirements.txt. Confirme que `google-ads` est bien installé.

ÉTAPE 2 — DEVELOPER TOKEN (Google Ads)
- Guide-moi : Google Ads → Outils et paramètres → Configuration → API Center.
- Je demande un jeton (accès "Basic" suffit pour gérer mon propre compte).
- Dis-moi exactement quelle valeur copier. (Si le compte est en attente de
  validation, explique-moi que la diffusion réelle peut nécessiter l'approbation.)

ÉTAPE 3 — OAUTH2 (Google Cloud Console)
- Guide-moi pas à pas :
  a) console.cloud.google.com → créer un projet
  b) API et services → Bibliothèque → activer "Google Ads API"
  c) Écran de consentement OAuth → type "Externe" → ajouter MON email en testeur
  d) Identifiants → Créer → ID client OAuth → "Application de bureau"
     → télécharger le client_secret.json (place-le dans ads-automation/)
- Puis exécute :
  python generate_refresh_token.py --client-secret client_secret.json
  (ça ouvre mon navigateur : je me connecte avec le compte qui gère Google Ads,
   j'autorise, et le script affiche client_id / client_secret / refresh_token).

ÉTAPE 4 — FICHIER D'IDENTIFIANTS
- Copie ads-automation/google-ads.yaml.example en ads-automation/google-ads.yaml.
- Remplis : developer_token, client_id, client_secret, refresh_token.
- Si mon compte Google Ads est géré par un compte administrateur (MCC), demande-moi
  le login_customer_id et décommente-le.
- Rappelle-moi que google-ads.yaml et client_secret.json ne doivent JAMAIS être
  commités (ils sont déjà dans .gitignore — vérifie-le).

ÉTAPE 5 — CONFIG DE CAMPAGNE
- Demande-moi mon customer_id (10 chiffres, en haut à droite de Google Ads) et
  renseigne-le dans ads-automation/campaign_config.yaml (champ customer_id).
- Vérifie que final_url_base = https://www.elagageabattage37.com.
- Montre-moi un résumé du plan (groupes, budget, zone) avant d'aller plus loin.

ÉTAPE 6 — (OPTIONNEL) CONNEXION VERCEL AUTOMATIQUE
- Demande-moi si je veux que les labels de conversion soient poussés automatiquement
  dans Vercel + redéploiement (sinon je les collerai à la main).
- Si oui : guide-moi pour créer un token Vercel (vercel.com/account/tokens) et un
  Deploy Hook (Projet → Settings → Git → Deploy Hooks, sur la branche de prod),
  puis renseigne-les dans la section vercel: de campaign_config.yaml.

ÉTAPE 7 — VÉRIFICATION À BLANC (OBLIGATOIRE)
- Lance : python setup_campaign.py --dry-run
- Montre-moi le plan complet + la projection de dépense max. On valide ensemble :
  budget, zone, nombre de mots-clés, négatifs, conversions. Corrige la config si
  besoin (en me demandant), et relance le dry-run jusqu'à ce que tout soit bon.

ÉTAPE 8 — FACTURATION
- Avant le lancement réel, rappelle-moi IMPÉRATIVEMENT d'avoir remis une carte
  bancaire valide sur le compte Google Ads (Facturation), sinon rien ne diffusera.

ÉTAPE 9 — LANCEMENT RÉEL
- Quand je confirme, lance : python setup_campaign.py
- Le script affiche le plan et demande une confirmation interactive (garde-fou) :
  ne réponds "oui" que sur mon accord explicite.
- À la fin, RÉCUPÈRE les 3 labels de conversion affichés
  (PUBLIC_GADS_CONV_CALL / FORM / EMAIL).

ÉTAPE 10 — CONNECTER LE TRACKING
- Si la connexion Vercel auto est active : vérifie que les 3 variables ont bien été
  créées et qu'un redéploiement a été déclenché.
- Sinon : guide-moi pour coller les 3 labels dans Vercel → Project → Settings →
  Environment Variables (Production + Preview), puis déclencher un redéploiement
  (le site Astro est statique : sans rebuild, les labels ne sont pas pris en compte).

ÉTAPE 11 — RÉGLAGES MANUELS DANS GOOGLE ADS (le script ne peut pas tout faire)
Guide-moi dans l'interface pour ces réglages qui maximisent les APPELS :
- ASSET D'APPEL : ajouter l'extension d'appel avec le 06 31 46 43 50 et ACTIVER le
  "suivi des appels Google" → compter les appels issus de l'annonce comme conversions.
- CONVERSION PRINCIPALE : marquer l'appel (et le formulaire) comme objectif principal
  ("Primary"), le clic email en secondaire.
- AJUSTEMENT MOBILE : +20 à +30 % d'enchère sur mobile (les appels viennent du mobile).
- CALENDRIER DE DIFFUSION : si je ne décroche pas 24h/24, restreindre aux heures où
  je réponds (un appel manqué = budget gâché). Demande-moi mes horaires réels.
- CIBLAGE "PRÉSENCE" : vérifier que le ciblage géo est bien sur "Présence : personnes
  dans la zone ciblée" (pas "intérêt").
- FICHE GOOGLE BUSINESS PROFILE : lier la fiche à la campagne (extension de lieu) pour
  afficher l'adresse + activer les appels depuis Maps.

ÉTAPE 12 — VÉRIFICATION FINALE
- Explique-moi comment vérifier le tracking avec l'extension Chrome "Google Tag
  Assistant" : sur le site en prod, cliquer le numéro de téléphone et envoyer le
  formulaire → confirmer que les events "conversion" partent.
- Dans Google Ads → Conversions, vérifie que les actions passent en "Enregistrement
  des conversions" actif sous 24-48h.

ÉTAPE 13 — PROCHAINES ACTIONS (rappelle-les-moi)
- Candidater aux LOCAL SERVICES ADS ("Garanti par Google") : le plus gros levier
  d'appels du secteur (cf. STRATEGIE-SEA-APPELS.md §1).
- Surveiller le rapport "Termes de recherche" tous les 2-3 jours la 1re semaine et
  ajouter des négatifs.
- Après ~15-30 conversions, basculer la stratégie vers "Maximiser les conversions"
  puis "CPA cible" (modifier campaign_config.yaml OU dans l'interface).

RÈGLES IMPÉRATIVES
- Ne modifie PAS le contenu de la campagne (mots-clés, annonces, budget) sans mon
  accord explicite.
- Ne committe JAMAIS google-ads.yaml ni client_secret.json.
- En cas d'erreur API, lis la section "En cas d'erreur" de ads-automation/README.md
  et explique-moi le problème en clair avec la solution.
- À chaque étape, dis-moi ce qui s'est passé et ce que je dois faire ensuite.
```

---

## Ce que Claude Code local peut / ne peut pas faire

| ✅ Il peut | ❌ À toi de cliquer (compte Google) |
|---|---|
| Installer Python, venv, dépendances | Te connecter à Google / autoriser OAuth |
| Lancer `generate_refresh_token.py` (ouvre TON navigateur) | Demander le developer token (API Center) |
| Remplir les fichiers de config | Saisir la CB sur le compte Google Ads |
| Lancer `--dry-run` puis le vrai programme | Valider l'asset d'appel / le suivi des appels |
| Pousser les labels dans Vercel + redéployer | Candidater aux Local Services Ads |
| Te guider écran par écran sur les réglages manuels | — |

Les seules actions humaines incompressibles : **cliquer dans Google Cloud / Google
Ads** (auth + CB + quelques réglages) avec ton compte. Tout le reste est automatisé.
