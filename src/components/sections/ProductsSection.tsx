import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChevronDown, ChevronUp, Filter, Grid, Sparkles } from 'lucide-react';
import { containerVariants, itemVariants, scaleIn } from '../../styles/animations';
import { PRODUCTS } from '../../constants/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Consumible', 'Accesorio', 'Utensilio', 'Otros'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === selectedCategory);
  
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  const handleToggleProducts = () => {
    if (!showAll) {
      setShowAll(true);
    } else {
      setShowAll(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
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
          
          {/* Products Counter with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <motion.span 
              className="text-sm text-gray-500"
              animate={{
                color: ['rgb(107, 114, 128)', 'rgb(147, 51, 234)', 'rgb(107, 114, 128)']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Mostrando {displayedProducts.length} de {filteredProducts.length} productos
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'Todos' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {displayedProducts.map((product, index) => (
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

        {/* Toggle Button - SIN efectos shimmer */}
        {filteredProducts.length > 6 && (
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
            
            {!showAll && filteredProducts.length > 6 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-gray-500 mt-3 text-center"
              >
                {filteredProducts.length - 6} productos más disponibles en esta categoría
              </motion.p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;