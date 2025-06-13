import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Heart } from 'lucide-react';

const HeroFloatingIcons: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HeroFloatingIcons;