import logo from '../../assets/homepage/svg/logo.svg';
import Nav from './nav/Nav';
import './header.scss';

function Header() {
  return (
    <>
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="logo" className="header-logo__img" />
            </div>
            <Nav />
            <div className="header-btns">
                <button className="header-btns__btn1">Contact</button>
                <button className="header-btns__btn2">Sign up</button>
            </div>
        </header>
    </>
  )
}

export default Header