import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <>
      <section className="headerbg" />

      <footer className={`footer ${inter.className}`}>
        <div className="footer__text">
          <h1>Zespół Szkół nr 2 im. Jana Kochanowskiego w Łańcucie</h1>

          <div className="footer__description">
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
              <Link href="https://www.google.com/maps/place/Zespół+Szkół+nr+2+im.+J.+Kochanowskiego/@50.0914188,22.2312803,15z/data=!4m5!3m4!1s0x473cee970324f3a7:0x1d1b4a02738c9d6f!8m2!3d50.0914188!4d22.2312803">
                ul. Podzwierzyniec
                <br />
                41,37-100 Łańcut
              </Link>
            </p>

            <p>
              <Link href="https://do-moon.vercel.app">Design & Code by DoMoon</Link>
              <br />
              <Link
                href="https://media.graphassets.com/o6lzAgp8QNKos25g4KcW"
                target="_blank"
              >
                Polityka prywatności
              </Link>
            </p>
          </div>
        </div>

        <Image
          src="/footer-logo.png"
          alt="logo"
          className="footer__logo"
          width="128"
          height="128"
        />
      </footer>
    </>
  )
}
