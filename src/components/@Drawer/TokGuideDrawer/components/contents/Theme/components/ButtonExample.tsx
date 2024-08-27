import { Button, Flex, Text, VStack } from '@chakra-ui/react'

const BUTTON_SIZES = ['lg', 'md', 'sm']

const BUTTON_VARIANTS = [
  'solid-primary',
  'outline-primary',
  'outline-secondary',
  'outline-tertiary',
  'text-primary',
  'text-secondary',
]

const ButtonExample = ({ isDisable = false }: { isDisable: boolean }) => {
  return (
    <Flex gridColumnGap="12px" w={'100%'}>
      {BUTTON_SIZES.map((size, index) => (
        <VStack key={index} spacing="8px" w={'100%'}>
          <Text textStyle={'pre-caption-02'}>size {size}</Text>
          <VStack spacing="8px" flex={1} justifyContent="space-between">
            {BUTTON_VARIANTS.map((variant, index) => (
              <Button
                isDisabled={isDisable}
                size={size}
                variant={variant}
                key={index}
                w={'100%'}
              >
                {variant.toUpperCase()}
              </Button>
            ))}
          </VStack>
        </VStack>
      ))}
    </Flex>
  )
}

export default ButtonExample
