import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import ErrorBoundary from '@/components/ErrorBoundary'

// Component that can trigger an error
const ErrorTrigger = ({ shouldError }: { shouldError: boolean }) => {
  if (shouldError) {
    throw new Error('This is a test error for the Error Boundary')
  }
  return <div>No error here! Click the button to trigger an error.</div>
}

// Wrapper component for Storybook
const ErrorBoundaryDemo = () => {
  const [hasError, setHasError] = useState(false)

  return (
    <ErrorBoundary>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <ErrorTrigger shouldError={hasError} />
        <Button
          onClick={() => setHasError(true)}
          colorScheme="red"
          variant="outline"
          mt={4}
          disabled={hasError}
        >
          Trigger Error
        </Button>
        {hasError && (
          <Button
            onClick={() => setHasError(false)}
            colorScheme="blue"
            variant="outline"
            ml={2}
            mt={4}
          >
            Reset
          </Button>
        )}
      </div>
    </ErrorBoundary>
  )
}

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A React Error Boundary component that catches JavaScript errors in the component tree and displays a fallback UI with error recovery options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'The child components to wrap with error boundary protection',
    },
    fallback: {
      control: false,
      description: 'Optional custom fallback component to render when an error occurs',
    },
    onError: {
      action: 'error-caught',
      description: 'Callback function called when an error is caught',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ErrorBoundaryDemo />,
}

export const WithCustomFallback: Story = {
  args: {
    fallback: (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        backgroundColor: '#fee',
        border: '1px solid #fcc',
        borderRadius: '8px',
        margin: '1rem'
      }}>
        <h2>Custom Error Fallback</h2>
        <p>Something went wrong with a custom fallback UI.</p>
      </div>
    ),
  },
  render: (args) => (
    <ErrorBoundary {...args}>
      <ErrorTrigger shouldError={true} />
    </ErrorBoundary>
  ),
}

export const NormalOperation: Story = {
  render: () => (
    <ErrorBoundary>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3>Everything is working fine!</h3>
        <p>This shows the Error Boundary in normal operation - no errors thrown.</p>
        <Button colorScheme="green">Normal Button</Button>
      </div>
    </ErrorBoundary>
  ),
}