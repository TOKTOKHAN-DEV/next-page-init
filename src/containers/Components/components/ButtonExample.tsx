import { Button, Flex } from '@chakra-ui/react'

const ButtonExample = () => {
  return (
    <Flex gap="12px">
      <Flex flexDir="column" gap="8px">
        <Button size="lg" variant="solid-primary">
          SOLID PRIMARY
        </Button>
        <Button size="lg" variant="outline-primary">
          OUTLINE PRIMARY
        </Button>
        <Button size="lg" variant="outline-secondary">
          OUTLINE SECONDARY
        </Button>
        <Button size="lg" variant="outline-assistive">
          OUTLINE ASSISTIVE
        </Button>
        <Button size="lg" variant="solid-primary" isDisabled>
          SOLID DISABLED
        </Button>
        <Button size="lg" variant="outline-primary" isDisabled>
          OUTLINE DISABLED
        </Button>
      </Flex>

      <Flex flexDir="column" gap="8px">
        <Button variant="solid-primary">SOLID PRIMARY</Button>
        <Button variant="outline-primary">OUTLINE PRIMARY</Button>
        <Button variant="outline-secondary">OUTLINE SECONDARY</Button>
        <Button variant="outline-assistive">OUTLINE ASSISTIVE</Button>
        <Button variant="solid-primary" isDisabled>
          SOLID DISABLED
        </Button>
        <Button variant="outline-primary" isDisabled>
          OUTLINE DISABLED
        </Button>
      </Flex>

      <Flex flexDir="column" gap="8px">
        <Button size="sm" variant="solid-primary">
          SOLID PRIMARY
        </Button>
        <Button size="sm" variant="outline-primary">
          OUTLINE PRIMARY
        </Button>
        <Button size="sm" variant="outline-secondary">
          OUTLINE SECONDARY
        </Button>
        <Button size="sm" variant="outline-assistive">
          OUTLINE ASSISTIVE
        </Button>
        <Button size="sm" variant="solid-primary" isDisabled>
          SOLID DISABLED
        </Button>
        <Button size="sm" variant="outline-primary" isDisabled>
          OUTLINE DISABLED
        </Button>
      </Flex>

      <Flex flexDir="column" gap="8px">
        <Button size="md" variant="primary-text">
          PRIMARY TEXT
        </Button>
        <Button size="md" variant="gray-text">
          GRAY TEXT
        </Button>
        <Button size="md" variant="gray-text" isDisabled>
          GRAY TEXT
        </Button>
      </Flex>

      <Flex flexDir="column" gap="8px">
        <Button size="sm" variant="primary-text">
          PRIMARY TEXT
        </Button>
        <Button size="sm" variant="gray-text">
          GRAY TEXT
        </Button>
        <Button size="sm" variant="gray-text" isDisabled>
          GRAY TEXT
        </Button>
      </Flex>
    </Flex>
  )
}

export default ButtonExample
