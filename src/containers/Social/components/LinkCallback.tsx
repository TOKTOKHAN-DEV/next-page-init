import { useRouter } from 'next/router'

import { Button, Center } from '@chakra-ui/react'
import { useOauthLinkCallback } from '@toktokhan-dev/react-web'

import Splash from '@/components/Splash'

import { OauthCallback } from '../types/oauth'

const LinkCallback = () => {
  const router = useRouter()

  const result = useOauthLinkCallback<OauthCallback>({
    onSuccess: (res) => {
      console.log('succeed to login', res)
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
    onFail: (res) => {
      console.log('failed to login', res)
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
