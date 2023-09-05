import Post from '@/template/post'
import { getOtherPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const otherPost = await getOtherPostBySlug(params)

  return {
    title: otherPost[0].title,
  }
}

export default async function SchoolPost({ params }) {
  const otherPost = await getOtherPostBySlug(params)

  return <Post data={otherPost} params="szkola" />
}
