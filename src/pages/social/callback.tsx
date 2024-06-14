import { useEffect, useState } from 'react'

import LinkCallback from './components/LinkCallback'
import PopupCallback from './components/PopupCallback'

function SocialCallback() {
  const [isPopup, setIsPopup] = useState(true)
  useEffect(() => {
    if (!window.opener) {
      setIsPopup(false)
    }
  }, [isPopup])

  return isPopup ? <PopupCallback /> : <LinkCallback />
}

export default SocialCallback
