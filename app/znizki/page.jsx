import { getDiscountsPosts } from '@/lib/queries'
import List from '@/template/list'

export const metadata = {
  title: 'Zniżki',
}

export default async function Discounts() {
  const discounts = await getDiscountsPosts()

  return (
    <List
      data={discounts}
      title="Zniżki"
      subtitle="Zniżki dostepne w Naszej Szkole!"
      icon="discount"
    >
      <ul style={{ maxWidth: 700, marginTop: 0, marginBottom: 50 }}>
        <li>Rabaty obowiązują od 22 marca 2023r. Do 21 marca 2024r.</li>
        <li>
          Rabaty przysługują Zarówno uczniom szkoły jak i nauczycielom i pracownikom.
        </li>
        <li>
          Aby skorzystać ze Zniżki należy okazać ważną legitymację uczniowską - w
          przypadku uczniów. Dla Nauczycieli i pracowników będą wydawane imienne karty
          rabatowe.
        </li>
      </ul>
    </List>
  )
}
