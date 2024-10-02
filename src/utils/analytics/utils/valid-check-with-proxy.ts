type GaHandler = {
  get: (
    target: { [key: string]: (...args: any[]) => any },
    propKey: string,
  ) => (...args: any[]) => any
}

export const ANALYTICS_NAME = {
  gtag: 'Google Analytics',
  fbq: 'Facebook Pixel',
  kakaoPixel: 'Kakao Pixel',
}

export const analyticsValidCheckHandler = (
  key: keyof typeof ANALYTICS_NAME,
): ProxyHandler<any> => {
  return {
    get: (target, propKey) => {
      console.log('propKey:', propKey) // propKey는 호출된 메서드의 이름을 나타냅니다.
      console.log('target:', target)

      const origMethod = target[propKey as keyof typeof target]

      if (typeof origMethod !== 'function') return origMethod

      return (...args: any[]) => {
        let isValid = false

        if (typeof window !== 'undefined') {
          // Use direct access to window properties
          switch (key) {
            case 'gtag':
              console.log('window.gtag:', window.gtag) // Direct access
              isValid = typeof window.gtag === 'function'
              break
            case 'fbq':
              console.log('window.fbq:', window.fbq) // Direct access
              isValid = typeof window.fbq === 'function'
              break
            case 'kakaoPixel':
              console.log('window.kakaoPixel:', window.kakaoPixel) // Direct access
              isValid = typeof window.kakaoPixel === 'function'
              break
            default:
              break
          }
        }

        // if (isValid) {
        //   console.log('@@@', target[propKey])
        //   target[propKey] = (window as any)[propKey]
        // }

        if (!isValid) {
          console.warn(
            `${propKey.toString()}: ${ANALYTICS_NAME[key]} is not initialized.`,
          )
          return
        }

        // 원래 메서드 호출
        if (typeof origMethod === 'function') {
          return origMethod.apply(target, args)
        }
      }
    },
  }
}
