'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_aktualnosci.scss'
import blog from '../api/blog.json'

export default function Aktualnosci() {
  const [open, setOpen] = useState(false)
  const { Posty } = blog

  return (
    <>
      <Head title="Aktualności" />

      <main className="main-aktualnosci">
        <div className="main-aktualnosci__text">
          <h1>Aktualności</h1>
          <p>
            Najnowsze <span>wydarzenia</span> w naszej Szkole!
          </p>
        </div>

        <div className="main-aktualnosci__content">
          {Posty.slice(0, 3).map((post) => (
            <div key={post.slug} className="content__item">
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width="400"
                  height="300"
                  className="content__item--image"
                />
                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}

          <div className="main-aktualnosci__text main-aktualnosci__text--outher">
            <h1>Wcześniejsze</h1>
            <p>
              Wszystkie <span>wydarzenia</span> w naszej Szkole!
            </p>
          </div>

          {Posty.slice(3, 9).map((post) => (
            <div key={post.slug} className="content__item">
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width="400"
                  height="300"
                  className="content__item--image"
                />
                <h2>{post.title}</h2>
              </Link>
            </div>
          ))}

          {open &&
            Posty.slice(9).map((post) => (
              <div key={post.slug} className="content__item">
                <Link href={`/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width="400"
                    height="300"
                    className="content__item--image"
                  />
                  <h2>{post.title}</h2>
                </Link>
              </div>
            ))}
        </div>

        <button className="main-button" onClick={() => setOpen(!open)}>
          <span>
            Zobacz <span>więcej</span> nowości
          </span>
          <Image src="/Arrow2.png" alt="" width="10" height="18" />
        </button>
      </main>

      <Footer />
    </>
  )
}
