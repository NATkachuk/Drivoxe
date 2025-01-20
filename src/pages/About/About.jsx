import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Section2 from "./Section2/Section2"
import Section1 from "./Section1/Section1"
import './About.scss'



function About() {
  return (
    <>
        <Header/>
        <main className="main-about">
            <Section1/>
            <Section2/>
        </main>
        <Footer/>
    </>
  )
}

export default About