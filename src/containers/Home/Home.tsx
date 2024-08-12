import { Center, Text } from '@chakra-ui/react'

function Home() {
  return (
    <Center
      h={'100%'}
      color={'text.primary'}
      borderRadius={'8px'}
      flexDir={'column'}
    >
      <Text
        color={'text.brand'}
        textStyle={'pre-display-05'}
        textAlign={'center'}
      >
        TOKTOKHAN DEV
      </Text>
      <Text color={'text.primary'} textStyle={'pre-heading-02'}>
        Next page template
      </Text>
    </Center>
  )
}
export default Home
