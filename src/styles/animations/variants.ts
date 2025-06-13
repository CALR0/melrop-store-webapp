// Re-export de variantes desde la configuración centralizada
import { ANIMATION_CONFIG } from '../../config/animations';

// Mantener compatibilidad con imports existentes
export const containerVariants = ANIMATION_CONFIG.variants.container;
export const itemVariants = ANIMATION_CONFIG.variants.item;
export const scaleIn = ANIMATION_CONFIG.variants.scaleIn;
export const floatingAnimation = ANIMATION_CONFIG.variants.floating;

// Variantes adicionales específicas para componentes
export const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300
    }
  }
};

export const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300
    }
  }
};

export const fadeInScale = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 400
    }
  }
};