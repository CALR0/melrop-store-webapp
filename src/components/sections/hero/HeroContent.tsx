import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../../../styles/animations';
import { HERO_STATS } from '../../../constants/hero';
import { Button } from '../../ui/layout';

interface HeroContentProps {
  onExploreClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onExploreClick }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Bienvenido a{' '}
        <motion.span 
          className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          Melrop Store
        </motion.span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Descubre nuestros productos únicos y de alta calidad.
        <br />
        <motion.span
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-purple-300"
        >
          Echa un vistazo y encuentra lo que necesitas.
        </motion.span>
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex justify-center mb-16"
      >
        <Button onClick={onExploreClick} size="lg" className="group">
          <span>Explorar productos</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </Button>
      </motion.div>

      {/* Enhanced Stats with better animations */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        {HERO_STATS.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center group"
            whileHover={{ 
              scale: 1.05,
              y: -5
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors"
              animate={{
                textShadow: [
                  "0 0 0px rgba(168, 85, 247, 0)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 0px rgba(168, 85, 247, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-white/70 group-hover:text-white/90 transition-colors">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;