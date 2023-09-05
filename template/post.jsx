import './styles/post.scss'
import ScaledImage from '@/components/scaledImage'
import Gallery from '@/components/gallery'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Post({ data, params }) {
  const post = await data[0]

  return post ? (
    <article className="post">
      <ScaledImage
        src={post.mainImage.url}
        alt={post.title}
        width="740"
        height="550"
        className="post__image"
      />

      {post.date ? (
        <p className="post__date">{post.date.replaceAll('-', '/')}</p>
      ) : (
        <br />
      )}
      <h1 className="post__title">{post.title}</h1>
      <hr className="post__border" />

      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      {post.files[0] && (
        <section className="post__files">
          {post.files.map((file) => (
            <Link href={file.url} key={file.id}>
              {file.fileName}
            </Link>
          ))}
        </section>
      )}

      <Link href={`/${params}`} className="post__return">
        ← Wróć do bloga
      </Link>

      {post.images[0] && (
        <>
          <hr className="post__border" />

          <Gallery date={post} />

          <Link href={`/${params}`} className="post__return">
            ← Wróć do bloga
          </Link>
        </>
      )}
    </article>
  ) : (
    notFound()
  )
}
