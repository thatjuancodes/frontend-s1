export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  colorScheme?: 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'gray'
}

export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

