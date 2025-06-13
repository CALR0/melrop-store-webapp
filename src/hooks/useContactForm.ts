import { useState, useCallback, useMemo } from 'react';
import { FormData } from '../types';
import { emailService } from '../services/emailService';
import { useFormValidation } from './useFormValidation';
import { ValidationUtils } from '../utils/validation';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    product: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  const { errors, validateForm, clearFieldError } = useFormValidation();

  // Verificar si EmailJS está configurado
  const isEmailConfigured = useMemo(() => emailService.validateConfig(), []);

  // Contador de caracteres del mensaje
  const messageLength = useMemo(() => formData.message.length, [formData.message]);

  // Manejar cambios en los inputs
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    
    // Filtrar solo para el campo nombre
    if (name === 'name') {
      processedValue = ValidationUtils.filterNameInput(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    // Limpiar error del campo
    clearFieldError(name);

    // Limpiar error de envío
    if (submitError) {
      setSubmitError('');
    }
  }, [clearFieldError, submitError]);

  // Manejar envío del formulario
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      return;
    }

    // Verificar configuración de EmailJS
    if (!isEmailConfigured) {
      setSubmitError('El servicio de email no está configurado. Por favor contacta al administrador.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await emailService.sendEmail(formData);

      if (response.success) {
        setIsSubmitted(true);
        // Resetear formulario después de 3 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', product: '', message: '' });
        }, 3000);
      } else {
        setSubmitError(response.error || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error en el envío:', error);
      setSubmitError('Error inesperado. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, isEmailConfigured, formData]);

  return {
    formData,
    isSubmitted,
    isSubmitting,
    submitError,
    errors,
    messageLength,
    isEmailConfigured,
    handleInputChange,
    handleSubmit
  };
};