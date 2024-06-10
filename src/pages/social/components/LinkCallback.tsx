import { useRouter } from 'next/router'

import { Button, Center } from '@chakra-ui/react'
import { useOauthLinkCallback } from '@toktokhan-fe/react-web'

import Splash from '@/components/Splash'

const LinkCallback = () => {
  const router = useRouter()
  const result = useOauthLinkCallback({
    onSuccess: (res) => {
      console.log('res', res)
      // mutate({ token: data?.token, socialType: data?.socialType })
    },
    onFail: () => {
      console.log('failed to login')
    },
  })

  if (result.isLoading) return <Splash />
  return (
    <Center flex={1} h={'100vh'}>
      <Button
        onClick={() => {
          router.push(result.data?.returnUrl || '/')
        }}
      >
        로그인 성공
      </Button>
    </Center>
  )
}

export default LinkCallback
