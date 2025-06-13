// Configuración centralizada de animaciones
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    extraSlow: 2.0
  },
  delays: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.5
  },
  spring: {
    stiffness: 300,
    damping: 30
  },
  easing: {
    easeInOut: "easeInOut",
    linear: "linear",
    spring: "spring"
  },
  // Variantes de animación base
  variants: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.05
        }
      }
    },
    item: {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }
      }
    },
    scaleIn: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          delay: 0.1
        }
      }
    },
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  // Animaciones de hover
  hover: {
    lift: {
      y: -8,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    },
    scale: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    glow: {
      boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
      transition: { duration: 0.3 }
    }
  },
  // Transiciones comunes
  transitions: {
    spring: { type: "spring", stiffness: 300, damping: 30 },
    smooth: { duration: 0.3, ease: "easeInOut" },
    bounce: { type: "spring", stiffness: 400, damping: 10 }
  }
} as const;