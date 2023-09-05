import './styles/tiles.scss'
import Image from 'next/image'
import Link from 'next/link'
import BlurDataUrl from '@/components/blurDataUrl'
import { notFound } from 'next/navigation'

export default async function Tiles({ data, params, title, subtitle, icon }) {
  const posts = await data

  return posts ? (
    <main className="tiles">
      <header className="tiles__header">
        <div className="tiles__description">
          <h1 className="tiles__description--title">{title}</h1>
          <h2 className="tiles__description--subtitle">{subtitle}</h2>
        </div>

        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width="100"
          height="100"
          className="tiles__icon"
        />
      </header>

      <section className="tiles__posts">
        {posts.map((post) => (
          <Link href={`${params}/${post.slug}`} key={post.id}>
            <div className="tiles__post">
              <p className="tiles__date">{post.date}</p>
              <Image
                src={post.mainImage.url}
                alt={post.title}
                width="400"
                height="400"
                className="tiles__image"
                placeholder="blur"
                blurDataURL={BlurDataUrl()}
              />
              <h3>{post.title}</h3>
              <Image
                src="/arrow.svg"
                alt="strzałka"
                width="30"
                height="30"
                className="tiles__arrow"
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  ) : (
    notFound()
  )
}
