---
'@toktokhan-dev/next-page-init': patch
---

improve retry-request-manager

### clenupTimeout option 추가

동시적인 expired 된 요청이 많을 때 refresh 요청이 2번 호출되는 이슈가 있었습니다.

이유는 리프레시 갱신전 요청들 중, 이미 이전에 도착한 만료응답에 의해 [토큰 갱신 - 재요청] 플로우가 완료 된 후, 응답된 요청이 있다면 refresh flow 를 다시 타는것이 원인 이었습니다.

예를들어

- A 요청 - 만료 응답까지 1초
  - A 요청 refresh - 1초
  - A 요청 재요청 - 1초
  - refesh flow 초기화
- B 요청 - 만료 응답까지 5초

의 경우 A 요청 같은경우는 재요청 까지 총 3초가 걸리기 때문에 B 요청 응답 전에 리프레시 플로우가 완료(초기화)가됩니다.

B 요청의 응답이 도착한 시점에는 이미 리프레시 플로우가 초기화 된 시점이기 때문에 리프레시가 2번 발생할 수 있습니다.

따라서, 토큰을 정리하기 까지 timeout 으로 시간 여유를 주어 이슈 발생 확률을 낮추도록 개선 했습니다.

요청이 여러개일 경우 정리 함수의 timeout 은 이전 것을 정리하고, 새롭게 timeout 을 설정하기 때문에, debounce 처럼 가장 마지막에 설정된 timout 함수만 지연된 시간으로 실행하게 됩니다.

```ts
// configs/axios/instance.ts
const retry = retryRequestManager({ cleanupTimeOut: 5000 })
```

```ts
// configs/axios/retry-request-manager.ts
export const retryRequestManager = (options?: {
  /**
   * 토큰 refresh 후, 설정한 시간안에 refresh 를 다시 시도 하지 않을경우 토큰을 삭제합니다.
   * @default 0
   *  */
  cleanupTimeOut?: number
}) => {
  const { cleanupTimeOut = 0 } = options || {}
  let token: Promise<string> | null = null
  let timeoutId: NodeJS.Timeout | null = null

  return async (params: {
    getToken: () => Promise<string>
    onRefetch: (refreshed: string) => any
    onError: (error: any) => any
  }) => {
    try {
      ...
    } catch (err) {
      ...
    } finally {
      if (timeoutId) clearTimeout(timeoutId)
      if (token) {
        timeoutId = setTimeout(() => {
          token = null
        }, cleanupTimeOut)
      }
    }
  }
}
```
