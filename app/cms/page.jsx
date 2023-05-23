import client from './apollo-client'
import { gql } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'

export default function Cms({ hypers }) {
  return (
    <>
      <main className="main">
        <div className="main__titles">
          <h1>Movie data base:</h1>
          <Link href="/announcements">ant</Link>
          <h1>Hyper</h1>
        </div>

        <div className="main__container">
          {hypers.map((movie, i) => (
            <Link key={i} href={movie.slug}>
              <div key={i} className="main__movie">
                <Image
                  src={movie.image.url}
                  alt={movie.title}
                  width={300}
                  height={400}
                />

                <h2>{movie.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        hypers {
          title
          releaseDate
          image {
            url
          }
          description {
            raw
          }
          slug
        }
      }
    `,
  })
  const { hypers } = data
  return {
    props: {
      hypers,
    },
  }
}
