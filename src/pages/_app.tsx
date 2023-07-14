import '../styles/globals.css'
import '../styles/testimony.css'
import '../styles/footer.css'
import '../styles/faq.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
