import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Technikum() {
  return (
    <>
      <Layout title="Technikum" />

      <main className={`main-technikum ${inter.className}`}>
        <div className="main-technikum__header">
          <h1>Technikum</h1>
        </div>

        <div className="main-technikum__container">
          <div className="main-technikum__container--left">
            <section className="technikum-post technikum-post--programer">
              <div className="technikum-post__title">
                <h1>Technik programista</h1>
                <Image
                  src="kierunki-images/computer.svg"
                  className="technikum-post__icon"
                  alt="icon"
                  width="96"
                  height="78"
                />
              </div>

              <Image
                src="/kierunki-images/programista.jpg"
                className="technikum-post__image"
                alt=""
                width="550"
                height="400"
              />

              <p>
                Zostań programistą, naucz się logicznego myślenia, stosuj
                matematykę i grafikę zarazem. Twórz oprogramowanie, strony
                internetowe i aplikacje pod Androida, IOS. Wyżyj się
                intelektualnie, poznaj zawód przyszłości, obcuj z najnowszymi
                technologiami i trendami IT. Zdobądź certyfikat Akademii
                MikroTika!!! Tu czeka Cię dużo ciekawej pracy praktycznej -
                projektowej, programowanie, poznawanie oprogramowania,
                projektowanie grafiki komputerowej.
                <ul>
                  <li>
                    Przedmioty wybrane do punktacji: język polski, matematyka,
                    język angielski i fizyka
                  </li>
                  <li> Przedmiot rozszerzony: matematyka</li>
                  <li>
                    Języki obce: język angielski, język niemiecki/hiszpański
                  </li>
                  <li>
                    Przedmiot dodatkowy: projektowanie i programowanie urządzeń
                  </li>
                  <li>
                    Wysoki poziom nauczania i dobre przygotowanie do egzaminu
                    zawodowego w kwalifikacjach - INF.03, INF.04
                  </li>
                </ul>
              </p>

              <Link href="https://www.facebook.com/zs2lancut/posts/pfbid02WL6iAZh12CmpwvkZLa6ZoPRrgSxSz7L7jhtqdNUEPScRHyewHXxgKcDG9kW5jfpvl?fbclid=IwAR3uEi8JVs7pxje51xyESBVuu1wazWiiKyCvompbOEGvl0OkfXW6cUz9tx8">
                <h3 className="Link">Zobacz wiecej!</h3>
              </Link>
            </section>

            <section className="technikum-post technikum-post--it">
              <div className="technikum-post__title">
                <h1>Technik informatyk</h1>
                <Image
                  src="kierunki-images/IT.svg"
                  className="technikum-post__icon"
                  alt="icon"
                  width="96"
                  height="78"
                />
              </div>

              <Image
                src="/Placeholder.png"
                className="technikum-post__image"
                alt=""
                width="550"
                height="400"
              />

              <p>
                Zostań informatykiem - to ciekawy, twórczy, prestiżowy i bardzo
                dobrze opłacany zawód dla ludzi dynamicznych i pełnych
                pomysłowości. Przygotuj się - jako przyszły specjalista do
                realizacji zadań w tym zawodzie. Zdobądź certyfikat Akademii
                MikroTika!!! Informatyka zamieszkała we wszystkich sferach
                naszego życia od nauki poprzez przemysł, medycynę, a skończywszy
                na rozrywce.
                <ul>
                  <li>
                    Przedmioty wybrane do punktacji: język polski, matematyka,
                    język angielski i fizyka
                  </li>
                  <li>Przedmiot rozszerzony: matematyka</li>
                  <li>
                    Języki obce: język angielski, język niemiecki/hiszpański
                  </li>
                  <li>
                    Przedmiot dodatkowy: projektowanie i programowanie urządzeń
                  </li>
                  <li>
                    Wysoki poziom nauczania i dobre przygotowanie do egzaminu
                    zawodowego w kwalifikacjach - INF.02, INF.03
                  </li>
                </ul>
              </p>

              <Link href="https://www.facebook.com/zs2lancut/posts/pfbid02ePBzz93ypGgckmaPT7to2SnbFspEkpvQA1ToqDrtn8hrP5ai2KSk88kR81gpdFywl?fbclid=IwAR2IDXYi5X4oKt7cEFJYlza6zBAdpsrMzFC-o6_9ozZgVJhIcqQKwyJHMYY">
                <h3 className="Link">Zobacz wiecej!</h3>
              </Link>
            </section>
          </div>

          <div className="main-technikum__container--border"></div>

          <div className="main-technikum__container--right">
            <section className="technikum-post technikum-post--flymechanic">
              <div className="technikum-post__title">
                <h1>Technik mechanik lotniczny</h1>
                <Image
                  src="kierunki-images/fly.svg"
                  className="technikum-post__icon"
                  alt="icon"
                  width="96"
                  height="78"
                />
              </div>

              <Image
                src="/kierunki-images/mechaniklotnik.JPG"
                className="technikum-post__image"
                alt=""
                width="550"
                height="400"
              />

              <p>
                Zostań mechanikiem lotniczym, pracuj z najnowocześniejszą
                technologia lotniczą z użyciem najbardziej zaawansowanych
                rozwiązań do naprawy i diagnostyki samolotów.
                <br /> Obcuj z najwyższymi standardami kultury technicznej.
                Zostań członkiem zespołu profesjonalistów z różnych dziedzin i
                branż, który będzie naprawiał samoloty.
                <ul>
                  <li>
                    Przedmioty wybrane do punktacji: język polski, matematyka,
                    język angielski i fizyka
                  </li>
                  <li>Przedmiot rozszerzony: matematyka</li>
                  <li>
                    Języki obce: język angielski, język niemiecki/hiszpański
                  </li>
                  <li>
                    Przedmiot dodatkowy: projektowanie i programowanie urządzeń
                  </li>
                  <li>
                    Wysoki poziom nauczania i dobre przygotowanie do egzaminu
                    zawodowego w kwalifikacji - TLO. 03
                  </li>
                </ul>
              </p>

              <Link href="https://www.facebook.com/zs2lancut/posts/pfbid0w1JHHkPejXceY2GKoTJDRHtEatWq4iX4n1ZFJyYE2srkNUhwqYUqakmNJr2r5kcnl?fbclid=IwAR29eq3ZAbO2GRzIAeuCrRC3j6DE4qNL4uW74ycCEXEDnVQ56QiY5aCwx3E">
                <h3 className="Link">Zobacz wiecej!</h3>
              </Link>
            </section>

            <section className="technikum-post technikum-post--mech">
              <div className="technikum-post__title">
                <h1>Technik mechatronik</h1>
                <Image
                  src="kierunki-images/tech.svg"
                  className="technikum-post__icon"
                  alt="icon"
                  width="96"
                  height="78"
                />
              </div>

              <Image
                src="/kierunki-images/mechatronik.JPG"
                className="technikum-post__image"
                alt=""
                width="550"
                height="400"
              />

              <p>
                Zostań mechatronikiem. Majsterkujesz? Interesujesz się techniką?
                Zgłębiasz tajniki działania nowoczesnych urządzeń i ich
                programowania? Fascynujesz się nowymi technologiami? - dołącz do
                nas i naucz się łączyć dziedziny mechaniki, elektroniki,
                robotyki i informatyki.
                <ul>
                  <li>
                    Przedmioty wybrane do punktacji: język polski, matematyka,
                    język angielski i fizyka
                  </li>
                  <li>Przedmiot rozszerzony: matematyka</li>
                  <li>
                    Języki obce: język angielski, język niemiecki/hiszpański
                  </li>
                  <li>Przedmiot dodatkowy: projektowanie i programowanie</li>
                  urządzeń
                  <li>
                    Wysoki poziom nauczania i dobre przygotowanie do egzaminu
                    zawodowego w kwalifikacjach - ELM.03, ELM.06
                  </li>
                </ul>
              </p>

              <Link href="https://www.facebook.com/zs2lancut/posts/pfbid021Zb1gCrFPV4gr5D2XFQcHv7RTggjoNnPpcLEZLcKXmzekewTqLwXiKa41fK3QuTZl?fbclid=IwAR1RIK3banRxIoMNYfIOUY_3ZaDHXJ5vLnw9FKNmA1A1dO7k3ioPfUPq83o">
                <h3 className="Link">Zobacz wiecej!</h3>
              </Link>
            </section>
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
