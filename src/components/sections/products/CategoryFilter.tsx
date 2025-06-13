import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../../constants/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  categoryStats: Record<string, number>;
  onCategoryChange: (category: string) => void;
  displayedProductsCount: number;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  categoryStats,
  onCategoryChange,
  displayedProductsCount
}) => {
  const getActiveCategory = () => {
    return PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategory);
  };

  return (
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
        {PRODUCT_CATEGORIES.map((category, index) => {
          const isActive = selectedCategory === category.id;
          const IconComponent = category.icon;
          const count = categoryStats[category.id] || 0;
          
          return (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
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
              {/* Background glow for active category */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 0.4, 
                      scale: 1.1,
                      boxShadow: [
                        "0 0 20px rgba(147, 51, 234, 0.4)",
                        "0 0 30px rgba(147, 51, 234, 0.6)",
                        "0 0 20px rgba(147, 51, 234, 0.4)"
                      ]
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3,
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                )}
              </AnimatePresence>
              
              {/* Hover glow for inactive categories */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20"
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Content */}
              <div className="relative flex items-center space-x-3 z-10">
                <div
                  className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20' 
                      : 'bg-purple-100 group-hover:bg-purple-200'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-purple-600'
                  }`} />
                </div>
                
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">
                    {category.name}
                  </span>
                  <motion.span 
                    className={`text-xs transition-all duration-300 ${
                      isActive ? 'text-white/80' : 'text-gray-500'
                    }`}
                    animate={isActive ? {
                      opacity: [0.8, 1, 0.8]
                    } : {}}
                    transition={isActive ? {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                  >
                    {count} productos
                  </motion.span>
                </div>
              </div>

              {/* Pulse effect for active category */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
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
            Mostrando <span className="font-semibold text-purple-600">{displayedProductsCount}</span> de{' '}
            <span className="font-semibold text-purple-600">{categoryStats[selectedCategory] || 0}</span> productos
            {selectedCategory !== 'all' && (
              <span className="text-purple-600"> en {getActiveCategory()?.name}</span>
            )}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CategoryFilter;