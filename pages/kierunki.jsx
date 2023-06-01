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
          box="main-kierunki__box-1"
          link="technikum"
          image1="/imt1.png"
          image2="/imt2.png"
          image3="/imt3.png"
        />

        <Kier
          title="Liceum Ogólnokształcące:"
          box="main-kierunki__box-2"
          link="liceum"
          image1="/iml1.jpg"
          image2="/iml2.jpg"
          image3="/iml3.jpg"
        />

        <Kier
          title="Szkoła branżowa I stopnia:"
          box="main-kierunki__box-3"
          link="szkola-branzowa"
          image1="/imt1.png"
          image2="/imt2.png"
          image3="/imt3.png"
        />
      </main>

      <Footer />
    </>
  )
}

export function Kier({ title, box, link, image1, image2, image3 }) {
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
          <button className="main-kierunki__button">
            Sprawdź <span>kierunki</span> kształcenia
          </button>
        </Link>
      </div>
    </section>
  )
}
