import { Layout } from '@/template/layout'
import Footer from '@/components/footer'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Error() {
  return (
    <>
      <Layout title="404" />

      <main className={`error ${inter.className}`}>
        <h1>
          Error <span>404</span>
        </h1>

        <h3>Podana strona nie istnieje!!</h3>
      </main>

      <Footer />
    </>
  )
}
