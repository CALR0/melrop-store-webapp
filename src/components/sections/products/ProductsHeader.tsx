import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { scaleIn } from '../../../styles/animations';

const ProductsHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center mb-16"
    >
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-600 text-sm font-medium mb-4 shadow-lg"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        <Sparkles className="w-3 h-3 mr-1" />
        Nuestros productos
      </motion.div>
      
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-4"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      >
        Colección destacada
      </motion.h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Descubre nuestra selección de productos destacados, un catálogo completo de variedades para ti.
      </p>
    </motion.div>
  );
};

export default ProductsHeader;