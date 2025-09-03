import '@/styles/globals.css'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.className}`}>
      <Head>
        <title>Weather App</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}