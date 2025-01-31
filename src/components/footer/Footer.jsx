import { Link } from 'react-router-dom';
import ArrowLong from '../../assets/homepage/svg/ArrowLong.svg';
import ArrowLongUp from '../../assets/homepage/svg/ArrowLongUp.svg';
import './footer.scss'
import Faqs from '../../pages/FAQS/Faqs';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__textbox">
          <h2 className="footer-container__textbox-title">Don’t Miss a Thing</h2>
          <p className="footer-container__textbox-text">Subscribe to our newsletter for exclusive deals and updates.</p>
        </div>
        <label  className="footer-label"><input type="email" placeholder="Enter email address for newsletter ..." className="footer-label__input" /> <img src={ArrowLong} alt="ArrowLong" className="footer-label__img" /></label>
      </div>
      <div className="footer-container1">
        <div className="footer-box">
          <ul className="footer-box__list">
            <p className="footer-box__list-title">Quick Link</p>
            <li className="footer-box__item"><a href="#" className="footer-box__link">About us</a></li>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Who we are</a></li>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Contact Us</a></li>
          </ul>
          <ul className="footer-box__list">
            <p className="footer-box__list-title">The Cars</p>
            <li className="footer-box__item"><a href="#" className="footer-box__link">How it works</a></li>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Pick a car</a></li>
            <li className="footer-box__item"><Link to="/Faqs" className='footer-box__link'>Faqs</Link></li>
          </ul>
          <ul className="footer-box__list">
            <p className="footer-box__list-title">Social Media</p>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Facebook</a></li>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Instagram</a></li>
            <li className="footer-box__item"><a href="#" className="footer-box__link">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-box1">
          <p className="footer-box1__text">Copyright © 2023 GoCar. All rights reserved.</p>
          <button className="footer-box1__btn"><img src={ArrowLongUp} alt="ArrowLongUp" className="footer-box1__btn-img" /></button>
        </div>
      </div>
    </footer>
  )
}

export default Footer