import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Button component to render a customizable button.
 * 
 * @param {ButtonProps} props - The properties of the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
