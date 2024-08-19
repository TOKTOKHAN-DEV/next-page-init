import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  dialogContainer: {
    alignItems: 'center',
    px: '16px',
  },
})

const variants = {
  alert: definePartsStyle({
    dialog: {
      borderRadius: '12px',
      px: '24px',
      pt: '32px',
      pb: '24px',
      bg: `white`,
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      p: '0',
      mb: '8px',
      textStyle: 'pre-heading-04',
    },
    body: {
      display: 'flex',
      justifyContent: 'center',
      p: '0',
      mb: '24px',
      textStyle: 'pre-body-06',
      color: 'content.2',
    },
    footer: {
      justifyContent: 'center',
      p: '0',
      gap: '8px',
    },
  }),
  modal: definePartsStyle({
    dialog: {
      my: [0, 'auto'],
      borderBottomRadius: { base: '0px', sm: '16px' },
    },
    dialogContainer: {
      alignItems: ['flex-end', 'center'],
    },
  }),
}

export const Modal = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'modal',
  },
})

export default Modal
