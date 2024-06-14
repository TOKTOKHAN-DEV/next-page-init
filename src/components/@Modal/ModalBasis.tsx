import { ReactNode } from 'react'

import {
  ChakraProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react'

interface ModalBasisProps extends Omit<ModalProps, 'children'> {
  header?: ReactNode
  body?: ReactNode
  footer?: ReactNode
  styles?: {
    header?: ChakraProps
    body?: ChakraProps
    footer?: ChakraProps
  }
}

export default function ModalBasis({
  header,
  body,
  footer,
  styles,
  ...props
}: ModalBasisProps) {
  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader {...styles?.header}>{header}</ModalHeader>
        <ModalBody {...styles?.body}>{body}</ModalBody>
        <ModalFooter {...styles?.footer}> {footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}
