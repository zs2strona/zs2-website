'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../scss/_header.scss'

export default function Header() {
  const [isToggleOn, setIsToggleOn] = useState(false)
  const [isToggleSearchOn, setIsToggleSearchOn] = useState(false)

  function toggle() {
    setIsToggleOn(!isToggleOn)
  }
  function search() {
    setIsToggleSearchOn(!isToggleSearchOn)
  }
  function reset() {
    setIsToggleOn(false)
  }

  return (
    <>
      <section className={isToggleOn ? 'darknes' : ''} onClick={reset} />

      <header className="header">
        <div className="header__cointainer">
          <Link href="/" onClick={reset}>
            <Image
              src="Logo.svg"
              alt="logo"
              width="323"
              height="52"
              className="logo"
              priority
            />
          </Link>

          <nav>
            <div className="header__cointainer--left">
              <div className="header__media">
                <Link href="https://www.tiktok.com/@zs2lancut" target="_blank">
                  <Image src="Tictok.svg" alt="tiktok" width="28" height="28" />
                </Link>
                <Link
                  href="https://www.facebook.com/zs2lancut/"
                  target="_blank"
                >
                  <Image
                    src="Facebook.svg"
                    alt="facebook"
                    width="28"
                    height="28"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/zs2lancut/"
                  target="_blank"
                >
                  <Image
                    src="Instagram.svg"
                    alt="instagram"
                    width="28"
                    height="28"
                  />
                </Link>
              </div>

              <div className="header__nav">
                <div
                  className={
                    isToggleSearchOn ? 'search--visible' : 'search--hidden'
                  }
                >
                  <input
                    type="text"
                    placeholder="Work in progress - not working"
                    className="search-input"
                  />
                </div>

                <Image
                  src="search.svg"
                  alt="wyszukiwarka"
                  width="28"
                  height="28"
                  className="search-image"
                  onClick={search}
                />
                <div className="header__menu" onClick={toggle}>
                  <div
                    className={
                      isToggleOn
                        ? 'header__menu-item--white'
                        : 'header__menu-item--black'
                    }
                  ></div>
                  <div
                    className={
                      isToggleOn
                        ? 'header__menu-item--white'
                        : 'header__menu-item--black'
                    }
                  ></div>
                  <div
                    className={
                      isToggleOn
                        ? 'header__menu-item--white'
                        : 'header__menu-item--black'
                    }
                  ></div>
                </div>
              </div>
            </div>

            <div className={isToggleOn ? 'menu--visible' : 'menu--hidden'}>
              <div className="header__menu--droped">
                <ul>
                  <li>
                    <Link href="/dziennik">e-dziennik</Link>
                  </li>
                  <li>
                    <Link href="/plan_lekcji">plan lekcji</Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/aktualnosci" onClick={reset}>
                      aktualności
                    </Link>
                  </li>
                  <li>
                    <Link href="/szkola" onClick={reset}>
                      szkoła
                    </Link>
                  </li>
                  <li>
                    <Link href="/rekrutacja" onClick={reset}>
                      rekrutacja
                    </Link>
                  </li>
                  <li>
                    <Link href="/kierunki" onClick={reset}>
                      kierunki
                    </Link>
                  </li>
                  <li>
                    <Link href="/studia-podyplomowe" onClick={reset}>
                      studia podyplomowe
                    </Link>
                  </li>
                  <div className="header__menu--droped__media">
                    <li>
                      <Link
                        href="https://www.tiktok.com/@zs2lancut"
                        target="_blank"
                      >
                        <Image
                          src="Tictok.svg"
                          alt="tiktok"
                          width="28"
                          height="28"
                        />
                      </Link>
                      <Link
                        href="https://www.facebook.com/zs2lancut/"
                        target="_blank"
                      >
                        <Image
                          src="Facebook.svg"
                          alt="facebook"
                          width="28"
                          height="28"
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/zs2lancut/"
                        target="_blank"
                      >
                        <Image
                          src="Instagram.svg"
                          alt="instagram"
                          width="28"
                          height="28"
                        />
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
