import React from 'react'

import { Text, VStack } from '@chakra-ui/react'

interface SectionProps {
  title: string
  children: React.ReactNode
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <VStack align={'start'} w={'100%'} gap={'8px'}>
      <Text textStyle={'pre-heading-02'}>{title}</Text>
      {children}
    </VStack>
  )
}

export default Section
