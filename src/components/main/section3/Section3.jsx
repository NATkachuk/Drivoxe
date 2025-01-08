import './section3.scss';
import car_back from '../../../assets/homepage/png/car-back.png';

function Section3() {
  return (
    <section className="section3">
        <div className="section3-container">
            <div className="section3-container__textbox">
                <h2 className="section3-container__textbox-title">Why Choose Drivoxe?</h2>
                <p className="section3-container__textbox-text">Join our satisfied customers who trust us for their journeys. We serve with a lot of values that you can feel directly.</p>
            </div>
              <img src={car_back} alt="Horizon" className="section3-container__img"/>
            <div className="section3-container__cards">
                <div className="section3-container__card">

                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3