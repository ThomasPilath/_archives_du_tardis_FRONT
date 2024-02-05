import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AppLayout(props) {
  return (
    <>
      <h1 className="w-full mx-auto font-title text-8xl text-white pt-6">
        <Link to={"/"}>
          Les Archives du Tardis
        </Link>
      </h1>
      <Header />
        <main className="max-w-lg">
          {props.children}
        </main>
      <Footer />
    </>
  )
}