import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import '../styles/globals.css'

const tagManagerArgs = {
  gtmId: 'GTM-T48HMQR',
  dataLayer: {},
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
