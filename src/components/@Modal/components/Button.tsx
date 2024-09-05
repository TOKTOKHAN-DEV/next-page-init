import React from 'react'

import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton w={'100%'} size="md" {...props}>
      {children}
    </ChakraButton>
  )
}

export default Button
