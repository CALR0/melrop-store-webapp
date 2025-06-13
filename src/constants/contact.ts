import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from '../types';

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    content: 'melropstore@gmail.com',
    description: 'Envíanos un email cuando quieras'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+57 316 2497083',
    description: 'Lun-Vie de 9am a 8pm'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Manzana B5 Casa 23 Curinca - Santa Marta',
    description: 'Visita nuestra sede física'
  }
];