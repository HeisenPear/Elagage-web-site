/**
 * Menu déroulant Zones d'intervention
 * Affiche toutes les villes avec un sous-menu déroulant moderne
 */
import { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

interface ZonesDropdownProps {
  isMobile?: boolean;
}

export default function ZonesDropdown({ isMobile = false }: ZonesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le menu quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Fermer au clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    // Version mobile : liste simple
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-4 text-white hover:text-accent transition-colors duration-300 flex items-center justify-between"
        >
          <span className="text-xl font-medium">Zones d'intervention</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="pl-4 pb-4 space-y-2">
            {siteConfig.serviceArea.cities.map((city) => (
              <a
                key={city}
                href={`/zones/${city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={handleLinkClick}
                className="block py-2 text-white/80 hover:text-accent transition-colors duration-300"
              >
                {city}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Version desktop : dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary/90 hover:text-primary font-medium transition-colors duration-300 relative group flex items-center gap-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Zones d'intervention
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lift border border-neutral-cream/20 overflow-hidden min-w-[280px] max-h-[400px] overflow-y-auto z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-2 grid grid-cols-2 gap-1">
            {siteConfig.serviceArea.cities.map((city, index) => (
              <a
                key={city}
                href={`/zones/${city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={handleLinkClick}
                className="px-4 py-2 text-sm text-neutral-black hover:bg-accent hover:text-white rounded-md transition-all duration-200"
                style={{ animationDelay: `${index * 20}ms` }}
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
