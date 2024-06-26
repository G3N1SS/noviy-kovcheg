import {Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import SwiperButtons from "./SwiperButtons";

export default function SwiperSlider({images, children, className}){
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);
  return(
    <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        onReachEnd={() => {setIsLastItem(true)}}
        onReachBeginning={() => {setIsFirstItem(true); setIsLastItem(false)}}
        onSlidePrevTransitionEnd={() => {setIsLastItem(false)}}
        onSlideNextTransitionStart={() => {setIsFirstItem(false);}}
        className={className}
    >
    {images.map((data) => {
      return(<SwiperSlide key={data.name}><img src={data.img} alt="card" className="gallery__image"/></SwiperSlide>)
    })}
    {children}
    <SwiperButtons isLastItem={isLastItem} isFirstItem={isFirstItem}/>
    </Swiper>
  )
}