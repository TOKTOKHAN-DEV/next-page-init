import React from 'react'

import { Analytics } from './types'
import { analyticsValidCheckHandler } from './utils/valid-check-with-proxy'

/**
 * @brief Kakao Pixel에서 제공하는 이벤트가 정의된 클래스입니다.
 * @description 카카오 픽셀에서는 여러 종류의 이벤트를 전송할 수 있습니다.
 * 수집된 데이터를 이용하여 타겟팅, 카탈로그 소재정보 수집, 전환 보고서, 전환 최적화 등의 다양한 카카오 광고 목적으로 활용할 수 있습니다.
 * @see Docs https://kakaoad.github.io/kakao-pixel/
 */
export class KakaoAnalytics {
  private kakao: (id: string) => kakao.Pixel.Event | void = () => {}
  private kakaoPixel: kakao.Pixel.Event | undefined = undefined // Initialize with `undefined`

  /**
   * KakaoAnalytics 클래스의 새 인스턴스를 생성합니다.
   * @param key 카카오 픽셀 키입니다.
   */
  constructor(private key?: string) {
    if (!key) {
      console.warn('Kakao 키 설정이 필요합니다.')
      return
    }
    this.key = key

    this.kakao = new Proxy(
      typeof window !== 'undefined' ? window.kakaoPixel : () => {},
      {
        get: (target, propKey) => {
          console.log('target:', target)
          console.log('propKey:', propKey)
          if (
            typeof window !== 'undefined' &&
            typeof window.kakaoPixel === 'function'
          ) {
            return window.kakaoPixel
          } else {
            console.warn('kakaoPixel Analytics is not initialized.')
            return () => {} // No-op function if gtag is not initialized
          }
        },
      },
    )

    console.log(
      'window.kakaoPixel',
      typeof window !== 'undefined' ? typeof window.kakaoPixel : 'undefined',
    )

    this.kakaoPixel = this.kakao?.(this.key) as any
  }
  /**
   * 회원가입 완료 이벤트를 전송합니다.
   *
   * @param params - 회원가입 이벤트에 필요한 데이터 (태그 등)
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.completeRegistration({ tag: 'user1' })}>회원가입 완료</Button>
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Kakao']) => {
    console.log('this.kakaoPixel', this.kakaoPixel)
    this.kakaoPixel?.completeRegistration(params?.tag)
  }

  /**
   * 페이지 조회 이벤트를 전송합니다.
   *
   * @param params - 페이지 조회 이벤트에 필요한 데이터 (태그 등)
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.pageView({ tag: '홈 페이지' })}>페이지 조회</Button>
   */
  pageView = (params: Analytics.PageView['Kakao']) => {
    this.kakaoPixel?.pageView(params?.tag)
  }

  /**
   * 콘텐츠/상품 조회 이벤트를 전송합니다.
   *
   * @param params - 콘텐츠 조회 이벤트에 필요한 데이터
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.viewContent({ tag: '상품1' })}>콘텐츠 보기</Button>
   */
  viewContent = (params: Analytics.ViewContent['Kakao']) => {
    this.kakaoPixel?.viewContent(params)
  }

  /**
   * 검색 이벤트를 전송합니다.
   *
   * @param params - 검색 이벤트에 필요한 데이터
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.search({ tag: "카테고리", keyword: "검색어"})}>검색</Button>
   */
  search = (params: Analytics.Search['Kakao']) => {
    this.kakaoPixel?.search(params)
  }

  /**
   * Kakao Pixel 스크립트를 설정하기 위한 메서드입니다. _document.tsx 경로에 추가해주세요.
   *
   * @returns Kakao Pixel 설정을 위한 스크립트 JSX 요소를 반환합니다.
   */
  KakaoSetter = () => {
    return (
      <script
        async
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/kp.js"
      ></script>
    )
  }
}
