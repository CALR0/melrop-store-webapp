// Utilidades de validación centralizadas
export class ValidationUtils {
  // Validación de nombre
  static validateName(name: string): { isValid: boolean; error?: string } {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      return { isValid: false, error: 'El nombre es requerido' };
    }
    
    if (trimmedName.length < 2) {
      return { isValid: false, error: 'El nombre debe tener al menos 2 caracteres' };
    }
    
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nameRegex.test(trimmedName)) {
      return { isValid: false, error: 'El nombre solo puede contener letras y espacios' };
    }
    
    return { isValid: true };
  }

  // Validación de email
  static validateEmail(email: string): { isValid: boolean; error?: string } {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      return { isValid: false, error: 'El email es requerido' };
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, error: 'Por favor ingresa un email válido' };
    }
    
    return { isValid: true };
  }

  // Validación de mensaje
  static validateMessage(message: string): { isValid: boolean; error?: string } {
    const trimmedMessage = message.trim();
    
    if (!trimmedMessage) {
      return { isValid: false, error: 'El mensaje es requerido' };
    }
    
    if (trimmedMessage.length < 10) {
      return { isValid: false, error: 'El mensaje debe tener al menos 10 caracteres' };
    }
    
    return { isValid: true };
  }

  // Validación de categoría de producto
  static validateProductCategory(category: string): { isValid: boolean; error?: string } {
    if (!category) {
      return { isValid: false, error: 'Debes seleccionar una categoría' };
    }
    
    const validCategories = ['consumible', 'accesorio', 'utensilio', 'otros'];
    if (!validCategories.includes(category.toLowerCase())) {
      return { isValid: false, error: 'Categoría no válida' };
    }
    
    return { isValid: true };
  }

  // Filtrar caracteres no válidos para nombres
  static filterNameInput(value: string): string {
    return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  }
}