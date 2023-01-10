import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <Head>
        <title>eCommerence Dashboard</title>
        <meta name='description' content='eCommerence Dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}></main>
    </>
  )
}
