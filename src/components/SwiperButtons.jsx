import { useSwiper } from "swiper/react";

export default function SwiperButtons({isFirstItem, isLastItem}){
  const swiper = useSwiper();
  return(
    <div className="gallery__button-box">
      <button onClick={() => swiper.slidePrev()} className={`gallery__button ${isFirstItem ? 'gallery__button_disabled' : ''}`} disabled={isFirstItem}>←</button>
      <button onClick={() => swiper.slideNext()} className={`gallery__button ${isLastItem ? 'gallery__button_disabled' : ''}`} disabled={isLastItem}>→</button>
    </div>
  )
}