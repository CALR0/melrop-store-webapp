import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import { FORM_CATEGORIES } from '../../constants/categories';
import { APP_CONFIG } from '../../config';
import { Button } from '../ui/layout';
import { FormField, FormSelect, FormTextarea } from '../ui/form';
import ContactFormSuccess from './ContactFormSuccess';
import ContactFormError from './ContactFormError';

const ContactForm: React.FC = () => {
  const {
    formData,
    isSubmitted,
    isSubmitting,
    submitError,
    errors,
    messageLength,
    isEmailConfigured,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  if (isSubmitted) {
    return <ContactFormSuccess email={formData.email} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {submitError && (
        <ContactFormError message={submitError} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="name"
          name="name"
          label="Nombre completo *"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          placeholder="Tu nombre completo"
          required
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label="Correo electrónico *"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          placeholder="tu@email.com"
          required
        />
      </div>

      <FormSelect
        id="product"
        name="product"
        label="Interés en producto *"
        value={formData.product}
        onChange={handleInputChange}
        error={errors.product}
        options={FORM_CATEGORIES}
        placeholder="Selecciona una categoría de producto"
        required
      />

      <FormTextarea
        id="message"
        name="message"
        label={`Mensaje * (${messageLength}/10 mínimo)`}
        value={formData.message}
        onChange={handleInputChange}
        error={errors.message}
        placeholder="Cuéntanos sobre tu interés en nuestros productos... (mínimo 10 caracteres)"
        rows={4}
        required
      />

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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/60 text-xs text-center mt-4"
      >
        * Todos los campos son obligatorios. El mensaje será enviado a {APP_CONFIG.contact.email}
      </motion.p>
    </form>
  );
};

export default ContactForm;