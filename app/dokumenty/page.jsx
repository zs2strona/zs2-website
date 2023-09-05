import List from '@/template/list'
import { getDocumentsPosts } from '@/lib/queries'

export const metadata = {
  title: 'Dokumenty',
}

export default async function Documents() {
  const documents = await getDocumentsPosts()

  return (
    <List
      data={documents}
      title="Dokumenty"
      subtitle="Wszystkie dokumenty z Naszej Szkoły!"
      icon="document"
      documents={true}
    />
  )
}
