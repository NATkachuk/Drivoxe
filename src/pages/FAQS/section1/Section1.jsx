import './section1.scss'
import CarRadio from '../../../assets/Faqs/png/CarRadio.png'
function Section1() {
  return (
    <section className="section1-faqs">
        <div className="section1-textbox">
            <p className="section1-textbox__text">Home/FAQs</p>
            <h1 className="section1-textbox__title">Frequently Asked Questions</h1>
        </div>
        <img src={CarRadio} alt="" className="section1__img" />
    </section>
  )
}

export default Section1