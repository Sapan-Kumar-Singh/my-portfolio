import React from 'react';
import './button.scss';

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  variant?: 'text' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  style,
  className = '',
  icon,
  iconPosition = 'left',
  ariaLabel,
  variant = 'text',
  size = 'medium',
  loading = false,
}) => {
  const getClassNames = () => {
    let classes = `btn ${variant} ${size}`;
    if (className) classes += ` ${className}`;
    if (loading) classes += ' loading';
    return classes;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center rounded-lg  font-normal cursor-pointer ${getClassNames()}`}
      
      style={style}
      aria-label={ariaLabel}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {label}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
};

export default Button;
