#!/usr/bin/env python3
"""
Génère le refresh_token OAuth2 nécessaire à l'API Google Ads.

À lancer UNE SEULE FOIS, en local, après avoir créé un identifiant OAuth
"Application de bureau" dans Google Cloud Console (voir README.md).

Usage :
    pip install google-auth-oauthlib
    python generate_refresh_token.py --client-secret client_secret.json

Le script ouvre votre navigateur, vous vous connectez avec le compte Google
qui a accès au compte Google Ads, et il affiche le refresh_token à copier
dans google-ads.yaml.
"""

import argparse
import sys

SCOPES = ["https://www.googleapis.com/auth/adwords"]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--client-secret",
        required=True,
        help="Fichier JSON téléchargé depuis Google Cloud Console (OAuth Desktop).",
    )
    args = parser.parse_args()

    try:
        from google_auth_oauthlib.flow import InstalledAppFlow
    except ImportError:
        print("❌ Installez d'abord : pip install google-auth-oauthlib")
        sys.exit(1)

    flow = InstalledAppFlow.from_client_secrets_file(args.client_secret, scopes=SCOPES)
    # Force l'obtention d'un refresh_token.
    flow.run_local_server(
        port=0,
        access_type="offline",
        prompt="consent",
    )
    creds = flow.credentials

    print("\n──────────────────────────────────────────────")
    print(" À copier dans google-ads.yaml :")
    print("──────────────────────────────────────────────")
    print(f"client_id: \"{creds.client_id}\"")
    print(f"client_secret: \"{creds.client_secret}\"")
    print(f"refresh_token: \"{creds.refresh_token}\"")
    print("──────────────────────────────────────────────")


if __name__ == "__main__":
    main()
