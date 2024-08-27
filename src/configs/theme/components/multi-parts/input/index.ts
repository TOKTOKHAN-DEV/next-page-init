import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

import textStyles from '@/configs/theme/foundations/text-styles'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      padding: '12px',
      _placeholder: {
        color: 'content.5',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    unstyled: defineStyle({
      field: {},
    }),
    filled: defineStyle({
      field: {},
    }),
    flushed: defineStyle({
      field: {},
    }),
    outline: defineStyle({
      field: {
        /**  textStyle 토큰 적용 안됨 */
        ...textStyles['pre-body-04'],
        height: '48px',
        borderWidth: '1px',
        borderColor: 'border.basic.1',
        borderRadius: '10px',

        /** 컬러 토큰 적용안됨 */
        caretColor: '#3d6be5',
        // caretColor: 'primary.3',

        _focus: {
          borderWidth: '1px',
          boxShadow: 'none',
          borderColor: 'primary.3',
        },
        _invalid: {
          borderWidth: '1px',
          boxShadow: 'none',
          borderColor: 'accent.red.2',
          _disabled: {
            background: 'background.basic.2',
            borderColor: 'border.basic.1',
          },
        },
        _disabled: {
          background: 'background.basic.2',
          borderColor: 'border.basic.1',
        },
      },
    }),
  },
})

export default Input
