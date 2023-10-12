import './kierunki.scss'
import { getDirectionsPosts } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import BlurDataUrl from '@/components/blurDataUrl'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Kierunki',
  description:
    'Technik Programista, Technik Mechanik Lotniczy, Technik Informatyk, Technik Mechatronik, Liceum Mundurowe, Elektormechanik Samochodowy, Ślusarz',
}

export default async function Kierunki() {
  const directions = await getDirectionsPosts()

  return directions ? (
    <main className="kierunki">
      <h1 className="kierunki__title">Technikum Nr 1</h1>
      <hr className="kierunki__border" />

      <div className="kierunki__content">
        {directions.map(
          (direction) =>
            direction.school === 'technikum' && (
              <div className="kierunki__post" key={direction.id}>
                <Image
                  src={direction.mainImage.url}
                  alt={direction.title}
                  width="500"
                  height="400"
                  className="kierunki__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />
                <h2 className="kierunki__subtitle">{direction.title}</h2>
                <h3 className="kierunki__school">Technikum Nr 1</h3>
                <Link href={`/kierunki/${direction.slug}`} className="kierunki__more">
                  Dowiedz się wiecej
                </Link>
              </div>
            )
        )}
      </div>

      <h1 className="kierunki__title">III Liceum Ogólnokształcące</h1>
      <hr className="kierunki__border" />

      <div className="kierunki__content">
        {directions.map(
          (direction) =>
            direction.school === 'liceum' && (
              <div className="kierunki__post" key={direction.id}>
                <Image
                  src={direction.mainImage.url}
                  alt={direction.title}
                  width="500"
                  height="400"
                  className="kierunki__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />
                <h2 className="kierunki__subtitle">{direction.title}</h2>
                <h3 className="kierunki__school">III Liceum Ogólnokształcące</h3>
                <Link href={`/kierunki/${direction.slug}`} className="kierunki__more">
                  Dowiedz się wiecej
                </Link>
              </div>
            )
        )}
      </div>

      <h1 className="kierunki__title">Branżowa Szkoła I stopnia Nr 1</h1>
      <hr className="kierunki__border" />

      <div className="kierunki__content">
        {directions.map(
          (direction) =>
            direction.school === 'szkolaBranzowa' && (
              <div className="kierunki__post" key={direction.id}>
                <Image
                  src={direction.mainImage.url}
                  alt={direction.title}
                  width="500"
                  height="400"
                  className="kierunki__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />
                <h2 className="kierunki__subtitle">{direction.title}</h2>
                <h3 className="kierunki__school">Branżowa Szkoła I stopnia Nr 1</h3>
                <Link href={`/kierunki/${direction.slug}`} className="kierunki__more">
                  Dowiedz się wiecej
                </Link>
              </div>
            )
        )}
      </div>
    </main>
  ) : (
    notFound()
  )
}
