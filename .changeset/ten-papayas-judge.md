---
'@toktokhan-dev/next-page-init': patch
---

Google(ga), Kakao(kakaoSetter), Facebook(fbq) 분석도구 모듈를 추가하였습니다.
필요시 src/pages/\_document.tsx 파일에서 필요한 setter함수를 주석 해제 해주시고, 이에 따라 요구되는 메서드들은
src/utils/analytics/analytics.ts 에서 주석을 해제해주세요.

구글은 기본적으로 추적되는 이벤트가 있습니다. 디테일 한 이벤트 추가시 메서드를 추가해 사용해주시면 됩니다.

# 사용 경로

## src/pages/\_document.tsx

```ts
...
  render() {
    return (
      <Html>
        <Head>
          ...
          {/* 분석도구가 필요한 경우 주석 해제 후 사용해주세요. src/utils/analytics/analytics.ts 설정 필요 */}
          {/* {GASetter()}
          {KakaoSetter()}
          {FacebookSetter()} */}
        </Head>
        <body>
          ...
        </body>
      </Html>
    )
  }
...
```

## src/utils/analytics/analytics.ts

```ts
**
 * 필요하지 않은 분석 도구는 해당 파일에서 꼭 제거해주세요.
 * 단일 분석 도구만 사용할 경우, 해당 도구의 메서드를 직접 호출하여 사용합니다.
 *
 * @example
 * useEffect(() => {
 *  facebookAnalytics?.pageView({ content_name: 'page2', content_ids: [2] });
 * }, [])
 */

export const googleAnalytics = new GoogleAnalytics(ENV.GA_KEY)
export const facebookAnalytics = new FacebookAnalytics(ENV.FACEBOOK_PIXEL_KEY)
export const kakaoAnalytics = new KakaoAnalytics(ENV.KAKAO_PIXEL_KEY)

/** Google Analytics, Facebook Pixel, Kakao Pixel을 모두 사용하는 경우 아래의 함수를 공통으로 사용할 수 있습니다. */
export const completeRegistrationAnalytics = (
  params: Analytics.CompleteRegistration,
) => {
  googleAnalytics?.completeRegistration(params.Ga)
  facebookAnalytics?.completeRegistration(params.Fbq)
  kakaoAnalytics?.completeRegistration(params.Kakao)
}

/** 각 분석 도구의 설정 메서드를 호출하는 함수들입니다.  */
export const GASetter = () => googleAnalytics?.GASetter()
export const FacebookSetter = () => facebookAnalytics?.FacebookSetter()
export const KakaoSetter = () => kakaoAnalytics?.KakaoSetter()
```

# 사용 예제

```tsx
<>
  <Button onClick={() => googleAnalytics.completeRegistration()}>
    회원가입 완료
  </Button>

  <Button
    onClick={() =>
      facebookAnalytics.viewContent({
        content_name: 'Product Page',
        content_ids: [123],
        content_type: 'product',
        currency: 'USD',
        value: 200,
      })
    }
  >
    콘텐츠 조회
  </Button>
</>
```
