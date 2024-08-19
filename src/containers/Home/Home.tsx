import { Center, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'

function Home() {
  const theme = useTheme()
  console.log('theme', theme)
  return (
    <Center
      h={'100%'}
      color={'text.primary'}
      borderRadius={'8px'}
      flexDir={'column'}
      gap={'20px'}
    >
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
