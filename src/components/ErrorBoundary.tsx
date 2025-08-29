import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Box 
          minH="100vh" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          bg="bg"
          color="fg"
          p={8}
        >
          <Box textAlign="center" maxW="md" display="flex" flexDirection="column" gap={6}>
            <Heading 
              size="xl" 
              color="error"
            >
              Something went wrong
            </Heading>
            
            <Text 
              fontSize="md" 
              color="muted"
              lineHeight="tall"
            >
              An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
            </Text>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box 
                bg="surface" 
                p={4} 
                borderRadius="md" 
                borderWidth={1}
                borderColor="border"
                maxW="full"
                overflow="auto"
              >
                <Text fontSize="sm" fontFamily="mono" color="error">
                  {this.state.error.message}
                </Text>
              </Box>
            )}

            <Box display="flex" flexDirection="column" gap={3}>
              <Button 
                onClick={this.handleReset}
                size="md"
                colorScheme="blue"
              >
                Try Again
              </Button>
              
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                size="md"
                colorScheme="blue"
              >
                Refresh Page
              </Button>
            </Box>
          </Box>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary