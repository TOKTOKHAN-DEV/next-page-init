import { useRouter } from 'next/router'

import { Button, Center } from '@chakra-ui/react'
import { useOauthLinkCallback } from '@toktokhan-dev/react-web'

import Splash from '@/components/Splash'

const LinkCallback = () => {
  const router = useRouter()

  const result = useOauthLinkCallback<{ type: string; returnUrl: string }>({
    onSuccess: (res) => {
      console.log('res', res)
      // mutateAsync({
      //   data: {
      //     code: res.code,
      //     type: res.state.type,
      //   },
      // }).then((res) => {
      //   tokenStorage?.set({
      //     access_token: res.access_token,
      //     refresh_token: res.refresh_token,
      //   })
      // })
    },
    onFail: () => {
      console.log('failed to login')
      // router.push(res.returnUrl || '/')
    },
  })

  if (result.isLoading) return <Splash />
  return (
    <Center flex={1} h={'100vh'}>
      <Button
        onClick={() => {
          router.push(result.data?.state?.returnUrl || '/')
        }}
      >
        로그인 성공
      </Button>
    </Center>
  )
}

export default LinkCallback
