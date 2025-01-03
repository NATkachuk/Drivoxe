import E from '../../../assets/homepage/svg/E.svg';
import Shape from '../../../assets/homepage/svg/Shape.svg';
import Vector from '../../../assets/homepage/svg/Vector.svg';
import M from '../../../assets/homepage/svg/M.svg';
import people1 from '../../../assets/homepage/png/people1.png';
import people2 from '../../../assets/homepage/png/people2.png';
import people3 from '../../../assets/homepage/png/people3.png';
import arrowRight from '../../../assets/homepage/svg/arrow-right.svg';
import './section1.scss';

function Section1() {
  return (
    <>
        <section className="section1">
            <div className="section1-container1">
               <div className="section1-container1__box">
                    <h1 className="section1-container1__box-title">Your Journey, Your Car, Your Way</h1>
                    <p className="section1-container1__box-text">Experience the ultimate freedom of choice with GoCar - tailor your adventure by choosing from our premium fleet of vehicles.</p>
                    <button className="section1-container1__box-btn">Get Started</button>
               </div>
               <div className="section1-container1__box2">
                    <img src={E} alt="E" className="section1-container1__box2-img" />
                    <img src= {Shape} alt="Shape" className="section1-container1__box2-img" />
                    <img src={Vector} alt="Vector" className="section1-container1__box2-img" />
                    <img src={M} alt="M" className="section1-container1__box2-img" />
                </div>
            </div>
           <div className="section1-container2">
              <p className="section1-container2__text1">50+</p>
              <p className="section1-container2__text2">Car Types Available</p>
           </div>
           <div className="section1-container3">
               <div className="section1-container3-wrap">
                    <div className="section1-container3__box">
                        <img src={people1} alt="people1" className="section1-container3__box-img" />
                        <img src={people2} alt="people2" className="section1-container3__box-img" />
                        <img src={people3} alt="people3" className="section1-container3__box-img" />
                    </div>
                    <div className="section1-container3__box2"> 
                        <p className="section1-container3__box2-text1">12.5K+ People</p>
                        <p className="section1-container3__box2-text2">has used our services such as renting, buying, or even selling their car.</p>
                    </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default Section1