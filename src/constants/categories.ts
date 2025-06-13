import { Grid, Package, ShoppingCart } from 'lucide-react';

export interface CategoryInfo {
  id: string;
  name: string;
  icon: any;
  description?: string;
}

export const PRODUCT_CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'Todos los productos',
    icon: Grid,
    description: 'Ver todos los productos disponibles'
  },
  {
    id: 'Consumible',
    name: 'Consumibles',
    icon: Package,
    description: 'Productos para consumo directo'
  },
  {
    id: 'Accesorio',
    name: 'Accesorios',
    icon: ShoppingCart,
    description: 'Complementos y accesorios'
  },
  {
    id: 'Utensilio',
    name: 'Utensilios',
    icon: Grid,
    description: 'Herramientas y utensilios'
  },
  {
    id: 'Otros',
    name: 'Otros',
    icon: Package,
    description: 'Otros productos y servicios'
  }
];

// Mapeo de categorías para formularios
export const FORM_CATEGORIES = [
  { value: 'consumible', label: 'Consumible' },
  { value: 'accesorio', label: 'Accesorio' },
  { value: 'utensilio', label: 'Utensilio' },
  { value: 'otros', label: 'Otros' }
];