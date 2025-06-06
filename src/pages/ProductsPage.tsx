import React from 'react';
import { motion } from 'framer-motion';
import ProductsSection from '../components/sections/ProductsSection';

const ProductsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProductsSection />
    </motion.div>
  );
};

export default ProductsPage;