import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const ContactFloatingIcons: React.FC = () => {
  return (
    <>
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 180, 360],
          transition: { duration: 12, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-32 right-1/4 text-purple-400/30"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [360, 0],
          transition: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-32 left-1/4 text-pink-400/30"
      >
        <Send className="w-6 h-6" />
      </motion.div>
    </>
  );
};

export default ContactFloatingIcons;