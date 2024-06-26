import HeaderContainer from './HeaderContainer'

export default function Header({isScrolled, isScreenMid, isScreenSmall}){
  // window.addEventListener('scroll', windowScrolling)
  return(
  <header className="header">
    <HeaderContainer isScrolled={isScrolled} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    <h1 className='header__title'>Дом торжеств “Новый Ковчег”</h1>
    <p className="header__title-caption">открылся, чтобы радовать Вас и Ваших близких</p>
    <div className="header__background"></div>
  </header>
  )
}