import React from 'react';
import { motion } from 'framer-motion';

const ProductsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [0, 10, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [15, -15, 15],
          x: [0, -15, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100/40 rounded-full blur-2xl"
      />
    </div>
  );
};

export default ProductsBackground;