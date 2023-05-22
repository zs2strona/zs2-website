import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_liceum.scss'

export default function Liceum() {
  return (
    <>
      <Head title="Liceum" />

      <main className="liceum-main">
        <h1 className="liceum-main__header">Klasa mundurowa</h1>

        <div className="liceum-main__container">
          <section className="liceum-main__container--police">
            <div className="liceum-main__container--title">
              <h1>Profil policyjny</h1>
              <Image
                src="/kierunki-images/police.svg"
                alt="police"
                width="223"
                height="67"
              />
            </div>

            <Image
              src="/Placeholder-max.png"
              className="liceum-main__container--image"
              alt="police"
              width="600"
              height="400"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam veniam
              pariatur sapiente temporibus vel quae provident, nesciunt autem in quod ex
              perspiciatis iusto earum eligendi debitis fugiat corrupti rerum!Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Sed ullam veniam pariatur
              sapiente temporibus vel quae provident, nesciunt autem in quod ex
              perspiciatis iusto earum eligendi debitis fugiat corrupti rerum!
            </p>
          </section>

          <div className="liceum-main__container--border" />

          <section className="liceum-main__container--military">
            <div className="liceum-main__container--title">
              <h1>Profil wojskowy</h1>
              <Image
                src="/kierunki-images/military.svg"
                alt="military"
                width="98"
                height="78"
              />
            </div>

            <Image
              src="/Placeholder-max.png"
              className="liceum-main__container--image"
              alt="military"
              width="600"
              height="400"
            />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam veniam
              pariatur sapiente temporibus vel quae provident, nesciunt autem in quod ex
              perspiciatis iusto earum eligendi debitis fugiat corrupti rerum!Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Sed ullam veniam pariatur
              sapiente temporibus vel quae provident, nesciunt autem in quod ex
              perspiciatis iusto earum eligendi debitis fugiat corrupti rerum!
            </p>
          </section>
        </div>

        <div className="liceum-main__footer">
          <Link href="/nabor">
            <button className="liceum-main__footer--button">Dołącz</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
