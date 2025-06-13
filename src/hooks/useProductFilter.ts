import { useState, useMemo } from 'react';
import { Product } from '../types';
import { UI_CONFIG } from '../config';

export const useProductFilter = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  // Productos filtrados por categoría
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => 
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [products, selectedCategory]);

  // Productos a mostrar (con límite si showAll es false)
  const displayedProducts = useMemo(() => {
    if (showAll) {
      return filteredProducts;
    }
    return filteredProducts.slice(0, UI_CONFIG.maxProductsPerPage);
  }, [filteredProducts, showAll]);

  // Estadísticas de categorías
  const categoryStats = useMemo(() => {
    const stats = products.reduce((acc, product) => {
      const category = product.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      all: products.length,
      ...stats
    };
  }, [products]);

  // Verificar si hay más productos para mostrar
  const hasMoreProducts = useMemo(() => {
    return filteredProducts.length > UI_CONFIG.maxProductsPerPage;
  }, [filteredProducts.length]);

  // Cambiar categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset showAll cuando cambia la categoría
  };

  // Toggle mostrar todos los productos
  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  return {
    selectedCategory,
    showAll,
    filteredProducts,
    displayedProducts,
    categoryStats,
    hasMoreProducts,
    handleCategoryChange,
    toggleShowAll
  };
};