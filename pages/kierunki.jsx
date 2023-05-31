import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Kierunki() {
  return (
    <>
      <Layout title="Kierunki" />

      <main className={`main-kierunki ${inter.className}`}>
        <Kier
          title="Technikum:"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam
              veniam pariatur sapiente temporibus vel quae provident, nesciunt autem
              in quod ex perspiciatis iusto earum eligendi debitis fugiat corrupti
              rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              ullam veniam pariatur sapiente temporibus vel quae provident, nesciunt
              autem in quod ex perspiciatis iusto earum eligendi debitis fugiat
              corrupti rerum!"
          box="main-kierunki__box-1"
          link="technikum"
          image1="/imk1.png"
          image2="/imk2.png"
          image3="/imk3.png"
        />

        <Kier
          title="Liceum Ogólnokształcące:"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam
              veniam pariatur sapiente temporibus vel quae provident, nesciunt autem
              in quod ex perspiciatis iusto earum eligendi debitis fugiat corrupti
              rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              ullam veniam pariatur sapiente temporibus vel quae provident, nesciunt
              autem in quod ex perspiciatis iusto earum eligendi debitis fugiat
              corrupti rerum!"
          box="main-kierunki__box-2"
          link="liceum"
          image1="/imk1.png"
          image2="/imk2.png"
          image3="/imk3.png"
        />

        <Kier
          title="Szkoła branżowa I stopnia:"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam
              veniam pariatur sapiente temporibus vel quae provident, nesciunt autem
              in quod ex perspiciatis iusto earum eligendi debitis fugiat corrupti
              rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              ullam veniam pariatur sapiente temporibus vel quae provident, nesciunt
              autem in quod ex perspiciatis iusto earum eligendi debitis fugiat
              corrupti rerum!"
          box="main-kierunki__box-3"
          link="szkola-branzowa"
          image1="/imk1.png"
          image2="/imk2.png"
          image3="/imk3.png"
        />
      </main>

      <Footer />
    </>
  )
}

export function Kier({ title, content, box, link, image1, image2, image3 }) {
  return (
    <section className="main-kierunki__section">
      <Image
        src={image1}
        alt="Kierunki"
        width="2000"
        height="2000"
        className="main-kierunki__image"
      />
      <Image
        src={image2}
        alt="Kierunki"
        width="2000"
        height="2000"
        className="main-kierunki__image"
      />
      <Image
        src={image3}
        alt="Kierunki"
        width="2000"
        height="2000"
        className="main-kierunki__image"
      />

      <div className="main-kierunki__title">
        <h1>{title}</h1>
      </div>

      <div className={`main-kierunki__section--box ${box}`}>
        <Link href={`/${link}`}>
          <button className="main-kierunki__button">Sprawdź</button>
        </Link>

        <p>{content}</p>
      </div>
    </section>
  )
}
