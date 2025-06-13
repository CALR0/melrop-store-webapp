import React from 'react';
import { motion } from 'framer-motion';

const ContactBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{
          y: [-20, 20, -20],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default ContactBackground;