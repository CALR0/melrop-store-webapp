// Barrel export para animaciones - ahora usando configuración centralizada
export * from './variants';
import { ANIMATION_CONFIG } from '../../config/animations';

// Re-export de configuración centralizada para mantener compatibilidad
export const baseAnimations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideDown: {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideRight: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scaleIn: ANIMATION_CONFIG.variants.scaleIn
};

// Animaciones de contenedor
export const containerAnimations = {
  stagger: ANIMATION_CONFIG.variants.container
};

// Animaciones de hover desde configuración centralizada
export const hoverAnimations = ANIMATION_CONFIG.hover;

// Animaciones flotantes
export const floatingAnimations = {
  gentle: ANIMATION_CONFIG.variants.floating,
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Transiciones comunes desde configuración centralizada
export const transitions = ANIMATION_CONFIG.transitions;