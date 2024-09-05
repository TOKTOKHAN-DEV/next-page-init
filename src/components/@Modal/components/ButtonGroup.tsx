import {
  ButtonGroupProps,
  ButtonGroup as ChakraButtonGroup,
} from '@chakra-ui/react'

const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <ChakraButtonGroup w="100%" {...props}>
      {children}
    </ChakraButtonGroup>
  )
}

export default ButtonGroup
