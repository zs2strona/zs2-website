import { Inter } from '@next/font/google'
import Availability from './components/availability'
import Header from './components/header'
import './scss/general.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <Availability />
        {children}
      </body>
    </html>
  )
}
