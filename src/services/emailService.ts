import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
  templateId: 'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key
};

export interface EmailData {
  name: string;
  email: string;
  product: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Inicializar EmailJS con tu Public Key
    emailjs.init(EMAILJS_CONFIG.publicKey);

    // Preparar los datos del template
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      product_interest: data.product,
      message: data.message,
      to_email: 'hola@melropstore.com', // Tu email de destino
      reply_to: data.email
    };

    // Enviar el email
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

// Función para validar la configuración
export const validateEmailConfig = (): boolean => {
  return !!(
    EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
  );
};