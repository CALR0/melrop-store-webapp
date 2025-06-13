import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '../../../styles/animations';

const HeroBackground: React.FC = () => {
  return (
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
  );
};

export default HeroBackground;