import React from 'react';
import './button.scss';



const Button: React.FC<CustomButton> = ({
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
    <div className='m-2'>
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
    </div>
  );
};

export default Button;
