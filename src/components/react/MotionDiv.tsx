/**
 * MotionDiv - Wrapper Framer Motion avec presets d'animations
 * Remplace les animations CSS basiques par des animations fluides
 * Respect automatique de prefers-reduced-motion
 */

import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

// Presets d'animations prédéfinis
export const animationPresets = {
  // Fade in simple
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  // Slide up (fade + translateY)
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },

  // Slide from left
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },

  // Slide from right
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale (zoom in)
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },

  // Bounce effect
  bounce: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  },
} as const;

export type AnimationPreset = keyof typeof animationPresets;

interface MotionDivProps {
  children: ReactNode;
  preset?: AnimationPreset;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // Animer une seule fois ou à chaque apparition
  amount?: number; // Pourcentage de visibilité pour trigger (0.1 = 10%)
  margin?: string; // Root margin pour trigger avant/après (ex: "-100px")
  stagger?: number; // Stagger children (delay entre chaque enfant)
}

export default function MotionDiv({
  children,
  preset = 'slideUp',
  variants,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.1,
  margin = '0px',
  stagger,
}: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion();

  // Si prefers-reduced-motion, désactiver les animations (sauf opacity)
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Utiliser le preset ou les variants personnalisés
  const animationVariants = variants || animationPresets[preset];

  // Container variants pour stagger children
  const containerVariants: Variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }
    : {};

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={stagger ? containerVariants : animationVariants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Easing custom (easeInOutCubic)
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item pour stagger (utilisé comme enfant de MotionDiv avec stagger)
 */
export function MotionItem({ children, className = '', preset = 'slideUp' }: {
  children: ReactNode;
  className?: string;
  preset?: AnimationPreset;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={animationPresets[preset]}
    >
      {children}
    </motion.div>
  );
}
