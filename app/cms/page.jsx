import client from './apollo-client'
import { gql } from '@apollo/client'
import Link from 'next/link'

export default function Cms({ hypers }) {
  return (
    <>
      <main className="main">
        <div className="main__titles">
          <h1>Movie data base:</h1>
          <Link href="/announcements">ant</Link>
          <h1>Hyper</h1>
        </div>

        <div className="main__container"></div>
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
