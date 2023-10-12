import Post from '@/template/post'
import { getOtherPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const otherPost = await getOtherPostBySlug(params)
  const title = otherPost[0] ? otherPost[0].title : '404'

  return {
    title: title,
  }
}

export default async function OhterPost({ params }) {
  const otherPost =  await getOtherPostBySlug(params)

  return <Post data={otherPost} params="/" />
}
