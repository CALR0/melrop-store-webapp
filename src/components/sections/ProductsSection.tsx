import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ChevronDown, ChevronUp, Grid, Sparkles, Package } from 'lucide-react';
import { containerVariants, itemVariants, scaleIn } from '../../styles/animations';
import { PRODUCTS } from '../../constants/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const ProductsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todos los productos', icon: Grid, count: PRODUCTS.length },
    { id: 'Consumible', name: 'Consumibles', icon: Package, count: PRODUCTS.filter(p => p.category === 'Consumible').length },
    { id: 'Accesorio', name: 'Accesorios', icon: ShoppingCart, count: PRODUCTS.filter(p => p.category === 'Accesorio').length },
    { id: 'Utensilio', name: 'Utensilios', icon: Grid, count: PRODUCTS.filter(p => p.category === 'Utensilio').length },
    { id: 'Otros', name: 'Otros', icon: Package, count: PRODUCTS.filter(p => p.category === 'Otros').length }
  ];
  
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

  const getActiveCategory = () => {
    return categories.find(cat => cat.id === selectedCategory);
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
        </motion.div>

        {/* Simple Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          {/* Filter Header */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-700 font-medium">Explorar por categoría</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="ml-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category, index) => {
              const isActive = selectedCategory === category.id;
              const IconComponent = category.icon;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background glow for active state */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"
                      layoutId="activeGlow"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-purple-100 group-hover:bg-purple-200'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${
                        isActive ? 'text-white' : 'text-purple-600'
                      }`} />
                    </div>
                    
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold">
                        {category.name}
                      </span>
                      <motion.span 
                        className={`text-xs ${
                          isActive ? 'text-white/80' : 'text-gray-500'
                        }`}
                        animate={{
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {category.count} productos
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Filter Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200/50">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-purple-500" />
              </motion.div>
              <span className="text-sm text-gray-600">
                Mostrando <span className="font-semibold text-purple-600">{displayedProducts.length}</span> de{' '}
                <span className="font-semibold text-purple-600">{filteredProducts.length}</span> productos
                {selectedCategory !== 'all' && (
                  <span className="text-purple-600"> en {getActiveCategory()?.name}</span>
                )}
              </span>
            </div>
          </motion.div>
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

        {/* Enhanced Toggle Button */}
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
