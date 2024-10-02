import { Button, Center, Text } from '@chakra-ui/react'

import { googleAnalytics, kakaoAnalytics } from '@/utils/analytics/analytics'

function Home() {
  return (
    <Center h={'100%'} borderRadius={'8px'} flexDir={'column'} gap={'20px'}>
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
      <Button onClick={() => googleAnalytics.login()}>로그인</Button>
      <Button
        onClick={() =>
          kakaoAnalytics.completeRegistration({
            tag: '@@@@회웡',
          })
        }
      >
        가입완료 kako
      </Button>

      <Button
        onClick={() =>
          googleAnalytics.completeRegistration({
            id: 11,
            name: '@@hi',
          })
        }
      >
        가입완료 ga
      </Button>
      <Button
        onClick={() =>
          googleAnalytics.viewContent({ id: 22, name: '이거 봤음용' })
        }
      >
        Button
      </Button>
      <Button colorScheme={'primary'}>Button</Button>
    </Center>
  )
}
export default Home
