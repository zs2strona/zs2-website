import { getTransmissionPosts } from '@/lib/queries'
import Tiles from '@/template/tiles'

export const metadata = {
  title: 'Aktualności',
  description:
    'Żyjemy wszystkimi momentami naszej szkoły. Cenimy osiągnięcia i jesteśmy dumni z tego, co robimy. Rozwijamy nasze pasje i wygrywamy w konkursach.',
}

export default async function Aktualnosci() {
  const transmissionPosts = await getTransmissionPosts()

  return (
    <Tiles
      data={transmissionPosts}
      params="aktualnosci"
      title="Aktualności"
      subtitle="Najnowsze wydarzenia w naszej Szkole!"
      icon="news"
    />
  )
}
