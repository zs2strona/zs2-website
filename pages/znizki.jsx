import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import Image from 'next/image'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function DiscountsPage({ discounts }) {
  const router = useRouter()

  return (
    <>
      <Layout title="Zniżi" />

      <main className={`main-blogPage ${inter.className}`}>
        <h1 className="main-blogPage__title">
          Zniżki dostepne w <span>Naszej</span> Szkole!
        </h1>
        <ul>
          <li>Rabaty obowiązują od 22 marca 2023r. Do 21 marca 2024r.</li>
          <li>
            Rabaty przysługują Zarówno uczniom szkoły jak i nauczycielom i pracownikom.
          </li>
          <li>
            Aby skorzystać ze Zniżki należy okazać ważną legitymację uczniowską - w
            przypadku uczniów. Dla Nauczycieli i pracowników będą wydawane imienne karty
            rabatowe.
          </li>
        </ul>

        <section className="main-blogPage__container">
          {discounts.map((discount) => (
            <div key={discount.title} className="main-blogPage__item">
              <Image
                src={discount.image.url}
                alt={discount.title}
                width="200"
                height="200"
                className="main-blogPage__item--image"
              />

              <div className="main-blogPage__item-texts">
                <h2>{discount.title}</h2>
                <div
                  className="znizki"
                  dangerouslySetInnerHTML={{
                    __html: discount.description.html,
                  }}
                />
              </div>
            </div>
          ))}
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
        discounts(first: 1000) {
          title
          description {
            html
          }
          image {
            url
          }
        }
      }
    `,
  })
  const { discounts } = data
  return {
    props: {
      discounts,
    },
  }
}
