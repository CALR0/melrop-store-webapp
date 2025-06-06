import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { containerVariants, itemVariants, floatingAnimation } from '../../styles/animations';
import { HERO_STATS } from '../../constants/hero';
import Button from '../ui/Button';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360],
          transition: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-32 right-1/4 text-yellow-400/60"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [360, 0],
          transition: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-32 right-1/3 text-purple-400/60"
      >
        <Star className="w-6 h-6" />
      </motion.div>

      {/* Main Content */}
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
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Melrop Store
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Descubre nuestros productos únicos y de alta calidad.
          <br />
          Echa un vistazo y encuentra lo que necesitas.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <Button onClick={onExploreClick} size="lg">
            <span>Explorar productos</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {HERO_STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;