import { Center, Text } from '@chakra-ui/react'

function Home() {
  return (
    <Center
      h={'100%'}
      color={'text.primary'}
      borderRadius={'8px'}
      flexDir={'column'}
      gap={'20px'}
    >
      <Text
        color={'text.brand'}
        textStyle={'pre-heading-01'}
        textAlign={'center'}
      >
        TOKTOKHAN.DEV
      </Text>
      <Text color={'text.primary'} textStyle={'pre-heading-02'}>
        Next Page Template
      </Text>
    </Center>
  )
}
export default Home
