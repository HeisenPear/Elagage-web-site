/**
 * Menu mobile avec overlay fullscreen et animations stagger
 * Composant React pour hydratation côté client
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, getPhoneLink } from '@/data/siteConfig';
import ZonesDropdown from './ZonesDropdown';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modal:open'));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('modal:close'));
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fermer au resize si on passe en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Animations variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    }),
  };

  return (
    <>
      {/* Bouton burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] w-12 h-12 flex lg:hidden items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-accent/30"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-full bg-primary rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-full bg-primary rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-full bg-primary rounded-full"
          />
        </div>
      </button>

      {/* Menu overlay fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.nav
              id="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 sm:max-w-[90vw] bg-primary z-[56] overflow-y-auto"
              role="navigation"
              aria-label="Menu mobile"
              style={{ height: '100dvh' }}
            >
              <div className="flex flex-col min-h-full p-6 sm:p-8 pt-20 sm:pt-24">
                {/* Navigation links avec animation stagger */}
                <div className="flex-1 flex flex-col justify-center gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      className="text-2xl sm:text-3xl font-display font-bold text-white hover:text-accent transition-colors duration-300 py-4 border-b border-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  {/* Menu déroulant Zones d'intervention (mobile) */}
                  <motion.div
                    custom={navLinks.length}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    className="border-b border-white/10"
                  >
                    <ZonesDropdown isMobile={true} />
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 space-y-4"
                >
                  {/* Appel */}
                  <a
                    href={getPhoneLink()}
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{siteConfig.business.phoneDisplay}</span>
                  </a>
                </motion.div>

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 pt-8 border-t border-white/10 text-white/70 text-sm"
                >
                  <p className="mb-2">{siteConfig.business.address.street}</p>
                  <p className="mb-2">
                    {siteConfig.business.address.postalCode} {siteConfig.business.address.city}
                  </p>
                  <p className="mb-4">{siteConfig.business.email}</p>
                  <p className="text-xs">
                    Ouvert du lundi au vendredi : {siteConfig.business.openingHours.weekdays}
                  </p>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
