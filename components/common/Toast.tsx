
import React, { useEffect } from 'react';
import type { ToastInfo } from '../../types';

interface ToastProps {
  toast: ToastInfo | null;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) {
    return null;
  }

  const typeClasses = {
    success: 'bg-success',
    error: 'bg-error',
    info: 'bg-secondary',
  };

  const baseClasses = 'fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold flex items-center transition-all duration-300 transform';
  
  const animationClasses = toast ? 'animate-fade-in-down' : 'animate-fade-out-up';
  
  // A simple way to add keyframe animations via a style tag if not using a full CSS file.
  // This is a pragmatic choice given the constraints.
  const animationStyle = `
    @keyframes fade-in-down {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-down {
      animation: fade-in-down 0.5s ease-out forwards;
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <div className={`${baseClasses} ${typeClasses[toast.type]} ${animationClasses}`}>
        {toast.message}
        <button onClick={onClose} className="ml-4 text-xl font-bold opacity-80 hover:opacity-100">&times;</button>
      </div>
    </>
  );
};

export default Toast;
