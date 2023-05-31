import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Branzowka() {
  return (
    <>
      <Layout title="Szkoła Branżowa" />

      <main className={`liceum-main ${inter.className}`}>
        <h1 className="liceum-main__header">Szkoła branżowa I stopnia</h1>

        <div className="liceum-main__container">
          <section className="liceum-main__container--police">
            <div className="liceum-main__container--title">
              <h1>Elektromechanik samochodowy</h1>
              <Image
                src="/kierunki-images/Electromechanick.svg"
                alt="ems"
                width="150"
                height="100"
              />
            </div>

            <Image
              src="/kierunki-images/elektromechanik.webp"
              className="liceum-main__container--image"
              alt="ems"
              width="600"
              height="400"
            />

            <p>
              Interesujesz się samochodami, masz pasję do elektromechaniki?
              Elektromechanik to zawód w którym możesz się spełniać.
              Elektromechanik pojazdów samochodowych może pracować w warsztacie
              lub np w fabryce samochodów. Najlepsi fachowcy elektrycy prowadzą
              własne warsztaty i stacje diagnostyczne, gdzie zajmują się tylko
              elektryką i elektroniką samochodową. W szkole będą się odbywać
              zajęcia ogólnokształcące, natomiast kształcenie praktyczne w
              Centrum Kształcenia Zawodowego.
            </p>
          </section>

          <div className="tocos-main__container--border" />

          <section className="liceum-main__container--military">
            <div className="liceum-main__container--title">
              <h1>Ślusarz</h1>
              <Image
                src="/kierunki-images/Locksmith.svg"
                alt="slz"
                width="73"
                height="78"
              />
            </div>

            <Image
              src="/kierunki-images/Ślusarz.webp"
              className="liceum-main__container--image"
              alt="slz"
              width="600"
              height="400"
            />

            <p>
              Ślusarz to zawód dla prawdziwych majsterkowiczów. Ślusarz pracuje
              w przemyśle metalowym i maszynowym. Zadaniem ślusarza jest ręczna
              lub ręczno-maszynowa obróbka metalu. W szkole będą się odbywać
              zajęcia ogólnokształcące, natomiast kształcenie praktyczne w
              Centrum Kształcenia Zawodowego.
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
