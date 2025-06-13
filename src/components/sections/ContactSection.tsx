import React from 'react';
import { motion } from 'framer-motion';
import ContactBackground from './contact/ContactBackground';
import ContactFloatingIcons from './contact/ContactFloatingIcons';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import { ContactForm } from '../forms';

const ContactSection: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <ContactBackground />
      <ContactFloatingIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;