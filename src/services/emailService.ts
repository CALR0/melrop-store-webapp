import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config';

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

class EmailService {
  private isInitialized = false;

  // Inicializar EmailJS
  private initialize(): void {
    if (!this.isInitialized) {
      emailjs.init(EMAIL_CONFIG.publicKey);
      this.isInitialized = true;
    }
  }

  // Validar configuración de EmailJS
  validateConfig(): boolean {
    return !!(
      EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
      EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
      EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
    );
  }

  // Preparar parámetros del template
  private prepareTemplateParams(data: EmailData) {
    return {
      from_name: data.name,
      from_email: data.email,
      product_interest: data.product,
      message: data.message,
      to_email: EMAIL_CONFIG.recipientEmail,
      reply_to: data.email
    };
  }

  // Enviar email
  async sendEmail(data: EmailData): Promise<EmailResponse> {
    try {
      // Verificar configuración
      if (!this.validateConfig()) {
        return {
          success: false,
          error: 'El servicio de email no está configurado correctamente'
        };
      }

      // Inicializar si es necesario
      this.initialize();

      // Preparar parámetros
      const templateParams = this.prepareTemplateParams(data);

      // Enviar email
      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams
      );

      console.log('Email enviado exitosamente:', response);
      
      return { success: true };
    } catch (error) {
      console.error('Error al enviar email:', error);
      
      // Manejar diferentes tipos de errores
      let errorMessage = 'Error desconocido al enviar el mensaje';
      
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          errorMessage = 'Error de conexión. Verifica tu internet e intenta nuevamente';
        } else if (error.message.includes('rate limit')) {
          errorMessage = 'Demasiados intentos. Espera unos minutos antes de intentar nuevamente';
        } else {
          errorMessage = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente';
        }
      }

      return {
        success: false,
        error: errorMessage
      };
    }
  }
}

// Exportar instancia singleton
export const emailService = new EmailService();

// Mantener compatibilidad con la función anterior
export const sendEmail = (data: EmailData): Promise<boolean> => {
  return emailService.sendEmail(data).then(response => response.success);
};

export const validateEmailConfig = (): boolean => {
  return emailService.validateConfig();
};