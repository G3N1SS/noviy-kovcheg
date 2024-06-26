import Footer from "./Footer"
import SwiperSlider from "./SwiperSlider";
import { red, small, vip, lounge } from "../utils/constants";
import HeaderContainer from "./HeaderContainer";
import { useLocation } from "react-router-dom";

export default function LoungePage({isScrolled, info, isScreenMid, isScreenSmall}){
  const { pathname } = useLocation()
  return(
    <>
      <HeaderContainer isScrolled={isScrolled} invert={(isScreenMid || isScreenSmall) ? false : true} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
      <section className="lounge-page">
        <h2 className="lounge-page__title">{info.title}</h2>
        <div className="container container_lounge-page">
          <p className="lounge-page__text">{info.text}</p>
          <SwiperSlider images={pathname === '/red-lounge' ? red : pathname === '/small-lounge' ? small : pathname === '/vip-lounge' ? vip : lounge}/>
        </div>
      </section>
      <Footer isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    </>
  )
}