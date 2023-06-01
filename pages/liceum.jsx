import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Layout } from '@/template/layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Liceum() {
  return (
    <>
      <Layout title="Liceum" />

      <main className={`liceum-main ${inter.className}`}>
        <h1 className="liceum-main__header">Klasa mundurowa</h1>

        <div className="liceum-main__container">
          <section className="liceum-main__container--police">
            <div className="liceum-main__container--title">
              <h1>Profil policyjny</h1>
              <Image
                src="/kierunki-images/police.svg"
                alt="police"
                width="223"
                height="67"
              />
            </div>

            <Image
              src="/kierunki-images/policja.jpg"
              className="liceum-main__container--image"
              alt="police"
              width="600"
              height="400"
            />

            <p>
              Zostań policjantem, jeżeli chcesz rozwijać pasje i
              zainteresowania. Profil policyjny oferuje wszechstronne szkolenie,
              które pozwoli Ci zdobyć niezbędne umiejętności i wiedzę związane z
              pracą w służbie policyjnej. Będziesz uczyć się prawa, procedur
              karnych, technik śledczych oraz wielu przydatnych rzeczy w życiu
              codziennym. To daje Ci solidne fundamenty, które mogą przyczynić
              się do osiągnięcia sukcesu w przyszłej karierze w policji.
              <ul>
                <li>
                  Przedmioty wybrane do punktacji: język polski, matematyka,
                  język angielski, geografia
                </li>
                <li>
                  Przedmiot rozszerzony: matematyka, geografia, język angielski
                </li>
                <li>Języki obce: język angielski, język hiszpański</li>
                <li>
                  Przedmioty dodatkowe: bezpieczeństwo narodowe, logistyka
                  ekonomiczna, edukacja wojskowa, wiedza o policji
                </li>
                <li>
                  Wysoki poziom nauczania i dobre przygotowanie do pracy w
                  służbach mundurowych
                </li>
                <li>
                  Otrzymasz dodatkowe punkty w postępowaniu kwalifikacyjnym do
                  policji
                </li>
              </ul>
            </p>
            <Link href="https://www.facebook.com/zs2lancut/posts/pfbid06KnEFyUSfcpbhLczzSyxHNc7Wds4BR5FWdhMuhQb3rBbrANKQkXw68tUE5NLEZDfl?fbclid=IwAR0MgK_t7cqyKCduU4NZuhh3CqXzrHBax99DqDqDwsZR58Y3_QZp7ZV7ops">
              <h3 className="Link">Zobacz wiecej!</h3>
            </Link>
          </section>

          <div className="liceum-main__container--border" />

          <section className="liceum-main__container--military">
            <div className="liceum-main__container--title">
              <h1>Profil wojskowy</h1>
              <Image
                src="/kierunki-images/military.svg"
                alt="military"
                width="98"
                height="78"
              />
            </div>

            <Image
              src="/kierunki-images/wojsko.jpg"
              className="liceum-main__container--image"
              alt="military"
              width="600"
              height="400"
            />

            <p>
              Zostań żołnierzem, jeżeli chcesz spożytkować swoją energię i
              zapał, rozwijać pasje i zainteresowania, kształtować siłę i
              sprawność, pomagać potrzebującym i czuć się odpowiedzialnym za
              innych. Poprzez udział w ćwiczeniach poligonowych, zajęciach
              survivalowych, szkoleniu strzeleckim i pierwszej pomocy nabędziesz
              pewności siebie, przełamiesz wewnętrzne bariery, przeżyjesz
              przygodę i poznasz niezwykłych ludzi.
              <ul>
                <li>
                  Przedmioty wybrane do punktacji: język polski, matematyka,
                  język angielski, geografia
                </li>
                <li>
                  Przedmiot rozszerzony: matematyka, geografia, język angielski
                </li>
                <li>Języki obce: język angielski, język hiszpański</li>
                <li>
                  Przedmioty dodatkowe: bezpieczeństwo narodowe, logistyka
                  ekonomiczna, edukacja wojskowa, wiedza o policji
                </li>
                <li>
                  Wysoki poziom nauczania i dobre przygotowanie do pracy w
                  służbach mundurowych
                </li>
                <li>
                  Będziesz preferencyjnie traktowany podczas naboru do Wojsk
                  Obrony Terytorialnej i innych rodzajów służb wojskowych
                </li>
              </ul>
            </p>
            <Link href="https://www.facebook.com/zs2lancut/posts/pfbid06KnEFyUSfcpbhLczzSyxHNc7Wds4BR5FWdhMuhQb3rBbrANKQkXw68tUE5NLEZDfl?fbclid=IwAR0MgK_t7cqyKCduU4NZuhh3CqXzrHBax99DqDqDwsZR58Y3_QZp7ZV7ops">
              <h3 className="Link">Zobacz wiecej!</h3>
            </Link>
          </section>
        </div>

        <div className="liceum-main__footer">
          <Link href="/nabor">
            <button className="liceum-main__footer--button">Dołącz</button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
