import './rekrutacja.scss'
import Link from 'next/link'
import Image from 'next/image'
import BlurDataUrl from '@/components/blurDataUrl'

export const metadata = {
  title: 'Rekrutacja',
  description: 'Dołączenie do Naszej Szkoły bedzie towją Najlepszą decyzją!!',
}

export default function Rekrutacja() {
  return (
    <main className="rekrutacja">
      <h1 className="rekrutacja__title">
        Rekrutacja <span>2023/2024</span>
      </h1>

      <Image
        src="/rekrutacja.webp"
        alt="rekrutacja"
        width="400"
        height="220"
        className="rekrutacja__image"
        placeholder="blur"
        blurDataURL={BlurDataUrl()}
      />

      <div className="rekrutacja__buttons">
        <Link href="/nabor">
          <button className="rekrutacja__button rekrutacja__button--short">Dołącz</button>
        </Link>

        <Link href="/ogloszenia/informacje-o-rekrutacji-na-rok-2023-2024">
          <button className="rekrutacja__button rekrutacja__button--long">
            Harmonogram <span>rekrutacji</span>
          </button>
        </Link>

        <Link href="/kierunki">
          <button className="rekrutacja__button rekrutacja__button--long">
            Sprawdź <span>kierunki</span> kształcenia
          </button>
        </Link>
      </div>
    </main>
  )
}
