import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  disabled = false,
  variant = 'primary',
  icon: Icon,
  children
}: ButtonProps) {
  const baseStyles = "w-full font-bold py-3 px-6 rounded-lg transition duration-200 ease-in-out";
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </div>
    </button>
  );
}