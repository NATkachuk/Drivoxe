
import './section5.scss';
import Select from '../../../assets/homepage/svg/Select.svg'
import Book from '../../../assets/homepage/svg/Book.svg'
import Drive from '../../../assets/homepage/svg/Drive.svg'
import Return from '../../../assets/homepage/svg/Return.svg'
function Section5() {
  return (
    <section className="section5">
        <div className="section5-textbox">
            <p className="section5-textbox__text">HOW IT WORKS</p>
            <h2 className="section5-textbox__title">Simple Steps to Get the Car</h2>
        </div>
        <div className="section5-cards">
            <div className="section5-cards-wrap">
                <div className="section5-card1">
                    <div className="section5-card1__textbox">
                        <h3 className="section5-card1__textbox-title">Select</h3>
                        <p className="section5-card1__textbox-text">Choose your desired car from our fleet.</p>
                    </div>
                    <div className="section5-card1-back">
                        <img src={Select} alt="Select" className="section5-card1__img"/>
                    </div>
                </div>
                <div className="section5-card1">
                    <div className="section5-card1__textbox">
                        <h3 className="section5-card1__textbox-title">Drive</h3>
                        <p className="section5-card1__textbox-text">Pick up your car and hit the road.</p>
                    </div>
                    <div className="section5-card1-back">
                        <img src={Drive} alt="Drive" className="section5-card1__img"/>
                    </div>
                    
                </div>
            </div>
            <div className="section5-cards-wrap2">
                <div className="section5-card1">
                    <div className="section5-card1-back2">
                        <img src={Book} alt="Select" className="section5-card1__img"/>
                    </div>
                    <div className="section5-card1__textbox2">
                        <h3 className="section5-card1__textbox-title">Book</h3>
                        <p className="section5-card1__textbox-text">Reserve your car online or through our app.</p>
                    </div>
                </div>

                <div className="section5-card1">
                    <div className="section5-card1-back">
                        <img src={Return} alt="Return" className="section5-card1__img"/>
                    </div>
                    <div className="section5-card1__textbox2">
                        <h3 className="section5-card1__textbox-title">Return</h3>
                        <p className="section5-card1__textbox-text">Bring the car back at the end of your rental period.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section5