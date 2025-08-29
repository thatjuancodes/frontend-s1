import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for system preference on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Box 
      minH="100vh" 
      py={8} 
      bg={isDarkMode ? '#2e2e2e' : '#f4f4f4'}
      color={isDarkMode ? '#f4f4f4' : '#2e2e2e'}
    >
      <Container maxW="container.lg" textAlign="center">
        <Heading
          as="h1" 
          size="4xl"
          my={8}
          fontWeight="600"
        >
          Frontend - S1
        </Heading>

        <Heading
          as="h2" 
          size="2xl"
          mb={6}
          fontWeight="600"
        >
          Vanilla React + TypeScript + Chakra UI v3
        </Heading>

        <Text
          fontSize="lg" 
          mb={8}
          maxW="600px"
          mx="auto"
          lineHeight="tall"
        >
          This is a modern React application built with TypeScript, Vite, and Chakra UI.
          Follows best practices with functional components and proper error handling.
        </Text>

        <Button
          onClick={toggleColorMode}
          colorScheme="blue"
          size="lg"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </Container>
    </Box>
  )
}

export default App
