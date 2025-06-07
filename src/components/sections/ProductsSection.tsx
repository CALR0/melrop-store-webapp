import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { containerVariants, itemVariants, scaleIn } from '../../styles/animations';
import { PRODUCTS } from '../../constants/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? PRODUCTS : PRODUCTS.slice(0, 6);

  const handleToggleProducts = () => {
    if (!showAll) {
      setShowAll(true);
    } else {
      setShowAll(false);
      // Scroll suavemente hacia la sección de productos cuando se oculten
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Nuestros productos
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Colección destacada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos destacados, un catálogo completo de variedades para ti.
          </p>
          
          {/* Products Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <span className="text-sm text-gray-500">
              Mostrando {displayedProducts.length} de {PRODUCTS.length} productos
            </span>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05
                }}
              >
                <ProductCard
                  product={product}
                  variants={itemVariants}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button - Centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col items-center mt-16"
        >
          <Button 
            size="lg" 
            onClick={handleToggleProducts}
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
          
          {!showAll && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-500 mt-3 text-center"
            >
              {PRODUCTS.length - 6} productos más disponibles
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;