import './section4.scss';
import Select from '../../../assets/homepage/svg/Select.svg'
import Book from '../../../assets/homepage/svg/Book.svg'
import Drive from '../../../assets/homepage/svg/Drive.svg'
import Return from '../../../assets/homepage/svg/Return.svg'
function Section4() {
  return (
    <section className="section4-about">
        <div className="section4-textbox">
            <p className="section4-textbox__text">HOW IT WORKS</p>
            <h2 className="section4-textbox__title">Simple Steps to Get the Car</h2>
        </div>
        <div className="section4-cards">
            <div className="section4-cards-wrap">
                <div className="section4-card1">
                    <div className="section4-card1-back">
                        <img src={Select} alt="Select" className="section4-card1__img"/>
                    </div>
                    <div className="section4-card1__textbox">
                        <h3 className="section4-card1__textbox-title">Select</h3>
                        <p className="section4-card1__textbox-text">Choose your desired car from our fleet.</p>
                    </div>
                </div>
                <div className="section4-card1">
                    <div className="section4-card1-back">
                        <img src={Drive} alt="Drive" className="section4-card1__img"/>
                    </div>
                    <div className="section4-card1__textbox">
                        <h3 className="section4-card1__textbox-title">Drive</h3>
                        <p className="section4-card1__textbox-text">Pick up your car and hit the road.</p>
                    </div>
                </div>
            </div>
            <div className="section4-cards-wrap2">
                <div className="section4-card1">
                    <div className="section4-card1-back2">
                        <img src={Book} alt="Select" className="section4-card1__img"/>
                    </div>
                    <div className="section4-card1__textbox2">
                        <h3 className="section4-card1__textbox-title">Book</h3>
                        <p className="section4-card1__textbox-text">Reserve your car online or through our app.</p>
                    </div>
                </div>

                <div className="section4-card1">
                    <div className="section4-card1-back">
                        <img src={Return} alt="Return" className="section4-card1__img"/>
                    </div>
                    <div className="section4-card1__textbox2">
                        <h3 className="section4-card1__textbox-title">Return</h3>
                        <p className="section4-card1__textbox-text">Bring the car back at the end of your rental period.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section4