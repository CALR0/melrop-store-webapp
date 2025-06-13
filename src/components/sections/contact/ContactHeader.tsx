import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';

const ContactHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20"
      >
        <Mail className="w-4 h-4 mr-2" />
        <Sparkles className="w-3 h-3 mr-1" />
        Escribenos
      </motion.div>
      
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-white mb-4"
        animate={{
          textShadow: [
            "0 0 0px rgba(255, 255, 255, 0)",
            "0 0 30px rgba(255, 255, 255, 0.3)",
            "0 0 0px rgba(255, 255, 255, 0)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Contáctanos
      </motion.h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        ¿Interesado en nuestros productos? Hablemos sobre cómo podemos ayudarte a encontrar la solución perfecta
      </p>
    </motion.div>
  );
};

export default ContactHeader;