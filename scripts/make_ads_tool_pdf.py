#!/usr/bin/env python3
"""Génère un PDF décrivant l'outil d'automatisation Google Ads (pour la revue Google)."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, HRFlowable, Table, TableStyle
)

GREEN = colors.HexColor("#0A2E1C")
ACCENT = colors.HexColor("#2F855A")
GREY = colors.HexColor("#4A5568")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle("TitleBig", parent=styles["Title"], textColor=GREEN, fontSize=20, spaceAfter=2))
styles.add(ParagraphStyle("Sub", parent=styles["Normal"], textColor=GREY, fontSize=10, spaceAfter=10))
styles.add(ParagraphStyle("H", parent=styles["Heading2"], textColor=ACCENT, fontSize=12.5, spaceBefore=10, spaceAfter=4))
styles.add(ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, leading=14, textColor=colors.HexColor("#1A202C"), spaceAfter=4))
styles.add(ParagraphStyle("BodyEN", parent=styles["Normal"], fontSize=9, leading=12.5, textColor=GREY, spaceAfter=3))
styles.add(ParagraphStyle("Li", parent=styles["Normal"], fontSize=10, leading=13.5, textColor=colors.HexColor("#1A202C")))

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, styles["Li"]), leftIndent=10, value="•") for t in items],
        bulletType="bullet", start="•", leftIndent=12, bulletColor=ACCENT,
    )

doc = SimpleDocTemplate(
    "Presentation-Outil-Google-Ads.pdf", pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm, topMargin=18*mm, bottomMargin=16*mm,
    title="Description de l'outil - API Google Ads",
    author="Elagage Abattage 37",
)

E = []
E.append(Paragraph("Description de l'outil d'automatisation Google Ads", styles["TitleBig"]))
E.append(Paragraph("Élagage Abattage 37 — SIRET 510 816 473 00019 · www.elagageabattage37.com", styles["Sub"]))
E.append(HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=8))

E.append(Paragraph("1. Présentation générale", styles["H"]))
E.append(Paragraph(
    "Il s'agit d'un outil interne, à usage unique, développé pour notre propre entreprise "
    "d'élagage et d'abattage d'arbres. Son seul rôle est de créer et configurer notre "
    "campagne publicitaire Google Ads sur <b>notre unique compte annonceur</b>. "
    "Ce n'est pas une plateforme commerciale : il ne gère pas de comptes de tiers et "
    "n'est ni revendu ni mis à disposition d'autres annonceurs.", styles["Body"]))

E.append(Paragraph("2. Objectif", styles["H"]))
E.append(Paragraph(
    "Automatiser la mise en place d'une campagne sur le Réseau de Recherche Google afin "
    "de générer des demandes de devis et des appels téléphoniques pour notre activité "
    "locale en Indre-et-Loire (37). L'outil applique une configuration prédéfinie et "
    "vérifiée par nous-mêmes, avec des garde-fous de budget.", styles["Body"]))

E.append(Paragraph("3. Ce que fait l'outil", styles["H"]))
E.append(bullets([
    "Lit un fichier de configuration local décrivant la campagne (budget, mots-clés, annonces, zone).",
    "Crée un budget quotidien plafonné (garde-fou de dépense).",
    "Crée une campagne sur le Réseau de Recherche (Google Search uniquement).",
    "Définit le ciblage géographique (rayon autour de notre ville) et la langue (français).",
    "Crée les groupes d'annonces, les mots-clés et les mots-clés à exclure.",
    "Crée les annonces responsives (RSA) et les extensions (liens, accroches).",
    "Crée nos actions de conversion (appel, formulaire, e-mail) pour mesurer les résultats.",
    "Propose un mode simulation (dry-run) qui n'envoie rien, et une confirmation avant création.",
]))

E.append(Paragraph("4. Services de l'API Google Ads utilisés", styles["H"]))
E.append(Paragraph(
    "Opérations de création/configuration (mutate) et lecture (search) sur les services : "
    "CampaignBudgetService, CampaignService, CampaignCriterionService, AdGroupService, "
    "AdGroupCriterionService, AdGroupAdService, AssetService, CampaignAssetService, "
    "ConversionActionService et GoogleAdsService.", styles["Body"]))

E.append(Paragraph("5. Périmètre et utilisateurs", styles["H"]))
E.append(bullets([
    "Un seul utilisateur : le propriétaire de l'entreprise.",
    "Un seul compte Google Ads : le nôtre.",
    "Aucune gestion de comptes clients, aucun usage en marque blanche ou en agence.",
    "Volume d'appels API très faible (mise en place ponctuelle de la campagne).",
]))

E.append(Paragraph("6. Données et sécurité", styles["H"]))
E.append(bullets([
    "L'outil s'exécute en local sur notre poste ; il ne contient aucun serveur tiers.",
    "Les identifiants (developer token, OAuth, refresh token) sont stockés localement et ne sont jamais partagés ni versionnés.",
    "Aucune donnée personnelle de tiers n'est collectée ni traitée.",
    "Les seules données échangées sont celles de notre propre campagne, avec l'API Google Ads.",
]))

E.append(Paragraph("7. Niveau d'accès demandé", styles["H"]))
E.append(Paragraph(
    "Accès <b>Basic</b> au developer token, suffisant pour gérer notre propre compte annonceur.",
    styles["Body"]))

E.append(Spacer(1, 8))
E.append(HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#CBD5E0"), spaceAfter=6))
E.append(Paragraph("Summary (English)", styles["H"]))
E.append(Paragraph(
    "This is an internal, single-purpose tool used only to set up and configure the Google Ads "
    "Search campaign of our own advertising account (a local tree-surgery business in France). "
    "It is not a commercial platform: it does not manage third-party accounts and is not resold. "
    "It reads a local configuration file and uses the Google Ads API (CampaignBudget, Campaign, "
    "CampaignCriterion, AdGroup, AdGroupCriterion, AdGroupAd, Asset, CampaignAsset, ConversionAction "
    "and GoogleAdsService) to create a budget-capped Search campaign, ad groups, keywords, negative "
    "keywords, responsive search ads, extensions and conversion actions. It runs locally, stores "
    "credentials locally, processes no third-party personal data, and requires only Basic access "
    "to manage our own single account.", styles["BodyEN"]))

doc.build(E)
print("PDF généré : Presentation-Outil-Google-Ads.pdf")
