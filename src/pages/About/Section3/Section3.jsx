import './Section3.scss'
import Good from "../../../assets/About/svg/Good.svg"
import Money from "../../../assets/About/svg/Money.svg"
import NotBad from "../../../assets/About/svg/NotBad.svg"
import Happy from "../../../assets/About/svg/Happy.svg"

function Section3() {
  return (
    <section className="section3-about">
        <h2 className="section3-about__title">Why Choose Drivoxe?</h2>
        <div className="section3-container">
            <div className="section3-box">
                <div className="section3-box__cont">
                    <img src={Good} alt="Good" className="section3-box__cont-img" />
                    <p className="section3-box__cont-text">Quality & Variety</p>
                </div>
                <p className="section3-box__text">Discover our diverse range of meticulously maintained vehicles, ensuring you always drive in style. From sleek sedans to rugged SUVs, our fleet offers the perfect ride for every occasion. We meticulously maintain each vehicle to the highest standards, ensuring not just style but also performance and reliability on your journey.</p>
            </div>
            <div className="section3-box">
                <div className="section3-box__cont">
                    <img src={Money} alt="Money" className="section3-box__cont-img" />
                    <p className="section3-box__cont-text">Affordable Rates</p>
                </div>
                <p className="section3-box__text">We believe that luxury travel should be accessible to all. We offer competitive prices without hidden fees, giving you the freedom to experience the comfort and style of our premium vehicles without breaking the bank. We're committed to providing affordable luxury for your travels.</p>
            </div>
            <div className="section3-box">
                <div className="section3-box__cont">
                    <img src={NotBad} alt="NotBad" className="section3-box__cont-img" />
                    <p className="section3-box__cont-text">Easy Booking</p>
                </div>
                <p className="section3-box__text">Reserving your dream car is a breeze with Drivoxe. Our user-friendly online platform and mobile app make the booking process straightforward and efficient. In just a few clicks, you can secure your choice of vehicle and hit the road, ensuring a seamless and hassle-free experience from start to finish.</p>
            </div>
            <div className="section3-box">
                <div className="section3-box__cont">
                    <img src={Happy} alt="Happy" className="section3-box__cont-img" />
                    <p className="section3-box__cont-text">Customer Satisfaction</p>
                </div>
                <p className="section3-box__text">Our loyal customers trust Drivoxe for the excellence of our service and the exquisite selection in our fleet. From the moment you book to the final mile of your journey, we are dedicated to providing top-notch service. We pride ourselves on our responsive customer support, available 24/7 to assist you. Your satisfaction is our ultimate reward.</p>
            </div>

        </div>
    </section>
  )
}

export default Section3