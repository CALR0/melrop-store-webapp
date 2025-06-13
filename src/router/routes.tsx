import { lazy } from 'react';

// Lazy loading de páginas
const HomePage = lazy(() => import('../pages/HomePage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  name: string;
  id: string;
}

export const ROUTES: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    name: 'Inicio',
    id: 'home'
  },
  {
    path: '/products',
    component: ProductsPage,
    name: 'Productos',
    id: 'products'
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'Contacto',
    id: 'contact'
  }
];

// Función helper para obtener información de ruta
export const getRouteInfo = (pathname: string) => {
  return ROUTES.find(route => route.path === pathname);
};

// Función helper para navegación
export const getNavigationItems = () => {
  return ROUTES.map(route => ({
    id: route.id,
    label: route.name,
    path: route.path
  }));
};