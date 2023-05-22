import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from '../head'
import '../scss/_samorzad.scss'

export default function Samorzad() {
  return (
    <>
      <Head title="Samorząd" />

      <main className="container">
        <div className="main-header">
          <h1>
            Samorząd szkolny <span>2022/2023</span>
          </h1>
          <h1>Skład samorządu</h1>
        </div>

        <div className="main-container">
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
        </div>
        <div className="main-names">
          <h2>
            <span>Artur Milan 4TCP</span> - przewodniczący
          </h2>
          <h2>Aleksandra Kiełb 4TCP – wiceprzewodnicząca</h2>
          <h2>Bartosz Janusz 4TCP – sekretarz</h2>
          <h2>Bartosz Cyran 4TCP – członek</h2>
          <h2>Aneta Woźniak 2LA – członek</h2>
        </div>
        <div className="main-guards-title">
          <h1>Opiekunowie samorządu:</h1>
        </div>
        <div className="main-guards">
          <h2>mgr Magdalena Rospond</h2>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="250"
            height="450"
          ></Image>
          <h2>mgr Maja Papierz-Jucha</h2>
        </div>
        <div className="main-discounts">
          <h2>
            Zniżki i <span>KARTY RABATOWE</span>
          </h2>
          <h2>
            RABATY PRZYSŁUGUJĄ ZARÓWNO UCZNIOM SZKOŁY JAK I NAUCZYCIELOMI
            PRACOWNIKOM.
          </h2>
          <h2>
            ABY SKORZYSTAĆ ZE ZNIŻKI NALEŻY OKAZAĆ WAŻNĄ LEGITYMACJĘ UCZNIOWSKĄ
            - W PRZYPADKU UCZNIÓW. A W PRZYPADKU NAUCZYCIELI I PRACOWNIKÓW
            NALEŻY OKAZAĆ KARTĘ RABATOWĄ.
          </h2>
          <Link href="http://zs2rabaty.prv.pl">
            <button className="main-discounts__button">
              Regulamin <span>kart rabatowych</span>
            </button>
          </Link>
        </div>
        <div className="main-footer">
          <h1>Nasze główne założenia i plany:</h1>
          <Image
            src="/samorzad-images/samorzad-tablica.svg"
            alt="image"
            width="1024"
            height="400"
          ></Image>
          <h3>
            PONADTO JAKO SAMORZĄD SZKOLNY <span>BĘDZIEMY m.in.:</span>
          </h3>
          <h4>
            - współpracować, pomagać lub inicjować imprezy okolicznościowe z
            okazji Andrzejek, walentynek, Dnia Kobiet, mikołajek itp.
          </h4>
          <h4>
            - współpracować z instytucjami pozarządowymi oraz okolicznymi
            firmami w celu pozyskiwania środków finansowych na cele i
            przedsięwzięcia szkolne.
          </h4>
          <h4>- organizować różnorodne zbiórki i akcje charytatywne.</h4>
          <h4>- współpracować z dyrekcją i gronem pedagogicznym.</h4>
          <Link href="/">
            <button className="main-discounts__button">
              Regulamin Samorządu <span>Uczniowskiego</span>
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
