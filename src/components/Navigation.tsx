import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants/navigation';
import { useScrolled } from '../hooks/useScrolled';
import Logo from './ui/Logo';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const location = useLocation();

  const getActiveRoute = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/products') return 'products';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activeRoute = getActiveRoute();

  // Determinar si estamos en una página con fondo oscuro
  const isDarkBackground = location.pathname === '/' || location.pathname === '/contact';
  
  // Determinar el estilo del header - SIEMPRE transparente
  const getHeaderStyle = () => {
    if (isDarkBackground) {
      return 'bg-white/10 backdrop-blur-md border-b border-white/20';
    } else {
      // Para páginas con fondo claro (productos)
      return scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200';
    }
  };

  // Determinar el color del texto basado en el estado
  const getTextColor = (isActive: boolean = false) => {
    if (isDarkBackground) {
      // En páginas oscuras, siempre texto blanco
      return isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white';
    } else {
      // En páginas claras, texto oscuro
      return isActive ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600';
    }
  };

  // Estilo del indicador activo
  const getActiveIndicatorStyle = () => {
    if (isDarkBackground) {
      return 'bg-white/20';
    } else {
      return 'bg-purple-100';
    }
  };

  // Color del botón móvil
  const getMobileButtonStyle = () => {
    if (isDarkBackground) {
      return 'bg-white/10 text-white backdrop-blur-sm border border-white/20';
    } else {
      return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Siempre visible */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} to={item.path}>
                <motion.div
                  className={`relative px-4 py-2 rounded-full transition-colors ${getTextColor(activeRoute === item.id)}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeRoute === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-full -z-10 ${getActiveIndicatorStyle()}`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${getMobileButtonStyle()}`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.id} to={item.path}>
                  <motion.div
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeRoute === item.id
                        ? 'bg-purple-100 text-purple-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;