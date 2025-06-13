import { Mail, Phone } from 'lucide-react';
import { SocialLink, QuickLink } from '../types';
import { APP_CONFIG } from '../config';

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    icon: Phone, 
    href: APP_CONFIG.social.whatsapp, 
    label: 'WhatsApp' 
  },
  { 
    icon: Mail, 
    href: APP_CONFIG.social.email, 
    label: 'Gmail' 
  }
];

export const QUICK_LINKS: QuickLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Productos', href: '/products' },
  { name: 'Contacto', href: '/contact' }
];