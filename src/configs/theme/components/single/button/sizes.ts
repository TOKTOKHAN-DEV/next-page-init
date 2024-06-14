import { defineStyle } from '@chakra-ui/react'

import { textStyles } from '@/generated/tokens/text-styles'

export const sizes = {
  lg: defineStyle({
    w: '360px',
    h: '50px',
    ...textStyles['pre-body-01'],
  }),
  md: defineStyle({
    h: '36px',
    px: '15px',
    ...textStyles['pre-caption-01'],
  }),
  sm: defineStyle({
    h: '24px',
    px: '10px',
    ...textStyles['pre-caption-02'],
  }),
}
