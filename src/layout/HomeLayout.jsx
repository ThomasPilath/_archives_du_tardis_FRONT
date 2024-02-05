import ArrivalComponent from '../components/Arrival/Arrival'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppLayoutHome(props) {
  return (
    <>
      <ArrivalComponent />
      <Header />
        <section className="flex flex-col items-center px-16">
          {props.children}
        </section>
      <Footer />
    </>
  )
}