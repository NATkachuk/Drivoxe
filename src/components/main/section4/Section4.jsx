import './section4.scss';
import Arrow1 from '../../../assets/homepage/svg/Arrow1.svg';
import Aleea from '../../../assets/homepage/png/Aleea.png';
import Arrow2 from '../../../assets/homepage/svg/Arrow2.svg';
function Section4() {
  return (
    <section className="section4">
        <div className="section4-arrow">
            <img src={Arrow1} alt="Arrow1" className="section4-arrow__img" />
        </div>
        <div className="section4-container">
            <h2 className="section4-container__title">WHAT OUR CUSTOMERS SAY</h2>
            <p className="section4-container__text">"My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I'll be back for more."</p>
            <img src={Aleea} alt="Aleea" className="section4-container__img" />
            <p className="section4-container__name">Aleea Thompson</p>
        </div>
        <div className="section4-arrow2">
            <img src={Arrow2} alt="Arrow2" className="section4-arrow2__img" />
        </div>
    </section>
  )
}

export default Section4