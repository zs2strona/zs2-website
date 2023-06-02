import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import Slider from '@/components/slider'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Post({ post }) {
  const router = useRouter()

  return (
    <>
      <Layout title={post.title} />

      <article className={`main-post ${inter.className}`} key={post.slug}>
        <p className="main-post__date">
          <span>{post.date}</span>
        </p>

        <figure className="main-post__slider">
          {(post.category === 'aktualnosci' && (
            <Slider images={post.images} mainImage={post.mainImage.url} />
          )) || (
            <Link href={post.mainImage.url} target="_blank">
              <Image
                className="main-post__slider--image"
                src={post.mainImage.url}
                alt={post.title}
                width={400}
                height={400}
              />
            </Link>
          )}
        </figure>

        {post.category === 'aktualnosci' && (
          <figure className="main-post__slider--query">
            <Image src={post.mainImage.url} alt={post.title} width={600} height={600} />

            {post.images.map((image, i) => (
              <Image
                src={image.url}
                alt={image.url}
                priority={true}
                width="600"
                height="600"
                key={i}
              />
            ))}
          </figure>
        )}

        <h1 className="main-post__title">{post.title}</h1>

        <hr className="main-post__border" />

        <div
          className="main-post__content"
          dangerouslySetInnerHTML={{ __html: post.description.html }}
        />

        {post.file[0] && <hr className="main-post__border" />}

        <div className="main-post__files">
          {post.file.map((file) => (
            <Link className="Link" key={file.fileName} href={file.url}>
              <p>{file.fileName}</p>
            </Link>
          ))}
        </div>

        <button className="main-post__return" onClick={() => router.back()}>
          Wróć do bloga!
        </button>
      </article>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0]

  const { data } = await client.query({
    query: gql`
      query postBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          title
          slug
          category
          date
          mainImage {
            url
          }
          images {
            url
          }
          description {
            html
          }
          file {
            url
            fileName
          }
        }
      }
    `,
    variables: { slug },
  })
  const { posts } = data
  const post = posts[0]

  return { props: { post: post } }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts(first: 1000) {
          slug
        }
      }
    `,
  })
  const { posts } = data
  const paths = posts.map((post) => ({
    params: { slug: [post.slug] },
  }))

  return { paths, fallback: false }
}
