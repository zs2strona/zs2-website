import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Liceum() {
  return (
    <>
      <Layout title="Liceum" />

      <main className={`liceum-main ${inter.className}`}>
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
              src="/kierunki-images/policja.jpg"
              className="liceum-main__container--image"
              alt="police"
              width="600"
              height="400"
            />

            <p>
              Przedmiot rozszerzony: matematyka, geografia, język angielski.
              Języki obce: język angielski, język hiszpański. Absolwent tej
              klasy Zdobędziesz wykształcenie ogólne i umiejętności w zakresie
              szkolenia podstawowego obowiązującego w Polskich Siłach Zbrojnych
              RP i w innych formacjach mundurowych. Otrzymasz dodatkowe punkty w
              postępowaniu kwalifikacyjnym do policji. Uzyskasz dodatkowe punkty
              rankingowe w rekrutacji na wyższe uczelnie wojskowe i policyjne.
              Będziesz mógł aplikować do postępowania rekrutacyjnego do pracy w
              Policji oraz innych służbach odpowiedzialnych za porządek
              publiczny a także w firmach i instytucjach z sektora ochrony osób
              i mienia. będziesz mógł kontynuować edukację w cywilnych szkołach
              i uczelniach na kierunkach z zakresu bezpieczeństwo publiczne oraz
              uczelniach wojskowych i Wyższej Szkoły Policji. Klasa mundurowa
              uczy odpowiedzialności, patriotyzmu i szacunku do drugiego
              człowieka.
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
              src="/kierunki-images/wojsko.jpg"
              className="liceum-main__container--image"
              alt="military"
              width="600"
              height="400"
            />

            <p>
              Przedmiot rozszerzony: matematyka, geografia, język angielski.
              Języki obce: język angielski, język hiszpański. Jako absolwent tej
              klasy zdobędziesz wykształcenie ogólne i umiejętności w zakresie
              szkolenia podstawowego obowiązującego w Polskich Siłach Zbrojnych
              RP i w innych formacjach mundurowych. Uzyskasz dodatkowe punkty
              rankingowe w rekrutacji na wyższe uczelnie wojskowe i policyjne.
              Będziesz preferencyjnie traktowany podczas naboru do Wojsk Obrony
              Terytorialnej i innych rodzajów służb wojskowych. Znajdziesz
              zatrudnienie we wszelkich instytucjach mundurowych, prawnych,
              penitencjarnych, administracji państwowej i publicznej, inspekcji
              i straży. Będziesz mógł kontynuować edukację w cywilnych szkołach
              i uczelniach na kierunkach z zakresu bezpieczeństwo publiczne oraz
              uczelniach wojskowych i Wyższej Szkoły Policji. Klasa mundurowa
              uczy odpowiedzialności, patriotyzmu i szacunku do drugiego
              człowieka.
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
