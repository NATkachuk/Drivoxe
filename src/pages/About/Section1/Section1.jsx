import Women from "../../../assets/About/png/Women.png"
import './Section1.scss'

function Section1() {
  return (
    <section className="section1-about">
        <h1 className="section1-about__title">Who We are</h1>
        <img src={Women} alt="Women" className="section1-about__img" />
    </section>
  )
}

export default Section1