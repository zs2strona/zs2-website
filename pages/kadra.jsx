import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function CadrePage({ cadres }) {
  const router = useRouter()

  return (
    <>
      <Layout title="Kadra" />

      <main className={`main-blogPage ${inter.className}`}>
        <h1 className="main-blogPage__title">
          Dyrekcja w <span>Naszej</span> Szkole!
        </h1>

        <section className="main-blogPage__container">
          {cadres.map(
            (cadre) =>
              cadre.section === 'dyrekcja' && (
                <div key={cadre.title} className="main-blogPage__item">
                  <Link href="/kadra">
                    {cadre.image ? (
                      <Image
                        src={cadre.image.url}
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    ) : (
                      <Image
                        src="/teacher_icon.svg"
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    )}

                    <div className="main-blogPage__item-texts">
                      <h2>{cadre.title}</h2>
                      <p>{cadre.description}</p>
                    </div>
                  </Link>
                </div>
              )
          )}

          <div className="main-blogPage__separation">
            <h1>
              Kadra Nauczycielska w <span>Naszej</span> Szkole!
            </h1>
            <hr className="main-blogPage__separation--border" />
          </div>

          {cadres.map(
            (cadre) =>
              cadre.section === 'nauczyciele' && (
                <div key={cadre.title} className="main-blogPage__item">
                  <Link href="/kadra">
                    {cadre.image ? (
                      <Image
                        src={cadre.image.url}
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    ) : (
                      <Image
                        src="/teacher_icon.svg"
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    )}

                    <div className="main-blogPage__item-texts">
                      <h2>{cadre.title}</h2>
                      <p>{cadre.description}</p>
                    </div>
                  </Link>
                </div>
              )
          )}

          <div className="main-blogPage__separation">
            <h1>
              Pracownicy w <span>Naszej</span> Szkole!
            </h1>
            <hr className="main-blogPage__separation--border" />
          </div>

          {cadres.map(
            (cadre) =>
              cadre.section === 'pracownicy' && (
                <div key={cadre.title} className="main-blogPage__item">
                  <Link href="/kadra">
                    {cadre.image ? (
                      <Image
                        src={cadre.image.url}
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    ) : (
                      <Image
                        src="/teacher_icon.svg"
                        alt={cadre.title}
                        width="200"
                        height="200"
                        className="main-blogPage__item--image"
                      />
                    )}

                    <div className="main-blogPage__item-texts">
                      <h2>{cadre.title}</h2>
                      <p>{cadre.description}</p>
                    </div>
                  </Link>
                </div>
              )
          )}
        </section>

        <button className="main-blogPage__return" onClick={() => router.back()}>
          Wróć do bloga!
        </button>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        cadres(first: 1000) {
          title
          description
          image {
            url
          }
          section
        }
      }
    `,
  })
  const { cadres } = data
  return {
    props: {
      cadres,
    },
  }
}
