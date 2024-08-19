import { Button, Flex } from '@chakra-ui/react'

const ButtonExample = () => {
  return (
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
  )
}

export default ButtonExample
