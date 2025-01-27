import './section5.scss'
import customer from "../../../assets/About/svg/customer.svg"
import safety from "../../../assets/About/svg/safety.svg"
import innovation from "../../../assets/About/svg/innovation.svg"
import sustainable from "../../../assets/About/svg/sustainable.svg"
import best from "../../../assets/About/svg/best.svg"
import business from "../../../assets/About/svg/business.svg"
import community from "../../../assets/About/svg/community.svg"
import industry from "../../../assets/About/svg/industry.svg"
function Section5() {
  return (
    <section className="section5-about">
        <div className="section5-textbox">
            <p className="section5-textbox__text">ACHIEVEMENTS</p>
            <h2 className="section5-textbox__title">Let’s See Our Celebrate  Milestones</h2>
        </div>
        <div className="section5-container">
            <div className="section5-container__box">
                <img src={customer} alt="customer" className="section5-container__box-img" />
                <p className="section5-container__box-text">Customer Choice Award</p>
            </div>
            <div className="section5-container__box">
                <img src={safety} alt="safety" className="section5-container__box-img" />
                <p className="section5-container__box-text">Safety Drive Excellence</p>
            </div>
            <div className="section5-container__box">
                <img src={innovation} alt="innovation" className="section5-container__box-img" />
                <p className="section5-container__box-text">Innovation Champion</p>
            </div>
            <div className="section5-container__box">
                <img src={sustainable} alt="sustainable" className="section5-container__box-img" />
                <p className="section5-container__box-text">Sustainable Travel Partner</p>
            </div>
            <div className="section5-container__box">
                <img src={best} alt="best" className="section5-container__box-img" />
                <p className="section5-container__box-text">Best Customer Support</p>
            </div>
            <div className="section5-container__box">
                <img src={business} alt="business" className="section5-container__box-img" />
                <p className="section5-container__box-text">Business Growth Milestone</p>
            </div>
            <div className="section5-container__box">
                <img src={community} alt="community" className="section5-container__box-img" />
                <p className="section5-container__box-text">Community Engagement</p>
            </div>
            <div className="section5-container__box">
                <img src={industry} alt="industry" className="section5-container__box-img" />
                <p className="section5-container__box-text">Industry Leadership</p>
            </div>
        </div>
    </section>
  )
}

export default Section5