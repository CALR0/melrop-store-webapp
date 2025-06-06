import { Mail, Phone } from 'lucide-react';
import { SocialLink, QuickLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Phone, href: 'https://wa.me/573001234567', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:hola@melropstore.com', label: 'Gmail' }
];

export const QUICK_LINKS: QuickLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Productos', href: '/products' },
  { name: 'Contacto', href: '/contact' }
];