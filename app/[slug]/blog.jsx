import Footer from '../components/footer'
import Head from '../head'
import Image from 'next/image'
import Link from 'next/link'
import '../scss/_blog.scss'
import blog from '../api/blog.json'

export default function BolgPage({ slug }) {
  if (slug == 'ogloszenia') {
    const wpis = blog.ogloszenia
    const type = 'Ogłoszenia'

    return (
      <>
        <Wpis wpis={wpis} type={type} />
      </>
    )
  } else if (slug == 'dokumenty') {
    const wpis = blog.Dokumenty
    const type = 'Dokumenty'

    return (
      <>
        <Wpis wpis={wpis} type={type} />
      </>
    )
  } else if (slug == 'kadra') {
    const wpis = blog.Kadra
    const type = 'Kadra'

    return (
      <>
        <Wpis wpis={wpis} type={type} />
      </>
    )
  }
}

export function Wpis({ wpis, type }) {
  const Title = () => {
    if (type == 'Dokumenty') {
      return (
        <h1 className="main-blogPage__title">
          Dokumenty z <span>Naszej</span> Szkoły!
        </h1>
      )
    } else if (type == 'Kadra') {
      return (
        <h1 className="main-blogPage__title">
          Kadra nauczycielska w <span>Naszej</span> Szkole!
        </h1>
      )
    } else {
      return (
        <h1 className="main-blogPage__title">
          Ogłoszenia w <span>Naszej</span> Szkole!
        </h1>
      )
    }
  }

  const Imagge = (wpiss) => {
    if (type == 'Dokumenty') {
      return (
        <Image
          src="document-icon.svg"
          alt={wpiss.title}
          width="200"
          height="200"
          className="main-blogPage__item--image Dokumenty "
        />
      )
    } else {
      return (
        <Image
          src={wpiss.img}
          alt={wpiss.title}
          width="200"
          height="200"
          className="main-blogPage__item--image"
        />
      )
    }
  }

  return (
    <>
      <Head title={type} />

      <main className="main-blogPage">
        {Title()}

        <section className="main-blogPage__container">
          {wpis.map((wpiss) => (
            <div key={wpiss.slug} className="main-blogPage__item">
              <Link href={`/${wpiss.slug || wpiss.url}`}>
                {Imagge(wpiss)}

                <div className="main-blogPage__item-texts">
                  <h2>{wpiss.title}</h2>
                  <p>{wpiss.content}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
