import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Section1 from "./Section1/Section1"
import Section2 from "./Section2/Section2"
import Section3 from "./Section3/Section3"
import './cars.scss'


function Cars() {
  return (
    <>
        <Header />
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
        </main>
        <Footer />
    </>
  )
}

export default Cars