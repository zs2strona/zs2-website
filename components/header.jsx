import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
              priority={true}
            />
          </Link>

          <nav>
            <div className="header__cointainer--left">
              <div className="header__media">
                <Link href="https://www.tiktok.com/@zs2lancut" target="_blank">
                  <Image src="Tictok.svg" alt="tiktok" width="28" height="28" />
                </Link>
                <Link href="https://www.facebook.com/zs2lancut/" target="_blank">
                  <Image src="Facebook.svg" alt="facebook" width="28" height="28" />
                </Link>
                <Link href="https://www.instagram.com/zs2lancut/" target="_blank">
                  <Image src="Instagram.svg" alt="instagram" width="28" height="28" />
                </Link>
              </div>

              <div className="header__nav">
                <div className={isToggleSearchOn ? 'search--visible' : 'search--hidden'}>
                  <input type="text" className="search-input" id="label-search" />
                  <label htmlFor="label-search">off</label>
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
                      isToggleOn ? 'header__menu-item--white' : 'header__menu-item--black'
                    }
                  ></div>
                  <div
                    className={
                      isToggleOn ? 'header__menu-item--white' : 'header__menu-item--black'
                    }
                  ></div>
                  <div
                    className={
                      isToggleOn ? 'header__menu-item--white' : 'header__menu-item--black'
                    }
                  ></div>
                </div>
              </div>
            </div>

            <div className={isToggleOn ? 'menu--visible' : 'menu--hidden'}>
              <div className="header__menu--droped">
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
