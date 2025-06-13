import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_CONFIG } from '../config';

// Mapeo de rutas a títulos
const PAGE_TITLES: Record<string, string> = {
  '/': 'Inicio',
  '/products': 'Productos',
  '/contact': 'Contacto'
};

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const pageTitle = PAGE_TITLES[currentPath] || 'Página';
    
    // Actualizar el título del documento
    document.title = `${APP_CONFIG.name} - ${pageTitle}`;
    
    // También actualizar la meta description si es necesario
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      let description = APP_CONFIG.description;
      
      switch (currentPath) {
        case '/products':
          description = 'Explora nuestro catálogo completo de productos de calidad en Melrop Store.';
          break;
        case '/contact':
          description = 'Contáctanos para más información sobre nuestros productos y servicios.';
          break;
        default:
          description = APP_CONFIG.description;
      }
      
      metaDescription.setAttribute('content', description);
    }
  }, [location.pathname]);

  return {
    currentPath: location.pathname,
    currentTitle: PAGE_TITLES[location.pathname] || 'Página'
  };
};