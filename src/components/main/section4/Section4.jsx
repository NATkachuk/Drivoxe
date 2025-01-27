import './section4.scss';
import Arrow1 from '../../../assets/homepage/svg/Arrow1.svg';
import Aleea from '../../../assets/homepage/png/Aleea.png';
import Arrow2 from '../../../assets/homepage/svg/Arrow2.svg';
import people1 from '../../../assets/homepage/png/people1.png';
import people2 from '../../../assets/homepage/png/people2.png';
import people3 from '../../../assets/homepage/png/people3.png';
import { useState } from 'react';
function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 4);
  };
  
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 4) % 4);
  };
  return (
    <section className="section4">
    <button className="section4-arrow" onClick={handlePrevClick}>
      <img src={Arrow1} alt="Arrow1" className="section4-arrow__img" />
    </button>
    <div className="section4-wrap">
      {currentIndex === 0 && (
        <div className="section4-container">
          <h2 className="section4-container__title">WHAT OUR CUSTOMERS SAY</h2>
          <p className="section4-container__text">"My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I'll be back for more."</p>
          <img src={Aleea} alt="Aleea" className="section4-container__img" />
          <p className="section4-container__name">Aleea T</p>
        </div>
      )}
      {currentIndex === 1 && (
        <div className="section4-container">
          <h2 className="section4-container__title">WHAT OUR CUSTOMERS SAY</h2>
          <p className="section4-container__text">"Great service! The car was in perfect condition and the pick-up process was super smooth. Highly recommend this rental company!"</p>
          <img src={people1} alt="people1" className="section4-container__img" />
          <p className="section4-container__name">John M</p>
        </div>
      )}
      {currentIndex === 2 && (
        <div className="section4-container">
          <h2 className="section4-container__title">WHAT OUR CUSTOMERS SAY</h2>
          <p className="section4-container__text">"I rented a car for a weekend trip, and everything was excellent. The car was well-maintained and the customer support was really helpful. Would rent again!"</p>
          <img src={people2} alt="people2" className="section4-container__img" />
          <p className="section4-container__name"> Anna K</p>
        </div>
      )}
      {currentIndex === 3 && (
        <div className="section4-container">
          <h2 className="section4-container__title">WHAT OUR CUSTOMERS SAY</h2>
          <p className="section4-container__text">"Very satisfied with my rental experience. The prices were reasonable and the car was just as described. The return process was quick and hassle-free."</p>
          <img src={people3} alt="people3" className="section4-container__img" />
          <p className="section4-container__name"> Michael R</p>
        </div>
      )}
    </div>
    <button className="section4-arrow2" onClick={handleNextClick}>
      <img src={Arrow2} alt="Arrow2" className="section4-arrow2__img" />
    </button>
  </section>
  )
}

export default Section4