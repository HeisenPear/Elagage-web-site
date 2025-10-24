#!/usr/bin/env node

/**
 * Script pour détecter les césures de mots problématiques
 * Usage: node scripts/check-word-breaks.js
 */

const fs = require('fs');
const path = require('path');

const problematicWords = ['Tours', 'Indre-et-Loire', 'Élagage', 'Abattage', 'élagueur', 'professionnel'];
const problematicCSS = [
  'word-break: break-all',
  'word-break: break-word',
  'hyphens: auto',
  'overflow-wrap: anywhere'
];

let globalIssuesCount = 0;

/**
 * Vérifie un fichier pour détecter les problèmes de césure
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Vérifier CSS problématique
  problematicCSS.forEach(css => {
    if (content.includes(css)) {
      issues.push({
        type: 'css',
        severity: 'error',
        message: `❌ CSS problématique trouvé: ${css}`
      });
    }
  });

  // Vérifier mots sans espaces insécables (seulement dans HTML/Astro/JSX)
  if (filePath.match(/\.(html|astro|jsx|tsx)$/)) {
    problematicWords.forEach(word => {
      // Cherche le mot précédé d'un espace normal (pas insécable)
      const normalSpaceRegex = new RegExp(`(?<![&\\u00A0])\\s${word}(?![&\\u00A0])`, 'g');
      const matches = content.match(normalSpaceRegex);

      if (matches && matches.length > 0) {
        issues.push({
          type: 'typography',
          severity: 'warning',
          message: `⚠️  "${word}" trouvé ${matches.length} fois sans espace insécable`
        });
      }
    });
  }

  return issues;
}

/**
 * Scanne un répertoire de manière récursive
 */
function scanDirectory(dir, depth = 0) {
  if (depth > 10) return 0; // Protection contre récursion infinie

  const files = fs.readdirSync(dir);
  let totalIssues = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);

    // Ignorer les dossiers à exclure
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file.startsWith('.')) {
      return;
    }

    try {
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        totalIssues += scanDirectory(filePath, depth + 1);
      } else if (file.match(/\.(tsx?|jsx?|astro|css|scss)$/)) {
        const issues = checkFile(filePath);
        if (issues.length > 0) {
          console.log(`\n📁 ${filePath}:`);
          issues.forEach(issue => {
            console.log(`  ${issue.message}`);
            totalIssues++;
            globalIssuesCount++;
          });
        }
      }
    } catch (error) {
      // Ignorer les erreurs de permission
    }
  });

  return totalIssues;
}

/**
 * Affiche un résumé coloré des résultats
 */
function displaySummary() {
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DU SCAN');
  console.log('='.repeat(60));

  if (globalIssuesCount === 0) {
    console.log('\n✅ ✅ ✅  AUCUN PROBLÈME DÉTECTÉ !  ✅ ✅ ✅');
    console.log('\nTous les mots critiques sont protégés contre la césure.');
    console.log('Le site est prêt pour la production ! 🚀');
  } else {
    console.log(`\n❌ ${globalIssuesCount} problème(s) détecté(s) à corriger.\n`);
    console.log('Actions recommandées :');
    console.log('  1. Remplacer les CSS problématiques par word-break: normal');
    console.log('  2. Ajouter des espaces insécables (&nbsp; ou \\u00A0)');
    console.log('  3. Utiliser la fonction protectTypography() de utils/typography.ts');
  }
  console.log('\n' + '='.repeat(60) + '\n');
}

// Point d'entrée principal
console.log('🔍 Scan des césures de mots inappropriées...\n');
console.log('Mots surveillés:', problematicWords.join(', '));
console.log('CSS surveillés:', problematicCSS.join(', '));
console.log('\nAnalyse en cours...');

try {
  scanDirectory('./src');
  displaySummary();

  // Code de sortie pour CI/CD
  process.exit(globalIssuesCount > 0 ? 1 : 0);
} catch (error) {
  console.error('\n❌ Erreur lors du scan:', error.message);
  process.exit(1);
}
