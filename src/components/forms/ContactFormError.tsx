import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ContactFormErrorProps {
  message: string;
}

const ContactFormError: React.FC<ContactFormErrorProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6"
    >
      <div className="flex items-center space-x-2 text-red-300">
        <AlertCircle className="w-5 h-5" />
        <span className="text-sm">{message}</span>
      </div>
    </motion.div>
  );
};

export default ContactFormError;