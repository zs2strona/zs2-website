import Post from '@/template/post'
import { getAnnouncementsPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const announcements = await getAnnouncementsPostBySlug(params)

  return {
    title: announcements[0].title,
  }
}

export default async function OgloszeniaPost({ params }) {
  const announcements = await getAnnouncementsPostBySlug(params)

  return <Post data={announcements} params="ogloszenia" />
}
