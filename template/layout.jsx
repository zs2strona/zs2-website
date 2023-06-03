import Head from 'next/head'
import Header from '@/components/header'
import Availability from '@/components/availability'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const descriptionTemplate =
  'Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.'

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie`}</title>
        <meta
          name="description"
          content={description ? description : descriptionTemplate}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={inter.className}>
        <Header />
        <Availability />
        <main>{children}</main>
      </div>
    </>
  )
}
