import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { itemVariants } from '../../../styles/animations';
import { Product } from '../../../types';
import { ProductCard } from '../../ui/media';

interface ProductsGridProps {
  products: Product[];
  selectedCategory: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, selectedCategory }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      layout
    >
      <AnimatePresence mode="wait">
        {products.map((product, index) => (
          <motion.div
            key={`${product.id}-${selectedCategory}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300
            }}
            layout
          >
            <ProductCard
              product={product}
              variants={itemVariants}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductsGrid;