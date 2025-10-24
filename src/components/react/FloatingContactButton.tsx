/**
 * Bouton de contact flottant (sticky CTA)
 * Visible en permanence pour maximiser les conversions
 * Téléphone sur mobile et desktop
 */
import { useState, useEffect } from 'react';
import { getPhoneLink } from '@/data/siteConfig';

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher après un léger scroll pour ne pas gêner
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Bouton téléphone flottant (visible sur mobile uniquement) */}
      <a
        href={getPhoneLink()}
        className={`floating-phone-btn ${isVisible ? 'visible' : ''}`}
        aria-label="Appeler maintenant"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="phone-label">Appeler</span>
      </a>
    </>
  );
}
