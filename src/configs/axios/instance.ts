import { apiLogger, styledConsole } from '@toktokhan-dev/react-universal'

import axios, { AxiosError } from 'axios'

import { ENV } from '@/configs/env'
import { tokenStorage } from '@/stores/local/token'

// import { retryRequestManager } from './retry-request-manager'

const isDev = ENV.NODE_ENV === 'development'

const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// const retry = retryRequestManager({ cleanupTimeOut: 5000 })
// const authApi = new AuthApi({ instance })

instance.interceptors.request.use(
  (config) => {
    const token = tokenStorage?.get()
    const isAccess = !!token && !!token.access_token
    if (isAccess) {
      config.headers.setAuthorization(`Bearer ${token.access_token}`)
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (res) => {
    const { status, config: reqData, data: resData } = res
    if (isDev) apiLogger({ status, reqData, resData })
    return res
  },
  async (error: AxiosError) => {
    try {
      const { response: res, config: reqData } = error || {}
      if (!res?.status) {
        throw new Error('response status is not exist')
      }

      const { status } = res
      const isUnAuthError = status === 401
      const isExpiredToken = status === 444

      if (isDev) apiLogger({ status, reqData, resData: error, method: 'error' })

      if (isExpiredToken) {
        throw new Error('expired token: please set refresh token logic')
        // return retry({
        //   getToken: async () => {
        //     const refreshToken = tokenStorage?.get()?.refresh_token

        //     if (!refreshToken) throw new Error('refresh token is not exist')

        //     const { data: token } = await authApi.refresh({
        //       data: {
        //         refresh_token: refreshToken,
        //       },
        //     })
        //     tokenStorage?.set(token)

        //     return token.access_token
        //   },
        //   onRefetch: (token) => {
        //     if (!reqData) throw new Error('reqData is not exist')
        //     reqData.headers.Authorization = `Bearer ${token}`
        //     return instance.request(reqData)
        //   },
        //   onError: () => {
        //     tokenStorage?.remove()
        //     return Promise.reject(error)
        //   },
        // })
      }

      if (isUnAuthError) {
        // deleteToken();
        // if (isClient) Router.push(ROUTE.LOGIN);
        // return Promise.reject(error);
      }

      return Promise.reject(error)
    } catch (e) {
      styledConsole({
        //
        method: 'error',
        topic: 'UN_HANDLED',
        title: 'axios-interceptor',
        data: e,
      })
    }
  },
)

export default instance
