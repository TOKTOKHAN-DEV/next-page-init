import { useState } from 'react'

import { createContextSelector } from '@toktokhan-fe/react-universal'

const useHomePage = () => {
  const [count, setCount] = useState(0)

  return { count, setCount }
}

export const {
  Provider: HomePageProvider, //
  useContext: useHomePageContext,
  withProvider: withHomePageProvider,
} = createContextSelector(useHomePage)
