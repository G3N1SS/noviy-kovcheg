import Header from './Header'
import Interior from './Interior'
import Lounge from './Lounge'
import About from './About'
import Gallery from './Gallery'
import Contacts from './Contacts'
import Footer from './Footer'

export default function MainPage({isScrolled, isScreenMid, isScreenSmall}){
  return(
    <>
      <Header isScrolled={isScrolled} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
      <Interior/>
      <Lounge/>
      <About history={true}/>
      <Gallery isScreenSmall={isScreenSmall}/>
      <About history={false}/>
      <Contacts/>
      <Footer isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    </>
  )
}