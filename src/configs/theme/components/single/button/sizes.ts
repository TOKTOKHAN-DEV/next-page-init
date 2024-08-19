import { defineStyle } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

export const sizes = {
  lg: defineStyle({
    px: '28px',
    py: '12px',
    borderRadius: '10px',
    ...textStyles['pre-heading-05'],
  }),
  md: defineStyle({
    px: '20px',
    py: '9px',
    borderRadius: '8px',
    ...textStyles['pre-heading-05'],
  }),
  sm: defineStyle({
    px: '14px',
    py: '7px',
    borderRadius: '6px',
    ...textStyles['pre-body-05'],
  }),
}
