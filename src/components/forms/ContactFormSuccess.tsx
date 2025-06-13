import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { APP_CONFIG } from '../../config';

interface ContactFormSuccessProps {
  email: string;
}

const ContactFormSuccess: React.FC<ContactFormSuccessProps> = ({ email }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8 sm:py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
      <p className="text-white/80 text-sm sm:text-base px-4">
        Gracias por tu interés. Te responderemos a <strong>{email}</strong> dentro de {APP_CONFIG.business.responseTime}.
      </p>
    </motion.div>
  );
};

export default ContactFormSuccess;