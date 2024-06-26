export const retryReqeustManager = () => {
  let token: Promise<string> | null = null

  return async (params: {
    getToken: () => Promise<string>
    onRefetch: (refreshed: string) => any
    onError: (error: any) => any
  }) => {
    const { onError, onRefetch, getToken } = params

    try {
      if (!token) {
        token = getToken()
      }
      const refreshed = await token
      return onRefetch(refreshed)
    } catch (err) {
      onError(err)
    } finally {
      token = null
    }
  }
}
