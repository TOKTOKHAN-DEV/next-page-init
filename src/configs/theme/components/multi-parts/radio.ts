import { radioAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

import textStyles from '../../foundations/text-styles'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

export const defineVariants = ({
  border,
  bg,
}: {
  border: string
  bg: string
}) => ({
  borderColor: border,
  background: bg,
  _hover: {
    borderColor: border,
    background: bg,
  },
})

const baseStyle = definePartsStyle(() => ({
  control: {
    ...defineVariants({
      border: 'content.6',
      bg: 'transparent',
    }),
    _checked: {
      ...defineVariants({
        border: 'primary.3',
        bg: 'primary.3',
      }),
    },
    _disabled: {
      ...defineVariants({
        border: 'content.7',
        bg: 'transparent',
      }),
      _checked: {
        color: 'content.8',
        ...defineVariants({
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
}))

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

const Radio = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})

export default Radio
