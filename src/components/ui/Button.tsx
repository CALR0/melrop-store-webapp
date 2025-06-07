import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl border border-purple-500/20 hover:from-purple-700 hover:to-pink-700',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: variant === 'primary' 
          ? "0 20px 25px -5px rgba(147, 51, 234, 0.3), 0 10px 10px -5px rgba(147, 51, 234, 0.1)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;