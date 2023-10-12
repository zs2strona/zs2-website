import './kadra.scss'
import { getCadrePosts } from '@/lib/queries'
import Image from 'next/image'
import BlurDataUrl from '@/components/blurDataUrl'
import NotFound from '../not-found'

export const metadata = {
  title: 'Kadra',
}

export default async function Cadre() {
  const cadres = await getCadrePosts()

  return cadres ? (
    <main className="cadre">
      <h1 className="cadre__title">
        Dyrekcja w <span>Naszej</span> Szkole!
      </h1>
      <hr className="cadre__border" />

      <div className="cadre__posts">
        {cadres.map(
          (cadre) =>
            cadre.section === 'dyrekcja' && (
              <div className="cadre__post" key={cadre.id}>
                <Image
                  src={cadre.image == null ? '/icons/teacher.svg' : cadre.image.url}
                  alt={cadre.title}
                  width="150"
                  height="150"
                  className="cadre__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />

                <span className="cadre__post--description">
                  <h2>{cadre.title}</h2>
                  <p>{cadre.description}</p>
                </span>
              </div>
            )
        )}
      </div>

      <h1 className="cadre__title">
        Kadra Nauczycielska w <span>Naszej</span> Szkole!
      </h1>
      <hr className="cadre__border" />

      <div className="cadre__posts">
        {cadres.map(
          (cadre) =>
            cadre.section === 'nauczyciele' && (
              <div className="cadre__post" key={cadre.id}>
                <Image
                  src={cadre.image == null ? '/icons/teacher.svg' : cadre.image.url}
                  alt={cadre.title}
                  width="150"
                  height="150"
                  className="cadre__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />

                <span className="cadre__post--description">
                  <h2>{cadre.title}</h2>
                  <p>{cadre.description}</p>
                </span>
              </div>
            )
        )}
      </div>

      <h1 className="cadre__title">
        Pracownicy w <span>Naszej</span> Szkole!
      </h1>
      <hr className="cadre__border" />

      <div className="cadre__posts">
        {cadres.map(
          (cadre) =>
            cadre.section === 'pracownicy' && (
              <div className="cadre__post" key={cadre.id}>
                <Image
                  src={cadre.image == null ? '/icons/teacher.svg' : cadre.image.url}
                  alt={cadre.title}
                  width="150"
                  height="150"
                  className="cadre__image"
                  placeholder="blur"
                  blurDataURL={BlurDataUrl()}
                />
                <span className="cadre__post--description">
                  <h2>{cadre.title}</h2>
                  <p>{cadre.description}</p>
                </span>
              </div>
            )
        )}
      </div>
    </main>
  ) : (
    NotFound()
  )
}
