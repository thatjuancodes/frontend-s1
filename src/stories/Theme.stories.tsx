import type { Meta, StoryObj } from '@storybook/react'
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react'

const ThemeShowcase = () => {
  return (
    <Container maxW="container.lg" py={8}>
      {/* Typography */}
      <Box mb={8}>
        <Heading as="h1" size="4xl" mb={4}>Typography Scale</Heading>
        <Heading as="h1" size="4xl" mb={2}>4XL Heading</Heading>
        <Heading as="h2" size="3xl" mb={2}>3XL Heading</Heading>
        <Heading as="h3" size="2xl" mb={2}>2XL Heading</Heading>
        <Heading as="h4" size="xl" mb={2}>XL Heading</Heading>
        <Heading as="h5" size="lg" mb={2}>Large Heading</Heading>
        <Heading as="h6" size="md" mb={4}>Medium Heading</Heading>
        <Text fontSize="lg" mb={2}>Large body text</Text>
        <Text fontSize="md" mb={2}>Regular body text</Text>
        <Text fontSize="sm">Small body text</Text>
      </Box>

      {/* Colors */}
      <Box mb={8}>
        <Heading as="h2" size="2xl" mb={4}>Color Palette</Heading>
        
        {/* Blue */}
        <Box mb={4}>
          <Text fontWeight="semibold" mb={2}>Blue (Primary)</Text>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <Box
                key={shade}
                bg={`blue.${shade}`}
                w="60px"
                h="60px"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={shade >= 500 ? 'white' : 'black'}
                fontSize="xs"
                fontWeight="bold"
              >
                {shade}
              </Box>
            ))}
          </div>
        </Box>

        {/* Green */}
        <Box mb={4}>
          <Text fontWeight="semibold" mb={2}>Green (Success)</Text>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <Box
                key={shade}
                bg={`green.${shade}`}
                w="60px"
                h="60px"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={shade >= 500 ? 'white' : 'black'}
                fontSize="xs"
                fontWeight="bold"
              >
                {shade}
              </Box>
            ))}
          </div>
        </Box>

        {/* Red */}
        <Box mb={4}>
          <Text fontWeight="semibold" mb={2}>Red (Error)</Text>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
              <Box
                key={shade}
                bg={`red.${shade}`}
                w="60px"
                h="60px"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={shade >= 500 ? 'white' : 'black'}
                fontSize="xs"
                fontWeight="bold"
              >
                {shade}
              </Box>
            ))}
          </div>
        </Box>
      </Box>

      {/* Button Variants */}
      <Box mb={8}>
        <Heading as="h2" size="2xl" mb={4}>Button System</Heading>
        
        <Box mb={6}>
          <Text fontWeight="semibold" mb={2}>Variants</Text>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="solid" colorScheme="blue">Solid</Button>
            <Button variant="outline" colorScheme="blue">Outline</Button>
            <Button variant="ghost" colorScheme="blue">Ghost</Button>
          </div>
        </Box>

        <Box mb={6}>
          <Text fontWeight="semibold" mb={2}>Sizes</Text>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Box>

        <Box mb={6}>
          <Text fontWeight="semibold" mb={2}>Color Schemes</Text>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Button colorScheme="blue">Blue</Button>
            <Button colorScheme="green">Green</Button>
            <Button colorScheme="red">Red</Button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button colorScheme="orange">Orange</Button>
            <Button colorScheme="purple">Purple</Button>
            <Button colorScheme="gray">Gray</Button>
          </div>
        </Box>
      </Box>

      {/* Semantic Tokens */}
      <Box mb={8}>
        <Heading as="h2" size="2xl" mb={4}>Semantic Tokens</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <Box bg="bg" p={4} borderRadius="md" border="1px solid" borderColor="border">
            <Text fontWeight="semibold" color="fg">Background (bg)</Text>
            <Text color="muted" fontSize="sm">Adapts to light/dark mode</Text>
          </Box>
          <Box bg="surface" p={4} borderRadius="md" border="1px solid" borderColor="border">
            <Text fontWeight="semibold" color="fg">Surface</Text>
            <Text color="muted" fontSize="sm">Card/elevated surfaces</Text>
          </Box>
          <Box bg="primary" p={4} borderRadius="md" color="white">
            <Text fontWeight="semibold">Primary</Text>
            <Text fontSize="sm" opacity={0.9}>Brand color</Text>
          </Box>
          <Box bg="success" p={4} borderRadius="md" color="white">
            <Text fontWeight="semibold">Success</Text>
            <Text fontSize="sm" opacity={0.9}>Success states</Text>
          </Box>
        </div>
      </Box>

      {/* Spacing Scale */}
      <Box>
        <Heading as="h2" size="2xl" mb={4}>Spacing Scale</Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32].map(space => (
            <div key={space} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Text minW="60px" fontSize="sm" fontFamily="mono">{space}</Text>
              <Box bg="blue.500" h={`${space * 0.25}rem`} w="100px" />
              <Text fontSize="sm" color="muted">{space * 0.25}rem</Text>
            </div>
          ))}
        </div>
      </Box>
    </Container>
  )
}

const meta: Meta = {
  title: 'Design System/Theme',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete theme showcase including typography, colors, spacing, and component variants.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => <ThemeShowcase />,
}