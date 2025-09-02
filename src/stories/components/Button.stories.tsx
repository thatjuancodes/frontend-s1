import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component built on top of Chakra UI with loading states and various styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the button',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'orange', 'purple', 'gray'],
      description: 'The color scheme of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Variants: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const States: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args}>Normal</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} loading>Loading</Button>
    </div>
  ),
}

export const ColorSchemes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} colorScheme="blue">Blue</Button>
      <Button {...args} colorScheme="green">Green</Button>
      <Button {...args} colorScheme="red">Red</Button>
      <Button {...args} colorScheme="orange">Orange</Button>
      <Button {...args} colorScheme="purple">Purple</Button>
      <Button {...args} colorScheme="gray">Gray</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  args: {
    children: 'Button with Icons',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} leftIcon={<span>👈</span>}>Left Icon</Button>
      <Button {...args} rightIcon={<span>👉</span>}>Right Icon</Button>
      <Button {...args} leftIcon={<span>👈</span>} rightIcon={<span>👉</span>}>Both Icons</Button>
    </div>
  ),
}