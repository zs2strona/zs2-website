import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Rekrutacja() {
  return (
    <>
      <Layout title="Rekrutacja" />

      <main className={`main-rekrutacja ${inter.className}`}>
        <div className="main-rekrutacja__title">
          <h1>
            Rekrutacja <span>2023/2024</span>
          </h1>
        </div>

        <Image src="/rekrutacja.png" alt="rekrutacja" width="400" height="220" />

        <div className="main-rekrutacja__buttons">
          <Link href="/nabor">
            <button className="main-rekrutacja__button main-rekrutacja__button--short">
              Dołącz
            </button>
          </Link>

          <Link href="/informacje-o-rekrutacji-na-rok-2023-2024">
            <button className="main-rekrutacja__button main-rekrutacja__button--long">
              Harmonogram <span>rekrutacji</span>
            </button>
          </Link>

          <Link href="/kierunki">
            <button className="main-rekrutacja__button main-rekrutacja__button--long">
              Sprawdź <span>kierunki</span> kształcenia
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
