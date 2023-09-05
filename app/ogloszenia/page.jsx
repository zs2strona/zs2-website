import Tiles from '@/template/tiles'
import { getAnnouncements } from '@/lib/queries'

export const metadata = {
  title: 'Ogłoszenia',
}

export default async function Ogłoszenia() {
  const announcements = await getAnnouncements()

  return (
    <Tiles
      data={announcements}
      params="ogloszenia"
      title="Ogłoszenia"
      subtitle="Wszystkie ogłoszenia z Naszej Szkoły!"
      icon="announcement"
    />
  )
}
