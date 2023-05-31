import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Studia() {
  return (
    <>
      <Layout title="Studia podyplomowe" />

      <main className={`main-stowarzyszenie ${inter.className}`}>
        <div className="main-stowarzyszenie__title">
          <h1>
            Studia dyplomowane <span>dla nauczycieli</span>
          </h1>
          <h4>
            Miło nam poinformować, że od września tego roku nasza szkoła stała się
            <span>
              punktem rekrutacyjnym Konsorcjum Uczelni Wyższych VARSOVIA w Warszawie.
            </span>
            Ośrodek ten posiada ponad 20-letnie doświadczenie w szkoleniu i kształceniu, i
            działa w ponad 100 ośrodkach w całym kraju. Zajęcia odbywać się będą w sposób
            hybrydowy.
          </h4>
          <h1>
            DLA PIERWSZYCH TRZECH OSÓB ZAPISANYCH W SEKRETARIACIE <span>ZNIŻKA 50%!</span>{' '}
            DLA CZŁONKÓW ZWIĄZKÓW ZAWODOWYCH <span>ZNIŻKA 10%</span>
          </h1>
          <h4>
            Szczegóły i zapisy w sekretariacie szkoły u p. <span>Magdaleny Rospond</span>
            -koordynatora ds. rekrutacji.
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
