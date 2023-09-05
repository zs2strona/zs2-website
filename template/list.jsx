import './styles/list.scss'
import Image from 'next/image'
import Link from 'next/link'
import BlurDataUrl from '@/components/blurDataUrl'
import { notFound } from 'next/navigation'

export default async function List({ children, data, title, subtitle, icon, documents }) {
  const posts = await data

  return posts ? (
    <main className="list">
      <header className="list__header">
        <div className="list__description">
          <h1 className="list__description--title">{title}</h1>
          <h2 className="list__description--subtitle">{subtitle}</h2>
        </div>

        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width="100"
          height="100"
          className="list__icon"
        />
      </header>

      {children}

      <section className="list__posts">
        {posts.map((post) => (
          <Link href={documents ? post.file.url : '#'} key={post.id}>
            <div className="list__post">
              <Image
                src={documents ? '/icons/document.svg' : post.mainImage.url}
                alt={post.title}
                width="450"
                height="450"
                className={`list__image ${documents ? 'list__image--documents' : ''}`}
                placeholder="blur"
                blurDataURL={BlurDataUrl()}
              />

              <div className="list__span">
                <h3 className="list__title">{post.title}</h3>

                <div
                  className="list__content"
                  dangerouslySetInnerHTML={{
                    __html: documents ? post.description : post.description.html,
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  ) : (
    notFound()
  )
}
