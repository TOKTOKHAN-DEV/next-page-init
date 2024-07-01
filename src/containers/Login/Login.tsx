import { useEffect } from 'react'

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

const kakao = new Kakao(ENV.GOOGLE_CLIENT_ID)
const naver = new Naver(ENV.NAVER_CLIENT_ID)
const google = new Google(ENV.GOOGLE_CLIENT_ID)
const facebook = new Facebook(ENV.FACEBOOK_CLIENT_ID)
const apple = new Apple(ENV.APPLE_CLIENT_ID)

function Login() {
  const router = useRouter()
  const { returnUrl } = router.query
  const { colorMode } = useColorMode()
  const { data } = useOauthPopupListener<{
    returnUrl: string
    type: string
  }>({
    onSuccess: (res) => {
      console.log(res)
      alert(`로그인 성공: ${JSON.stringify(res)}`)
    },
  })

  useEffect(() => {
    console.log({ data })
  }, [data])

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
        <KakaoButton
          colorMode={colorMode}
          onClick={() =>
            kakao.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'kakao',
              },
            })
          }
        />
        <NaverButton
          colorMode={colorMode}
          onClick={() =>
            naver.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'naver',
              },
            })
          }
        />
        <GoogleButton
          colorMode={colorMode}
          onClick={() =>
            google.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              scope: [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile],
              state: {
                returnUrl: returnUrl || '/login',
                type: 'google',
              },
            })
          }
        />
        <FacebookButton
          colorMode={colorMode}
          onClick={() =>
            facebook.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'facebook',
              },
            })
          }
        />
        <AppleButton
          colorMode={colorMode}
          onClick={() =>
            apple.loginToLink({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'apple',
              },
            })
          }
        />
      </HStack>
      <HStack mt={'20px'} flexWrap={'wrap'} spacing={4}>
        <KakaoIconButton
          colorMode={colorMode}
          onClick={() =>
            kakao.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'kakao',
              },
            })
          }
        />
        <NaverIconButton
          colorMode={colorMode}
          onClick={() =>
            naver.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'naver',
              },
            })
          }
        />
        <GoogleIconButton
          colorMode={colorMode}
          onClick={() =>
            google.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              scope: [GOOGLE_AUTH_SCOPE.email, GOOGLE_AUTH_SCOPE.profile],
              state: {
                returnUrl: returnUrl || '/login',
                type: 'google',
              },
            })
          }
        />
        <FacebookIconButton
          colorMode={colorMode}
          onClick={() =>
            facebook.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'facebook',
              },
            })
          }
        />
        <AppleIconButton
          colorMode={colorMode}
          onClick={() =>
            apple.loginToPopup({
              redirect_uri: `${window.origin}/social/callback`,
              state: {
                returnUrl: returnUrl || '/login',
                type: 'apple',
              },
            })
          }
        />
      </HStack>
    </TemplateLayout>
  )
}

export default Login
