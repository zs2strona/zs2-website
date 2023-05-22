import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_kierunki.scss'

export default function Kierunki() {
  return (
    <>
      <Head title="Kierunki" />

      <main className="main-kierunki">
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
        />
      </main>

      <Footer />
    </>
  )
}

export function Kier({ title, content, box, link }) {
  return (
    <section className="main-kierunki__section">
      <Image
        src="/imk1.png"
        alt="Kierunki"
        width="1000"
        height="1000"
        className="main-kierunki__image"
      />
      <Image
        src="/imk2.png"
        alt="Kierunki"
        width="1000"
        height="1000"
        className="main-kierunki__image"
      />
      <Image
        src="/imk3.png"
        alt="Kierunki"
        width="1000"
        height="1000"
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
