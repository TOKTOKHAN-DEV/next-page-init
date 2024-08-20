import { checkboxAnatomy as parts } from '@chakra-ui/anatomy'
import { ChakraProps, createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

const defineStyle = ({
  border,
  bg,
}: {
  border: ChakraProps['color']
  bg: ChakraProps['color']
}) => ({
  borderColor: border,
  background: bg,
  _hover: {
    borderColor: border,
    background: bg,
  },
})

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  control: {
    borderRadius: '3px',
    ...defineStyle({
      border: 'content.6',
      bg: 'transparent',
    }),
    _indeterminate: {
      ...defineStyle({
        border: 'primary.3',
        bg: 'primary.3',
      }),
    },
    _checked: {
      ...defineStyle({
        border: 'primary.3',
        bg: 'primary.3',
      }),
    },
    _disabled: {
      color: 'content.7',
      ...defineStyle({
        border: 'content.7',
        bg: 'transparent',
      }),
      _checked: {
        color: 'content.8',
        ...defineStyle({
          border: 'primary.2',
          bg: 'primary.2',
        }),
      },
    },
  },
  label: {
    ml: '4px',
    color: 'text.tertiary',
    transition: 'all 0.2s ease-in-out',
    lineHeight: '24px',
    _hover: {
      color: 'text.tertiary',
    },
    _focus: {
      color: 'text.primary',
    },
    _checked: {
      color: 'text.primary',
      _hover: {
        color: 'text.primary',
      },
    },
  },
})

const sizes = {
  sm: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px', p: '2px' },
    label: { ...textStyles['pre-body-02'] },
  }),
  md: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px' }, // p 2px 안됨
    label: { ...textStyles['pre-body-02'] },
  }),
  lg: definePartsStyle({
    control: { w: '20px', h: '20px', m: '2px' },
    label: { ...textStyles['pre-body-01'] },
  }),
}

const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
export default Checkbox
