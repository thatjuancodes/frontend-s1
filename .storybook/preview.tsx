import type { Preview } from '@storybook/react'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '../src/theme'
import '../src/styles.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <div style={{ padding: '1rem', minHeight: '100vh' }}>
          <Story />
        </div>
      </ChakraProvider>
    ),
  ],
}

export default preview