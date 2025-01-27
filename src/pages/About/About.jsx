import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Section2 from "./Section2/Section2"
import Section1 from "./Section1/Section1"
import './About.scss'
import Section3 from "./Section3/Section3"
import Section4 from "./Section4/Section4"
import Section5 from "./Section5/Section5"
import Section6 from "./Section6/Section6"



function About() {
  return (
    <>
        <Header/>
        <main className="main-about">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
        </main>
        <Footer/>
    </>
  )
}

export default About