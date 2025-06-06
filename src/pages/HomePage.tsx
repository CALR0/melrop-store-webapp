import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection onExploreClick={handleExploreProducts} />
    </motion.div>
  );
};

export default HomePage;