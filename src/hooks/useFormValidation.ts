import { useState, useCallback } from 'react';
import { ValidationUtils } from '../utils/validation';
import { FormData } from '../types';

interface ValidationErrors {
  [key: string]: string | undefined;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Validar un campo específico
  const validateField = useCallback((name: string, value: string): boolean => {
    let validation: { isValid: boolean; error?: string };

    switch (name) {
      case 'name':
        validation = ValidationUtils.validateName(value);
        break;
      case 'email':
        validation = ValidationUtils.validateEmail(value);
        break;
      case 'message':
        validation = ValidationUtils.validateMessage(value);
        break;
      case 'product':
        validation = ValidationUtils.validateProductCategory(value);
        break;
      default:
        validation = { isValid: true };
    }

    setErrors(prev => ({
      ...prev,
      [name]: validation.error
    }));

    return validation.isValid;
  }, []);

  // Validar todo el formulario
  const validateForm = useCallback((formData: FormData): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Validar nombre
    const nameValidation = ValidationUtils.validateName(formData.name);
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.error;
      isValid = false;
    }

    // Validar email
    const emailValidation = ValidationUtils.validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
      isValid = false;
    }

    // Validar producto
    const productValidation = ValidationUtils.validateProductCategory(formData.product);
    if (!productValidation.isValid) {
      newErrors.product = productValidation.error;
      isValid = false;
    }

    // Validar mensaje
    const messageValidation = ValidationUtils.validateMessage(formData.message);
    if (!messageValidation.isValid) {
      newErrors.message = messageValidation.error;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, []);

  // Limpiar error de un campo específico
  const clearFieldError = useCallback((fieldName: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: undefined
    }));
  }, []);

  // Limpiar todos los errores
  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateField,
    validateForm,
    clearFieldError,
    clearAllErrors
  };
};