import RedCarBack from "../../../assets/Cars/png/RedCarBack.png"
import './section1.scss'
function Section1() {
  return (
    <section className="section1-cars">
        <div className="section1-textbox">
            <p className="section1-textbox__text">Home/Cars</p>
            <h1 className="section1-textbox__title">Our Impressive Fleet</h1>
        </div>
        <img src={RedCarBack} alt="RedCarBack" className="section1__img" />
    </section>
  )
}

export default Section1