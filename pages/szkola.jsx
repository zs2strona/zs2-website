import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Szkola({ schools }) {
  return (
    <>
      <Layout title="Szkoła" />

      <main className={`main-szkola ${inter.className}`}>
        <h1 className="main-szkola__title">
          O <span>Naszej</span> Szkole
        </h1>

        <section className="main-szkola__content">
          <div className="main-szkola__content--left">
            <Link href="/dokumenty">
              <button className="main-szkola__button">Dokumenty</button>
            </Link>
            <Link href="/stowarzyszenie" className="main-szkola__button--center">
              <button className="main-szkola__button main-szkola__button--center">
                Stowarzyszenie
              </button>
            </Link>
            <Link href="/znizki">
              <button className="main-szkola__button">Zniżki</button>
            </Link>
          </div>

          <Image
            src="/kochanowski.svg"
            alt="image"
            width="180"
            height="190"
            className="main-szkola__content--center"
          />

          <div className="main-szkola__content--right">
            <Link href="/kadra" className="main-szkola__button--center">
              <button className="main-szkola__button main-szkola__button--center">
                Kadra
              </button>
            </Link>
            <Link href="/samorzad">
              <button className="main-szkola__button">Samorząd szkolny</button>
            </Link>
            <Link href="/studia-podyplomowe" className="main-szkola__button--center">
              <button className="main-szkola__button main-szkola__button--center">
                Studia podyplomowe
              </button>
            </Link>
          </div>
        </section>

        <hr />

        <section className="main-szkola__posts">
          {schools.map((post) => (
            <Link key={post.title} href={post.link}>
              <div className="main-szkola__posts--post">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  className="main-szkola__posts--image"
                  width="400"
                  height="300"
                />

                <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        schools {
          title
          link
          image {
            url
          }
        }
      }
    `,
  })
  const { schools } = data
  return {
    props: {
      schools,
    },
  }
}
