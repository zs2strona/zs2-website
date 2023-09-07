import './main-page.scss'
import Link from 'next/link'

export const metadata = {
  title: 'Strona Główna | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie',
}

export default function Home() {
  return (
    <main className="main-page">
      <video
        className="main-page__video"
        src="https://www.youtube.com/watch?v=CXvkEo-5eks"
        autoPlay="autoplay"
        playsInline="playsinline"
        loop={true}
        muted={true}
      />

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
            sekretariat@zs2lancut.pl
          </p>
          <p>
            Skrzynka ePUAP/
            <br />
            zs2lancut/SkrytkaESP
          </p>
          <p>
            <Link href="https://goo.gl/maps/h7hHYKVXTWPDQJeE9">
              ul. Podzwierzyniec 41
              <br />
              37-100 Łańcut
            </Link>
          </p>
          <p>
            <Link href="https://do-moon.vercel.app" target="_blank">
              Design & Code by DoMoon
            </Link>
            <br />
            <Link
              href="https://media.graphassets.com/o6lzAgp8QNKos25g4KcW"
              target="_blank"
            >
              Polityka prywatności
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
