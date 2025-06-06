import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { SocialLink, QuickLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export const QUICK_LINKS: QuickLink[] = [
  { name: 'Acerca de', href: '#' },
  { name: 'Productos', href: '#products' },
  { name: 'Contacto', href: '#contact' },
  { name: 'Soporte', href: '#' }
];

export const CATEGORIES: QuickLink[] = [
  { name: 'Electrónicos', href: '#' },
  { name: 'Wearables', href: '#' },
  { name: 'Accesorios', href: '#' },
  { name: 'Fotografía', href: '#' },
  { name: 'Muebles', href: '#' }
];