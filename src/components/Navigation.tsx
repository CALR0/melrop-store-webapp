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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} to={item.path}>
                <motion.div
                  className={`relative px-4 py-2 rounded-full transition-colors ${
                    activeRoute === item.id
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeRoute === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-purple-100 rounded-full -z-10"
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
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm"
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
                        ? 'bg-purple-100 text-purple-600'
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