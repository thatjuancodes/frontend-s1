import { Button as ChakraButton, Spinner } from '@chakra-ui/react'
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
  return (
    <ChakraButton
      onClick={onClick}
      disabled={disabled || loading}
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {loading && <Spinner size="sm" />}
      {!loading && leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </ChakraButton>
  )
}

export default Button
