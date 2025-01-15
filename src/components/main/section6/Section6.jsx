import './section6.scss';
import App_store from '../../../assets/homepage/svg/App-store.svg';
import Google_Play from '../../../assets/homepage/svg/Google-Play.svg';
function Section6() {
  return (
    <section className="section6">
        <div className="section6-container">
            <div className="section6-container__textbox">
                <h2 className="section6-container__textbox-title">Ready to Go?</h2>
                <p className="section6-container__textbox-text">Book your car wherever you are  and ride with us now!</p>
            </div>
            <div className="section6-container__images">
                <img src={App_store} alt="" className="section6-container__images-img" />
                <img src={Google_Play} alt="" className="section6-container__images-img" />
            </div>
        </div>
    </section>
  )
}

export default Section6