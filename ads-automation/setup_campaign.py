#!/usr/bin/env python3
"""
Création automatisée d'une campagne Google Ads — Élagage Abattage 37.

Lit `campaign_config.yaml` et monte, via l'API Google Ads :
  1. les actions de conversion (+ affiche les labels pour le tracking du site)
  2. le budget quotidien (garde-fou de dépense)
  3. la campagne Search (réseau Google uniquement)
  4. le ciblage géographique (proximité) et la langue
  5. les groupes d'annonces + mots-clés
  6. les mots-clés négatifs
  7. les annonces responsives (RSA)
  8. les extensions (sitelinks, accroches, extraits structurés)

Sécurité :
  - affiche la projection de dépense maximale et demande confirmation
    avant toute création (sauf --yes) ;
  - --dry-run n'envoie RIEN à Google : il valide la config et affiche le plan.

Usage :
    python setup_campaign.py --config campaign_config.yaml
    python setup_campaign.py --dry-run
    python setup_campaign.py --yes        # saute la confirmation interactive

Pré-requis : un fichier `google-ads.yaml` rempli dans ce dossier
(voir google-ads.yaml.example et README.md).
"""

import argparse
import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

import yaml

EUR_TO_MICROS = 1_000_000
FRENCH_LANGUAGE_ID = "1002"  # languageConstants/1002


# --------------------------------------------------------------------------- #
# Utilitaires
# --------------------------------------------------------------------------- #
def eur_to_micros(amount):
    """Convertit des euros en micros (unité monétaire de l'API)."""
    return int(round(float(amount) * EUR_TO_MICROS))


def load_config(path):
    with open(path, "r", encoding="utf-8") as fh:
        return yaml.safe_load(fh)


def validate_config(cfg):
    """Vérifie les contraintes Google Ads avant tout appel réseau."""
    errors = []

    if not cfg.get("customer_id") or "INSÉRER" in str(cfg.get("customer_id")):
        errors.append("customer_id manquant dans la config.")
    if "INSÉRER" in str(cfg.get("final_url_base", "")) or not cfg.get("final_url_base"):
        errors.append("final_url_base manquant.")
    if not str(cfg.get("final_url_base", "")).startswith("http"):
        errors.append("final_url_base doit commencer par http(s)://")

    for ag in cfg.get("ad_groups", []):
        rsa = ag.get("rsa", {})
        heads = rsa.get("headlines", [])
        descs = rsa.get("descriptions", [])
        if len(heads) < 3:
            errors.append(f"[{ag['name']}] une RSA exige au moins 3 titres.")
        if len(descs) < 2:
            errors.append(f"[{ag['name']}] une RSA exige au moins 2 descriptions.")
        for h in heads:
            if len(h) > 30:
                errors.append(f"[{ag['name']}] titre > 30 car. : « {h} » ({len(h)})")
        for d in descs:
            if len(d) > 90:
                errors.append(f"[{ag['name']}] description > 90 car. : « {d} » ({len(d)})")
        if not ag.get("keywords"):
            errors.append(f"[{ag['name']}] aucun mot-clé.")

    return errors


def projected_spend(cfg):
    """Projection de dépense pour confirmation utilisateur."""
    daily = float(cfg["campaign"]["daily_budget_eur"])
    return {
        "daily": daily,
        "monthly_max": round(daily * 30.4),  # plafond mensuel garanti par Google
        "daily_peak": round(daily * 2),       # pic possible sur une journée
    }


# --------------------------------------------------------------------------- #
# Création des ressources Google Ads
# --------------------------------------------------------------------------- #
def create_conversion_actions(client, customer_id, cfg):
    """Crée les actions de conversion et renvoie {env_var: send_to_label}."""
    service = client.get_service("ConversionActionService")
    category_enum = client.enums.ConversionActionCategoryEnum
    type_enum = client.enums.ConversionActionTypeEnum
    status_enum = client.enums.ConversionActionStatusEnum
    counting_enum = client.enums.ConversionActionCountingTypeEnum

    operations = []
    for ca_cfg in cfg.get("conversion_actions", []):
        op = client.get_type("ConversionActionOperation")
        ca = op.create
        ca.name = ca_cfg["name"]
        ca.type_ = type_enum.WEBPAGE
        ca.category = getattr(category_enum, ca_cfg.get("category", "DEFAULT"))
        ca.status = status_enum.ENABLED
        ca.counting_type = counting_enum.ONE_PER_CLICK
        ca.value_settings.default_value = float(ca_cfg.get("value_eur", 0))
        ca.value_settings.default_currency_code = "EUR"
        ca.value_settings.always_use_default_value = True
        operations.append(op)

    response = service.mutate_conversion_actions(
        customer_id=customer_id, operations=operations
    )
    created = [r.resource_name for r in response.results]

    # Récupère les labels (send_to) depuis les tag_snippets de chaque action.
    ga_service = client.get_service("GoogleAdsService")
    labels = {}
    for ca_cfg, resource_name in zip(cfg["conversion_actions"], created):
        query = f"""
            SELECT conversion_action.resource_name,
                   conversion_action.tag_snippets
            FROM conversion_action
            WHERE conversion_action.resource_name = '{resource_name}'
        """
        send_to = None
        for row in ga_service.search(customer_id=customer_id, query=query):
            for snippet in row.conversion_action.tag_snippets:
                # le send_to ("AW-XXXX/label") se trouve dans l'event_snippet
                text = snippet.event_snippet or ""
                marker = "send_to': '"
                if marker in text:
                    send_to = text.split(marker, 1)[1].split("'", 1)[0]
                    break
            if send_to:
                break
        labels[ca_cfg["env_var"]] = send_to or "(label introuvable — vérifier dans l'interface)"
    return labels


def create_budget(client, customer_id, cfg):
    service = client.get_service("CampaignBudgetService")
    op = client.get_type("CampaignBudgetOperation")
    budget = op.create
    budget.name = cfg["campaign"]["name"] + " — Budget"
    budget.amount_micros = eur_to_micros(cfg["campaign"]["daily_budget_eur"])
    budget.delivery_method = client.enums.BudgetDeliveryMethodEnum.STANDARD
    budget.explicitly_shared = False
    response = service.mutate_campaign_budgets(
        customer_id=customer_id, operations=[op]
    )
    return response.results[0].resource_name


def create_campaign(client, customer_id, cfg, budget_resource):
    service = client.get_service("CampaignService")
    op = client.get_type("CampaignOperation")
    c = op.create
    cc = cfg["campaign"]

    c.name = cc["name"]
    c.advertising_channel_type = client.enums.AdvertisingChannelTypeEnum.SEARCH
    c.status = getattr(client.enums.CampaignStatusEnum, cc.get("status", "PAUSED"))
    c.campaign_budget = budget_resource

    # Réseau : Google Search uniquement (pas de Display ni partenaires).
    c.network_settings.target_google_search = True
    c.network_settings.target_search_network = False
    c.network_settings.target_content_network = False
    c.network_settings.target_partner_search_network = False

    # Stratégie d'enchères.
    strategy = cc["bidding"]["strategy"]
    ceiling = cc["bidding"].get("cpc_bid_ceiling_eur", 0)
    if strategy == "MAXIMIZE_CLICKS":
        # "Maximiser les clics" = TargetSpend, avec plafond CPC (garde-fou).
        if ceiling:
            c.target_spend.cpc_bid_ceiling_micros = eur_to_micros(ceiling)
        else:
            c.target_spend.CopyFrom(client.get_type("TargetSpend"))
    elif strategy == "MAXIMIZE_CONVERSIONS":
        c.maximize_conversions.CopyFrom(client.get_type("MaximizeConversions"))
    elif strategy == "MANUAL_CPC":
        c.manual_cpc.enhanced_cpc_enabled = False
    else:
        raise ValueError(f"Stratégie d'enchères inconnue : {strategy}")

    # Ciblage géo : présence physique dans la zone.
    geo_type = cc["geo"].get("target_type", "PRESENCE")
    c.geo_target_type_setting.positive_geo_target_type = getattr(
        client.enums.PositiveGeoTargetTypeEnum, geo_type
    )
    c.geo_target_type_setting.negative_geo_target_type = (
        client.enums.NegativeGeoTargetTypeEnum.PRESENCE
    )

    response = service.mutate_campaigns(customer_id=customer_id, operations=[op])
    return response.results[0].resource_name


def add_geo_and_language(client, customer_id, cfg, campaign_resource):
    service = client.get_service("CampaignCriterionService")
    operations = []
    geo = cfg["campaign"]["geo"]

    # Proximité (rayon autour du point GPS).
    op = client.get_type("CampaignCriterionOperation")
    crit = op.create
    crit.campaign = campaign_resource
    crit.proximity.radius = float(geo["radius_km"])
    crit.proximity.radius_units = client.enums.ProximityRadiusUnitsEnum.KILOMETERS
    crit.proximity.geo_point.latitude_in_micro_degrees = int(geo["latitude"] * 1_000_000)
    crit.proximity.geo_point.longitude_in_micro_degrees = int(geo["longitude"] * 1_000_000)
    operations.append(op)

    # Langue française.
    op_lang = client.get_type("CampaignCriterionOperation")
    lang = op_lang.create
    lang.campaign = campaign_resource
    lang.language.language_constant = f"languageConstants/{FRENCH_LANGUAGE_ID}"
    operations.append(op_lang)

    service.mutate_campaign_criteria(customer_id=customer_id, operations=operations)


def add_negative_keywords(client, customer_id, cfg, campaign_resource):
    negatives = cfg.get("negative_keywords", [])
    if not negatives:
        return
    service = client.get_service("CampaignCriterionService")
    operations = []
    for term in negatives:
        op = client.get_type("CampaignCriterionOperation")
        crit = op.create
        crit.campaign = campaign_resource
        crit.negative = True
        crit.keyword.text = term
        crit.keyword.match_type = client.enums.KeywordMatchTypeEnum.BROAD
        operations.append(op)
    service.mutate_campaign_criteria(customer_id=customer_id, operations=operations)


def create_ad_group(client, customer_id, campaign_resource, ag_cfg):
    service = client.get_service("AdGroupService")
    op = client.get_type("AdGroupOperation")
    ag = op.create
    ag.name = ag_cfg["name"]
    ag.campaign = campaign_resource
    ag.type_ = client.enums.AdGroupTypeEnum.SEARCH_STANDARD
    ag.status = client.enums.AdGroupStatusEnum.ENABLED
    response = service.mutate_ad_groups(customer_id=customer_id, operations=[op])
    return response.results[0].resource_name


def add_keywords(client, customer_id, ad_group_resource, keywords):
    service = client.get_service("AdGroupCriterionService")
    match_enum = client.enums.KeywordMatchTypeEnum
    operations = []
    for kw in keywords:
        op = client.get_type("AdGroupCriterionOperation")
        crit = op.create
        crit.ad_group = ad_group_resource
        crit.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
        crit.keyword.text = kw["text"]
        crit.keyword.match_type = getattr(match_enum, kw.get("match", "PHRASE"))
        operations.append(op)
    service.mutate_ad_group_criteria(customer_id=customer_id, operations=operations)


def create_rsa(client, customer_id, ad_group_resource, final_url, rsa_cfg):
    service = client.get_service("AdGroupAdService")
    op = client.get_type("AdGroupAdOperation")
    aga = op.create
    aga.ad_group = ad_group_resource
    aga.status = client.enums.AdGroupAdStatusEnum.ENABLED

    ad = aga.ad
    ad.final_urls.append(final_url)

    for text in rsa_cfg["headlines"]:
        asset = client.get_type("AdTextAsset")
        asset.text = text
        ad.responsive_search_ad.headlines.append(asset)
    for text in rsa_cfg["descriptions"]:
        asset = client.get_type("AdTextAsset")
        asset.text = text
        ad.responsive_search_ad.descriptions.append(asset)
    if rsa_cfg.get("path1"):
        ad.responsive_search_ad.path1 = rsa_cfg["path1"]
    if rsa_cfg.get("path2"):
        ad.responsive_search_ad.path2 = rsa_cfg["path2"]

    service.mutate_ad_group_ads(customer_id=customer_id, operations=[op])


def add_extensions(client, customer_id, cfg, campaign_resource):
    """Crée les assets (sitelinks, accroches, extraits) et les lie à la campagne."""
    ext = cfg.get("extensions", {})
    base = cfg["final_url_base"].rstrip("/")
    asset_service = client.get_service("AssetService")
    campaign_asset_service = client.get_service("CampaignAssetService")
    field_enum = client.enums.AssetFieldTypeEnum

    asset_ops = []
    link_specs = []  # (field_type,) dans l'ordre des assets créés

    # Sitelinks
    for sl in ext.get("sitelinks", []):
        op = client.get_type("AssetOperation")
        a = op.create
        a.sitelink_asset.link_text = sl["text"]
        if sl.get("desc1"):
            a.sitelink_asset.description1 = sl["desc1"]
        if sl.get("desc2"):
            a.sitelink_asset.description2 = sl["desc2"]
        a.final_urls.append(base + sl["path"])
        asset_ops.append(op)
        link_specs.append(field_enum.SITELINK)

    # Accroches (callouts)
    for text in ext.get("callouts", []):
        op = client.get_type("AssetOperation")
        op.create.callout_asset.callout_text = text
        asset_ops.append(op)
        link_specs.append(field_enum.CALLOUT)

    # Extrait structuré (structured snippet)
    ss = ext.get("structured_snippet")
    if ss:
        op = client.get_type("AssetOperation")
        op.create.structured_snippet_asset.header = ss["header"]
        op.create.structured_snippet_asset.values.extend(ss["values"])
        asset_ops.append(op)
        link_specs.append(field_enum.STRUCTURED_SNIPPET)

    if not asset_ops:
        return

    asset_resp = asset_service.mutate_assets(
        customer_id=customer_id, operations=asset_ops
    )
    asset_names = [r.resource_name for r in asset_resp.results]

    # Lie chaque asset à la campagne.
    link_ops = []
    for asset_name, field_type in zip(asset_names, link_specs):
        op = client.get_type("CampaignAssetOperation")
        ca = op.create
        ca.campaign = campaign_resource
        ca.asset = asset_name
        ca.field_type = field_type
        link_ops.append(op)
    campaign_asset_service.mutate_campaign_assets(
        customer_id=customer_id, operations=link_ops
    )


# --------------------------------------------------------------------------- #
# Connexion automatique du tracking (Vercel)
# --------------------------------------------------------------------------- #
def push_labels_to_vercel(cfg, labels):
    """Pousse les labels dans Vercel et déclenche un redéploiement.

    Le site Astro étant statique, les variables d'env sont injectées au build :
    un redéploiement est donc nécessaire pour activer le tracking.
    Renvoie True si la connexion automatique a été effectuée.
    """
    vc = cfg.get("vercel", {})
    if not vc.get("enabled") or not vc.get("token"):
        return False

    project = vc["project_id"]
    slug = vc.get("team_slug", "")
    token = vc["token"]
    base = f"https://api.vercel.com/v10/projects/{project}/env?upsert=true"
    if slug:
        base += f"&slug={slug}"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    print("\n→ Connexion du tracking à Vercel (variables d'env)…")
    for env_var, value in labels.items():
        if not value or value.startswith("("):
            print(f"  ⚠ {env_var} : label introuvable, ignoré.")
            continue
        body = json.dumps({
            "key": env_var,
            "value": value,
            "type": "plain",
            "target": ["production", "preview"],
        }).encode("utf-8")
        req = urllib.request.Request(base, data=body, headers=headers, method="POST")
        try:
            urllib.request.urlopen(req, timeout=30)
            print(f"  ✅ {env_var} défini dans Vercel.")
        except urllib.error.HTTPError as e:
            print(f"  ⚠ {env_var} : échec Vercel ({e.code}). À coller à la main.")

    # Déclenche le redéploiement via le Deploy Hook.
    hook = vc.get("deploy_hook_url")
    if hook:
        try:
            urllib.request.urlopen(
                urllib.request.Request(hook, data=b"{}",
                                       headers={"Content-Type": "application/json"},
                                       method="POST"),
                timeout=30,
            )
            print("  ✅ Redéploiement déclenché — le tracking sera actif après le build.")
        except urllib.error.HTTPError as e:
            print(f"  ⚠ Redéploiement non déclenché ({e.code}). Lance-le depuis Vercel.")
    else:
        print("  ⚠ Pas de deploy_hook_url : redéploie manuellement pour activer le tracking.")
    return True


# --------------------------------------------------------------------------- #
# Orchestration
# --------------------------------------------------------------------------- #
def run(client, cfg):
    customer_id = str(cfg["customer_id"]).replace("-", "")
    base = cfg["final_url_base"].rstrip("/")

    print("\n→ Création des actions de conversion…")
    labels = create_conversion_actions(client, customer_id, cfg)

    print("→ Création du budget…")
    budget = create_budget(client, customer_id, cfg)

    print("→ Création de la campagne…")
    campaign = create_campaign(client, customer_id, cfg, budget)

    print("→ Ciblage géographique + langue…")
    add_geo_and_language(client, customer_id, cfg, campaign)

    print("→ Mots-clés négatifs…")
    add_negative_keywords(client, customer_id, cfg, campaign)

    for ag_cfg in cfg["ad_groups"]:
        print(f"→ Groupe d'annonces : {ag_cfg['name']}")
        ag = create_ad_group(client, customer_id, campaign, ag_cfg)
        add_keywords(client, customer_id, ag, ag_cfg["keywords"])
        final_url = base + ag_cfg["final_url_path"]
        create_rsa(client, customer_id, ag, final_url, ag_cfg["rsa"])

    print("→ Extensions (sitelinks, accroches, extraits)…")
    try:
        add_extensions(client, customer_id, cfg, campaign)
    except Exception as e:  # les assets ne doivent pas casser le cœur de campagne
        print(f"  ⚠ Extensions non créées ({e}). À ajouter manuellement si besoin.")

    print("\n✅ Campagne créée avec succès.")
    print(f"   Statut : {cfg['campaign'].get('status')}")

    # Connexion automatique du tracking (Vercel), si configurée.
    auto = push_labels_to_vercel(cfg, labels)

    print("\n──────────────────────────────────────────────────────────")
    print(" LABELS DE CONVERSION")
    if auto:
        print(" (poussés automatiquement dans Vercel — copie ci-dessous pour archive)")
    else:
        print(" À coller dans Vercel → Settings → Environment Variables, puis redéployer :")
    print("──────────────────────────────────────────────────────────")
    for env_var, label in labels.items():
        print(f"   {env_var}={label}")
    print("──────────────────────────────────────────────────────────")


def print_plan(cfg):
    spend = projected_spend(cfg)
    print("\n================= PLAN DE CAMPAGNE =================")
    print(f" Campagne          : {cfg['campaign']['name']}")
    print(f" Statut au départ  : {cfg['campaign'].get('status')}")
    print(f" Budget quotidien  : {spend['daily']} €")
    print(f" Stratégie         : {cfg['campaign']['bidding']['strategy']}"
          f" (plafond CPC {cfg['campaign']['bidding'].get('cpc_bid_ceiling_eur', 0)} €)")
    print(f" Zone              : {cfg['campaign']['geo']['radius_km']} km autour de"
          f" ({cfg['campaign']['geo']['latitude']}, {cfg['campaign']['geo']['longitude']})")
    print(f" Groupes d'annonces: {len(cfg['ad_groups'])}")
    total_kw = sum(len(a['keywords']) for a in cfg['ad_groups'])
    print(f" Mots-clés         : {total_kw}")
    print(f" Négatifs          : {len(cfg.get('negative_keywords', []))}")
    print(f" Conversions       : {len(cfg.get('conversion_actions', []))}")
    print("---------------------------------------------------")
    print(f" ⚠ DÉPENSE MAX MENSUELLE GARANTIE : ~{spend['monthly_max']} €")
    print(f"   (pic possible {spend['daily_peak']} €/jour, mais jamais > {spend['monthly_max']} €/mois)")
    print("===================================================")


def main():
    parser = argparse.ArgumentParser(description="Création campagne Google Ads")
    parser.add_argument("--config", default="campaign_config.yaml")
    parser.add_argument("--google-ads-config", default="google-ads.yaml",
                        help="Chemin du fichier d'identifiants API.")
    parser.add_argument("--dry-run", action="store_true",
                        help="N'envoie rien à Google : valide et affiche le plan.")
    parser.add_argument("--yes", action="store_true",
                        help="Saute la confirmation interactive.")
    args = parser.parse_args()

    cfg = load_config(args.config)

    errors = validate_config(cfg)
    if errors:
        print("❌ Configuration invalide :")
        for e in errors:
            print(f"   - {e}")
        sys.exit(1)

    print_plan(cfg)

    if args.dry_run:
        print("\n[DRY-RUN] Aucune ressource créée. Config valide ✅")
        return

    if not args.yes:
        confirm = input("\nConfirmer la création RÉELLE de cette campagne ? (oui/non) : ").strip().lower()
        if confirm not in ("oui", "o", "yes", "y"):
            print("Annulé.")
            return

    # Import tardif pour permettre --dry-run sans la lib installée.
    try:
        from google.ads.googleads.client import GoogleAdsClient
        from google.ads.googleads.errors import GoogleAdsException
    except ImportError:
        print("❌ Bibliothèque 'google-ads' non installée. Faites : pip install -r requirements.txt")
        sys.exit(1)

    if not Path(args.google_ads_config).exists():
        print(f"❌ Fichier d'identifiants introuvable : {args.google_ads_config}")
        print("   Copiez google-ads.yaml.example en google-ads.yaml et remplissez-le.")
        sys.exit(1)

    client = GoogleAdsClient.load_from_storage(args.google_ads_config)

    try:
        run(client, cfg)
    except GoogleAdsException as ex:
        print(f"\n❌ Erreur API Google Ads (request_id={ex.request_id}) :")
        for error in ex.failure.errors:
            print(f"   - {error.message}")
            if error.location:
                for fpe in error.location.field_path_elements:
                    print(f"       champ : {fpe.field_name}")
        sys.exit(1)


if __name__ == "__main__":
    main()
