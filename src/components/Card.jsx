import { Link } from "react-router-dom";

export default function Card({card, duration}){
  function cardButtonSwitch(cardName){
    switch(cardName){
      case 'Большой зал':
        return '/red-lounge';
      case 'Средний зал':
        return '/small-lounge';
      case 'Малый зал':
        return '/brick-lounge';
      case 'VIP-кабинет':
        return '/vip-lounge'
    }
  }
  return(
    <li className={`lounge__card`} data-aos="zoom-out" data-aos-duration={duration} data-aos-once="true">
      <Link to={cardButtonSwitch(card.name)}><img src={card.img} alt={card.name} className="lounge__img" /></Link>
      <div className="lounge__banner">
        <h3 className="lounge__card-title">{card.name}</h3>
        <Link to={cardButtonSwitch(card.name)} className="lounge__link-more">Подробнее</Link>
      </div>
    </li>
  )
}