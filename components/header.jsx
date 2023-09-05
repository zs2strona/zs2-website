'use client'

import './style/header.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOn, setIsOn] = useState(false)
  const isMainPage = usePathname() === '/'

  function reset() {
    setIsOn(false)
  }

  return (
    <>
      <section className={isOn ? 'darknes' : ''} onClick={reset} />
      <section className={!isMainPage ? 'header-backgraund' : ''} />

      <header className="header">
        <Link href="/" onClick={reset}>
          <Image
            src={isMainPage ? '/logo-white.svg' : '/logo.svg'}
            alt="logo"
            width="323"
            height="52"
            className="header__logo"
            priority={true}
          />
        </Link>

        <div className="header__nav">
          <div className={`header__media ${isMainPage ? 'header__media--white' : ''}`}>
            <Link href="https://www.tiktok.com/@zs2lancut" target="_blank">
              <Image src="/Tictok.svg" alt="tiktok" width="28" height="28" />
            </Link>
            <Link href="https://www.facebook.com/zs2lancut/" target="_blank">
              <Image src="/Facebook.svg" alt="facebook" width="28" height="28" />
            </Link>
            <Link href="https://www.instagram.com/zs2lancut/" target="_blank">
              <Image src="/Instagram.svg" alt="instagram" width="28" height="28" />
            </Link>
          </div>

          <div className="header__menu" onClick={() => setIsOn(!isOn)}>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
          </div>
        </div>

        <div
          className={`header__menu--droped ${isOn ? 'menu--visible' : 'menu--hidden'}`}
        >
          <ul>
            <li>
              <Link href="/dziennik">e-Dziennik</Link>
            </li>
            <li>
              <Link href="/plan_lekcji">Plan lekcji</Link>
            </li>
            <hr />
            <li>
              <Link href="/aktualnosci" onClick={reset}>
                Aktualności
              </Link>
            </li>
            <li>
              <Link href="/szkola" onClick={reset}>
                Szkoła
              </Link>
            </li>
            <li>
              <Link href="/rekrutacja" onClick={reset}>
                Rekrutacja
              </Link>
            </li>
            <li>
              <Link href="/kierunki" onClick={reset}>
                Kierunki
              </Link>
            </li>
            <li>
              <Link href="/ogloszenia" onClick={reset}>
                Ogłoszenia
              </Link>
            </li>

            <div className="header__menu--droped__media">
              <li>
                <Link href="https://www.tiktok.com/@zs2lancut" target="_blank">
                  <Image src="Tictok.svg" alt="tiktok" width="28" height="28" />
                </Link>
                <Link href="https://www.facebook.com/zs2lancut/" target="_blank">
                  <Image src="Facebook.svg" alt="facebook" width="28" height="28" />
                </Link>
                <Link href="https://www.instagram.com/zs2lancut/" target="_blank">
                  <Image src="Instagram.svg" alt="instagram" width="28" height="28" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}
