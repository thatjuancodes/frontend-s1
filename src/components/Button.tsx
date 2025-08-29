import type { ButtonProps } from '../types'
import theme from '../theme'

interface CustomButtonProps extends ButtonProps {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  className?: string
}

function Button({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'solid',
  size = 'md',
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: CustomButtonProps) {
  const handleClick = () => {
    if (loading || disabled) return
    onClick?.()
  }

  const getButtonStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '500',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: theme.transitions.button,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    }

    const sizeStyles = theme.buttons.sizes[size]
    const variantStyles = theme.buttons.variants[variant]

    return {
      ...baseStyles,
      ...sizeStyles,
      ...variantStyles,
    }
  }

  const buttonStyles = getButtonStyles()

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      style={buttonStyles}
      className={className}
      {...props}
    >
      {loading && (
        <span 
          style={{
            display: 'inline-block',
            width: '1rem',
            height: '1rem',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}
      {!loading && leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  )
}

export default Button
