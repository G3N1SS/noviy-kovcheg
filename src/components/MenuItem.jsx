import MenuCard from "./MenuCard";

export default function MenuItem({price, children, selected, data}){
  return(
    <>
    <li className="menu__list-item">
      <h4 className={`menu__item-title ${selected && 'menu__item-title_active'}`}>Меню {price}</h4>
      {children}
    </li>
    {
      selected &&
      <>
      <MenuCard data={data} cheap={price === '3200' ? true : false} price={price} expensive={price === '3800' ? true : false} selected={selected}/>
      </>
    }
    </>
  )
}