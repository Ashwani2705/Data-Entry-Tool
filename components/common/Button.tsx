
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors duration-200";
  const activeClasses = "bg-primary hover:bg-primary-hover";
  const disabledClasses = "bg-secondary cursor-not-allowed opacity-50";

  const combinedClasses = `${baseClasses} ${props.disabled ? disabledClasses : activeClasses} ${className || ''}`;

  return (
    <button {...props} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
