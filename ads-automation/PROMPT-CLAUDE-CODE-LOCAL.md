# 🤖 Prompt à coller dans Claude Code (en local sur le Mac)

Copie-colle le bloc ci-dessous dans Claude Code lancé **en local** dans le dossier
du projet. Il guidera la mise en place de l'accès API Google Ads et le lancement
de la campagne.

> ⚠️ À faire dans un terminal LOCAL (pas dans la version web) : la génération du
> refresh token ouvre un navigateur et l'API Google Ads doit être joignable.

---

```
Tu es mon assistant pour mettre en place et lancer la campagne Google Ads de ce
projet. Tout le code est déjà prêt dans le dossier `ads-automation/`. Ton rôle est
de m'accompagner pas à pas pour configurer l'accès à l'API Google Ads, puis lancer
le programme qui crée la campagne.

Contexte :
- Le programme `ads-automation/setup_campaign.py` crée toute la campagne (budget,
  groupes d'annonces, mots-clés, négatifs, annonces RSA, extensions) ET les actions
  de conversion, à partir de `ads-automation/campaign_config.yaml`.
- Il peut ensuite pousser les labels de conversion dans Vercel et déclencher un
  redéploiement automatiquement (section `vercel:` de la config).
- Lis d'abord `ads-automation/README.md` en entier : il décrit toute la procédure.

Déroule ces étapes avec moi, une par une, en attendant ma confirmation à chaque fois :

1. ENVIRONNEMENT
   - Vérifie que Python 3 est installé.
   - Crée un venv dans `ads-automation/` et installe `requirements.txt`.

2. DEVELOPER TOKEN (Google Ads)
   - Explique-moi où le récupérer (Google Ads > Outils > Configuration > API Center).
   - Dis-moi quoi copier et où.

3. OAUTH (Google Cloud Console)
   - Guide-moi pour : créer un projet, activer "Google Ads API", configurer l'écran
     de consentement OAuth (externe + mon email en testeur), créer un identifiant
     OAuth "Application de bureau" et télécharger le client_secret.json.
   - Puis lance `python generate_refresh_token.py --client-secret <le_fichier.json>`
     pour générer le refresh_token (ça ouvre mon navigateur, je me connecte).

4. CONFIG D'ACCÈS
   - Copie `google-ads.yaml.example` en `google-ads.yaml` et aide-moi à le remplir
     (developer_token, client_id, client_secret, refresh_token).
   - Demande-moi mon customer_id (10 chiffres) et renseigne-le dans
     `campaign_config.yaml`.

5. (OPTIONNEL) CONNEXION VERCEL AUTOMATIQUE
   - Demande-moi si je veux que les labels de conversion soient poussés
     automatiquement dans Vercel + redéploiement. Si oui, aide-moi à créer un token
     Vercel et un Deploy Hook, et renseigne-les dans la section `vercel:` de la config.

6. VÉRIFICATION À BLANC (obligatoire avant le vrai lancement)
   - Lance `python setup_campaign.py --dry-run` et montre-moi le plan + la projection
     de dépense. On vérifie ensemble que tout est correct (budget, mots-clés, zone).

7. RÉACTIVATION DE LA FACTURATION
   - Rappelle-moi que je dois avoir remis une carte bancaire valide sur le compte
     Google Ads avant de lancer (sinon la campagne ne diffusera pas).

8. LANCEMENT RÉEL
   - Quand je confirme, lance `python setup_campaign.py` (la confirmation interactive
     du script reste un garde-fou).
   - À la fin, récupère les labels de conversion affichés. Si la connexion Vercel
     auto n'est pas activée, aide-moi à les coller dans les variables d'env Vercel
     et à redéployer.

9. VÉRIFICATION FINALE
   - Explique-moi comment vérifier le tracking avec l'extension Google Tag Assistant
     (clic sur le téléphone + envoi du formulaire).
   - Rappelle-moi d'activer le suivi des appels (extension d'appel) et de candidater
     aux Local Services Ads (cf. STRATEGIE-SEA-APPELS.md à la racine du projet).

Important :
- Ne modifie PAS le contenu de la campagne (mots-clés, annonces) sans me demander.
- Ne committe JAMAIS `google-ads.yaml` ni le client_secret.json (déjà dans .gitignore).
- Si une erreur API survient, lis la section "En cas d'erreur" du README et explique-moi.
```

---

## Ce que Claude Code local pourra / ne pourra pas faire

| ✅ Il peut | ❌ Il ne peut pas (à toi de cliquer) |
|---|---|
| Installer Python, le venv, les dépendances | Se connecter à ton compte Google à ta place |
| Lancer `generate_refresh_token.py` (ouvre TON navigateur) | Valider l'écran de consentement OAuth (toi) |
| Remplir les fichiers de config avec tes valeurs | Demander le developer token (toi, dans l'interface) |
| Lancer `--dry-run` puis le vrai programme | Saisir la CB sur le compte Google Ads (toi) |
| Coller les labels / déclencher le redéploiement | — |

Les seules actions « humaines » incompressibles : **cliquer dans Google Cloud /
Google Ads** (auth + CB) avec ton compte. Tout le reste est automatisé.
