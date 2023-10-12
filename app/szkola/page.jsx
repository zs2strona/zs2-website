import './szkola.scss'
import { getSchoolPosts } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Szkoła',
}

export default async function Szkola() {
  const schoolPosts = await getSchoolPosts()

  return (
    <main className="szkola">
      <h1 className="szkola__title">
        O <span>Naszej</span> Szkole
      </h1>

      <section className="szkola__content">
        <div className="szkola__content--left">
          <Link href="/dokumenty">
            <button className="szkola__button">Dokumenty</button>
          </Link>

          <Link href="/szkola/stowarzyszenie" className="szkola__button--center">
            <button className="szkola__button szkola__button--center">
              Stowarzyszenie
            </button>
          </Link>

          <Link href="/znizki">
            <button className="szkola__button">Zniżki</button>
          </Link>
        </div>

        <Image
          src="/kochanowski.svg"
          alt="image"
          width="180"
          height="190"
          className="szkola__content--center"
        />

        <div className="szkola__content--right">
          <Link href="/kadra" className="szkola__button--center">
            <button className="szkola__button szkola__button--center">Kadra</button>
          </Link>

          <Link href="/samorzad">
            <button className="szkola__button">Samorząd szkolny</button>
          </Link>

          <Link href="/szkola/studia-podyplomowe" className="szkola__button--center">
            <button className="szkola__button szkola__button--center">
              Studia podyplomowe
            </button>
          </Link>
        </div>
      </section>

      <hr />

      <section className="szkola__posts">
        {schoolPosts ? schoolPosts.map((post) => (
          <Link key={post.id} href={post.link}>
            <div className="szkola__post">
              <Image src={post.image.url} alt={post.title} width="400" height="300" />

              <h2>{post.title}</h2>
            </div>
          </Link>
        )): (
          <h1>Niedostępne!</h1>
        )}
      </section>
    </main>
  )
}
