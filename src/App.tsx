import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const bgColor = isDarkMode ? '#1a202c' : '#ffffff'
  const textColor = isDarkMode ? '#ffffff' : '#1a202c'
  const buttonBg = isDarkMode ? '#805ad5' : '#3182ce'

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: bgColor, 
      color: textColor,
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          Welcome to Your React App
        </h1>

        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          This is a modern React application built with TypeScript, Vite, and Chakra UI.
          Follows best practices with functional components and proper error handling.
        </p>

        <button
          onClick={toggleColorMode}
          style={{
            backgroundColor: buttonBg,
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? '#9f7aea' : '#4299e1'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = buttonBg
          }}
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
