import Head from '../head'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import '../scss/_post.scss'
import blog from '../api/blog.json'
import Slider from './slider'

export default function Post({ slug }) {
  const Post = blog.Posty.find((find) => find.slug == slug)

  return (
    <>
      <Head title={Post.title} />

      <main className="main-post" key={Post.slug}>
        <p className="main-post__date">
          <span>{Post.data}</span>
        </p>

        <figure className="main-post__slider">
          <Slider Img={Post.image} />
        </figure>

        <h1
          className="main-post__title"
          dangerouslySetInnerHTML={{ __html: Post.title }}
        ></h1>

        <hr className="main-post__border" />

        <p
          className="main-post__content"
          dangerouslySetInnerHTML={{ __html: Post.content }}
        ></p>

        <Link href="/aktualnosci">
          <button className="main-post__return">Wróć do bloga!</button>
        </Link>
      </main>

      <Footer />
    </>
  )
}
