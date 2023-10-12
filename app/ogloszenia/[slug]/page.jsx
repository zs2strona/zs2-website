import Post from '@/template/post'
import { getAnnouncementsPostBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const announcements = await getAnnouncementsPostBySlug(params)
  const title = announcements[0] ? announcements[0].title : '404'

  return {
    title: title,
  }
}

export default async function OgloszeniaPost({ params }) {
  const announcements = await getAnnouncementsPostBySlug(params)

  return <Post data={announcements} params="ogloszenia" />
}
