import { Center, Text } from '@chakra-ui/react'

function Home() {
  return (
    <Center
      h={'100%'}
      color={'text.primary'}
      borderRadius={'8px'}
      flexDir={'column'}
    >
      <Text color="brand.400" textStyle={['pre-heading-01', 'pre-display-05']}>
        TOKTOKHAN DEV
      </Text>
      <Text textStyle={['pre-heading-05', 'pre-heading-03']}>
        Next page template
      </Text>
    </Center>
  )
}
export default Home
