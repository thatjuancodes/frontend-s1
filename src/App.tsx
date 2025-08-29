import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ErrorTest from '@/components/ErrorTest'

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
      py={{ base: 4, md: 8 }}
      px={{ base: 4, md: 8 }}
      bg={isDarkMode ? '#2e2e2e' : '#f4f4f4'}
      color={isDarkMode ? '#f4f4f4' : '#2e2e2e'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container 
        maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }} 
        textAlign="center"
        py={8}
      >
        <Heading
          as="h1" 
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={{ base: 4, md: 6, lg: 8 }}
          fontWeight="600"
        >
          Frontend - S1
        </Heading>

        <Heading
          as="h2" 
          size={{ base: "lg", md: "xl", lg: "2xl" }}
          mb={{ base: 4, md: 6 }}
          fontWeight="600"
        >
          Vanilla React + TypeScript + Chakra UI v3
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          mb={{ base: 6, md: 8 }}
          maxW={{ base: "100%", md: "600px" }}
          mx="auto"
          lineHeight="tall"
          px={{ base: 0, md: 4 }}
        >
          This is a modern React application built with TypeScript, Vite, and Chakra UI.
          Follows best practices with functional components and proper error handling.
        </Text>

        <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={4} alignItems="center" justifyContent="center">
          <Button
            onClick={toggleColorMode}
            variant="solid"
            colorScheme="blue"
            size={{ base: "md", md: "lg" }}
          >
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </Button>
          
          {process.env.NODE_ENV === 'development' && <ErrorTest />}
        </Box>
      </Container>
    </Box>
  )
}

export default App
