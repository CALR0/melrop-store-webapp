export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export interface FormValidationHook {
  errors: ValidationErrors;
  validateField: (name: string, value: string) => boolean;
  validateForm: (formData: any) => boolean;
  clearFieldError: (fieldName: string) => void;
  clearAllErrors: () => void;
}