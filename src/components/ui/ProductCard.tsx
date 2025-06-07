import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import ImageModal from './ImageModal';

interface ProductCardProps {
  product: Product;
  variants?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variants }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewImage = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        variants={variants}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Gradient overlay for hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 z-10 pointer-events-none"
          initial={false}
        />

        {/* Product Image */}
        <div className="relative overflow-hidden cursor-pointer" onClick={handleViewImage}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Enhanced gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={false}
          />
          
          {/* Eye Icon - Aparece SIEMPRE al hacer hover en la imagen */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/50"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Eye className="w-8 h-8 text-gray-700 hover:text-purple-600 transition-colors" />
            </motion.div>
          </motion.div>

          {/* Enhanced Category Badge */}
          <motion.div 
            className="absolute top-4 left-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg border border-white/50 flex items-center space-x-1"
              animate={{
                boxShadow: [
                  "0 4px 6px rgba(0, 0, 0, 0.1)",
                  "0 8px 15px rgba(147, 51, 234, 0.2)",
                  "0 4px 6px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-3 h-3 text-purple-500" />
              <span>{product.category}</span>
            </motion.span>
          </motion.div>

          {/* Shimmer effect on hover - RESTAURADO */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
            initial={false}
          />
        </div>

        {/* Enhanced Product Info */}
        <div className="p-6 relative z-20">
          <motion.h3 
            className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300"
            whileHover={{ x: 2 }}
          >
            {product.name}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {product.description}
          </motion.p>

          <div className="flex items-center justify-center">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              {product.price}
            </motion.span>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          initial={false}
        />
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc={product.image}
        imageAlt={product.name}
        productName={product.name}
      />
    </>
  );
};

export default ProductCard;