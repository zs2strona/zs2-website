import './globals.scss'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/header'
import Availability from '@/components/availability'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie',
    default: 'Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie',
  },
  description:
    'Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        <Availability />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
