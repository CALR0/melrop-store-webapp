import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { containerVariants, itemVariants } from '../../../styles/animations';
import { CONTACT_INFO } from '../../../constants/contact';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-white mb-6">Hablemos</h3>
        <p className="text-white/80 text-lg mb-8">
          ¿Tienes preguntas sobre nuestros productos? Nuestro equipo está aquí para ayudarte a tomar la decisión correcta.
        </p>
      </motion.div>

      {CONTACT_INFO.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start space-x-4 group"
          whileHover={{ x: 4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
            }}
          >
            <item.icon className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">{item.title}</h4>
            <p className="text-white/90 font-medium">{item.content}</p>
            <p className="text-white/70 text-sm">{item.description}</p>
          </div>
        </motion.div>
      ))}

      {/* Elemento decorativo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 1.2, 
          duration: 0.8,
          ease: "easeOut"
        }}
        className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
      >
        <div className="flex items-center space-x-2 text-white/80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 6,
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
          <span className="text-sm">
            Respuesta garantizada en 48 horas
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;