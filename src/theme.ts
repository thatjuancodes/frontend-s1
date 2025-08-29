import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react'

// Define heading recipe with proper sizes and font
const headingRecipe = defineRecipe({
  className: 'chakra-heading',
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    lineHeight: 'shorter',
  },
  variants: {
    size: {
      '4xl': { fontSize: '2.25rem' },
      '3xl': { fontSize: '1.875rem' },
      '2xl': { fontSize: '1.5rem' },
      xl: { fontSize: '1.25rem' },
      lg: { fontSize: '1.125rem' },
      md: { fontSize: '1rem' },
      sm: { fontSize: '0.875rem' },
      xs: { fontSize: '0.75rem' },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})

// Define button recipe with blue colors
const buttonRecipe = defineRecipe({
  className: 'chakra-button',
  base: {
    fontWeight: 'semibold',
    borderRadius: 'md',
    transition: 'all 0.2s',
    cursor: 'pointer',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'blue.500',
        color: 'white',
        _hover: {
          bg: 'blue.600',
        },
        _active: {
          bg: 'blue.700',
        },
      },
    },
    size: {
      sm: { px: 12, py: 4, fontSize: 'sm' },
      md: { px: 6, py: 5, fontSize: 'md' },
      lg: { px: 24, py: 6, fontSize: 'lg' },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

// Custom Chakra UI theme configuration
const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Montserrat, sans-serif' },
        body: { value: 'Roboto, sans-serif' },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        '2xl': { value: '1rem' },
        '3xl': { value: '1.5rem' },
        full: { value: '9999px' },
      },
      spacing: {
        0: { value: '0' },
        1: { value: '0.25rem' },
        2: { value: '0.5rem' },
        3: { value: '0.75rem' },
        4: { value: '1rem' },
        5: { value: '1.25rem' },
        6: { value: '1.5rem' },
        8: { value: '2rem' },
        10: { value: '2.5rem' },
        12: { value: '3rem' },
        16: { value: '4rem' },
        20: { value: '5rem' },
        24: { value: '6rem' },
        32: { value: '8rem' },
      },
      sizes: {
        xs: { value: '20rem' },
        sm: { value: '24rem' },
        md: { value: '28rem' },
        lg: { value: '32rem' },
        xl: { value: '36rem' },
        '2xl': { value: '42rem' },
        '3xl': { value: '48rem' },
        '4xl': { value: '56rem' },
        '5xl': { value: '64rem' },
        '6xl': { value: '72rem' },
        '7xl': { value: '80rem' },
        container: {
          sm: { value: '640px' },
          md: { value: '768px' },
          lg: { value: '1024px' },
          xl: { value: '1280px' },
        },
      },
      shadows: {
        sm: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
        md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
        lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
        xl: { value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' },
        inner: { value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' },
      },
      colors: {
        bg: {
          light: { value: '#f4f4f4' },
          dark: { value: '#2e2e2e' },
        },
        text: {
          light: { value: '#2e2e2e' },
          dark: { value: '#f4f4f4' },
        },
        // Primary colors (Blue)
        blue: {
          50: { value: '#ebf8ff' },
          100: { value: '#bee3f8' },
          200: { value: '#90cdf4' },
          300: { value: '#63b3ed' },
          400: { value: '#4299e1' },
          500: { value: '#3182ce' },
          600: { value: '#2b77cb' },
          700: { value: '#2c5aa0' },
          800: { value: '#2a4365' },
          900: { value: '#1a365d' },
        },
        // Success colors (Green)
        green: {
          50: { value: '#f0fff4' },
          100: { value: '#c6f6d5' },
          200: { value: '#9ae6b4' },
          300: { value: '#68d391' },
          400: { value: '#48bb78' },
          500: { value: '#38a169' },
          600: { value: '#2f855a' },
          700: { value: '#276749' },
          800: { value: '#22543d' },
          900: { value: '#1c4532' },
        },
        // Warning colors (Orange)
        orange: {
          50: { value: '#fffaf0' },
          100: { value: '#feebc8' },
          200: { value: '#fbd38d' },
          300: { value: '#f6ad55' },
          400: { value: '#ed8936' },
          500: { value: '#dd6b20' },
          600: { value: '#c05621' },
          700: { value: '#9c4221' },
          800: { value: '#7b341e' },
          900: { value: '#652b19' },
        },
        // Error colors (Red)
        red: {
          50: { value: '#fff5f5' },
          100: { value: '#fed7d7' },
          200: { value: '#feb2b2' },
          300: { value: '#fc8181' },
          400: { value: '#f56565' },
          500: { value: '#e53e3e' },
          600: { value: '#c53030' },
          700: { value: '#9b2c2c' },
          800: { value: '#822727' },
          900: { value: '#63171b' },
        },
        // Neutral colors (Gray)
        gray: {
          50: { value: '#f7fafc' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5e0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' },
        },
        // Purple accent
        purple: {
          50: { value: '#faf5ff' },
          100: { value: '#e9d8fd' },
          200: { value: '#d6bcfa' },
          300: { value: '#b794f6' },
          400: { value: '#9f7aea' },
          500: { value: '#805ad5' },
          600: { value: '#6b46c1' },
          700: { value: '#553c9a' },
          800: { value: '#44337a' },
          900: { value: '#322659' },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Background colors
        bg: {
          value: {
            base: '{colors.bg.light}',
            _dark: '{colors.bg.dark}',
          },
        },
        // Text colors
        fg: {
          value: {
            base: '{colors.text.light}',
            _dark: '{colors.text.dark}',
          },
        },
        // Interactive states
        primary: {
          value: {
            base: '{colors.blue.500}',
            _dark: '{colors.blue.400}',
          },
        },
        // Status colors
        success: {
          value: {
            base: '{colors.green.500}',
            _dark: '{colors.green.400}',
          },
        },
        warning: {
          value: {
            base: '{colors.orange.500}',
            _dark: '{colors.orange.400}',
          },
        },
        error: {
          value: {
            base: '{colors.red.500}',
            _dark: '{colors.red.400}',
          },
        },
        // Surface colors
        surface: {
          value: {
            base: '{colors.gray.50}',
            _dark: '{colors.gray.800}',
          },
        },
        border: {
          value: {
            base: '{colors.gray.200}',
            _dark: '{colors.gray.600}',
          },
        },
        muted: {
          value: {
            base: '{colors.gray.500}',
            _dark: '{colors.gray.400}',
          },
        },
      },
    },
    recipes: {
      heading: headingRecipe,
      button: buttonRecipe,
    },
    globalCss: {
      body: {
        fontFamily: 'body',
        bg: 'bg',
        color: 'fg',
      },
    },
  },
}

export const system = createSystem(customConfig)

export default system
