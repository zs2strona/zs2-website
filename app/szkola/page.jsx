import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from '../head'
import blog from '../api/blog.json'
import '../scss/_szkola.scss'

export default function Szkola() {
  const { SzkolaPosty } = blog

  return (
    <>
      <Head title="Szkoła" />

      <main className="main-szkola">
        <h1 className="main-szkola__title">
          O <span>Naszej</span> Szkole
        </h1>

        <section className="main-szkola__content">
          <div className="main-szkola__content--left">
            <Link href="/rabaty">
              <button className="main-szkola__button">Zniżki</button>
            </Link>
            <Link href="/dokumenty" className="main-szkola__button--center">
              <button className="main-szkola__button main-szkola__button--center">
                Dokumenty
              </button>
            </Link>
            <Link href="/ogloszenia">
              <button className="main-szkola__button">Ogłoszenia</button>
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
            <button className="main-szkola__button">Samorząd szkolny</button>
            <Link
              href="/stowarzyszenie"
              className="main-szkola__button--center"
            >
              <button className="main-szkola__button main-szkola__button--center">
                Stowarzyszenie
              </button>
            </Link>
          </div>
        </section>

        <hr />

        <section className="main-szkola__posts">
          {SzkolaPosty.map((post) => (
            <div key={post.id} className="main-szkola__posts--post">
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.img}
                  alt={post.title}
                  className="main-szkola__posts--image"
                  width="400"
                  height="300"
                />

                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
