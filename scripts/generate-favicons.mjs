#!/usr/bin/env node
/**
 * Script pour générer les favicons à partir du logo WebP
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const logoPath = join(projectRoot, 'public/images/logos/Logo abatteur.webp');
const publicPath = join(projectRoot, 'public');

async function generateFavicons() {
  console.log('🎨 Génération des favicons...');

  try {
    // Vérifier que le logo existe
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Logo non trouvé:', logoPath);
      process.exit(1);
    }

    // Favicon 16x16
    await sharp(logoPath)
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(publicPath, 'favicon-16x16.png'));
    console.log('✅ favicon-16x16.png créé');

    // Favicon 32x32
    await sharp(logoPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(publicPath, 'favicon-32x32.png'));
    console.log('✅ favicon-32x32.png créé');

    // Apple Touch Icon 180x180
    await sharp(logoPath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(join(publicPath, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png créé');

    // Favicon.ico (32x32 pour compatibilité)
    await sharp(logoPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(publicPath, 'favicon.ico'));
    console.log('✅ favicon.ico créé');

    // Créer un favicon.svg simple (texte SVG avec logo)
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#A4BD01;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#679436;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#grad)" rx="15"/>
  <text x="50" y="70" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">E</text>
</svg>`;

    fs.writeFileSync(join(publicPath, 'favicon.svg'), svgContent);
    console.log('✅ favicon.svg créé');

    console.log('\n🎉 Tous les favicons ont été générés avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
