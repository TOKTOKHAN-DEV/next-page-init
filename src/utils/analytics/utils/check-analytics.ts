export const checkAnalytics = <T>(
  platform: 'Google' | 'Facebook' | 'Kakao',
  clientID: string | undefined,
  getter: () => T,
): T | null => {
  if (typeof window === 'undefined') {
    return null
  }
  if (!clientID) {
    console.warn(`${platform} Analytics key is not exist`)
    return null
  }

  const target = getter()
  if (!target) {
    console.warn('no target')
    return null
  }

  if (typeof target === 'function') {
    return ((...param: any) => {
      if (!clientID) {
        console.warn(`${platform} Analytics key is not exist`)
        return
      }
      return target(...param)
    }) as T
  }

  return target
}
