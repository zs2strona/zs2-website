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
                src="/Placeholder.png"
                className="technikum-post__image"
                alt=""
                width="550"
                height="400"
              />

              <p>
                Przedmiot rozszerzony: matematyka Języki obce: język angielski,
                język niemiecki/hiszpański Przygotowanie do egzaminu zawodowego
                w kwalifikacjach: INF.03. oraz INF.04. W ramach Akademii
                MikroTika nasi uczniowie będą mogli zdobywać dodatkowe
                certyfikowane i uznawane na całym świecie umiejętności. Jako
                absolwent kończący szkołę w zawodzie technik programista
                będziesz potrafił: tworzyć strony internetowe przy użyciu HTML,
                CSS, JS, PHP, JavaScript i MySQL. programować w językach: C++,
                C#, Python, Java, stosować język SQL w programowaniu aplikacji
                bazodanowych; budować witryny i aplikacje mobilne na IOS,
                Android z wykorzystaniem API oparciu o rozwiązania chmurowe,
                tworzyć i wdrażać grafikę komputerową oraz multimedia w swoich
                własnych projektach, skalować oraz drukować modele 3D
                projektować, programować zaawansowane aplikacje desktopowe,
                webowe i mobilne. Kierunek pod patronatem politechniki
                rzeszowskiej.
              </p>
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
                Przedmiot rozszerzony: matematyka Języki obce: język angielski,
                język niemiecki/hiszpański Przygotowanie do egzaminu zawodowego
                w kwalifikacjach: INF.02 oraz INF.03. W trakcie nauki będziesz
                miał możliwość uzyskania dodatkowych Certyfikatów, m.in.: W
                ramach Akademii MikroTika nasi uczniowie będą mogli zdobywać
                dodatkowe certyfikowane i uznawane na całym świecie umiejętności
                zawodowe. Absolwent kierunku Technik Informatyk będzie wykonywał
                zadania: Montaż oraz eksploatacja komputera i urządzeń
                peryferyjnych, naprawa i diagnostyka usterek sprzętu
                komputerowego, projektowanie i wykonywanie lokalnej sieci
                komputerowej, administrowanie sieciowymi systemami operacyjnymi,
                projektowanie baz danych i administrowania bazami,
                ponfigurowanie urządzeń sieciowych, serwerów oraz routerów,
                tworzenie i administrowania stronami WWW, tworzyć aplikacje w
                wybranych językach, w szczególności C++ oraz JAVA, tworzyć
                strony internetowe z użyciem HTML, CSS oraz PHP. Konwertować
                strony CMS Joomla i WordPress.
              </p>
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
                Przedmiot rozszerzony: matematyka Języki obce: język angielski,
                język niemiecki/hiszpański przygotowanie do egzaminu zawodowego
                w kwalifikacji: TLO. 03. Najnowocześniejsza szkolna hala
                serwisowa - dwa turbowentylatorowe silniki CF6-50 (stosowane
                wcześniej m.in. w samolotach Boeing 747), waga ponad 4 tony;
                specjalistyczne oprzyrządowanie i dokumentacja serwisowa;
                pracownie wyposażone w nowoczesny sprzęt i specjalistyczne
                narzędzia niezbędne do wykonywania procedur serwisowych. samolot
                Liberty XL2 na wypożyczeniu z OKL do nauki budowy płatowca.ZS2
                Łańcut ośrodkiem certyfikacji L2 - licencji na mechanika
                szybowców, motoszybowców i małych samolotów do 1200 kg.
                Organizacjach obsługowych lotnictwa cywilnego, certyfikowanych
                zgodnie ze standardami europejskiego prawa lotniczego. Klasa pod
                patronatem podkarpackiej firmy EME Aero.
              </p>
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
                Przedmiot rozszerzony: matematyka Języki obce: język angielski,
                język niemiecki/hiszpański. Przygotowanie do egzaminu zawodowego
                w kwalifikacjach:ELM.03. oraz ELM.06. Absolwent kierunku Technik
                Mechatronik będzie umiał między innymi: budować i uruchamiać
                urządzenia elektryczne, pneumatyczne i hydrauliczne, projektować
                3D, programować i obsługiwać nowoczesne urządzenia
                mechatroniczne programować sterowniki PLC. Absolwent
                mechatroniki jest przygotowany do wykonywania zadań zawodowych
                związanych z: projektowaniem, obsługiwaniem urządzeń i systemów
                mechatronicznych, projektowaniem, konstruowaniem, montażem oraz
                demontażem urządzeń i systemów mechatronicznych, programowaniem,
                użytkowaniem, diagnozowaniem oraz naprawami nowoczesnego
                sprzętu.
              </p>
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
