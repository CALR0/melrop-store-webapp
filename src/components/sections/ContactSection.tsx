import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, Sparkles, Phone, MapPin } from 'lucide-react';
import { containerVariants, itemVariants } from '../../styles/animations';
import { CONTACT_INFO } from '../../constants/contact';
import ContactForm from '../ui/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [0, 15, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [0, -10, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating decorative icons */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 180, 360],
          transition: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-32 right-1/4 text-purple-400/30"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [360, 0],
          transition: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-32 left-1/4 text-pink-400/30"
      >
        <Send className="w-6 h-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
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
              duration: 3,
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Info */}
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

            {/* Additional decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="flex items-center space-x-2 text-white/80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </motion.div>
                <span className="text-sm">Respuesta garantizada en 24 horas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
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