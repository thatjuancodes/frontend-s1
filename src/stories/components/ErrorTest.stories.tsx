import type { Meta, StoryObj } from '@storybook/react'
import ErrorTest from '@/components/ErrorTest'
import ErrorBoundary from '@/components/ErrorBoundary'

const meta: Meta<typeof ErrorTest> = {
  title: 'Components/ErrorTest',
  component: ErrorTest,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A development-only component for testing Error Boundary functionality. Throws an error when clicked.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ErrorBoundary>
        <Story />
      </ErrorBoundary>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithWarning: Story = {
  render: () => (
    <div style={{ textAlign: 'center' }}>
      <p style={{ marginBottom: '1rem', color: '#d69e2e', fontWeight: 'semibold' }}>
        ⚠️ Warning: Clicking this button will trigger an error!
      </p>
      <ErrorTest />
    </div>
  ),
}