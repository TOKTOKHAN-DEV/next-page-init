import { useTokenStorage } from '@/stores/local/token'

import { useClient } from './useClient'

export const useAuth = () => {
  const token = useTokenStorage()
  const isClient = useClient()

  const isLogin: boolean | null = isClient ? !!token?.access_token : null

  return { isLogin, token }
}
