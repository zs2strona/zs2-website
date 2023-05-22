import Link from 'next/link'
import Head from './head'
import './scss/_main.scss'

export default function Home() {
  return (
    <>
      <Head title="Strona główna" />

      <main className="main-page">
        <video src="/movie.mp4" autoPlay muted loop className="main-page__video" />

        <footer className="main-page__footer">
          <Link href="/rekrutacja">
            <button className="main-page__button">
              Rekrutacja <span>szkolna</span> 2023/2024
            </button>
          </Link>

          <div className="main-page__description">
            <p>
              tel.: 17 225 25 82
              <br />
              zs2@powiatlancut.pl
            </p>
            <p>
              Skrzynka ePUAP/
              <br />
              zs2lancut/SkrytkaESP
            </p>
            <p>
              <Link href="https://www.google.com/maps/place/Zespół+Szkół+nr+2+im.+J.+Kochanowskiego/@50.0914188,22.2312803,15z/data=!4m5!3m4!1s0x473cee970324f3a7:0x1d1b4a02738c9d6f!8m2!3d50.0914188!4d22.2312803">
                ul. Podzwierzyniec 41
                <br />
                37-100 Łańcut
              </Link>
            </p>
            <p>
              Design & Code by DKM
              <br />
              <Link href="/prywatnosc" target="_blank">
                Polityka prywatności
              </Link>
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
