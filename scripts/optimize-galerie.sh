#!/bin/bash
# Optimisation spécifique des images JPG de galerie (réalisations)
# Réduit de 4032px → 1920px et compresse en qualité 85%

set -e

echo "🖼️  Optimisation des images de galerie (réalisations)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

IMAGES_DIR="public/images/realisations"
MAX_WIDTH=1920
QUALITY=85

# Créer backup
if [ ! -d "${IMAGES_DIR}/originals" ]; then
  mkdir -p "${IMAGES_DIR}/originals"
  echo "📦 Dossier de backup créé"
fi

# Fonction pour convertir bytes en format lisible
human_size() {
  local bytes=$1
  if [ $bytes -lt 1024 ]; then
    echo "${bytes}B"
  elif [ $bytes -lt 1048576 ]; then
    echo "$((bytes / 1024))KB"
  else
    echo "$((bytes / 1048576))MB"
  fi
}

total_saved=0

# Traiter chaque image JPG/JPEG
for img in "${IMAGES_DIR}"/*.{JPG,jpg,JPEG,jpeg}; do
  # Vérifier existence
  [ -e "$img" ] || continue
  [ -f "$img" ] || continue

  # Ignorer originals
  if [[ "$img" == *"/originals/"* ]]; then
    continue
  fi

  filename=$(basename "$img")
  echo ""
  echo "📸 $filename"

  # Taille actuelle
  size_before=$(stat -f%z "$img")
  current_width=$(sips -g pixelWidth "$img" 2>/dev/null | awk '/pixelWidth:/ {print $2}')
  current_height=$(sips -g pixelHeight "$img" 2>/dev/null | awk '/pixelHeight:/ {print $2}')

  echo "   Avant: ${current_width}x${current_height} ($(human_size $size_before))"

  # Backup si pas déjà fait
  if [ ! -f "${IMAGES_DIR}/originals/${filename}" ]; then
    cp "$img" "${IMAGES_DIR}/originals/${filename}"
    echo "   💾 Original sauvegardé"
  fi

  # Optimiser si trop large
  if [ "$current_width" -gt "$MAX_WIDTH" ]; then
    # Redimensionner ET compresser
    sips --resampleWidth "$MAX_WIDTH" \
         --setProperty formatOptions "$QUALITY" \
         "$img" > /dev/null 2>&1

    # Nouvelles dimensions
    new_width=$(sips -g pixelWidth "$img" 2>/dev/null | awk '/pixelWidth:/ {print $2}')
    new_height=$(sips -g pixelHeight "$img" 2>/dev/null | awk '/pixelHeight:/ {print $2}')
    size_after=$(stat -f%z "$img")
    saved=$((size_before - size_after))
    total_saved=$((total_saved + saved))

    echo "   ✅ Après: ${new_width}x${new_height} ($(human_size $size_after))"
    echo "   🎯 Gain: $(human_size $saved) (-$((saved * 100 / size_before))%)"
  else
    echo "   ✓ Déjà optimisé (largeur ≤ ${MAX_WIDTH}px)"
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Optimisation terminée !"
echo ""
echo "💾 Gain total: $(human_size $total_saved)"
echo "📁 Originaux dans: ${IMAGES_DIR}/originals/"
