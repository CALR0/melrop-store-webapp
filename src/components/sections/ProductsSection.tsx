import React from 'react';
import { PRODUCTS } from '../../constants/products';
import { useProductFilter } from '../../hooks/useProductFilter';
import { DOMUtils } from '../../utils/dom';
import ProductsBackground from './products/ProductsBackground';
import ProductsHeader from './products/ProductsHeader';
import CategoryFilter from './products/CategoryFilter';
import ProductsGrid from './products/ProductsGrid';
import ProductsToggle from './products/ProductsToggle';

const ProductsSection: React.FC = () => {
  const {
    selectedCategory,
    showAll,
    displayedProducts,
    categoryStats,
    hasMoreProducts,
    handleCategoryChange,
    toggleShowAll
  } = useProductFilter(PRODUCTS);

  const handleToggleProducts = () => {
    if (!showAll) {
      toggleShowAll();
    } else {
      toggleShowAll();
      setTimeout(() => {
        DOMUtils.scrollToTop();
      }, 100);
    }
  };

  const remainingProductsCount = (categoryStats[selectedCategory] || 0) - displayedProducts.length;

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      <ProductsBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProductsHeader />

        <CategoryFilter
          selectedCategory={selectedCategory}
          categoryStats={categoryStats}
          onCategoryChange={handleCategoryChange}
          displayedProductsCount={displayedProducts.length}
        />

        <ProductsGrid
          products={displayedProducts}
          selectedCategory={selectedCategory}
        />

        <ProductsToggle
          showAll={showAll}
          hasMoreProducts={hasMoreProducts}
          remainingProductsCount={remainingProductsCount}
          onToggle={handleToggleProducts}
        />
      </div>
    </section>
  );
};

export default ProductsSection;