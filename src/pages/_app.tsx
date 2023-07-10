import type { AppProps } from 'next/app'
import { GlobalStyleProvider } from '@/ui/theme/GlobalStyleProvider'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return  <GlobalStyleProvider><Component {...pageProps} /></GlobalStyleProvider>
}
