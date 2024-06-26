export default function MenuDishes({data, cheap}){
  return(
    <p className="menu__card-item">
      <span className="menu__card-dish">{cheap ? (cheap && (!data.cheap ? data.title : <br/>)) : data.title}</span>
      {data.text &&(cheap ? (cheap && (!data.cheap ? data.text : <br/>)) : data.text)}
      {data.unrestricted && <span className="menu__card-unrestricted">Без ограничения</span>}
    </p>
  )
}