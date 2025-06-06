export interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  description: string;
}

export interface ContactInfo {
  icon: any;
  title: string;
  content: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
}

export interface QuickLink {
  name: string;
  href: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  product: string;
  message: string;
}