import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AppLayout(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}