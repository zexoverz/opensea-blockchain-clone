import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

const supportedChainIds = [4]
const connectors = {
  injected: {}
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
