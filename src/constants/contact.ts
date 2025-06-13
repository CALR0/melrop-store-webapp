import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '../types';
import { APP_CONFIG } from '../config';

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    content: APP_CONFIG.contact.email,
    description: 'Envíanos un email cuando quieras'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: APP_CONFIG.contact.phone,
    description: APP_CONFIG.business.hours
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    content: APP_CONFIG.contact.address,
    description: 'Visita nuestra sede física'
  }
];