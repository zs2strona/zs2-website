import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_stowarzyszenie.scss'

export default function Studia() {
  return (
    <>
      <Head title="Studia podyplomowe" />

      <main className="main-stowarzyszenie">
        <div className="main-stowarzyszenie__title">
          <h1>
            Studia dyplomowane <span>dla nauczycieli</span>
          </h1>
          <h4>
            Miło nam poinformować, że od września tego roku nasza szkoła stała
            się{' '}
            <span>
              {' '}
              punktem rekrutacyjnym Konsorcjum Uczelni Wyższych VARSOVIA w
              Warszawie.{' '}
            </span>
            Ośrodek ten posiada ponad 20-letnie doświadczenie w szkoleniu i
            kształceniu, i działa w ponad 100 ośrodkach w całym kraju. Zajęcia
            odbywać się będą w sposób hybrydowy.
          </h4>
          <h1>
            DLA PIERWSZYCH TRZECH OSÓB ZAPISANYCH W SEKRETARIACIE{' '}
            <span>ZNIŻKA 50%!</span> DLA CZŁONKÓW ZWIĄZKÓW ZAWODOWYCH{' '}
            <span>ZNIŻKA 10%</span>
          </h1>
          <h4>
            Szczegóły i zapisy w sekretariacie szkoły u p.{' '}
            <span>Magdaleny Rospond</span>-koordynatora ds. rekrutacji.
          </h4>
          <h4>Poniżej plakat informacyjny:</h4>
          <Link href="https://media.graphassets.com/mmpMke7MTNKlxISZADP2">
            <h1>
              <u>
                Oferta studiów podyplomowych z <span>cennikiem.pdf</span>
              </u>
            </h1>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
