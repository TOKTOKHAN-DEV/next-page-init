import { ChakraProps, defineStyle } from '@chakra-ui/react'

type DefineVariantProps = {
  bgColor: ChakraProps['color']
  hoverColor: ChakraProps['color']
  color: ChakraProps['color']
  disabledOpacity: string
  borderColor?: ChakraProps['color']
}
const defineVariant = ({
  bgColor,
  hoverColor,
  color,
  disabledOpacity,
  borderColor,
}: DefineVariantProps) => {
  return defineStyle(() => {
    return {
      bg: bgColor,
      color: color,
      border: '1px solid',
      outline: 'none',
      borderColor: borderColor || 'transparent',
      transition: 'all 0.2s ease-in-out',
      _hover: {
        bg: hoverColor,
        _disabled: {
          willChange: 'opacity',
          bg: bgColor,
          borderColor: borderColor || 'transparent',
          opacity: disabledOpacity,
        },
      },
      _active: { bg: hoverColor },
      _disabled: {
        willChange: 'opacity',
        bg: bgColor,
        borderColor: borderColor || 'transparent',
        opacity: disabledOpacity,
      },
      _focus: { boxShadow: 'none', outline: 'none' },
      _focusVisible: {
        ringColor: 'transparent',
      },
    }
  })
}

const primary = defineVariant({
  bgColor: 'button.primary',
  hoverColor: 'button.primary.hover',
  color: 'text.primary.inverse',
  disabledOpacity: '0.3',
  borderColor: 'transparent',
})

const point = defineStyle({
  border: '1px solid',
  borderColor: 'gray.500',
  background: 'white',
  color: 'primary.500',
})

const line = defineStyle({
  background: 'white',
  color: 'gray.700',
})

const unstyled = defineStyle({
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: '0',
  p: '0',
})
export const variants = {
  primary,
  point,
  line,
  unstyled,
}
