# 🤖 Automatisation Google Ads — Élagage Abattage 37

Un seul programme qui, une fois lancé, **crée toute la campagne Google Ads** :
budget, campagne Search, groupes d'annonces, mots-clés, négatifs, annonces RSA,
extensions **et** actions de conversion (avec récupération des labels pour le
tracking du site).

> ⚙️ Conçu pour tourner **en local sur ton Mac** (via Claude Code ou un simple
> terminal). Tes identifiants restent chez toi — rien n'est envoyé ailleurs.

---

## 🔒 Contrôle des dépenses (déjà configuré)

Tout est paramétré dans `campaign_config.yaml` pour une **diffusion optimisée
sans dérapage** :

| Garde-fou | Valeur par défaut | Effet |
|---|---|---|
| Budget quotidien | **15 €/j** | Plafond mensuel garanti **≈ 456 €** (jamais plus) |
| Plafond CPC | **2,00 €** | Aucun clic payé plus cher |
| Stratégie | **Maximiser les clics** | Diffusion optimisée par Google *dans* le budget |
| Réseau | **Search Google seul** | Pas de Display/partenaires (anti-gaspillage) |
| Confirmation | **Demandée avant création** | Le script affiche la dépense max et attend ton « oui » |

> Google peut dépenser jusqu'à **2× le budget un jour donné**, mais **jamais**
> dépasser `budget quotidien × 30,4` sur le mois. Le budget quotidien est donc
> le vrai plafond. Pour changer : édite `daily_budget_eur` dans la config.

Quand la campagne aura accumulé **15-30 conversions**, passe la stratégie à
`MAXIMIZE_CONVERSIONS` (puis CPA cible) dans la config — c'est là que le smart
bidding devient rentable.

---

## 📋 Pré-requis (à faire une fois)

### 1. Developer token
Dans **Google Ads → Outils et paramètres → Configuration → API Center**,
demande un jeton développeur. L'accès **« Basic »** suffit pour gérer ton
propre compte. (La validation Google prend de quelques heures à quelques jours.)

### 2. Identifiants OAuth2 (Google Cloud Console)
1. Va sur https://console.cloud.google.com/ → crée un projet.
2. **API et services → Bibliothèque** → active **« Google Ads API »**.
3. **API et services → Écran de consentement OAuth** → configure (type
   « Externe », ajoute ton email en utilisateur de test).
4. **API et services → Identifiants → Créer → ID client OAuth →
   « Application de bureau »** → télécharge le `client_secret.json`.

### 3. Générer le refresh token
```bash
pip install google-auth-oauthlib
python generate_refresh_token.py --client-secret client_secret.json
```
Connecte-toi avec le compte Google qui a accès au compte Ads → le script
affiche `client_id`, `client_secret`, `refresh_token`.

### 4. Customer ID
Ton numéro de compte Google Ads (10 chiffres, en haut à droite de l'interface).

---

## ⚙️ Installation

```bash
cd ads-automation
python -m venv .venv && source .venv/bin/activate   # optionnel mais propre
pip install -r requirements.txt
```

Crée les deux fichiers de config à partir des exemples :
```bash
cp google-ads.yaml.example google-ads.yaml
# puis remplis google-ads.yaml avec developer_token / client_id / client_secret / refresh_token
# et renseigne customer_id + final_url_base dans campaign_config.yaml
```

> `google-ads.yaml` est ignoré par git (secrets). Ne le committe jamais.

---

## 🚀 Lancement

**1. Vérifier sans rien créer (recommandé en premier) :**
```bash
python setup_campaign.py --dry-run
```
Valide la config (longueurs des annonces, mots-clés…) et affiche le plan + la
projection de dépense max. **N'envoie rien à Google.**

**2. Créer la campagne pour de vrai :**
```bash
python setup_campaign.py
```
Affiche le plan, demande confirmation (`oui`), puis crée tout. À la fin, il
imprime les **labels de conversion** à coller dans les variables d'env du site.

(`--yes` saute la confirmation, pour une exécution non interactive.)

---

## 🔌 Connexion automatique du tracking (recommandé)

Le site Astro est **statique** : les variables d'env sont injectées **au build**.
Pour que le tracking s'active sans aucune manipulation, le programme peut
**pousser lui-même les labels dans Vercel et déclencher le redéploiement**.

Pour l'activer, renseigne dans la section `vercel:` de `campaign_config.yaml` :
1. **token** : Vercel → Account Settings → Tokens → crée un token.
2. **deploy_hook_url** : Vercel → Projet → Settings → Git → Deploy Hooks →
   crée un hook sur la branche `main`, copie l'URL.

(`project_id` et `team_slug` sont déjà pré-remplis.)

→ Au lancement, le programme crée la campagne **puis** :
- écrit `PUBLIC_GADS_CONV_CALL/FORM/EMAIL` dans Vercel (production + preview),
- déclenche un redéploiement → le tracking devient actif tout seul.

Si `token`/`deploy_hook_url` sont vides, le programme affiche simplement les
labels à coller à la main (méthode ci-dessous).

## 🔁 Après le lancement (si connexion auto désactivée)

1. **Colle les labels** affichés dans Vercel → Settings → Environment Variables :
   ```
   PUBLIC_GADS_CONV_CALL=AW-17858152606/xxxx
   PUBLIC_GADS_CONV_FORM=AW-17858152606/yyyy
   PUBLIC_GADS_CONV_EMAIL=AW-17858152606/zzzz
   ```
2. **Redéploie** le site → le tracking de conversion devient actif.

## ✅ Dans tous les cas, à vérifier

- **Google Tag Assistant** (extension Chrome) : clique le téléphone, envoie le
  formulaire → les events `conversion` partent.
- Active le **suivi des appels** dans l'interface (extension d'appel) pour
  compter aussi les appels passés directement depuis l'annonce.

---

## 🧯 En cas d'erreur

- **`developer token not approved`** → ton token est encore en validation, ou
  en mode test. Attends l'approbation, ou utilise un compte de test.
- **`USER_PERMISSION_DENIED`** → le compte Google du refresh token n'a pas
  accès au `customer_id`, ou il manque `login_customer_id` (si MCC).
- **`CUSTOMER_NOT_ENABLED` / billing** → ajoute un mode de paiement au compte
  Ads avant de lancer.
- Les **extensions** qui échouent n'interrompent pas la campagne (warning
  seulement) — tu peux les ajouter à la main si besoin.

---

## 📁 Fichiers

| Fichier | Rôle |
|---|---|
| `campaign_config.yaml` | **Toute la campagne, éditable** (budget, mots-clés, annonces…) |
| `setup_campaign.py` | Le programme qui crée la campagne via l'API |
| `generate_refresh_token.py` | Helper OAuth (une fois) |
| `google-ads.yaml.example` | Modèle d'identifiants API (à copier en `google-ads.yaml`) |
| `requirements.txt` | Dépendances Python |
