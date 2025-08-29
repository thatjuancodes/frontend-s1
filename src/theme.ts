// Theme configuration with comprehensive styling constants
export const colors = {
  light: {
    background: '#ffffff',
    text: '#1a202c',
    button: '#3182ce',
    buttonHover: '#4299e1',
    buttonText: '#ffffff',
    border: '#e2e8f0',
    hover: '#f7fafc',
  },
  dark: {
    background: '#1a202c',
    text: '#ffffff',
    button: '#805ad5',
    buttonHover: '#9f7aea',
    buttonText: '#ffffff',
    border: '#4a5568',
    hover: '#2d3748',
  },
}

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
}

export const typography = {
  h1: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  body: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
  },
}

export const layout = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
}

export const buttons = {
  base: {
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  sizes: {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  },
  variants: {
    solid: {
      backgroundColor: 'var(--button-bg)',
      color: 'var(--button-text)',
      '&:hover': {
        backgroundColor: 'var(--button-hover)',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--button-bg)',
      border: '1px solid var(--button-bg)',
      '&:hover': {
        backgroundColor: 'var(--hover-bg)',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--button-bg)',
      '&:hover': {
        backgroundColor: 'var(--hover-bg)',
      },
    },
  },
}

export const transitions = {
  default: 'all 0.3s ease',
  button: 'background-color 0.2s ease',
}

export default {
  colors,
  spacing,
  typography,
  layout,
  buttons,
  transitions,
}
