import Head from 'next/head'
import { Inter } from 'next/font/google'
import ViewAllProduct from './product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
      <ViewAllProduct />
      </main>
    </>
  )
}
