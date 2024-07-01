import { useOauthPopupCallback } from '@toktokhan-dev/react-web'

import Splash from '@/components/Splash'

const PopupCallback = () => {
  useOauthPopupCallback({
    onSuccess: (res) => {
      console.log('succeed to login', res)
      res.closePopup({
        code: 'extra data',
      })
    },
    onFail: (res) => {
      console.log('failed to login', res)
      // res.closePopup()
    },
  })

  return <Splash />
}

export default PopupCallback
