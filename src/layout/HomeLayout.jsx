import ArrivalComponent from '../components/Arrival/Arrival'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AppLayoutHome(props) {
  return (
    <>
      <ArrivalComponent />
      <NavBar />
        <section className="flex flex-col items-center px-16  mb-96">
          {props.children}
        </section>
      <Footer />
    </>
  )
}