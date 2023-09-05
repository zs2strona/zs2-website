'use client'

import './style/footer.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  return (
    pathname != '/' && (
      <footer className="footer ">
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
              <Link href="https://goo.gl/maps/h7hHYKVXTWPDQJeE9">
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
          src="/footer-logo.webp"
          alt="logo"
          className="footer__logo"
          width="128"
          height="128"
        />
      </footer>
    )
  )
}
