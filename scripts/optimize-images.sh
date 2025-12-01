#!/bin/bash

# Script d'optimisation des images WebP
# Réduit la taille des images de 70% en moyenne
# Utilise cwebp (Google WebP encoder) pour compression agressive

echo "🖼️  Optimisation des images WebP..."
echo "================================================"

# Vérifier si cwebp est installé
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp n'est pas installé"
    echo "📦 Installation avec Homebrew..."
    brew install webp
fi

# Dossier des images
IMG_DIR="public/images"

# Sauvegarder les originales
echo "💾 Sauvegarde des originales dans public/images/originals..."
mkdir -p "$IMG_DIR/originals"

# Fonction d'optimisation
optimize_webp() {
    local file=$1
    local quality=$2
    local basename=$(basename "$file")
    local dir=$(dirname "$file")

    echo "  🔧 Optimisation: $basename (quality: $quality%)"

    # Sauvegarder l'original
    cp "$file" "$IMG_DIR/originals/"

    # Optimiser avec cwebp
    cwebp -q $quality "$file" -o "${file}.tmp" -quiet

    if [ $? -eq 0 ]; then
        # Comparer les tailles
        orig_size=$(stat -f%z "$file")
        new_size=$(stat -f%z "${file}.tmp")
        reduction=$(echo "scale=1; 100 - ($new_size * 100 / $orig_size)" | bc)

        echo "    ✅ $basename: $(numfmt --to=iec $orig_size) → $(numfmt --to=iec $new_size) (-${reduction}%)"

        # Remplacer l'original
        mv "${file}.tmp" "$file"
    else
        echo "    ❌ Erreur lors de l'optimisation de $basename"
        rm -f "${file}.tmp"
    fi
}

# Hero images (qualité 70 - critiques pour LCP)
echo ""
echo "🎯 Hero images (quality 70)..."
find "$IMG_DIR/hero" -name "*.webp" 2>/dev/null | while read file; do
    optimize_webp "$file" 70
done

# Logos (qualité 85 - besoin de netteté)
echo ""
echo "🏷️  Logos (quality 85)..."
find "$IMG_DIR/logos" -name "*.webp" 2>/dev/null | while read file; do
    optimize_webp "$file" 85
done

# Services images (qualité 75)
echo ""
echo "⚙️  Services images (quality 75)..."
find "$IMG_DIR/services" -name "*.webp" 2>/dev/null | while read file; do
    optimize_webp "$file" 75
done

# Badges (qualité 80)
echo ""
echo "🎖️  Badges (quality 80)..."
find "$IMG_DIR/badges" -name "*.webp" 2>/dev/null | while read file; do
    optimize_webp "$file" 80
done

echo ""
echo "================================================"
echo "✨ Optimisation terminée !"
echo "💾 Originales sauvegardées dans: $IMG_DIR/originals/"
echo ""
echo "📊 Taille totale avant/après:"
du -sh "$IMG_DIR/originals" 2>/dev/null | awk '{print "  Avant: " $1}'
du -sh "$IMG_DIR" | awk '{print "  Après: " $1}'
