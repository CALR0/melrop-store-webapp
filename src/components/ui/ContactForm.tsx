import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
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
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validación para el nombre (solo letras y espacios)
  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nameRegex.test(name.trim()) && name.trim().length >= 2;
  };

  // Validación para el email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validación para el mensaje (mínimo 10 caracteres)
  const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10;
  };

  // Validar formulario completo
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'El nombre solo puede contener letras y espacios';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    if (!formData.product) {
      newErrors.product = 'Debes seleccionar una categoría';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (!validateMessage(formData.message)) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validación en tiempo real para el nombre
    if (name === 'name') {
      // Filtrar números y caracteres especiales
      const filteredValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData({
        ...formData,
        [name]: filteredValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', product: '', message: '' });
        setErrors({});
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
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
          Gracias por tu interés. Te responderemos dentro de 24 horas.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Campo Nombre */}
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Nombre completo *
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.name 
                  ? 'border-red-400 focus:ring-red-400' 
                  : 'border-white/20 focus:ring-purple-400'
              }`}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-0 flex items-center space-x-1 text-red-400 text-xs"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Campo Email */}
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Correo electrónico *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm sm:text-base ${
                errors.email 
                  ? 'border-red-400 focus:ring-red-400' 
                  : 'border-white/20 focus:ring-purple-400'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-0 flex items-center space-x-1 text-red-400 text-xs"
              >
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Campo Categoría */}
      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
        <label htmlFor="product" className="block text-sm font-medium text-white">
          Interés en producto *
        </label>
        <div className="relative">
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm sm:text-base ${
              errors.product 
                ? 'border-red-400 focus:ring-red-400' 
                : 'border-white/20 focus:ring-purple-400'
            }`}
          >
            <option value="" className="text-gray-900 bg-white">Selecciona una categoría de producto</option>
            <option value="consumible" className="text-gray-900 bg-white">Consumible</option>
            <option value="accesorio" className="text-gray-900 bg-white">Accesorio</option>
            <option value="utensilio" className="text-gray-900 bg-white">Utensilio</option>
            <option value="otros" className="text-gray-900 bg-white">Otros</option>
          </select>
          {errors.product && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 left-0 flex items-center space-x-1 text-red-400 text-xs"
            >
              <AlertCircle className="w-3 h-3" />
              <span>{errors.product}</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Campo Mensaje */}
      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Mensaje *
          <span className="text-white/60 text-xs ml-2">
            ({formData.message.length}/10 mínimo)
          </span>
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none text-sm sm:text-base ${
              errors.message 
                ? 'border-red-400 focus:ring-red-400' 
                : 'border-white/20 focus:ring-purple-400'
            }`}
            placeholder="Cuéntanos sobre tu interés en nuestros productos... (mínimo 10 caracteres)"
          />
          {errors.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 left-0 flex items-center space-x-1 text-red-400 text-xs"
            >
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Botón de envío */}
      <div className="pt-4">
        <Button 
          type="submit" 
          size="lg" 
          className="w-full relative overflow-hidden"
          onClick={undefined}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Enviar mensaje</span>
            </>
          )}
        </Button>
      </div>

      {/* Nota informativa */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/60 text-xs text-center mt-4"
      >
        * Todos los campos son obligatorios
      </motion.p>
    </form>
  );
};

export default ContactForm;