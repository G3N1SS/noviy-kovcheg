import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import logo from '../images/logo3.png'
import logoB from '../images/logo2.png'

export default function Footer({isScreenMid, isScreenSmall}){
  return(
  <footer className="footer">
    <div className="container container_footer">
      { isScreenSmall || isScreenMid ? 
      <Link to='/' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><img src={logoB} alt="logo" className="footer__logo" /></Link> 
      :
      <>
      <nav className="footer__nav nav">
        <Link to="/services" className="header__link">Наши услуги</Link>
        <Link to="/menu" className="header__link">Меню</Link>
      </nav>
      <Link to='/' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><img src={logo} alt="logo" className="header__logo header__logo_invert" /></Link>
      <nav className="footer__nav nav">
        <HashLink to='/#interior' className="header__link">Интерьер</HashLink>
        <HashLink to="/#contacts" className="header__link">Контакты</HashLink>
      </nav>
      </>
      }
    </div>
    {(!isScreenSmall&&!isScreenMid) && <div className="footer__circle"/>}
  </footer>
  )
}