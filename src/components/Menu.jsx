import HeaderContainer from "./HeaderContainer";
import Footer from "./Footer";
import { menu } from "../utils/constants";
import MenuCard from "./MenuCard";
import MenuItem from "./MenuItem";
import { useState } from "react";

export default function Menu({isScrolled, isScreenMid, isScreenSmall}){
  const [isCheapSelected, setCheapSelected] = useState(false);
  const [isMiddleSelected, setMiddleSelected] = useState(false);
  const [isExpensiveSelected, setExpensiveSelected] = useState(false);

  function toggleSelect(evt){
    if(evt.target.id === '1'){
      setCheapSelected(true)
      setMiddleSelected(false)
      setExpensiveSelected(false)
    }if(evt.target.id === '2'){
      setCheapSelected(false)
      setMiddleSelected(true)
      setExpensiveSelected(false)
    }if(evt.target.id === '3'){
      setCheapSelected(false)
      setMiddleSelected(false)
      setExpensiveSelected(true)
    }
  }

  return(
    <>
    <HeaderContainer isScrolled={isScrolled} invert={(isScreenMid || isScreenSmall) ? false : true} isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    <section className="menu">
      <div className="container container_menu">
        <h2 className="menu__title">Банкетное меню дома торжеств "Новый Ковчег"</h2>
        <ul className="menu__list">
        {isScreenSmall ?
          <>
            <MenuItem price={'3200'} data={menu} expensive={false} selected={isCheapSelected}>
              <button className={`menu__item-button ${isCheapSelected && 'menu__item-button_active'}`} id="1" onClick={(evt) => toggleSelect(evt)}>Подробнее</button>
            </MenuItem>
            <MenuItem price={'3500'} data={menu} expensive={false} selected={isMiddleSelected}>
              <button className={`menu__item-button ${isMiddleSelected && 'menu__item-button_active'}`} id="2" onClick={(evt) => toggleSelect(evt)}>Подробнее</button>
            </MenuItem>
            <MenuItem price={'3800'} data={menu} expensive={false} selected={isExpensiveSelected}>
              <button className={`menu__item-button ${isExpensiveSelected && 'menu__item-button_active'}`} id="3" onClick={(evt) => toggleSelect(evt)}>Подробнее</button>
            </MenuItem>
          </>
        :
        <>
          <MenuCard data={menu} cheap={true} price={'3200'} expensive={false} selected={true}/>
          <MenuCard data={menu} cheap={false} price={'3500'} expensive={false} selected={true}/>
          <MenuCard data={menu} cheap={false} price={'3800'} expensive={true} selected={true}/>
        </>}
        </ul>
        <p className="menu__caption">По вопросу алкогольных напитков, дополнение и изменение меню обращайтесь к администрации 
        дома торжеств «Новый&nbsp;Ковчег».</p>
        <p className="menu__caption">Обслуживание банкета 10% от стоимости меню.</p>
      </div>
    </section>
    <Footer isScreenMid={isScreenMid} isScreenSmall={isScreenSmall}/>
    </>
  )
}