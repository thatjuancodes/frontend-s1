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
        sm: { value: '0.25rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
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
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: {
            base: '{colors.bg.light}',
            _dark: '{colors.bg.dark}',
          },
        },
        fg: {
          value: {
            base: '{colors.text.light}',
            _dark: '{colors.text.dark}',
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
