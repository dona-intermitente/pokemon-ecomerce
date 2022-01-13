import '../styles/globals.css'
import '../styles/variables.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <>
      <Head>
        <title>pokemon e-comerce</title>
        <meta name="description" content="sales pokemon" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />  
        </Layout>
      </SessionProvider>
    </>
  )
}

export default MyApp
