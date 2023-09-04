import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function DocumentsPage({ documents }) {
  const router = useRouter()

  return (
    <>
      <Layout title="Dokumenty" />

      <main className={`main-blogPage ${inter.className}`}>
        <h1 className="main-blogPage__title">
          Dokumenty z <span>Naszej</span> Szkoły!
        </h1>

        <section className="main-blogPage__container">
          {documents.map((document) => (
            <div key={document.id} className="main-blogPage__item">
              <Link href={document.file.url}>
                <Image
                  src="document-icon.svg"
                  alt={document.title}
                  width="200"
                  height="200"
                  className="main-blogPage__item--image Dokumenty"
                />

                <div className="main-blogPage__item-texts">
                  <h2>{document.title}</h2>
                  <p>{document.description}</p>
                </div>
              </Link>
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
        documents(first: 1000) {
          id
          title
          description
          file {
            url
          }
        }
      }
    `,
  })
  const { documents } = data
  return {
    props: {
      documents,
    },
  }
}
