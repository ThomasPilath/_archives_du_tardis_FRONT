import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function AppLayout(props) {
  const title = import.meta.env.VITE_SITE_TITLE
  return (
    <>
      <h1 className="w-full mx-auto font-title text-8xl text-white pt-6">
        <Link to={"/"}>
          {title}
        </Link>
      </h1>
      <NavBar />
        <section className="flex flex-col items-center px-16 mb-96">
          {props.children}
        </section>
      <Footer />
    </>
  )
}