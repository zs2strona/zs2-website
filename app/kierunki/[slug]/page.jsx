import Post from '@/template/post'
import { getDirectionsPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const direction = await getDirectionsPostBySlug(params)
  const title = direction[0] ? direction[0].title : '404'

  return {
    title: title,
  }
}

export default async function kierunkiPost({ params }) {
  const direction = await getDirectionsPostBySlug(params)

  return <Post data={direction} params="kierunki" />
}
