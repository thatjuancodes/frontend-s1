import type { ButtonProps } from '../types'

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

  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors duration-200'
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }
  const variantClasses = {
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
    ghost: 'text-blue-500 hover:bg-blue-50',
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {loading && <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

export default Button
