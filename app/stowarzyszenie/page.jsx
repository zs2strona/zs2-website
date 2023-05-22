import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_stowarzyszenie.scss'

export default function Stowarzyszenie() {
  return (
    <>
      <Head title="Stowarzyszenie" />

      <main className="main-stowarzyszenie">
        <div className="main-stowarzyszenie__title">
          <h1>
            Stowarzyszenie <span>Rozwoju</span> Zespołu Szkół <span>Nr 2</span>{' '}
            im. Jana <span>Kochanowskiego</span> w Łańcucie
          </h1>
          <h4>
            Stowarzyszenie zostało powołane na zebraniu założycielskim Uchwałą
            nr 1/2011 z dnia 12 stycznia 2011 roku i zarejestrowane w Sądzie
            Rejonowym w Rzeszowie 7 lutego 2011 roku, pod numerem KRS
            0000377840. Jednym z celów Stowarzyszenia jest rozwijanie i
            wspieranie działań edukacyjnych i kulturalnych na rzecz uczniów i
            społeczności lokalnej oraz pomoc w przedsięwzięciach i inwestycjach
            związanych z rozwojem szkoły. Główny dochód Stowarzyszenia stanowią
            składki członkowskie, darowizny uczniów, firm, instytucji i innych
            osób indywidualnych, chcących wesprzeć działalność
            Stowarzyszenia.Obecnie liczba członków Stowarzyszenia stanowi 38
            osób.
          </h4>
          <h1>
            Zarząd Stowarzyszenia <span>Rozwoju</span> Zespołu Szkół{' '}
            <span>Nr 2</span> im. Jana <span>Kochanowskiego</span> w Łańcucie
          </h1>
          <h4>
            <span>Prezes:</span> Katarzyna Sasor Dyrda
          </h4>
          <h4>Wiceprezes: Jakub Słomski</h4>
          <h4>Skarbnik: Magdalena Rospond</h4>
          <h4>Sekretarz: Krzysztof Kwolek</h4>
          <h4>Członek: Anna Morycz</h4>
          <h4>Członek: Joanna Kamińska</h4>
          <h1>
            Komisja <span>Rewizyjna:</span>
          </h1>
          <h4>
            <span>Przewodnicząca:</span> Małgorzata Wiatr
          </h4>
          <h4>Zastępca: Grzegorz Kolasa</h4>
          <h4>Członek: Marta Lasek</h4>

          <h1>Kontakt:</h1>
          <h4>ul. Podzwierzyniec 41, 37-100 Łańcut Tel.(17) 225-25-82</h4>
          <h4>
            e-mail: <span>sekretariat@zs2lancut.pl</span>
          </h4>
          <h4>REGON: 180665040</h4>
          <h4>NIP: 815-17-89-030</h4>
          <h4>KRS: 0000377840</h4>
          <h4>⁠Numery kont: </h4>
          <h4>
            <span>BNP PARIBAS Oddział w Łańcucie</span>
          </h4>
          <h4>Rachunek bieżący (darowizny, składki członkowskie):</h4>
          <h4>88 1600 1462 1884 8722 3000 0001</h4>
        </div>
      </main>

      <Footer />
    </>
  )
}
