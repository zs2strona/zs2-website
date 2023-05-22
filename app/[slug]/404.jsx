import Head from '../head'
import Footer from '../components/footer'

export default function Error() {
  return (
    <>
      <Head title="404" />

      <main className="error">
        <h1>
          Error: <span>404</span>
        </h1>
        <h3>Podana strona nie istnieje!</h3>
      </main>

      <Footer />
    </>
  )
}
