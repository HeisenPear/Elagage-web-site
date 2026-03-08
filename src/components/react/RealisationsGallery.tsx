/**
 * Galerie de Réalisations avec Lightbox
 * - Grid 3 colonnes responsive
 * - Hover effects avec overlay
 * - Lightbox pour agrandir les photos
 * - SEO optimisé (alt tags, lazy loading)
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface RealisationPhoto {
  src: string;
  alt: string;
  titre: string;
  lieu: string;
  categorie: 'Élagage' | 'Abattage' | 'Dessouchage' | 'Taille haies' | 'Chantier';
}

// Photos réelles ajoutées par le client
const defaultRealisations: RealisationPhoto[] = [
  {
    src: '/images/realisations/Resized_20251025_093056.jpeg',
    alt: 'Intervention élagage professionnel Tours Indre-et-Loire élagueur certifié',
    titre: 'Intervention d\'élagage',
    lieu: 'Tours et environs',
    categorie: 'Élagage'
  },
  {
    src: '/images/realisations/Resized_20251025_093159.jpeg',
    alt: 'Chantier élagage abattage Tours 37 élagueur professionnel',
    titre: 'Chantier d\'élagage',
    lieu: 'Indre-et-Loire',
    categorie: 'Chantier'
  },
  {
    src: '/images/realisations/78324516863__37C414ED-91C8-4242-B589-69240DFB162C.JPG',
    alt: 'Élagage arbre en hauteur élagueur grimpeur professionnel Tours 37',
    titre: 'Élagage en hauteur',
    lieu: 'Tours',
    categorie: 'Élagage'
  },
  {
    src: '/images/realisations/78324950859__1250A129-A3D7-4D7D-A333-76769A9AC929.JPG',
    alt: 'Travaux élagage abattage professionnel élagueur certifié Indre-et-Loire',
    titre: 'Travaux d\'élagage',
    lieu: 'Indre-et-Loire',
    categorie: 'Élagage'
  }
];

interface Props {
  realisations?: RealisationPhoto[];
}

export default function RealisationsGallery({ realisations = defaultRealisations }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % realisations.length);
  };

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev - 1 + realisations.length) % realisations.length);
  };

  // Couleurs par catégorie
  const getCategoryColor = (categorie: string) => {
    switch (categorie) {
      case 'Élagage':
        return 'bg-green-600';
      case 'Abattage':
        return 'bg-amber-600';
      case 'Dessouchage':
        return 'bg-orange-600';
      case 'Taille haies':
        return 'bg-lime-600';
      case 'Chantier':
        return 'bg-teal-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <>
      {/* Grid des photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {realisations.map((photo, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => openLightbox(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Image */}
            <div className="relative h-80 bg-gray-200">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width="800"
                height="600"
                onError={(e) => {
                  // Fallback si image manquante
                  (e.target as HTMLImageElement).src = '/images/placeholder-realisation.jpg';
                }}
              />
            </div>

            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-display font-bold mb-2">{photo.titre}</h3>
                <p className="text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {photo.lieu}
                </p>
                <span className={`${getCategoryColor(photo.categorie)} px-3 py-1 rounded-full text-xs font-semibold`}>
                  {photo.categorie}
                </span>
              </div>

              {/* Icône zoom */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-[10000]"
              aria-label="Fermer la lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Bouton précédent */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Photo précédente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image principale */}
            <motion.div
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={realisations[selectedIndex].src}
                alt={realisations[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />

              {/* Légende */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {realisations[selectedIndex].titre}
                </h3>
                <p className="text-white/80 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {realisations[selectedIndex].lieu}
                </p>
              </div>
            </motion.div>

            {/* Bouton suivant */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Photo suivante"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Compteur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {selectedIndex + 1} / {realisations.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
