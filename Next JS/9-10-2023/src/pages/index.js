import Head from 'next/head'
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main>
          <Link class="btn btn-primary" href={"./test/allUser"}><h1>View All User</h1></Link> <br/>
          <Link class="btn btn-primary" href={"./Country"}><h1>View All Country</h1></Link>
          
      </main>
    </>
  )
}