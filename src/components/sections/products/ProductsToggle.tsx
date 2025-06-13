import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../../ui/layout';

interface ProductsToggleProps {
  showAll: boolean;
  hasMoreProducts: boolean;
  remainingProductsCount: number;
  onToggle: () => void;
}

const ProductsToggle: React.FC<ProductsToggleProps> = ({
  showAll,
  hasMoreProducts,
  remainingProductsCount,
  onToggle
}) => {
  if (!hasMoreProducts) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex flex-col items-center mt-16"
    >
      <Button 
        size="lg" 
        onClick={onToggle}
        className="group"
      >
        <span>
          {showAll ? 'Ver menos productos' : 'Ver más productos'}
        </span>
        {showAll ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        )}
      </Button>
      
      {!showAll && hasMoreProducts && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-500 mt-3 text-center"
        >
          {remainingProductsCount} productos más disponibles en esta categoría
        </motion.p>
      )}
    </motion.div>
  );
};

export default ProductsToggle;