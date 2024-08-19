import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

function Home() {
  const {
    isOpen: isOpenAlertModal,
    onOpen: onOpenAlertModal,
    onClose: onCloseAlertModal,
  } = useDisclosure()
  return (
    <Center
      h={'100%'}
      color={'text.primary'}
      borderRadius={'8px'}
      flexDir={'column'}
      gap={'20px'}
    >
      <Flex gap="12px">
        <Flex flexDir="column" gap="8px">
          <Button size="lg" variant="solidPrimary">
            SOLID PRIMARY
          </Button>
          <Button size="lg" variant="outlinePrimary">
            OUTLINE PRIMARY
          </Button>
          <Button size="lg" variant="outlineSecondary">
            OUTLINE SECONDARY
          </Button>
          <Button size="lg" variant="outlineAssistive">
            OUTLINE ASSISTIVE
          </Button>
          <Button size="lg" variant="solidPrimary" isDisabled>
            SOLID DISABLED
          </Button>
          <Button size="lg" variant="outlinePrimary" isDisabled>
            OUTLINE DISABLED
          </Button>
        </Flex>

        <Flex flexDir="column" gap="8px">
          <Button variant="solidPrimary">SOLID PRIMARY</Button>
          <Button variant="outlinePrimary">OUTLINE PRIMARY</Button>
          <Button variant="outlineSecondary">OUTLINE SECONDARY</Button>
          <Button variant="outlineAssistive">OUTLINE ASSISTIVE</Button>
          <Button variant="solidPrimary" isDisabled>
            SOLID DISABLED
          </Button>
          <Button variant="outlinePrimary" isDisabled>
            OUTLINE DISABLED
          </Button>
        </Flex>

        <Flex flexDir="column" gap="8px">
          <Button size="sm" variant="solidPrimary">
            SOLID PRIMARY
          </Button>
          <Button size="sm" variant="outlinePrimary">
            OUTLINE PRIMARY
          </Button>
          <Button size="sm" variant="outlineSecondary">
            OUTLINE SECONDARY
          </Button>
          <Button size="sm" variant="outlineAssistive">
            OUTLINE ASSISTIVE
          </Button>
          <Button size="sm" variant="solidPrimary" isDisabled>
            SOLID DISABLED
          </Button>
          <Button size="sm" variant="outlinePrimary" isDisabled>
            OUTLINE DISABLED
          </Button>
        </Flex>
      </Flex>

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

      {/*  */}
      <Text
        color={'primary.3'}
        textStyle={'pre-heading-01'}
        textAlign={'center'}
      >
        TOKTOKHAN.DEV
      </Text>
      <Text color={'content.1'} textStyle={'pre-heading-02'}>
        Next page template
      </Text>
    </Center>
  )
}
export default Home
