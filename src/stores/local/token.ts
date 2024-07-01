import {
  SyncedStorageFactory,
  useSyncWebStorage,
} from '@toktokhan-dev/react-web'

export type TokenType = {
  access_token: string
  refresh_token: string
}

export const {
  connector: tokenConnector, //
  storage: tokenStorage,
} = SyncedStorageFactory.createLocal<TokenType>('token')

export const useTokenStorage = () => useSyncWebStorage(tokenConnector)
