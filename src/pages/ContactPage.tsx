import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;