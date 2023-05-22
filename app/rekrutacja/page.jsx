import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_rekrutacja.scss'

export default function Rekrutacja() {
  return (
    <>
      <Head title="Rekrutacja" />

      <main className="main-rekrutacja">
        <div className="main-rekrutacja__title">
          <h1>
            Rekrutacja <span>2023/2024</span>
          </h1>
        </div>

        <Image
          src="/rekrutacja.png"
          alt="rekrutacja"
          width="400"
          height="220"
        />

        <div className="main-rekrutacja__buttons">
          <Link href="/nabor">
            <button className="main-rekrutacja__button main-rekrutacja__button--short">
              Dołącz
            </button>
          </Link>

          <Link href="/">
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
