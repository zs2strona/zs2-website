import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Layout } from '@/template/layout'
import Footer from '@/components/footer'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Aktualnosci({ posts }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Layout title="Aktualności" />

      <main className={`main-aktualnosci ${inter.className}`}>
        <div className="main-aktualnosci__text">
          <h1>Aktualności</h1>
          <p>
            Najnowsze <span>wydarzenia</span> w naszej Szkole!
          </p>
        </div>

        <div className="main-aktualnosci__content">
          {posts.slice(0, 3).map(
            (post) =>
              post.category === 'aktualnosci' && (
                <div key={post.slug} className="content__item">
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.mainImage.url}
                      alt={post.title}
                      width="400"
                      height="300"
                      className="content__item--image"
                    />
                    <h2>{post.title}</h2>
                  </Link>
                </div>
              )
          )}

          <div className="main-aktualnosci__text main-aktualnosci__text--outher">
            <h1>Wcześniejsze</h1>
            <p>
              Wszystkie <span>wydarzenia</span> w naszej Szkole!
            </p>
          </div>

          {posts.slice(3, 12).map(
            (post) =>
              post.category === 'aktualnosci' && (
                <div key={post.slug} className="content__item">
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.mainImage.url}
                      alt={post.title}
                      width="400"
                      height="300"
                      className="content__item--image"
                    />
                    <h2>{post.title}</h2>
                  </Link>
                </div>
              )
          )}

          {open &&
            posts.slice(12).map(
              (post) =>
                post.category === 'aktualnosci' && (
                  <div key={post.slug} className="content__item">
                    <Link href={`/${post.slug}`}>
                      <Image
                        src={post.mainImage.url}
                        alt={post.title}
                        width="400"
                        height="300"
                        className="content__item--image"
                      />
                      <h2>{post.title}</h2>
                    </Link>
                  </div>
                )
            )}
        </div>

        <button className="main-button" onClick={() => setOpen(!open)}>
          <span>
            Zobacz <span>więcej</span> nowości
          </span>
          <Image src="/Arrow.png" alt="" width="10" height="18" />
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
        posts(
          first: 1000
          orderBy: date_DESC
          where: { category: aktualnosci }
        ) {
          title
          slug
          date
          category
          mainImage {
            url
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
