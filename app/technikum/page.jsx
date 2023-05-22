import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_technikum.scss'

export default function Technikum() {
  return (
    <>
      <Head title="Technikum" />

      <main className="main-technikum">
        <div className="main-technikum__header">
          <h1>Technikum</h1>
        </div>

        <div className="main-technikum__container">
          <div className="main-technikum__container--left">
            <TechnikumPost
              title="Technik programista"
              name="technikum-post--programer"
              icon="computer"
              image="Placeholder.png"
            />
            <TechnikumPost
              title="Technik informatyk"
              name="technikum-post--it"
              icon="IT"
              image="Placeholder.png"
            />
          </div>

          <div className="main-technikum__container--border"></div>

          <div className="main-technikum__container--right">
            <TechnikumPost
              title="Technik mechanik lotniczny"
              name="technikum-post--flymechanic"
              icon="fly"
              image="Placeholder.png"
            />
            <TechnikumPost
              title="Technik mechatronik"
              name="technikum-post--mech"
              icon="tech"
              image="Placeholder.png"
            />
          </div>
        </div>

        <div className="main-technikum__footer">
          <Link href="/nabor">
            <button className="main-technikum__footer--button">Dołącz</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}

export function TechnikumPost({ name, icon, title, image }) {
  return (
    <section className={`technikum-post ${name}`}>
      <div className="technikum-post__title">
        <h1>{title}</h1>
        <Image
          src={`/kierunki-images/${icon}.svg`}
          className="technikum-post__icon"
          alt=""
          width="96"
          height="78"
        />
      </div>
      <Image
        src={`/${image}`}
        className="technikum-post__image"
        alt=""
        width="550"
        height="400"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ullam veniam
        pariatur sapiente temporibus vel quae provident, nesciunt autem in quod ex
        perspiciatis iusto earum eligendi debitis fugiat corrupti rerum!Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Sed ullam veniam pariatur sapiente
        temporibus vel quae provident, nesciunt autem in quod ex perspiciatis iusto earum
        eligendi debitis fugiat corrupti rerum!
      </p>
    </section>
  )
}
