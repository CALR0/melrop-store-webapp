import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import { useScrollDetection } from '../hooks/useScrollDetection';
import { scrollToSection } from '../utils/scroll';

const HomePage: React.FC = () => {
  const { activeSection, setActiveSection } = useScrollDetection();

  const handleExploreProducts = () => {
    scrollToSection('products');
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onSectionClick={handleSectionClick}
      />

      {/* Page Sections */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Section */}
          <div id="home">
            <HeroSection onExploreClick={handleExploreProducts} />
          </div>

          {/* Products Section */}
          <div id="products">
            <ProductsSection />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <ContactSection />
          </div>

          {/* Footer */}
          <Footer />
        </motion.main>
      </AnimatePresence>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: activeSection !== 'home' ? 1 : 0,
          scale: activeSection !== 'home' ? 1 : 0
        }}
        onClick={() => handleSectionClick('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
};

export default HomePage;