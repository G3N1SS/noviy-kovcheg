import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import logoB from '../images/logo2.png'
import logoNK from '../images/logoNK.svg'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

export default function HeaderContainer({isScrolled, invert, isScreenMid, isScreenSmall}){
  const [isOpened, setIsOpened] = useState(false);

  function hamburgerClick(){
    if(isOpened){
      setIsOpened(false)
    }else{
      setIsOpened(true)
    }
  }
  console.log(isScreenMid)
  return(
  <>
  <div className={`header__container`}>
    <nav className={`header__nav nav`}>
      <Link to="/services" className="header__link">Наши услуги</Link>
      <a href="https://shop.noviykovcheg.ru/" className="header__link" target='_blank'>Доставка еды</a>
    </nav>
    <Link to={'/'}><img src={(isScreenSmall || isScreenMid) ? logoB : logoNK} alt="logo" className={`header__logo ${(!isScreenSmall || !isScreenMid)&&invert && 'header__logo_invert'}`} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}/></Link>
    <nav className={`header__nav nav`}>
      <HashLink to="/#interior" className="header__link">Интерьер</HashLink>
      <Link to="/menu" className="header__link">Меню</Link>
      <HashLink to="/#contacts" className="header__link">Контакты</HashLink>
    </nav>
    {(isScreenSmall || isScreenMid) && <>
    <div className={`header__hamburger hamburger ${isOpened && 'hamburger_active'}`} onClick={hamburgerClick}>
      <hr className={`hamburger__line ${isOpened ? 'hamburger__line_cross' : ''}`} />
      {isOpened ? '' : <hr className="hamburger__line" />}
      <hr className={`hamburger__line ${isOpened ? 'hamburger__line_cross' : ''}`} />
    </div>
    <nav className={`hamburger-menu ${isOpened ? 'hamburger-menu_visible' : ''}`}>
      <div className="hamburger-menu__links">
        <a href="https://shop.noviykovcheg.ru/" className={`hamburger-menu__link`} onClick={hamburgerClick}>Доставка еды</a>
        <Link to="/services" className={`hamburger-menu__link`} onClick={hamburgerClick}>Наши услуги</Link>
        <HashLink to="/#interior"className={`hamburger-menu__link`} onClick={hamburgerClick}>Интерьер</HashLink>
        <Link to="/menu" className="hamburger-menu__link" onClick={hamburgerClick}>Меню</Link>
        <HashLink to="/#contacts" className="hamburger-menu__link" onClick={hamburgerClick}>Контакты</HashLink>
      </div>
    </nav>
    <div className={`${isOpened&&'hamburger__overlay'}`}/>
    </>
    }
  </div>
    <div className={`header__container ${(!isScreenSmall || !isScreenMid)&&isScrolled ? 'header__container_fixed' : 'header__contaienr_hidden'}`}>
      <nav className={`header__nav nav nav_fixed`}>
        <Link to="/services" className="header__link header__link_no-shadow">Наши услуги</Link>
        <a href="https://shop.noviykovcheg.ru/" className="header__link header__link_no-shadow" target='_blank'>Доставка еды</a>
      </nav>
    <Link to={'/'} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><img src={logoB} alt="logo" className={`header__logo header__logo_fixed header__logo_invert`} /></Link>
    <nav className={`header__nav nav nav_fixed`}>
      <HashLink to="/#interior" className="header__link header__link_no-shadow">Интерьер</HashLink>
      <Link to="/menu" className="header__link header__link_no-shadow">Меню</Link>
      <HashLink to="/#contacts" className="header__link header__link_no-shadow">Контакты</HashLink>
    </nav>
    </div>
  </>
)
}