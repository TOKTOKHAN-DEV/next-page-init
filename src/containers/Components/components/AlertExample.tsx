import React from 'react'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

const AlertExample = () => {
  const {
    isOpen: isOpenAlertModal,
    onOpen: onOpenAlertModal,
    onClose: onCloseAlertModal,
  } = useDisclosure()
  return (
    <>
      <Button onClick={onOpenAlertModal}>OPEN ALERT</Button>
      <Modal
        isOpen={isOpenAlertModal}
        onClose={onCloseAlertModal}
        variant="alert"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>HEADER</ModalHeader>
          <ModalBody>BODY</ModalBody>
          {/* P_TODO: direction에 따라 다르게 적용 */}
          <ModalFooter>
            <Button
              onClick={onCloseAlertModal}
              size="lg"
              variant="outlineSecondary"
              w="100%"
            >
              취소
            </Button>
            <Button onClick={onCloseAlertModal} size="lg" w="100%">
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AlertExample
