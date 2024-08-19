import { defineStyle } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

export const sizes = {
  lg: defineStyle({
    px: '28px',
    py: '12px',
    ...textStyles['pre-body-01'],
  }),
  md: defineStyle({
    px: '20px',
    py: '9px',
    ...textStyles['pre-caption-01'],
  }),
  sm: defineStyle({
    px: '14px',
    py: '7px',
    ...textStyles['pre-caption-02'],
  }),
}
