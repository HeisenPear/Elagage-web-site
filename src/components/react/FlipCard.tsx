/**
 * Composant FlipCard 3D avec effet flip au hover/tap
 * - Face avant : Icône + Titre + Prix
 * - Face arrière : Description + Liste avantages + CTA
 * - Mobile : Toggle au tap
 * - Desktop : Flip au hover
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface FlipCardProps {
  // Face avant
  icon: string; // HTML SVG
  title: string;
  price: string;

  // Face arrière
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;

  // Style
  gradientFrom?: string;
  gradientTo?: string;
}

export default function FlipCard({
  icon,
  title,
  price,
  description,
  features,
  ctaText = "Demander un devis",
  ctaHref = "/contact",
  gradientFrom = "from-[#679436]",
  gradientTo = "to-[#A4BD01]",
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile au montage (uniquement côté client)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="flip-card-container h-[28rem] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flip-card-inner relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.87, 0, 0.13, 1],
        }}
      >
        {/* FACE AVANT */}
        <div
          className="flip-card-face flip-card-front absolute inset-0 w-full h-full bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110"
            dangerouslySetInnerHTML={{ __html: icon }}
          />

          {/* Titre */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
            {title}
          </h3>

          {/* Prix */}
          <p className="text-lg text-neutral-gray mb-6">
            {price}
          </p>

          {/* Indicateur */}
          <span className="text-sm text-accent font-semibold flex items-center gap-2 mt-auto">
            {isMobile ? 'Appuyez pour plus d\'infos' : 'Survolez pour plus d\'infos'}
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </span>
        </div>

        {/* FACE ARRIÈRE */}
        <div
          className={`flip-card-face flip-card-back absolute inset-0 w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl p-8 shadow-lg text-white flex flex-col`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Titre */}
          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Liste avantages */}
          <ul className="space-y-3 mb-6 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/95">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-neutral-cream transition-all duration-300 hover:scale-105 shadow-lg mt-auto"
            onClick={(e) => e.stopPropagation()} // Éviter de fermer la card au clic sur CTA
          >
            <span>{ctaText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Bouton retour (mobile uniquement) */}
          {isMobile && (
            <button
              className="mt-4 text-white/70 text-sm underline hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              ← Retour
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
