import './section2.scss';
import Horizon from '../../../assets/homepage/png/Horizon.png';
import Zephyr from '../../../assets/homepage/png/Zephyr.png';
import Aurora from '../../../assets/homepage/png/Aurora.png';
import Vanguard_CX2 from '../../../assets/homepage/png/Vanguard-CX2.png';
import Stellar from '../../../assets/homepage/png/Stellar.png';
import Vanguard_C from '../../../assets/homepage/png/Vanguard-C.png';
import Equinox from '../../../assets/Cars/png/Equinox.png';
import Radiant from '../../../assets/Cars/png/Radiant.png';
import Zenith from '../../../assets/Cars/png/Zenith.png';
function Section2() {
  return (
    <section className="section2-cars">
         <div className="section2-cards">
            <div className="section2-card">
                <img src={Horizon} alt="Horizon" className="section2-card__img" />
                <h3 className="section2-card__title">Horizon Mirage Convertible</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$49/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Zephyr} alt="Zephyr" className="section2-card__img" />
                <h3 className="section2-card__title">Zephyr A4 Stratos</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$79/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Aurora} alt="Aurora" className="section2-card__img" />
                <h3 className="section2-card__title">Aurora X5 Nebula</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$99/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Vanguard_CX2} alt="Vanguard-CX2" className="section2-card__img" />
                <h3 className="section2-card__title">Vanguard CX2 Convertible</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$59/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Stellar} alt="Stellar" className="section2-card__img" />
                <h3 className="section2-card__title">Stellar Orion Hybrid</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$39/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Vanguard_C} alt="Vanguard-C" className="section2-card__img" />
                <h3 className="section2-card__title">Vanguard C-Class Coupe</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$69/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Equinox} alt="Equinox" className="section2-card__img" />
                <h3 className="section2-card__title">Equinox F-Eclipse</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$109/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Radiant} alt="Radiant" className="section2-card__img" />
                <h3 className="section2-card__title">Radiant Solstice Automobiles</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$89/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
            <div className="section2-card">
                <img src={Zenith} alt="Zenith" className="section2-card__img" />
                <h3 className="section2-card__title">Zenith Tempest</h3>
                <div className="section2-card__box">
                    <div className="section2-card__box-textbox">
                        <p className="section2-card__box-textbox-text">Starting at</p>
                        <p className="section2-card__box-textbox-text1">$129/day</p>
                    </div>
                    <button className="section2-card__box-btn">Rent</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2