import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrolled } from '../../../hooks/useScrolled';
import { DOMUtils } from '../../../utils/dom';
import { UI_CONFIG } from '../../../config';

const ScrollToTop: React.FC = () => {
  const scrolled = useScrolled(UI_CONFIG.modalScrollThreshold);

  const handleScrollToTop = () => {
    DOMUtils.scrollToTop();
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: scrolled ? 1 : 0,
        scale: scrolled ? 1 : 0
      }}
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
};

export default ScrollToTop;