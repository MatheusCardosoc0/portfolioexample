import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/Layout/About'
import { Contact } from '../components/Layout/Contact'
import { Header } from '../components/Layout/Header'

const Home: NextPage = () => {
  return (
    <main className='overflow-x-hidden' >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Header />
      <About />
      <Contact />
    </main>
  )
}

export default Home
