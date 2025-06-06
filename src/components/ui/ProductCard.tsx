import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  variants?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      whileHover={{ y: -8 }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors" />
          </motion.button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-purple-600">
            {product.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;