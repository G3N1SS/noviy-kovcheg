import { React, useEffect } from 'react';
import {gallery, lcards, food, party, design}from '../utils/constants'
import SwiperSlider from './SwiperSlider';
import { useState } from 'react';
import "aos/dist/aos.css"
import Aos from 'aos';

export default function Gallery({isScreenSmall}){
  const [isKitchen, setIsKitchen] = useState(false);
  const [isInterior, setIsInterior] = useState(true);
  const [isDesign, setIsDesign] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Interior');

  function toggleSwiper(evt){
    if(evt.target.id === '1'){
      setIsKitchen(true)
      setIsInterior(false)
      setIsDesign(false)
      setIsParty(false)
    }if(evt.target.id === '2'){
      setIsKitchen(false)
      setIsInterior(true)
      setIsDesign(false)
      setIsParty(false)
    }if(evt.target.id === '3'){
      setIsKitchen(false)
      setIsInterior(false)
      setIsDesign(true)
      setIsParty(false)
    }if(evt.target.id === '4'){
      setIsParty(true)
      setIsKitchen(false)
      setIsInterior(false)
      setIsDesign(false)
    }
  }
  function changeImg(option){
    switch(option){
      case 'Interior':
        return gallery;
      case 'Kitchen':
        return food;
      case 'Design':
        return design;
      case 'Party':
        return party
    }
  }
  return(
    <section className="gallery">
      <h2 className="gallery__title">Галлерея</h2>
      <div className={`container`} data-aos="zoom-out" data-aos-once="true">
      <SwiperSlider images={
        isScreenSmall ? 
        changeImg(selectedOption)
        :
        (isInterior ? gallery : isKitchen ? food : isDesign ? design : party)
        } className={'gallery__swiper'}>
        <nav className="gallery__nav-box">
          {isScreenSmall ?
          <select
            value={selectedOption}
            onChange={evt => setSelectedOption(evt.target.value)}
            className='gallery__select'
          >
            <option value="Kitchen" className='gallery__option'>Кухня</option>
            <option value="Interior" className='gallery__option'>Интерьер</option>
            <option value="Design" className='gallery__option'>Оформление</option>
            <option value="Party" className='gallery__option'>Хроника</option>
          </select>
          :
          <>
          <button className={`gallery__nav-link ${isKitchen && 'gallery__nav-link_active'}`} id='1' onClick={(evt) => toggleSwiper(evt)}>Кухня</button>
          <button className={`gallery__nav-link ${isInterior && 'gallery__nav-link_active'}`} id='2' onClick={(evt) => toggleSwiper(evt)}>Интерьер</button>
          <button className={`gallery__nav-link ${isDesign && 'gallery__nav-link_active'}`} id='3' onClick={(evt) => toggleSwiper(evt)}>Оформление</button>
          <button className={`gallery__nav-link ${isParty && 'gallery__nav-link_active'}`} id='4' onClick={(evt) => toggleSwiper(evt)}>Хроника</button>
          </>}
        </nav>
      </SwiperSlider>
      </div>
    </section>
  )
}