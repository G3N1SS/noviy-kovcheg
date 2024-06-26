import { useState, useEffect } from 'react'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import LoungePage from './LoungePage';
import {loungesInfo} from '../utils/constants'
import Services from './Services';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import "aos/dist/aos.css"
import Aos from 'aos';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [isScrolled, setIsScrolled] = useState (false);
  // const [isCardScrolled, setIsCardScrolled] = useState(false);
  // const [isGalleryScrolled, setIsGalleryScrolled] = useState(false);
  // const [isContactsScrolled, setIsContactsScrolled] = useState(false);
  const [isScreenMid, setIsScreenMid] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false)
  const { pathname } = useLocation();

  console.log(isScreenSmall);
  console.log(isScreenMid);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setInnerWidth(width);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize)
    };
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname])

  useEffect(() => {
    if(scrollPosition > 150){
      setIsScrolled(true)
    }
    else if(scrollPosition < 150){
      setIsScrolled(false)
    }
  }, [scrollPosition]);

  useEffect(() => {
    setIsScreenMid(false)
    Aos.init({duration: 3000})
  }, [])

  useEffect(()=>{
    if(1026 > innerWidth && innerWidth > 686){
      setIsScreenMid(true);
      setIsScreenSmall(false);
      setIsScrolled(false);
    } else if (innerWidth < 686){
      setIsScreenMid(false);
      setIsScreenSmall(true);
      setIsScrolled(false);
    }else{
      setIsScreenMid(false);
      setIsScreenSmall(false);
    }
  }, [innerWidth, scrollPosition])

  useEffect(()=> {
    setInnerWidth(window.innerWidth)
  }, [])

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<MainPage isScrolled={isScrolled} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/red-lounge' element={<LoungePage isScrolled={isScrolled} info={loungesInfo.red} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/small-lounge' element={<LoungePage isScrolled={isScrolled} info={loungesInfo.small} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/vip-lounge' element={<LoungePage isScrolled={isScrolled} info={loungesInfo.vip} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/brick-lounge' element={<LoungePage isScrolled={isScrolled} info={loungesInfo.brick} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/services' element={<Services isScrolled={isScrolled} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
        <Route path='/menu' element={<Menu isScrolled={isScrolled} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>}/>
      </Routes>
    </div>
  )
}

export default App
