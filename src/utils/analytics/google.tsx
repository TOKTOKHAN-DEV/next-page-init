import { Analytics } from './types'

export class GoogleAnalytics {
  private ga: Gtag.Gtag = () => {}

  constructor(private key?: string) {
    if (!key) {
      console.warn('GA 키 설정이 필요합니다.')
      return
    }
    this.key = key

    this.ga = new Proxy(
      typeof window !== 'undefined' ? window.gtag : () => {},
      {
        get: (target, propKey) => {
          console.log('target:', target)

          console.log('propKey:', propKey)
          if (
            typeof window !== 'undefined' &&
            typeof window.gtag === 'function'
          ) {
            return window.gtag
          } else {
            console.warn('Google Analytics is not initialized.')
            return () => {} // No-op function if gtag is not initialized
          }
        },
      },
    )
  }

  /**
   * 회원가입 완료 이벤트를 추적합니다.
   *
   * @param id - 사용자 고유 ID
   * @param name - 사용자 이름
   *
   * @example
   * <Button onClick={() => googleAnalytics.completeRegistration(22, 'user1')}>회원가입 완료</Button>
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Ga']) => {
    console.log('this.ga', this.ga)

    this.ga('event', 'sign_up', params)
  }

  /**
   * 콘텐츠 조회 이벤트를 추적합니다.
   *
   * @param id - 콘텐츠 고유 ID
   * @param name - 콘텐츠 이름
   *
   * @example
   * <Button onClick={() => googleAnalytics.viewContent(1234, '상품1')}>콘텐츠 보기</Button>
   */
  viewContent = (params: Analytics.ViewContent['Ga']) => {
    this.ga('event', 'view_item', params)
  }

  /**
   * 사용자가 로그인할 때의 이벤트를 추적합니다.
   *
   * @example
   * <Button onClick={googleAnalytics.login()}>로그인</Button>
   */
  login = () => {
    this.ga('event', 'login')
  }

  /**
   * Google Analytics 스크립트를 설정하기 위한 메서드입니다. _document.tsx 경로에 추가해주세요.
   * @returns Google Analytics 설정을 위한 스크립트를 반환합니다.
   */
  GASetter = () => {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${this.key}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${this.key}');
        `,
          }}
        />
      </>
    )
  }
}
