import Post from '@/template/post'
import { getTransmissionsPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const transmission = await getTransmissionsPostBySlug(params)
  const title = transmission[0] ? transmission[0].title : '404'

  return {
    title: title,
  }
}

export default async function AktualnosciPost({ params }) {
  const transmission = await getTransmissionsPostBySlug(params)

  return <Post data={transmission} params="aktualnosci" />
}
