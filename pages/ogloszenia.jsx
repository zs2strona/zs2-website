import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AnnouncementPage({ posts }) {
  const router = useRouter()

  return (
    <>
      <Layout title="Ogłoszenia" />

      <main className={`main-blogPage ${inter.className}`}>
        <h1 className="main-blogPage__title">
          Ogłoszenia w <span>Naszej</span> Szkole!
        </h1>

        <section className="main-blogPage__container">
          {posts.map(
            (post) =>
              post.category != 'aktualnosci' && (
                <div key={post.slug} className="main-blogPage__item">
                  <Link href={post.slug}>
                    <Image
                      src={post.mainImage.url}
                      alt={post.title}
                      width="200"
                      height="200"
                      className="main-blogPage__item--image"
                    />

                    <div className="main-blogPage__item-texts">
                      <h2>{post.title}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.description.html,
                        }}
                      />
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
        posts(first: 1000) {
          title
          slug
          category
          mainImage {
            url
          }
          description {
            html
          }
        }
      }
    `,
  })
  const { posts } = data
  return {
    props: {
      posts,
    },
  }
}
