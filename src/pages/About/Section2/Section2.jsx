import RedCar from "../../../assets/About/png/RedCar.png"
import './Section2.scss'
function Section2() {
  return (
    <section className="section2-about">
        <img src={RedCar} alt="RedCar" className="section2-about__img" />
        <div className="section2-textbox">
            <div className="section2-textbox__wrap">
                <p className="section2-textbox__wrap-text">Our Journey</p>
                <p className="section2-textbox__wrap-title">Pioneering Premium Car Rentals</p>
            </div>
            <p className="section2-textbox__text">Drivoxe embarked on a remarkable journey over a decade ago, driven by a relentless passion for redefining the travel experience. From the outset, our mission was clear: to provide the finest vehicles and exceptional service to make every journey unforgettable. We've upheld our commitment to delivering quality and variety, offering a diverse range of meticulously maintained vehicles to ensure you always drive in style.</p>
        </div>
    </section>
  )
}

export default Section2