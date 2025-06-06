import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { FormData } from '../../types';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', product: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-white/80">
          Gracias por tu interés. Te responderemos dentro de 24 horas.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            placeholder="Tu nombre"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            placeholder="tu@email.com"
          />
        </motion.div>
      </div>

      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
        <label htmlFor="product" className="block text-sm font-medium text-white">
          Interés en producto
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
        >
          <option value="" className="text-gray-900">Selecciona una categoría de producto</option>
          <option value="electronics" className="text-gray-900">Electrónicos</option>
          <option value="wearables" className="text-gray-900">Wearables</option>
          <option value="accessories" className="text-gray-900">Accesorios</option>
          <option value="photography" className="text-gray-900">Fotografía</option>
          <option value="furniture" className="text-gray-900">Muebles</option>
          <option value="other" className="text-gray-900">Otro</option>
        </select>
      </motion.div>

      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          required
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"
          placeholder="Cuéntanos sobre tu interés en nuestros productos..."
        />
      </motion.div>

      <Button type="submit" size="lg" className="w-full">
        <Send className="w-5 h-5" />
        <span>Enviar mensaje</span>
      </Button>
    </form>
  );
};

export default ContactForm;