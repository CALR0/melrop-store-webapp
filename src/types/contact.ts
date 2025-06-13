export interface ContactInfo {
  icon: any;
  title: string;
  content: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  product: string;
  message: string;
}

export interface EmailData {
  name: string;
  email: string;
  product: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export type { ContactInfo as ContactInfoType };
export type { FormData as FormDataType };