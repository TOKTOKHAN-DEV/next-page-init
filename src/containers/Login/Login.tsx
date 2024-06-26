import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  Code,
  HStack,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'
import {
  Apple,
  AppleButton,
  AppleIconButton,
  Facebook,
  FacebookButton,
  FacebookIconButton,
  GOOGLE_AUTH_SCOPE,
  Google,
  GoogleButton,
  GoogleIconButton,
  Kakao,
  KakaoButton,
  KakaoIconButton,
  Naver,
  NaverButton,
  NaverIconButton,
  useOauthPopupListener,
} from '@toktokhan-dev/react-web'

import Admonition from '@/components/@Templates/Admonition'
import TemplateLayout from '@/components/@Templates/TemplateLayout'
import { ENV } from '@/configs/env'

const SOCIAL_CONFIGS = [
  {
    name: 'Kakao',
    Client: Kakao,
    Button: KakaoButton,
    IconButton: KakaoIconButton,
    clientId: ENV.KAKAO_CLIENT_ID,
  },
  {
    name: 'Naver',
    Client: Naver,
    Button: NaverButton,
    IconButton: NaverIconButton,
    clientId: ENV.NAVER_CLIENT_ID,
  },
  {
    name: 'Google',
    Client: Google,
    Button: GoogleButton,
    IconButton: GoogleIconButton,
    clientId: ENV.GOOGLE_CLIENT_ID,
  },
  {
    name: 'Facebook',
    Client: Facebook,
    Button: FacebookButton,
    IconButton: FacebookIconButton,
    clientId: ENV.FACEBOOK_CLIENT_ID,
  },
  {
    name: 'Apple',
    Client: Apple,
    Button: AppleButton,
    IconButton: AppleIconButton,
    clientId: ENV.APPLE_CLIENT_ID,
  },
] as const

function Login() {
  const router = useRouter()
  const { returnUrl } = router.query
  const { colorMode } = useColorMode()
  const { data } = useOauthPopupListener()

  useEffect(() => {
    if (data) {
      alert(`팝업 로그인 성공 ${JSON.stringify(data)}`)
    }
    // if(!data) return
    // mutateAsync({
    //   data: {
    //     code: data?.code || '',
    //     type: data?.socialType as 'kakao',
    //   },
    // }).then((res) =>
    //   tokenStorage?.set({
    //     access: res.access_token,
    //     refresh: res.refresh_token,
    //   }),
    // )
  }, [data])

  const handleLogin = <T extends { new (clientId: string): any }>(
    Client: T,
    clientId: string,
    method: 'loginToPopup' | 'loginToLink',
    extraParams: Record<string, any> = {},
  ) => {
    const client = new Client(clientId)
    const loginMethod = client[method]
    loginMethod({
      redirect_uri: `${window.origin}/social/callback`,
      return_url: returnUrl || '/login',
      ...extraParams,
    })
  }

  return (
    <TemplateLayout title={'Login'}>
      <Admonition title="로그인 페이지" type="info">
        <Box mb={'10px'} textStyle={'pre-body-03'}>
          로그인 한 유저 Block: <Code color="primary.500">withUnAuthGard</Code>
          <UnorderedList fontSize="14px" px="20px">
            <ListItem>로그인 페이지</ListItem>
            <ListItem>회원가입 페이지</ListItem>
          </UnorderedList>
        </Box>
        <Box textStyle={'pre-body-03'}>
          로그인 안 한 유저 Block: <Code color="primary.500">withAuthGard</Code>
          <UnorderedList fontSize="14px" px="20px">
            <ListItem>마이 페이지</ListItem>
            <ListItem>주문 페이지</ListItem>
          </UnorderedList>
        </Box>
      </Admonition>
      <HStack mt={'30px'} spacing={4} flexWrap={'wrap'}>
        {SOCIAL_CONFIGS.map(
          ({ name, Client, Button: SocialButton, clientId = '' }) => (
            <SocialButton
              key={name}
              colorMode={colorMode}
              onClick={() =>
                handleLogin(Client, clientId, 'loginToLink', {
                  scope:
                    name === 'Google' ?
                      [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile]
                    : undefined,
                })
              }
            />
          ),
        )}
      </HStack>
      <HStack mt={'20px'} flexWrap={'wrap'} spacing={4}>
        {SOCIAL_CONFIGS.map(
          ({ name, Client, IconButton: SocialIconButton, clientId = '' }) => (
            <SocialIconButton
              key={name}
              colorMode={colorMode}
              onClick={() =>
                handleLogin(Client, clientId, 'loginToPopup', {
                  scope:
                    name === 'Google' ?
                      [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile]
                    : undefined,
                })
              }
            />
          ),
        )}
      </HStack>
    </TemplateLayout>
  )
}

export default Login
