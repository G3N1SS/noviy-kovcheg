import MenuDishes from "./MenuDishes"

export default function MenuCard({data, cheap, price, expensive, selected}){
  return(
    <li className={`menu__card ${selected && 'menu__card_visible'}`}>
      <h3 className="menu__card-price">{price}</h3>
      <h3 className="menu__card-title">Стандартное меню</h3>
        {data.map((item) => {
          return <MenuDishes data={item} cheap={cheap} key={item.title}/>
        })}
      <h3 className="menu__card-title">Салаты</h3>
        <p className="menu__card-item">
          Выдается перечень салатов
          <br/>
          <span className="menu__card-dish">{expensive ? '3-х видов на выбор (2+1)' : '2 вида на выбор' }</span>
        </p>
      <h3 className="menu__card-title">Горячие Блюда</h3>
        <p className="menu__card-item">
          Выдается перечень горячих блюд с гарнирами
          <br/>
          <span className="menu__card-dish">{expensive ? '3-х видов на выбор (2+1)' : '2 вида на выбор'}</span>
        </p>
        <p className="menu__card-item">
          <span className="menu__card-dish">Рекомендуем первое горячее блюдо ассорти шашлыков</span>
          &nbsp;(свиная корейка, шейка, люля-кебаб из телятины, куриные крылья, голень) + 2 вида гарнира (картошка, грибы на мангале)
        </p>
        {price === '3500' 
        ?
        <p className="menu__card-item">
            <span className="menu__card-dish">Горячая закуска</span>
            &nbsp;(выдается перечень на выбор)
        </p>
        :
        price === '3800'
        ?
        <>
        <p className="menu__card-item">
            <span className="menu__card-dish">Икра красная</span>
            (красная икра, тарталетки, сливочное масло)
        </p>
        <p className="menu__card-item">
            <span className="menu__card-dish">Рулеты из лаваша</span>
            &nbsp;(лаваш начиненный мясным ассорти с овощами)
        </p>
        </>
        :
        ''
        }
    </li>
  )
}