import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Heart } from 'lucide-react';
import { containerVariants, itemVariants, floatingAnimation } from '../../styles/animations';
import { HERO_STATS } from '../../constants/hero';
import Button from '../ui/Button';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-24 pb-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [0, 20, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [0, -15, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        />
        
        {/* New gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-10 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/3 right-10 w-56 h-56 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced Floating Icons */}
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

      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
          transition: { duration: 5, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-1/2 left-1/4 text-cyan-400/50"
      >
        <Zap className="w-7 h-7" />
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          scale: [1, 1.2, 1],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 left-1/5 text-pink-400/50"
      >
        <Heart className="w-6 h-6" />
      </motion.div>

      {/* Main Content with enhanced animations */}
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
          <Button onClick={onExploreClick} size="lg" className="group relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">Explorar productos</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
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
    </section>
  );
};

export default HeroSection;