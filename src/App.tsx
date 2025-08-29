import { useState } from 'react'
import theme from './theme'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const colorTheme = isDarkMode ? theme.colors.dark : theme.colors.light

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: colorTheme.background, 
      color: colorTheme.text,
      transition: theme.transitions.default
    }}>
      <div style={{ 
        ...theme.layout.container,
        textAlign: 'center'
      }}>
        <h1 style={{ ...theme.typography.h1 }}>
          Welcome to Your React App
        </h1>

        <p style={{ 
          ...theme.typography.body,
          ...theme.layout.content
        }}>
          This is a modern React application built with TypeScript, Vite, and Chakra UI.
          Follows best practices with functional components and proper error handling.
        </p>

        <button
          onClick={toggleColorMode}
          style={{
            ...theme.buttons.base,
            backgroundColor: colorTheme.button,
            color: colorTheme.buttonText,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colorTheme.buttonHover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colorTheme.button
          }}
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
