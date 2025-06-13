import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'service_mgip4ds',
  templateId: 'template_804rejd',
  publicKey: '-jy8o3uq9AkGNWjBh'
}

export interface EmailData {
  name: string;
  email: string;
  product: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      product_interest: data.product,
      message: data.message,
      to_email: 'cdrew4488@gmail.com',
      reply_to: data.email
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email enviado exitosamente:', response);
    return true;
  } catch (error) {
    console.error('Error al enviar email:', error);
    return false;
  }
};

export const validateEmailConfig = (): boolean => {
  return !!(
    EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
  );
};